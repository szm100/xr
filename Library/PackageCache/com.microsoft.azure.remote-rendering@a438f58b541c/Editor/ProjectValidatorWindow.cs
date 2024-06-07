using System;
using System.Linq;
using System.Threading.Tasks;

using UnityEditor;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEngine.Rendering;

#if XR_MANAGEMENT_PLUGIN_AVAILABLE
using UnityEditor.XR.Management;
#endif

#if OPENXR_PLUGIN_AVAILABLE
using UnityEditor.XR.OpenXR.Features;
using UnityEngine.XR.OpenXR.Features;
#endif

#if WMR_XR_PLUGIN_AVAILABLE
using UnityEngine.XR.WindowsMR;
using UnityEditor.XR.WindowsMR;
#endif

namespace Microsoft.Azure.RemoteRendering.Unity.Editor
{
    public class ProjectValidatorWindow : EditorWindow
    {
        private bool _showRequired = true;
        private bool _showRecommended = true;
        private bool _showDev = true;
        private Vector2 _scrollPos;

        [MenuItem("Remote Rendering/Validate Project")]
        public static void ShowWindow()
        {
            GetWindow<ProjectValidatorWindow>(false, "Project Validator", true);
        }

        private enum CheckLevel
        {
            Info,
            Warning,
            Error,
        }

        private static async Task<T> WaitForRequest<T>(T request)
        where T : UnityEditor.PackageManager.Requests.Request
        {
            while (!request.IsCompleted)
            {
                await Task.Delay(1000);
            }
            if (request.Status != StatusCode.Success)
            {
                throw new Exception($"{request.GetType().Name} request failed: {request.Status}, {request.Error.message}");
            }
            return request;
        }

        private static async void UpdateWMRPackage()
        {
            ListRequest request = await WaitForRequest(Client.List(false, false));
            var package = request.Result.Where(x => x.name == "com.unity.xr.windowsmr").FirstOrDefault();
            string latestVersion = package.versions.compatible.Where(x => (x.IndexOf("exp", System.StringComparison.OrdinalIgnoreCase) == -1 && x.IndexOf("pre", System.StringComparison.OrdinalIgnoreCase) == -1)).LastOrDefault();
            string packageVersionString = $"{package.name}@{latestVersion}";
            Debug.Log($"Upgrading Windows XR Plugin to version {latestVersion}...");
            AddRequest request2 = await WaitForRequest(Client.Add(packageVersionString));
        }

        private static void AddCheckLabel(string label, bool value, CheckLevel level, Action buttonAction, UnityEngine.Object undoTarget = null, string toolTip = null)
        {
            bool enabled = GUI.enabled;

            GUILayout.BeginHorizontal();

            GUIStyle iconLabelStyle = EditorStyles.label;
            iconLabelStyle.alignment = TextAnchor.MiddleRight;

            GUIContent iconContent = new GUIContent("");
            if (enabled)
            {
                if (value)
                {
                    iconContent = new GUIContent("✔");
                }
                else
                {
                    switch (level)
                    {
                        case CheckLevel.Info:
                            iconContent = EditorGUIUtility.IconContent("console.infoicon.sml");
                            break;
                        case CheckLevel.Warning:
                            iconContent = EditorGUIUtility.IconContent("console.warnicon.sml");
                            break;
                        case CheckLevel.Error:
                            iconContent = EditorGUIUtility.IconContent("console.erroricon.sml");
                            break;
                    }
                }
            }

            GUILayout.Label(iconContent, iconLabelStyle, GUILayout.Width(50));

            GUIStyle textLabelStyle = EditorStyles.label;
            textLabelStyle.alignment = TextAnchor.MiddleLeft;
            GUILayout.Label(new GUIContent(label, toolTip), textLabelStyle);

            GUILayout.FlexibleSpace();

            if (buttonAction != null)
            {
                GUI.enabled = enabled && !value;
                if (GUILayout.Button("Fix", GUILayout.MaxWidth(50)))
                {
                    if (undoTarget != null)
                    {
                        Undo.RecordObject(undoTarget, "Remote Rendering validation fix");
                    }
                    buttonAction();
                }
                GUI.enabled = enabled;
            }

            GUILayout.EndHorizontal();
        }

        private void OnGUI()
        {
            string message = string.Empty;
#if XR_MANAGEMENT_PLUGIN_AVAILABLE
            // If XR Management plugin is there, you also need the Windows XR plugin or the MR OpenXR plugin, as this disables legacy XR.
#if !WMR_XR_PLUGIN_AVAILABLE && !MR_OPENXR_PLUGIN_AVAILABLE && !OPENXR_PLUGIN_AVAILABLE
#if UNITY_2021_1_OR_NEWER
            // WMR plugin has been removed with Unity 2021.
            message += "Neither the Mixed Reality OpenXR plugin (com.microsoft.mixedreality.openxr) nor the Unity OpenXR plugin (com.unity.xr.openxr) is installed.";
#elif UNITY_2020_2_OR_NEWER
            // OpenXR plugin was released with Unity 2020.2.
            message += "Neither the Mixed Reality OpenXR plugin (com.microsoft.mixedreality.openxr) nor the Unity OpenXR plugin (com.unity.xr.openxr) nor the Windows Mixed Reality plugin (com.unity.xr.windowsmr) is installed.";
#else
            message += "Windows Mixed Reality plugin (com.unity.xr.windowsmr) not installed.";
#endif
#endif

#elif !XR_MANAGEMENT_PLUGIN_AVAILABLE && UNITY_2020_1_OR_NEWER
            // If you use Unity 2020.1 or newer, you have to use the XR plugins, as legacy XR is removed.
            message += "XR Plug-in Management plugin (com.unity.xr.management) not installed.";
#endif
            if (message != string.Empty)
            {
                message += " Please install missing plugins via the package manager or under \"Project Settings > XR Plug-in Management\".";
                EditorGUILayout.HelpBox(message, MessageType.Error, true);
                return;
            }

            var buildTarget = EditorUserBuildSettings.activeBuildTarget;
            var buildTargetGroup = BuildPipeline.GetBuildTargetGroup(buildTarget);
            bool windowsMrEnabled = false;
            bool openXrEnabled = false;

#if XR_MANAGEMENT_PLUGIN_AVAILABLE
            var xrGeneralSettings = XRGeneralSettingsPerBuildTarget.XRGeneralSettingsForBuildTarget(buildTargetGroup);
            if (xrGeneralSettings)
            {
                var assignedSettings = xrGeneralSettings.AssignedSettings;
                foreach (var loader in assignedSettings.activeLoaders)
                {
#if OPENXR_PLUGIN_AVAILABLE
                    if (loader is UnityEngine.XR.OpenXR.OpenXRLoaderBase)
                    {
                        openXrEnabled = true;
                    }
#endif // OPENXR_PLUGIN_AVAILABLE

#if WMR_XR_PLUGIN_AVAILABLE && UNITY_2020_1_OR_NEWER
                    if (loader is UnityEngine.XR.WindowsMR.WindowsMRLoader)
#else
                    // on earlier versions UnityEngine.XR.WindowsMR.WindowsMRLoader is internal so we need to check the type by name
                    if (loader.GetType().FullName == "UnityEngine.XR.WindowsMR.WindowsMRLoader")
#endif // WMR_XR_PLUGIN_AVAILABLE && UNITY_2020_1_OR_NEWER
                    {
                        windowsMrEnabled = true;
                        break;
                    }
                }
            }

            if (!windowsMrEnabled && !openXrEnabled)
            {
                EditorGUILayout.HelpBox("The XR Plug-in Management plugin is installed but neither Windows Mixed Reality nor OpenXR is activated under \"Project Settings > XR Plug-in Management\".", MessageType.Error, true);
            }

#elif !XR_MANAGEMENT_PLUGIN_AVAILABLE && !UNITY_2020_1_OR_NEWER
            windowsMrEnabled = Array.IndexOf(PlayerSettings.GetAvailableVirtualRealitySDKs(BuildTargetGroup.WSA), "WindowsMR") >= 0;
            if (!windowsMrEnabled)
            {
                EditorGUILayout.HelpBox("Windows Mixed Reality SDK not available. Please add the \"Universal Windows Platform Build Support\" and \"Windows Build Support(IL2CPP)\" modules to your Unity installation", MessageType.Error, true);
            }
#endif

            var checkControlsEnabled = windowsMrEnabled || openXrEnabled;
            if (windowsMrEnabled || openXrEnabled)
            {
                if (buildTargetGroup != BuildTargetGroup.WSA && buildTargetGroup != BuildTargetGroup.Android)
                {
                    EditorGUILayout.HelpBox("The active build platform must be either Universal Windows Platform or Android. The active build platform can be switched under \"Build Settings...\"", MessageType.Error, true);
                    checkControlsEnabled = false;
                }

                if (EditorUserBuildSettings.selectedBuildTargetGroup != BuildTargetGroup.WSA && EditorUserBuildSettings.selectedBuildTargetGroup != BuildTargetGroup.Android)
                {
                    EditorGUILayout.HelpBox("The selected build platform must be either Universal Windows Platform or Android. The selected build platform can be switched under \"Build Settings...\"", MessageType.Error, true);
                    checkControlsEnabled = false;
                }
            }

#if !MR_OPENXR_PLUGIN_AVAILABLE
            if (openXrEnabled && (buildTargetGroup == BuildTargetGroup.WSA))
            {
                EditorGUILayout.HelpBox("When targeting HoloLens 2, it's highly recommended to use the Mixed Reality OpenXR plugin (com.microsoft.mixedreality.openxr).", MessageType.Warning, true);
            }
#endif

            Camera mainCamera = null;
            var mainCameras = GameObject.FindGameObjectsWithTag("MainCamera");
            if (mainCameras.Length > 0)
            {
                mainCamera = mainCameras[0].GetComponent<Camera>();
                if (mainCameras.Length > 1)
                {
                    EditorGUILayout.HelpBox($"Found more than one camera with tag \"MainCamera\". Picking first camera: \"{mainCamera?.name}\".", MessageType.Warning, true);
                }
            }
            else
            {
                var allCameras = Camera.allCameras;
                if (allCameras.Length > 0)
                {
                    mainCamera = allCameras[0].GetComponent<Camera>();
                    EditorGUILayout.HelpBox($"Found no camera with tag \"MainCamera\". Picking first camera: \"{mainCamera?.name}\".", MessageType.Warning, true);
                }
                else
                {
                    EditorGUILayout.HelpBox("Found no cameras.", MessageType.Warning, true);
                }
            }

            var margin = new Length(10, LengthUnit.Pixel);
            GUIStyle scrollViewStyle = new GUIStyle();
            scrollViewStyle.padding = new RectOffset(0, 0, 10, 0);
            _scrollPos = EditorGUILayout.BeginScrollView(_scrollPos, scrollViewStyle);

            EditorGUI.indentLevel += 2;

            _showRequired = EditorGUILayout.BeginFoldoutHeaderGroup(_showRequired, "Required");

            GUI.enabled = checkControlsEnabled;
            if (_showRequired)
            {
                CheckLevel currentScopeCheckLevel = CheckLevel.Error;

#if !XR_MANAGEMENT_PLUGIN_AVAILABLE && !UNITY_2020_1_OR_NEWER
                AddCheckLabel("Virtual Reality Supported enabled", PlayerSettings.virtualRealitySupported, currentScopeCheckLevel,
                    () => PlayerSettings.virtualRealitySupported = true);
#endif

                if (windowsMrEnabled)
                {
                    var singlePassInstancedSet = PlayerSettings.stereoRenderingPath == StereoRenderingPath.Instancing;
                    AddCheckLabel("Single Pass Instanced stereo rendering mode enabled", singlePassInstancedSet, currentScopeCheckLevel,
                        () => PlayerSettings.stereoRenderingPath = StereoRenderingPath.Instancing);

#if URP_AVAILABLE && WMR_XR_PLUGIN_AVAILABLE
#if WMR_XR_PLUGIN_BROKEN
                    bool brokenConfig = true;
#else
                    bool brokenConfig = false;
#endif
                    if (GraphicsSettings.currentRenderPipeline != null)
                    {
                        AddCheckLabel("Windows XR Plugin 4.6.4 required when using URP", !brokenConfig, currentScopeCheckLevel,
                          () => UpdateWMRPackage(), null, "Windows XR Plugin 4.6.3 and lower have very poor performance under URP. Please update to 4.6.4 or later.");
                    }
#endif

                }
                else if (openXrEnabled)
                {
#if OPENXR_PLUGIN_AVAILABLE
                    UnityEngine.Object configObject = null;
                    EditorBuildSettings.TryGetConfigObject(UnityEngine.XR.OpenXR.Constants.k_SettingsKey, out configObject);
                    UnityEngine.XR.OpenXR.IPackageSettings packageSettings = configObject as UnityEngine.XR.OpenXR.IPackageSettings;

                    var settings = packageSettings.GetSettingsForBuildTargetGroup(buildTargetGroup);
                    if (settings != null)
                    {
                        var renderModeSet = settings.renderMode == Unity​Engine.XR.OpenXR.OpenXRSettings.RenderMode.SinglePassInstanced;
                        AddCheckLabel("Single Pass Instanced stereo rendering mode enabled", renderModeSet, currentScopeCheckLevel,
                            () => settings.renderMode = Unity​Engine.XR.OpenXR.OpenXRSettings.RenderMode.SinglePassInstanced);

                        OpenXRFeature remoteRenderingFeature = Feature​Helpers.GetFeatureWithIdForBuildTarget(buildTargetGroup, AzureRemoteRenderingFeature.FeatureId);
                        if (remoteRenderingFeature != null)
                        {
                            AddCheckLabel($"{AzureRemoteRenderingFeature.FeatureName} OpenXR feature enabled", remoteRenderingFeature.enabled, currentScopeCheckLevel,
                                () => { remoteRenderingFeature.enabled = true; Feature​Helpers.RefreshFeatures(buildTargetGroup); }, remoteRenderingFeature);
                        }

#if UNITY_ANDROID
                        // The Quest support feature was renamed from "Oculus Quest Support" to "Meta Quest Support" in Unity OpenXR 1.6.0
                        OpenXRFeature metaQuestFeature = Feature​Helpers.GetFeatureWithIdForBuildTarget(buildTargetGroup, "com.unity.openxr.feature.metaquest") ??
                                                         Feature​Helpers.GetFeatureWithIdForBuildTarget(buildTargetGroup, "com.unity.openxr.feature.oculusquest");
                        if (metaQuestFeature != null)
                        {
                            AddCheckLabel("Oculus/Meta Quest Support feature enabled", metaQuestFeature.enabled, currentScopeCheckLevel,
                                () => { metaQuestFeature.enabled = true; Feature​Helpers.RefreshFeatures(buildTargetGroup); }, metaQuestFeature);
                        }
#endif
                    }
                    else
                    {
                        EditorGUILayout.HelpBox("Could not access OpenXR plugin settings.", MessageType.Warning, true);
                    }
#endif // OPENXR_PLUGIN_AVAILABLE
                }

#if !XR_MANAGEMENT_PLUGIN_AVAILABLE && !UNITY_2020_1_OR_NEWER
                var enabledSdks = PlayerSettings.GetVirtualRealitySDKs(BuildTargetGroup.WSA);
                var windowsMrSet = Array.IndexOf(enabledSdks, "WindowsMR") >= 0;
                AddCheckLabel("Windows Mixed Reality SDK added to Virtual Reality SDKs", windowsMrSet, currentScopeCheckLevel,
                    () =>
                        {
                            var newSdks = new string[enabledSdks.Length + 1];
                            for (int i = 0; i < enabledSdks.Length; i++)
                            {
                                newSdks[i] = enabledSdks[i];
                            }
                            newSdks[enabledSdks.Length] = "WindowsMR";
                            PlayerSettings.SetVirtualRealitySDKs(BuildTargetGroup.WSA, newSdks);
                        }
                    );
#endif

#if UNITY_ANDROID
                AddCheckLabel("Auto Graphics API disabled", !PlayerSettings.GetUseDefaultGraphicsAPIs(BuildTarget.Android), currentScopeCheckLevel,
                    () => PlayerSettings.SetUseDefaultGraphicsAPIs(BuildTarget.Android, false));

                GraphicsDeviceType[] currentGraphicsAPIs = PlayerSettings.GetGraphicsAPIs(BuildTarget.Android);
                GraphicsDeviceType[] targetGraphicsAPIs = { GraphicsDeviceType.Vulkan };
                AddCheckLabel("Graphics API Vulkan", currentGraphicsAPIs.Length == 1 && currentGraphicsAPIs[0] == GraphicsDeviceType.Vulkan, currentScopeCheckLevel,
                    () => PlayerSettings.SetGraphicsAPIs(BuildTarget.Android, targetGraphicsAPIs));

                AddCheckLabel("Minimum API Level 26", PlayerSettings.Android.minSdkVersion >= AndroidSdkVersions.AndroidApiLevel26, currentScopeCheckLevel,
                    () => PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel26);

                AddCheckLabel("Scripting Backend IL2CPP", PlayerSettings.GetScriptingBackend(BuildTargetGroup.Android) == ScriptingImplementation.IL2CPP, currentScopeCheckLevel,
                    () => PlayerSettings.SetScriptingBackend(BuildTargetGroup.Android, ScriptingImplementation.IL2CPP));

                AddCheckLabel("Internet Access enabled", PlayerSettings.Android.forceInternetPermission, currentScopeCheckLevel,
                    () => PlayerSettings.Android.forceInternetPermission = true);
#else
                AddCheckLabel("Supported Device Family \"Holographic\" enabled", PlayerSettings.WSA.GetTargetDeviceFamily(PlayerSettings.WSATargetFamily.Holographic), currentScopeCheckLevel,
                    () => PlayerSettings.WSA.SetTargetDeviceFamily(PlayerSettings.WSATargetFamily.Holographic, true));

                var clearFlagsSet = mainCamera?.clearFlags == CameraClearFlags.SolidColor;

                AddCheckLabel("Main camera clear flags set to 'Solid Color'", clearFlagsSet, currentScopeCheckLevel,
                    () => { if (mainCamera != null) mainCamera.clearFlags = CameraClearFlags.SolidColor; }, mainCamera);

                var transparentBlack = new Color(0.0f, 0.0f, 0.0f, 0.0f);
                var clearColorSet = mainCamera?.backgroundColor == transparentBlack;
                AddCheckLabel("Main camera background color set to black", clearColorSet, currentScopeCheckLevel,
                    () => { if (mainCamera != null) mainCamera.backgroundColor = transparentBlack; }, mainCamera);

                AddCheckLabel("InternetClient capability enabled", PlayerSettings.WSA.GetCapability(PlayerSettings.WSACapability.InternetClient), currentScopeCheckLevel,
                    () => PlayerSettings.WSA.SetCapability(PlayerSettings.WSACapability.InternetClient, true));

                AddCheckLabel("InternetClientServer capability enabled", PlayerSettings.WSA.GetCapability(PlayerSettings.WSACapability.InternetClientServer), currentScopeCheckLevel,
                    () => PlayerSettings.WSA.SetCapability(PlayerSettings.WSACapability.InternetClientServer, true));
#endif
            }
            GUI.enabled = true;
            EditorGUILayout.EndFoldoutHeaderGroup();

            _showRecommended = EditorGUILayout.BeginFoldoutHeaderGroup(_showRecommended, "Recommended");
            GUI.enabled = checkControlsEnabled;
            if (_showRecommended)
            {
                CheckLevel currentScopeCheckLevel = CheckLevel.Warning;

                var nearClipSet = mainCamera != null && Math.Abs(mainCamera.nearClipPlane - 0.1f) < 0.0001f;
                AddCheckLabel("Main camera near clipping plane set to 0.1", nearClipSet, currentScopeCheckLevel,
                    () => { if (mainCamera != null) mainCamera.nearClipPlane = 0.1f; }, mainCamera);

                var farClipSet = mainCamera != null && Math.Abs(mainCamera.farClipPlane - 20.0f) < 0.0001f;
                AddCheckLabel("Main camera far clipping plane set to 20.0", farClipSet, currentScopeCheckLevel,
                    () => { if (mainCamera != null) mainCamera.farClipPlane = 20.0f; }, mainCamera);

#if XR_MANAGEMENT_PLUGIN_AVAILABLE
                if (windowsMrEnabled)
                {
#if WMR_XR_PLUGIN_AVAILABLE
                    UnityEngine.Object configObject = null;
                    EditorBuildSettings.TryGetConfigObject(UnityEngine.XR.WindowsMR.Constants.k_SettingsKey, out configObject);
                    WindowsMRPackageSettings packageSettings = configObject as WindowsMRPackageSettings;

                    WindowsMRSettings settings = packageSettings?.GetSettingsForBuildTargetGroup(buildTargetGroup);

                    if (settings != null)
                    {
                        var depthBufferFormatSet = settings.DepthBufferFormat == WindowsMRSettings.DepthBufferOption.DepthBuffer16Bit;
                        AddCheckLabel("Depth Buffer Format 16Bit set", depthBufferFormatSet, currentScopeCheckLevel,
                            () =>
                            {
                                settings.DepthBufferFormat = WindowsMRSettings.DepthBufferOption.DepthBuffer16Bit;
                                EditorUtility.SetDirty(settings);
                            });

                        AddCheckLabel("Depth Buffer Sharing enabled", settings.UseSharedDepthBuffer, currentScopeCheckLevel,
                            () =>
                            {
                                settings.UseSharedDepthBuffer = true;
                                EditorUtility.SetDirty(settings);
                            });
                    }
                    else
                    {
                        EditorGUILayout.HelpBox("Could not access Windows Mixed Reality plugin settings.", MessageType.Warning, true);
                    }
#endif // WMR_XR_PLUGIN_AVAILABLE
                }
                else if (openXrEnabled)
                {
#if OPENXR_PLUGIN_AVAILABLE
                    UnityEngine.Object configObject = null;
                    EditorBuildSettings.TryGetConfigObject(UnityEngine.XR.OpenXR.Constants.k_SettingsKey, out configObject);
                    UnityEngine.XR.OpenXR.IPackageSettings packageSettings = configObject as UnityEngine.XR.OpenXR.IPackageSettings;

                    var settings = packageSettings.GetSettingsForBuildTargetGroup(buildTargetGroup);

                    if (settings != null)
                    {
                        var depthBufferFormatSet = settings.depthSubmissionMode == Unity​Engine.XR.OpenXR.OpenXRSettings.DepthSubmissionMode.Depth16Bit;
                        AddCheckLabel("Depth Submission Mode 16Bit set", depthBufferFormatSet, currentScopeCheckLevel,
                            () => settings.depthSubmissionMode = Unity​Engine.XR.OpenXR.OpenXRSettings.DepthSubmissionMode.Depth16Bit);
                    }
                    else
                    {
                        EditorGUILayout.HelpBox("Could not access Mixed Reality OpenXR plugin settings.", MessageType.Warning, true);
                    }
#endif // OPENXR_PLUGIN_AVAILABLE
                }

#elif !UNITY_2020_1_OR_NEWER
                var depthBufferFormatSet = PlayerSettings.VRWindowsMixedReality.depthBufferFormat == PlayerSettings.VRWindowsMixedReality.DepthBufferFormat.DepthBufferFormat16Bit;
                AddCheckLabel("Depth Buffer Format 16Bit set", depthBufferFormatSet, currentScopeCheckLevel,
                    () => PlayerSettings.VRWindowsMixedReality.depthBufferFormat = PlayerSettings.VRWindowsMixedReality.DepthBufferFormat.DepthBufferFormat16Bit);

                AddCheckLabel("Depth Buffer Sharing enabled", PlayerSettings.VRWindowsMixedReality.depthBufferSharingEnabled, currentScopeCheckLevel,
                    () => PlayerSettings.VRWindowsMixedReality.depthBufferSharingEnabled = true);
#endif
            }
            GUI.enabled = true;
            EditorGUILayout.EndFoldoutHeaderGroup();

            _showDev = EditorGUILayout.BeginFoldoutHeaderGroup(_showDev, "Development");
            GUI.enabled = checkControlsEnabled;
            if (_showDev)
            {
                CheckLevel currentScopeCheckLevel = CheckLevel.Info;
                AddCheckLabel("PrivateNetworkClientServer capability enabled", PlayerSettings.WSA.GetCapability(PlayerSettings.WSACapability.PrivateNetworkClientServer), currentScopeCheckLevel,
                    () => PlayerSettings.WSA.SetCapability(PlayerSettings.WSACapability.PrivateNetworkClientServer, true));
            }
            GUI.enabled = true;
            EditorGUILayout.EndFoldoutHeaderGroup();
            EditorGUI.indentLevel -= 2;

            EditorGUILayout.EndScrollView();
        }
    }
}
