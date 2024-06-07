using System;

using UnityEngine;
using UnityEditor;

namespace Microsoft.Azure.RemoteRendering.Unity.Editor
{
    /// <summary>
    /// Verify the Project and Editor environment is in good conditions for Azure Remote Rendering.
    ///
    /// Use this class to present any warnings or errors regularly to the user, that may impact
    /// the usage of Azure Remote Rendering.
    /// </summary>
    [InitializeOnLoad]
    public static class ProjectValidator
    {
        static ProjectValidator()
        {
            EditorApplication.playModeStateChanged += PlayModeChanged;
            RunChecks();
        }

        private static void PlayModeChanged(PlayModeStateChange state)
        {
            if (state == PlayModeStateChange.EnteredEditMode || state == PlayModeStateChange.EnteredPlayMode)
            {
                RunChecks();
            }
        }

        private static void RunChecks()
        {
            CheckForUnsupportedDisplayAdapters();
            CheckForDefectivePackages();
        }

        /// <summary>
        /// Check for any incompatible display adapter used by the Editor.
        ///
        /// - Microsoft Basic Display Adapter: This is a software renderer. It will report h264 support, but fails to create a decoder.
        /// </summary>
        private static void CheckForUnsupportedDisplayAdapters()
        {
            const string microsoftBasicAdapterName = "Microsoft Basic Display Adapter";
            const string microsoftBasicAdapterDriver = "Microsoft Basic Render Driver";
            const int microsoftBasicAdapterVendorId = 5140;
            const int microsoftBasicAdapterProductId = 140;

            // Check if we're running on any unsupported display adapter
            if (string.Equals(SystemInfo.graphicsDeviceName, microsoftBasicAdapterDriver, System.StringComparison.InvariantCultureIgnoreCase) ||
                ((SystemInfo.graphicsDeviceVendorID == microsoftBasicAdapterVendorId) && (SystemInfo.graphicsDeviceVendorID == microsoftBasicAdapterProductId)))
            {
                Debug.LogFormat(LogType.Warning, LogOption.NoStacktrace, null, $"Unsupported graphics adapter \"{microsoftBasicAdapterName}\" detected. Azure Remote Rendering won't be available in PlayMode!");
            }
        }

        /// <summary>
        /// Check if any defective packages are in use.
        /// </summary>
        private static void CheckForDefectivePackages()
        {
#if URP_AVAILABLE && WMR_XR_PLUGIN_AVAILABLE && WMR_XR_PLUGIN_BROKEN
            if (UnityEngine.Rendering.GraphicsSettings.currentRenderPipeline != null)
            {
                Debug.LogError("Windows XR Plugin 4.6.3 and lower have very poor performance under URP. Please update to 4.6.4 or later.\nSee https://learn.microsoft.com/windows/mixed-reality/develop/unity/known-issues#resolved-blocking-issues");
            }
#endif
        }
    }
}
