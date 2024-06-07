// <copyright file="BaseWebView.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>

namespace Microsoft.MixedReality.WebView
{
    using System;
    using System.Threading;
    using System.Threading.Tasks;
    using AOT;
    using UnityEngine;
    using System.Runtime.InteropServices;

    internal abstract class BaseWebView : IWebView, IWithPostMessage, IWithMouseEvents, IWithBrowserHistory, IWithHTMLInjection, IWithContentScale, IWithNavigationFiltering
    {

        #region Events
        public event WebView_OnNavigated Navigated;
        public event WebView_OnPostMessage MessageReceived;
        public event WebView_OnCanGoForwardUpdated CanGoForwardUpdated;
        public event WebView_OnCanGoBackUpdated CanGoBackUpdated;
        public event WebView_OnNewWindowRequested NewWindowRequested;
        public event WebView_OnCloseRequested WindowCloseRequested;
        public event WebView_OnNavigationBlocked NavigationBlocked;

        #endregion

        private readonly TaskCompletionSource<bool> whenReadyTCS = new TaskCompletionSource<bool>();
        private readonly WeakReference gameObject;
        private int activeResizeRequestCount = 0;
        private Texture2D targetTexture;
        public IntPtr InstanceId { get; private set; }
        private int width;
        private int height;

        public int Width
        {
            get => width;
            set { Resize(value, Height); }
        }

        public int Height
        {
            get => height;
            set { Resize(Width, value); }
        }

        // Unity API's (e.g. UnityEngine.Behaviour::set_enabled) must be called from Unity's main thread (i.e. game thread or app thread).
        // However, WebView2 callbacks are executed on WinRT's main thread.
        // Use SynchronizationContext to ensure any Unity API calls are made from Unity's main thread and at the plugin layer so that
        // consumers of the plugin do not run into wrong thread type violations
        protected SynchronizationContext UnityGameThreadContext;
        private TaskScheduler UnityGameThreadScheduler;

        public GameObject GameObject => (GameObject)gameObject.Target;
        public Texture2D Texture => targetTexture;

        public BaseWebView(GameObject gameObject, int width, int height, string parentHWNDHint = null)
        {
#if UNITY_WSA && !UNITY_EDITOR
            // WebViews created in the editor don't need this check as the editor is a Win32 app.
            // The UNITY_WSA refers to the currently set target platform, so we also need to check if !UNITY_EDITOR.
            Debug.Assert(WebViewSystem.AppThread == System.Threading.Thread.CurrentThread, "WebView was not created on the game thread");
#endif
            UnityGameThreadContext = SynchronizationContext.Current;
            UnityGameThreadScheduler = TaskScheduler.FromCurrentSynchronizationContext();

            this.gameObject = new WeakReference(gameObject);
            this.width = width;
            this.height = height;

#if UNITY_WSA
            // We need to create the WebView on the main thread.
            // All other WebViewNative functions are thread-safe.
            UnityEngine.WSA.Application.InvokeOnUIThread(() => {
#endif
            int errorCode = 0;
            InstanceId = WebViewNative.InitializeWebView(width, height, parentHWNDHint, ref errorCode);
            if (errorCode != 0)
            {
                Debug.LogError($"Failed to create native WebView control. Exception code: {errorCode}");
                var creationException = Marshal.GetExceptionForHR(errorCode);

                UnityGameThreadContext.Post(_ =>
                {
                    this.whenReadyTCS.SetException(creationException);
                }, null);

                return;
            }

            WebViewNative.SetUrlChangedCallback(InstanceId, OnUrlChangedCallback);
            WebViewNative.SetCanGoBackUpdatedCallback(InstanceId, OnGoBackStatusUpdated);
            WebViewNative.SetCanGoForwardUpdatedCallback(InstanceId, OnGoForwardUpdated);
            WebViewNative.SetPostMessageCallback(InstanceId, OnPostMessageCallback);
            WebViewNative.SetReadyCallback(InstanceId, OnReadyCallback);
            WebViewNative.SetTextureAvailableCallback(InstanceId, OnTextureAvailable);
            WebViewNative.SetNewWindowRequestedCallback(InstanceId, OnNewWindowRequested);
            WebViewNative.SetWindowCloseRequestedCallback(InstanceId, OnWindowCloseRequested);
            WebViewNative.SetNavigationBlockedCallback(InstanceId, OnNavigationBlocked);
#if UNITY_WSA
            }, true);
#endif
        }


        public Uri Page { get; private set; }

        public void Load(Uri url)
        {
            Page = url;
            WebViewNative.SetWebViewUrl(InstanceId, url.AbsoluteUri);
        }

        public void MouseEvent(WebViewMouseEventData mouseEvent)
        {
            WebViewNative.HandlePointerInput(InstanceId, mouseEvent.X, mouseEvent.Y, (int)mouseEvent.Device, (int)mouseEvent.Type, (int)mouseEvent.Button, (int)mouseEvent.WheelY);
        }

        public void Resize(int width, int height)
        {
            // Run on the same thread as SetTargetTexture so we can properly synchronize.
            OnceCreated.ContinueWith(_ =>
            {
                targetTexture = null;
                this.width = width;
                this.height = height;
                activeResizeRequestCount++;
                WebViewNative.SetWebViewSize(InstanceId, width, height);
            }, UnityGameThreadScheduler);
        }

        private void SetTargetTexture(IntPtr externalTexturePtr)
        {
            // We need this to be the case so that:
            // (1) We can access Unity GameObject methods
            // (2) We properly synchronize against resize requests.
            Debug.Assert(SynchronizationContext.Current == UnityGameThreadContext);

            // Consume resize request.
            if (activeResizeRequestCount >= 1)
            {
                activeResizeRequestCount--;
            }

            // Check if we're already asking for more resizes that will invalidate the target texture.
            if (activeResizeRequestCount > 0)
            {
                return;
            }

            targetTexture = Texture2D.CreateExternalTexture(width, height, TextureFormat.RGBA32, false, true, externalTexturePtr);
            // Set point filtering just so we can see the pixels clearly
            targetTexture.filterMode = FilterMode.Point;
            targetTexture.wrapMode = TextureWrapMode.Clamp;

            if (this.gameObject.Target != null)
            {
                var webViewRenderer = this.GameObject.GetComponent<Renderer>();
                webViewRenderer.material.mainTexture = targetTexture;
            }
        }

        public void PostMessage(string message, bool isJSON = false)
        {
            WebViewNative.PostWebMessage(InstanceId, message, isJSON);
        }

        public void LoadHTMLContent(string htmlContent)
        {
            WebViewNative.LoadHTMLContent(InstanceId, htmlContent);
        }

        public void GoBack()
        {
            WebViewNative.GoBackOnWebView(InstanceId);
        }

        public void GoForward()
        {
            WebViewNative.GoForwardOnWebView(InstanceId);
        }

        public void Dispose()
        {
            WebViewNative.DestroyWebView(InstanceId);
            WebViewSystem.ViewDestroyed(InstanceId);
        }

        #region Callbacks

        [MonoPInvokeCallback(typeof(WebViewNative.NewWindowRequestedDelegate))]
        private static void OnNewWindowRequested(IntPtr instanceId, string uri)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ => webView.NewWindowRequested?.Invoke(uri), null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.WindowCloseRequestedDelegate))]
        private static void OnWindowCloseRequested(IntPtr instanceId)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ => webView.WindowCloseRequested?.Invoke(), null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.OnReadyDelegate))]
        private static void OnReadyCallback(IntPtr instanceId)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ =>
                {
                    webView.whenReadyTCS.SetResult(true);
                }, null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.TextureAvailableDelegate))]
        private static void OnTextureAvailable(IntPtr instanceId, IntPtr texturePtr)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ =>
                {
                    webView.SetTargetTexture(texturePtr);
                }, null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.PostMessageToUnityDelegate))]
        private static void OnPostMessageCallback(IntPtr instanceId, string message)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ => webView.MessageReceived?.Invoke(message), null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.UrlChangedDelegate))]
        private static void OnUrlChangedCallback(IntPtr instanceId, string url)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ =>
                {
                    webView.Page = new Uri(url);
                    webView.Navigated?.Invoke(url);
                }, null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.NavigationBlockedDelegate))]
        private static void OnNavigationBlocked(IntPtr instanceId, string blockedUri)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            webView?.UnityGameThreadContext.Post(_ => webView.NavigationBlocked?.Invoke(blockedUri), null);
        }

        public bool CanGoBack { get; private set; } = false;
        public bool CanGoForward { get; private set; } = false;

        [MonoPInvokeCallback(typeof(WebViewNative.NavigationButtonStatusUpdatedDelegate))]
        private static void OnGoBackStatusUpdated(IntPtr instanceId, bool value)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ =>
                {
                    webView.CanGoBack = value;
                    webView.CanGoBackUpdated?.Invoke(webView.CanGoBack);
                }, null);
            }
        }

        [MonoPInvokeCallback(typeof(WebViewNative.NavigationButtonStatusUpdatedDelegate))]
        private static void OnGoForwardUpdated(IntPtr instanceId, bool value)
        {
            BaseWebView webView = WebViewSystem.FindWebView(instanceId) as BaseWebView;
            if (webView != null)
            {
                webView.UnityGameThreadContext.Post(_ =>
                {
                    webView.CanGoForward = value;
                    webView.CanGoForwardUpdated?.Invoke(webView.CanGoForward);
                }, null);
            }
        }
        #endregion

        public Task OnceCreated => whenReadyTCS.Task;

        public void SetContentScale(double scale)
        {
            WebViewNative.SetWebViewContentScale(InstanceId, scale);
        }
    }
}

