// Copyright (c) Microsoft Corporation. All rights reserved.

using UnityEngine;

namespace Azure.Communication.Calling.UnityClient
{
    public class RuntimeInitialize
    {
        [RuntimeInitializeOnLoadMethod]
        static void OnRuntimeMethodLoad()
        {
#if !UNITY_EDITOR && UNITY_ANDROID
            Debug.Log("RuntimeInitialize.OnRuntimeMethodLoad: Performing ACS initialization.");

            using (AndroidJavaClass unityPlayerClass = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
            {
                using (AndroidJavaObject androidActivity = unityPlayerClass.GetStatic<AndroidJavaObject>("currentActivity"))
                {
                    using (AndroidJavaClass rtcPalEnvironmentClass = new AndroidJavaClass("com.microsoft.media.RtcPalEnvironment"))
                    {
                        rtcPalEnvironmentClass.CallStatic("setContext", androidActivity);
                    }
                }
            }
#endif
        }
    }
}