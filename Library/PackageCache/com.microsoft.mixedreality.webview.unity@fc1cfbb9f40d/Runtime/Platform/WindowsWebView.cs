// <copyright file="WindowsWebView.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>

namespace Microsoft.MixedReality.WebView
{
    using System;
    using UnityEngine;
    using AOT;
    using System.Runtime.InteropServices;

    internal class WindowsWebView : BaseWebView, IWithVirtualHost, IWithSystemFocusCapture, IWithExtendedEvents, IWithPermissionSettings
    {
        private event WebView_OnPermissionSettingFound permissionSettingFound;
        public event WebView_OnNavigationStarting NavigationStarting;
        public event WebView_OnNavigationCompleted NavigationCompleted;
        public event WebView_OnDocumentTitleChanged DocumentTitleChanged;
        public event WebView_OnPermissionRequested PermissionRequested;

        public WindowsWebView(GameObject gameObject, int width, int height, string parentHWNDHint)
            : base(gameObject, width, height, parentHWNDHint)
        {
            WebViewNative.SetNavigationStartingCallback(InstanceId, OnNavigationStarting);
            WebViewNative.SetNavigationCompletedCallback(InstanceId, OnNavigationCompleted);
            WebViewNative.SetDocumentTitleChangedCallback(InstanceId, OnDocumentTitleChanged);
            WebViewNative.SetPermissionRequestedCallback(InstanceId, OnPermissionRequested);
        }

        public void SetVirtualHostMapping(string hostName, string folderPath)
        {
            WebViewNative.SetVirtualHostMapping(InstanceId, hostName, folderPath);
        }

        public void ReleaseFocus()
        {
            WebViewNative.ReleaseFocus(InstanceId);
        }

        public void GetNonDefaultPermissionSettings(WebView_OnPermissionSettingFound settingFoundCallback)
        {
            permissionSettingFound = settingFoundCallback;

            WebViewNative.GetNonDefaultPermissionSettings(InstanceId, OnPermissionSettingFound);
        }

        public void SetPermissionState(string origin, WebViewPermissionKind kind, WebViewPermissionState state)
        {
            WebViewNative.SetPermissionState(InstanceId, origin, (int)kind, (int)state);
        }

        [MonoPInvokeCallback(typeof(WebViewNative.NavigationStartingDelegate))]
        private static void OnNavigationStarting(IntPtr instanceId, Int64 navigationId, string uri)
        {
            WindowsWebView webView = WebViewSystem.FindWebView(instanceId) as WindowsWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ => webView.NavigationStarting?.Invoke(navigationId, uri), null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.NavigationCompletedDelegate))]
        private static void OnNavigationCompleted(IntPtr instanceId, Int64 navigationId, bool succeeded)
        {
            WindowsWebView webView = WebViewSystem.FindWebView(instanceId) as WindowsWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ => webView.NavigationCompleted?.Invoke(navigationId, succeeded), null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.DocumentTitleChanged))]
        private static void OnDocumentTitleChanged(IntPtr instanceId, string newTitle)
        {
            WindowsWebView webView = WebViewSystem.FindWebView(instanceId) as WindowsWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ => webView.DocumentTitleChanged?.Invoke(newTitle), null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.NonDefaultPermissionSettingEnumDelegate))]
        private static void OnPermissionSettingFound(IntPtr instanceId, string origin, int kind, int state, bool enumerationComplete)
        {
            WindowsWebView webView = WebViewSystem.FindWebView(instanceId) as WindowsWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ => webView.permissionSettingFound?.Invoke(origin, (WebViewPermissionKind)kind, (WebViewPermissionState)state, enumerationComplete), null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.PermissionRequestedDelegate))]
        private static bool OnPermissionRequested(IntPtr instanceId, string origin, bool userInitiated, int kind, IntPtr state)
        {
            bool handled = false;

            WindowsWebView webView = WebViewSystem.FindWebView(instanceId) as WindowsWebView;
            if (webView != null)
            {
                WebViewPermissionState localState = WebViewPermissionState.Default;

                // We send move this to the Unity game thread synchronously because we need to see the 'handled' and 'state' properties before the native handler exits.
                webView.UnityGameThreadContext.Send(_ => webView.PermissionRequested?.Invoke(origin, userInitiated, (WebViewPermissionKind)kind, ref localState, ref handled), null);

                if (handled)
                {
                    Marshal.WriteInt32(state, (int)localState);
                }
            }

            return handled;
        }
    }
}
