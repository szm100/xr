using System;
using System.Runtime.InteropServices;


namespace Microsoft.Azure.RemoteRendering.Unity
{
    /// <summary>
    /// Interface for the native Holographic App Remoting API.
    /// </summary>
    public static class HolographicAppRemotingNativeLibrary
    {
#if UNITY_ANDROID && !UNITY_EDITOR
        private const string holographicAppRemotingDll = "XrApiLayer_MicrosoftHolographicHybridRemoting";
#elif ENABLE_IL2CPP
        // Workaround for MSFT:24019581
        private const string holographicAppRemotingDll = "Microsoft.Holographic.HybridRemoting.dll";
#else
        private const string holographicAppRemotingDll = "Microsoft.Holographic.HybridRemoting";
#endif


        [DllImport(holographicAppRemotingDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern int HolographicStreamerHybridPlayerOpenXrInit();

        [DllImport(holographicAppRemotingDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr GetUnityInstanceProcAddr(IntPtr func);

        [DllImport(holographicAppRemotingDll, CallingConvention = CallingConvention.Cdecl)]
        public static extern IntPtr GetUnityRenderingEventCallback();
    }
}
