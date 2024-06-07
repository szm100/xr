#if OPENXR_PLUGIN_AVAILABLE

using System;
using System.Runtime.InteropServices;

using UnityEngine;
using UnityEngine.XR.OpenXR.Features;

#if UNITY_EDITOR
using UnityEditor;
using UnityEditor.XR.OpenXR.Features;
#endif


namespace Microsoft.Azure.RemoteRendering.Unity
{
#if UNITY_EDITOR
    [OpenXRFeature(UiName = FeatureName,
        BuildTargetGroups = new[] { BuildTargetGroup.WSA, BuildTargetGroup.Android },
        Company = "Microsoft",
        Desc = "Azure Remote Rendering enables you to render highly complex 3D models in real time on devices such as HoloLens 2.",
        DocumentationLink = "https://docs.microsoft.com/azure/remote-rendering",
        OpenxrExtensionStrings = FeatureExtensions,
        Category = FeatureCategory.Feature,
        FeatureId = FeatureId,
        Version = "0.0.1")]
#endif
    public class AzureRemoteRenderingFeature : OpenXRFeature
    {
        /// <summary>
        /// The human-friendly name of the feature for display on UIs.
        /// See <see cref="OpenXRFeatureAttribute.UiName"/>.
        /// </summary>
        public const string FeatureName = "Azure Remote Rendering";
        /// <summary>
        /// A unique identifier of this feature for reference.
        /// </summary>
        public const string FeatureId = "com.microsoft.azure.remote-rendering.feature.remote-rendering";
        /// <summary>
        /// List of OpenXR extensions that are automatically enabled by Unity for this feature.
        /// </summary>
        public const string FeatureExtensions = ""; // No additional extension needed, we run on an additional API layer.


        /// <summary>
        /// Return the current OpenXR app space handle.
        /// </summary>
        /// <returns>Current app space handle.</returns>
        public static ulong GetCurrentAppSpaceHandle()
        {
            return GetCurrentAppSpace();
        }


        protected override IntPtr HookGetInstanceProcAddr(IntPtr func)
        {
            if (HolographicAppRemotingNativeLibrary.HolographicStreamerHybridPlayerOpenXrInit() != 0)
            {
                Debug.LogError("Failed to initialize Holographic App Remoting Player!");
            }

            return HolographicAppRemotingNativeLibrary.GetUnityInstanceProcAddr(func);
        }
    }
}

#endif
