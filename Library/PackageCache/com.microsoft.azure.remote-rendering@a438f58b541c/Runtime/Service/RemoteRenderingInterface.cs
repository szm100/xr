using System;
using System.Runtime.InteropServices;

using ManagerId = System.UInt16;

namespace Microsoft.Azure.RemoteRendering
{
    static public partial class NativeLibraryExtensions
    {
        [DllImport(NativeLibrary.DllName, CallingConvention = CallingConvention.Cdecl)]
        public static extern Result RemoteRendering_Startup(ref RemoteRenderingInitialization init);
        [DllImport(NativeLibrary.DllName, CallingConvention = CallingConvention.Cdecl)]
        public static extern Result RemoteRendering_Shutdown();

        [DllImport(NativeLibrary.DllName, CallingConvention = CallingConvention.Cdecl)]
        public static extern void RemoteManager_Update(ManagerId managerId);

        [DllImport(NativeLibrary.DllName, CallingConvention = CallingConvention.Cdecl)]
        public static extern Result RemoteRendering_SetConnectionGameEngine(Int64 engineIdentifier);

        [DllImport(NativeLibrary.DllName, CallingConvention = CallingConvention.Cdecl)]
        public static extern Result RemoteRendering_fov_from_projection_matrix(ref Matrix4x4 projection, out CameraFov fov);
        [DllImport(NativeLibrary.DllName, CallingConvention = CallingConvention.Cdecl)]
        public static extern Result RemoteRendering_fov_to_projection_matrix(ref CameraFov fov, float nearPlane, float farPlane, DepthConvention depthConvention, out Matrix4x4 projection);
    }
}
