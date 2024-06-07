// <copyright file="EditorWebView.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>

namespace Microsoft.MixedReality.WebView
{
#if UNITY_EDITOR
    using System;
    using System.Collections.Generic;
    using UnityEditor;
    using UnityEngine;

    public class EditorWebView : EditorWindow
    {
        IWebView webView = null;
        int windowWidth = 800;
        int windowHeight = 640;
        int scrollSpeed = -12;
        readonly Queue<Action<IWebView>> webViewReadyCallbacks = new();

        void Awake()
        {
            wantsMouseMove = true;
            titleContent = new GUIContent("Test WebView");
            minSize = new Vector2(windowWidth, windowHeight);
        }

        // TODO (rogerdis): Consolidate this logic with WebView.cs
        /// <summary>
        /// Takes a callback that is invoked either immediately if the IWebView instance has already been created, or once the IWebView instance is created.
        /// </summary>
        /// <param name="callback">The callback, which can be a lambda or any function taking an IWebView instance as the only argument.</param>
        public void GetWebViewWhenReady(Action<IWebView> callback)
        {
            if (this.webView is null)
            {
                webViewReadyCallbacks.Enqueue(callback);
            }
            else
            {
                callback(this.webView);
            }
        }

        void Update()
        {
            if (webView == null)
            {
                webView = WebViewSystem.CreateWebView(null, windowWidth, windowHeight, "Microsoft.MixedReality.WebView.EditorWebView:UnityGUIViewWndClass");
                webView.OnceCreated.ContinueWith((task) =>
                {
                    while (webViewReadyCallbacks.Count > 0)
                    {
                        webViewReadyCallbacks.Dequeue()(webView);
                    }
                });
            }
            else
            {
                Repaint();
            }
        }

        void OnDestroy()
        {
            webView?.Dispose();
        }

        void OnGUI()
        {
            if (webView == null)
            {
                return;
            }

            var rootVisualWidth = (int) this.rootVisualElement.layout.width;
            var rootVisualHeight = (int) this.rootVisualElement.layout.height;
            if (rootVisualWidth != windowWidth || rootVisualHeight != windowHeight)
            {
                windowWidth = rootVisualWidth;
                windowHeight = rootVisualHeight;
                webView.Resize(windowWidth, windowHeight);
            }

            if (webView.Texture != null)
            {
                Graphics.DrawTexture(new Rect(0, 0, windowWidth, windowHeight), webView.Texture);
            }

            var currentEvent = Event.current;
            if (currentEvent.isMouse || currentEvent.isScrollWheel)
            {
                WebViewMouseEventData wmed = new WebViewMouseEventData
                {
                    X = (int)currentEvent.mousePosition.x,
                    Y = (int)currentEvent.mousePosition.y,
                    TertiaryAxisDeviceType = WebViewMouseEventData.TertiaryAxisDevice.PointingDevice,
                    WheelY = (currentEvent.delta.y * scrollSpeed),
                    Button = WebViewMouseEventData.MouseButton.ButtonNone,
                    Device = WebViewMouseEventData.DeviceType.Mouse,
                };

                switch (currentEvent.type)
                {
                    case EventType.MouseDown:
                        wmed.Type = WebViewMouseEventData.EventType.MouseDown;
                        break;
                    case EventType.MouseUp:
                        wmed.Type = WebViewMouseEventData.EventType.MouseUp;
                        break;
                    case EventType.MouseMove:
                        wmed.Type = WebViewMouseEventData.EventType.MouseMove;
                        break;
                    case EventType.ScrollWheel:
                        wmed.Type = WebViewMouseEventData.EventType.MouseWheel;
                        break;
                }

                if (currentEvent.button == 0)
                {
                    wmed.Button = WebViewMouseEventData.MouseButton.ButtonLeft;
                }
                else if (currentEvent.button == 1)
                {
                    wmed.Button = WebViewMouseEventData.MouseButton.ButtonRight;
                }

                (webView as IWithMouseEvents)?.MouseEvent(wmed);
            }
        }
    }
#else
    public sealed class EditorWebView {}
#endif
}