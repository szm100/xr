#if URP_AVAILABLE
using System;
using System.Runtime.InteropServices;

using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

namespace Microsoft.Azure.RemoteRendering.Unity
{
    public class HybridRenderingPassFeature : ScriptableRendererFeature
    {
        private class HolographicRemotingCallbackPass : ScriptableRenderPass
        {
            public HolographicRemotingCallbackPass(RenderPassEvent renderPassEvent, int eventID)
            {
                this.renderPassEvent = renderPassEvent;
                this._eventID = eventID;
                try
                {
                    _renderRemoteFrameCallback = HolographicAppRemotingNativeLibrary.GetUnityRenderingEventCallback();

                    for (int i = 0; i < 3; ++i)
                    {
                        _userDataWrapper[i] = Marshal.AllocHGlobal(Marshal.SizeOf(_userData[i]));
                    }
                }
                catch (Exception ex)
                {
                    Debug.LogFormat(LogType.Log, LogOption.NoStacktrace, null, "{0}", $"Failed to get HolographicHybridRemoting entry point. {ex.Message}");
                }
            }

            ~HolographicRemotingCallbackPass()
            {
                for (int i = 0; i < 3; ++i)
                {
                    if (_userDataWrapper[i] != IntPtr.Zero)
                    {
                        Marshal.FreeHGlobal(_userDataWrapper[i]);
                    }
                }
            }

            public override void Execute(ScriptableRenderContext context, ref RenderingData renderingData)
            {
                if (!_renderRemoteFrameCallback.Equals(IntPtr.Zero))
                {
                    _userData[_userDataBufferIndex].near = renderingData.cameraData.camera.farClipPlane;
                    _userData[_userDataBufferIndex].far = renderingData.cameraData.camera.nearClipPlane;

                    uint flipRenderBlitTextureVertically = 0u;
#if UNITY_2020_2_OR_NEWER
                    // Don't ever set the flipped flag on HoloLens2. If the camera is flipped than we are rendering to an off-screen render target which is never acceptable on this platform.
                    if (UnityEngine.Application.platform != UnityEngine.RuntimePlatform.WSAPlayerARM)
                    {
                        flipRenderBlitTextureVertically = renderingData.cameraData.IsCameraProjectionMatrixFlipped() ? 1u : 0u;
                    }
#endif

                    uint sRGB = renderingData.cameraData.cameraTargetDescriptor.sRGB ? 1u : 0u;
                    uint msaaSamples = (uint)renderingData.cameraData.cameraTargetDescriptor.msaaSamples;

                    // Bitfield
                    //   Bit 0: flipRenderBlitTextureVertically
                    //   Bit 1: sRGB
                    // Bit 2-5: msaaSamples
                    _userData[_userDataBufferIndex].remoteFrameRenderParameters = 0;
                    _userData[_userDataBufferIndex].remoteFrameRenderParameters |= (flipRenderBlitTextureVertically & 0x1u);
                    _userData[_userDataBufferIndex].remoteFrameRenderParameters |= (sRGB & 0x1u) << 1;
                    _userData[_userDataBufferIndex].remoteFrameRenderParameters |= (msaaSamples & 0xFu) << 2;


                    Marshal.StructureToPtr(_userData[_userDataBufferIndex], _userDataWrapper[_userDataBufferIndex], false);

                    var cmd = CommandBufferPool.Get("HolographicRemotingCallbackPass");

                    if (RemoteManagerUnity.IsConnected)
                    {
                        cmd.IssuePluginEventAndData(_renderRemoteFrameCallback, _eventID, _userDataWrapper[_userDataBufferIndex]);
                    }
                    context.ExecuteCommandBuffer(cmd);
                    CommandBufferPool.Release(cmd);

                    // Switch user data buffer index so that we use a different one for the next frame.
                    _userDataBufferIndex = (_userDataBufferIndex++) % 3;
                }
            }

            [StructLayout(LayoutKind.Sequential)]
            private struct UserDataStream
            {
                public float near;
                public float far;

                // Bitfield
                //   Bit 0: flipRenderBlitTextureVertically
                public uint remoteFrameRenderParameters;
            };

            private IntPtr _renderRemoteFrameCallback = IntPtr.Zero;
            private int _eventID = -1;

            private int _userDataBufferIndex = 0;
            private UserDataStream[] _userData = new UserDataStream[3];
            private IntPtr[] _userDataWrapper = new IntPtr[3];
        }

        public override void AddRenderPasses(ScriptableRenderer renderer, ref RenderingData renderingData)
        {
            if (!RemoteManagerUnity.IsInitialized)
            {
                return;
            }

            bool isUsingSimulation = RemoteManagerUnity.IsUsingSimulation;

            if (isUsingSimulation)
            {
#if UNITY_2021_1_OR_NEWER
                _beforeOpaquePass.ConfigureInput(ScriptableRenderPassInput.Color);
                _afterOpaquePass.ConfigureInput(ScriptableRenderPassInput.Color);
#endif
                if (renderingData.cameraData.camera == RemoteManagerUnity.RenderCamera)
                {
                    // Blit remote frame to proxy camera.
                    renderer.EnqueuePass(_beforeOpaquePass);

                }
                if (renderingData.cameraData.camera == Camera.main)
                {
                    // Re-project proxy texture to main camera.
                    renderer.EnqueuePass(_afterOpaquePass);
                }
            }
            else
            {
#if UNITY_2021_1_OR_NEWER
#if XR_MANAGEMENT_PLUGIN_AVAILABLE && OPENXR_PLUGIN_AVAILABLE
                _beforeRenderingPass.ConfigureInput(ScriptableRenderPassInput.None);
#endif
                _beforeOpaquePass.ConfigureInput(ScriptableRenderPassInput.None);
                _afterOpaquePass.ConfigureInput(ScriptableRenderPassInput.None);
#endif
                if (renderingData.cameraData.camera == Camera.main)
                {
#if XR_MANAGEMENT_PLUGIN_AVAILABLE && OPENXR_PLUGIN_AVAILABLE
                    renderer.EnqueuePass(_beforeRenderingPass);
#endif
                    // Blit remote frame to main camera.
                    renderer.EnqueuePass(_beforeOpaquePass);
                }
            }
        }

        public override void Create()
        {
#if XR_MANAGEMENT_PLUGIN_AVAILABLE && OPENXR_PLUGIN_AVAILABLE
            _beforeRenderingPass = new HolographicRemotingCallbackPass(RenderPassEvent.BeforeRendering, 0);
#endif
            _beforeOpaquePass = new HolographicRemotingCallbackPass(RenderPassEvent.BeforeRenderingOpaques, 1);
            _afterOpaquePass = new HolographicRemotingCallbackPass(RenderPassEvent.AfterRenderingOpaques, 2);
#if UNITY_2021_1_OR_NEWER
            _beforeOpaquePass.ConfigureInput(ScriptableRenderPassInput.None);
            _afterOpaquePass.ConfigureInput(ScriptableRenderPassInput.None);
#endif
        }

#if XR_MANAGEMENT_PLUGIN_AVAILABLE && OPENXR_PLUGIN_AVAILABLE
        private HolographicRemotingCallbackPass _beforeRenderingPass;
#endif
        private HolographicRemotingCallbackPass _beforeOpaquePass;
        private HolographicRemotingCallbackPass _afterOpaquePass;
    }
}
#endif
