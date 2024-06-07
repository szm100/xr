// <copyright file="WebViewSystem.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>

namespace Microsoft.MixedReality.WebView
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using UnityEngine;

    public class WebViewSystem : MonoBehaviour
    {
        /// <summary>
        /// A delegate you can register to WebViewSystem to create custom implementations of IWebView.<br />
        /// Register your delegate with <see cref="RegisterCreateWebViewDelegate">WebViewSystem.RegisterCreateWebViewDelegate</see><br />
        /// The delegates registered to WebViewSystem are called in order of registration.<br />
        /// If you return null, WebViewSystem will fall through to the next registered delegate.<br />
        /// If all registered delegates return null, WebViewSystem will attempt to provide a default implementation.<br />
        /// </summary>
        /// <param name="systemSingleton">
        /// The GameObject to which system-wide singleton scripts should be attached.
        /// This GameObject is destroyed when all active IWebView instances are destroyed, 
        /// and recreated when new IWebView instances are created.
        /// </param>
        /// <param name="webview">The GameObject to which the IWebView implementation will be bound.</param>
        /// <param name="width">The width (in pixels) of the requested IWebView.</param>
        /// <param name="height">The height (in pixels) of the requested IWebView.</param>
        /// <returns>The custom IWebView implementation, or null as a fallthrough case.</returns>
        public delegate IWebView CreateWebViewDelegate(GameObject systemSingleton, GameObject webView, int width, int height);
        private static readonly List<CreateWebViewDelegate> createWebViewDelegates = new List<CreateWebViewDelegate>();

        /// <summary>
        /// A delegate you can register to WebViewSystem to add components to any GameObject hosting an IWebView.<br />
        /// Register your delegate with <see cref="RegisterComponentWebViewDelegate">WebViewSystem.RegisterComponentWebViewDelegate</see>.<br />
        /// The delegates registered to WebViewSystem are called in order of registration, after the <see cref="CreateWebViewDelegate">CreateWebViewDelegates</see> run.<br />
        /// </summary>
        /// <param name="systemSingleton">
        /// The GameObject to which system-wide singleton scripts should be attached.
        /// This GameObject is destroyed when all active IWebView instances are destroyed, 
        /// and recreated when new IWebView instances are created.
        /// </param>
        /// <param name="webview">The GameObject that holds the WebView component.</param>
        public delegate void ComponentWebViewDelegate(GameObject systemSingleton, GameObject webView);
        private static readonly List<ComponentWebViewDelegate> componentWebViewDelegates = new List<ComponentWebViewDelegate>();

        internal static Thread AppThread { get; private set; }
        private static readonly Dictionary<IntPtr, IWebView> viewMap = new Dictionary<IntPtr, IWebView>();

        private static GameObject singleton;

        private static void RegisterUniqueDelegate<T>(List<T> list, T del) 
        {
            if (del is null)
            {
                throw new ArgumentNullException();
            }

            if (!list.Contains(del))
            {
                list.Add(del);
            }
            else
            {
                throw new ArgumentException("Delegate is already registered to WebViewSystem!");
            }
        }

        public static void UnregisterUniqueDelegate<T>(List<T> list, T del)
        {
            if (del is null)
            {
                throw new ArgumentNullException();
            }

            if (list.Contains(del))
            {
                list.Remove(del);
            }
            else
            {
                throw new ArgumentException("Delegate is not registered to WebViewSystem!");
            }
        }

        /// <summary>
        /// Registers a <see cref="ComponentWebViewDelegate">ComponentWebViewDelegate</see> for adding plugin components to WebViews,
        /// so that it will be called by <see cref="CreateWebView">WebViewSystem.CreateWebView</see>.
        /// </summary>
        /// <param name="del">The delegate that will be called in the order of its registration (FIFO).</param>
        /// <exception cref="ArgumentException">If the delegate is already registered.</exception>
        /// <exception cref="ArgumentNullException">If the delegate is null.</exception>
        public static void RegisterCreateWebViewDelegate(CreateWebViewDelegate del)
        {
            RegisterUniqueDelegate(createWebViewDelegates, del);
        }

        /// <summary>
        /// Unregisters a <see cref="CreateWebViewDelegate">CreateWebViewDelegate</see> for creating custom WebViews,
        /// so that it will no longer get called by <see cref="CreateWebView">WebViewSystem.CreateWebView</see>.
        /// </summary>
        /// <param name="del">The delegate to unregister from the list.</param>
        /// <exception cref="ArgumentException">If the delegate is already registered.</exception>
        /// <exception cref="ArgumentNullException">If the delegate is null.</exception>
        public static void UnregisterCreateWebViewDelegate(CreateWebViewDelegate del)
        {
            UnregisterUniqueDelegate(createWebViewDelegates, del);
        }

        /// <summary>
        /// Registers a <see cref="CreateWebViewDelegate">CreateWebViewDelegate</see> for creating custom WebViews,
        /// so that it will be called by <see cref="CreateWebView">WebViewSystem.CreateWebView</see>.
        /// </summary>
        /// <param name="del">The delegate to unregister from the list.</param>
        /// <exception cref="ArgumentException">If the delegate is already registered.</exception>
        /// <exception cref="ArgumentNullException">If the delegate is null.</exception>
        public static void RegisterComponentWebViewDelegate(ComponentWebViewDelegate del)
        {
            RegisterUniqueDelegate(componentWebViewDelegates, del);
        }

        /// <summary>
        /// Unregisters a <see cref="ComponentWebViewDelegate">ComponentWebViewDelegate</see> for adding plugin components to WebViews,
        /// so that it will no longer get called by <see cref="CreateWebView">WebViewSystem.CreateWebView</see>.
        /// </summary>
        /// <param name="del">The delegate to unregister from the list.</param>
        /// <exception cref="ArgumentException">If the delegate is already registered.</exception>
        /// <exception cref="ArgumentNullException">If the delegate is null.</exception>
        public static void UnregisterComponentWebViewDelegate(ComponentWebViewDelegate del)
        {
            UnregisterUniqueDelegate(componentWebViewDelegates, del);
        }

        internal static IWebView CreateWebView(GameObject gameObject, int width, int height, string parentHWNDHint)
        {
            if (singleton == null && gameObject != null)
            {
                singleton = new GameObject("WebViewSystem");
                singleton.AddComponent<WebViewSystem>();
            }

            IWebView webView = null;
            // Go through all the delegates in order of registration (FIFO).
            foreach (var del in createWebViewDelegates)
            {
                webView = del(singleton, gameObject, width, height);
                if (webView != null)
                {
                    break;
                }
            }
            // If none of the delegates were capable of producing an IWebView, fallback to default.
            webView ??= CreateWebViewDefault(gameObject, width, height, parentHWNDHint);

            if (webView == null)
            {
                throw new Exception("Could not create an instance of IWebView! Perhaps an implementation is missing?");
            }

            // Run the component plugin delegates.
            foreach (var del in componentWebViewDelegates)
            {
                del(singleton, gameObject);
            }

            return webView;
        }


        private static IWebView CreateWebViewDefault(GameObject gameObject, int width, int height, string parentHWNDHint)
        {
#if UNITY_EDITOR_WIN || UNITY_STANDALONE_WIN || UNITY_WSA
            WindowsWebView windowsWebView = new WindowsWebView(gameObject, width, height, parentHWNDHint);
            viewMap.Add(windowsWebView.InstanceId, windowsWebView);
            return windowsWebView;
#elif UNITY_ANDROID
            AndroidWebView androidWebView = new AndroidWebView(gameObject, width, height);
            viewMap.Add(androidWebView.InstanceId, androidWebView);
            return androidWebView;
#else
            return null;
#endif
        }

        internal static void ViewDestroyed(IntPtr instanceId)
        {
            viewMap.Remove(instanceId);
            if (viewMap.Count() == 0)
            {
                DestroySingleton();
            }
        }

        internal static IWebView FindWebView(IntPtr instanceId)
        {
            return viewMap.TryGetValue(instanceId, out var view) ? view : null;
        }

        private void Awake()
        {
            AppThread = Thread.CurrentThread;
        }

        private IEnumerator Start()
        {
            yield return StartCoroutine("CallPluginAtEndOfFrames");
        }

        private void OnDestroy()
        {
            viewMap.Clear();
            DestroySingleton();
        }

        private static void DestroySingleton()
        {
            if (singleton != null) {
                Destroy(singleton);
                singleton = null;
            }
        }

        private IEnumerator CallPluginAtEndOfFrames()
        {
            while (true)
            {
                // Wait until all frame rendering is done
                yield return new WaitForEndOfFrame();
                WebViewSystem.RenderFrame();
            }
        }

        public static void RenderFrame()
        {
            // Issue a plugin event with arbitrary integer identifier.
            // The plugin can distinguish between different
            // things it needs to do based on this ID.
            // For our plugin, it does not matter which ID we pass here.
            GL.IssuePluginEvent(WebViewNative.GetRenderEventFunc(), 1);
        }
    }
}