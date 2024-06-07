// <copyright file="WebView.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>

namespace Microsoft.MixedReality.WebView
{
    using System;
    using System.Threading.Tasks;
    using UnityEngine;
    using UnityEngine.Scripting;
#if UNITY_EDITOR
    using UnityEditor;
#endif

    /// <summary>
    /// A high-level script that facilitates adding WebView's to your scene.
    /// Use either the built-in WebView prefab or your own quad to position and
    /// render your WebView's contents with the help of WebView.cs.
    /// </summary>
    [Preserve]
    [AddComponentMenu("WebView")]
    // Necessary because WebViewSystem attaches the WebView texture to
    // the GameObject's renderer's material.
    [RequireComponent(typeof(Renderer))]
    public class WebView : MonoBehaviour
    {
        [Tooltip("Scale the brightness. A value of 1 matches what you see in your browser.")]
        [SerializeField]
        [OnRangeChangedCall(0f, 2f, "OnBrightnessScaleChanged")]
        private float brightnessScale = 1.0f;

        public enum ImageQuality
        {
            Low,
            Good,
            Great,
            Excellent
        }
        [Tooltip("Configure image quality. Higher quality looks better but can decrease performance.")]
        [SerializeField]
        [OnChangedCall("OnImageQualityChanged")]
        private ImageQuality imageQuality = ImageQuality.Low;

        private float TextureScale
        {
            get
            {
                if (webView is IWithContentScale)
                {
                    switch (this.imageQuality)
                    {
                        case ImageQuality.Low:
                            return 1;
                        case ImageQuality.Good:
                            return 3;
                        case ImageQuality.Great:
                            return 6;
                        case ImageQuality.Excellent:
                            return 9;
                    }
                }
                return 1;
            }
        }

        [Tooltip("The URL that is first loaded when the WebView initializes in the scene.")]
        [SerializeField]
        [OnChangedCall("OnAbsoluteUrlChanged")]
        private string currentURL = "https://www.microsoft.com";

        /// <summary>
        /// This flag signifies if the current url field is unsynced with the IWebView instance.
        /// </summary>
        private bool currentURLDirty = false;

        private IWebView webView = null;

        private Exception creationException = null;

        /// <summary>
        /// Invoked once the WebView plugin instance is initialized and has begun loading the currentUrl.
        /// </summary>
        public event EventHandler<IWebView> WebViewReady;

        private readonly TaskCompletionSource<IWebView> webViewTCS = new TaskCompletionSource<IWebView>();

        /// <summary>
        /// An awaitable Task that returns the WebView's IWebView instance after it has been initialized.
        /// </summary>
        public Task<IWebView> WebViewTask
        {
            get { return webViewTCS.Task; }
        }

        /// <summary>
        /// Invoked once the WebView has finished navigating to a URL.
        /// The event arguments are a tuple of the WebView instance and the URL to which it navigated.
        /// </summary>
        public event EventHandler<(IWebView, string)> WebViewNavigated;

        public event EventHandler<Exception> WebViewCreationFailed;

        public Exception WebViewCreationException { get { return creationException; } }

        /// <summary>
        /// Gets the URL currently loaded by the WebView.
        /// </summary>
        public Uri CurrentURL
        {
            get { return this.webView?.Page; }
        }

        public void Awake()
        {
            this.CreateAndConfigureWebView();
            this.UpdateBrightness();
        }

        public void PostMessage(string message)
        {
            if (this.webView is IWithPostMessage withPostMessage)
            {
                withPostMessage.PostMessage(message);
            }
        }

        public void NavigateToString(string htmlContent)
        {
            if (this.webView is IWithHTMLInjection withHTMLInjection)
            {
                withHTMLInjection.LoadHTMLContent(htmlContent);
            }
        }

        /// <summary>
        /// Loads an absolute URL, such as about:blank or https://www.microsoft.com
        /// The URL string will be validated to make sure it's well-formed and absolute.
        /// If the internal WebView instance is not yet initialized, the load will be enqueued for when the instance is ready.
        /// Calls to this method will not overwrite currentUrl, they will load in sequence.
        /// </summary>
        /// <param name="url">The URL to load.</param>
        public void Load(string url)
        {
            if (string.IsNullOrWhiteSpace(url))
            {
                Debug.Log($"Current url is empty. Ignoring load request.");
            }
            else
            {
                this.Load(new Uri(url));
            }
        }

        /// <summary>
        /// Uri overload for Load(string url).
        /// </summary>
        /// <param name="uri">The URI to load.</param>
        /// <exception cref="ArgumentException">If the URI is invalid.</exception>
        public void Load(Uri uri)
        {
            if (uri is null)
            {
                throw new ArgumentNullException(nameof(uri));
            }

            var absolutePath = uri.AbsoluteUri;
            if (!uri.IsWellFormedOriginalString() || !uri.IsAbsoluteUri)
            {
                throw new ArgumentException($"\"{absolutePath}\" is invalid: it must be a well-formed, absolute Uri.");
            }

            if (this.webView is null)
            {
                // Enqueue a load on the webview.
                this.WebViewReady += new EventHandler<IWebView>((object s, IWebView wv) =>
                {
                    wv.Load(uri);
                });
            }
            else
            {
                this.webView.Load(uri);
            }
        }

        public IWebView GetWebView()
        {
            return this.webView;
        }

        /// <summary>
        /// Takes a callback that is invoked either immediately if the IWebView instance has already been created, or once the IWebView instance is created.
        /// </summary>
        /// <param name="callback">The callback, which can be a lambda or any function taking an IWebView instance as the only argument.</param>
        public void GetWebViewWhenReady(Action<IWebView> callback)
        {
            if (this.webView is null)
            {
                this.WebViewReady += (object s, IWebView wv) => callback(wv);
            }
            else
            {
                callback(this.webView);
            }
        }

        public void GetWebViewCreationFailed(Action<Exception> callback)
        {
            if (this.webView is null && this.creationException is null)
            {
                this.WebViewCreationFailed += (object s, Exception e) => callback(e);
            }
            else if (this.creationException is not null)
            {
                callback(this.creationException);
            }
        }

        private void OnAbsoluteUrlChanged()
        {
            this.currentURLDirty = !this.CurrentURL?.AbsoluteUri.Equals(this.currentURL) ?? false;
        }

        private void OnImageQualityChanged()
        {
            if (webView is IWithContentScale)
            {
                MatchTextureSizeToQuad();
            }
        }

        private void OnBrightnessScaleChanged()
        {
            this.UpdateBrightness();
        }

        private void UpdateBrightness()
        {
            GetComponent<Renderer>().material.SetFloat("_Brightness", brightnessScale);
        }

        private void CreateAndConfigureWebView()
        {
            string parentHWNDHint = null;
#if UNITY_EDITOR_WIN
            parentHWNDHint = "UnityEditor.GameView:UnityGUIViewWndClass";
#endif
            var newWebView = WebViewSystem.CreateWebView(this.gameObject, 1280, 720, parentHWNDHint);
            if (newWebView is null)
            {
                creationException = new Exception("Failed to create webview");
                this.WebViewCreationFailed?.Invoke(this, creationException);
                return;
            }

            newWebView.Navigated += path =>
            {
                this.currentURL = path;
                this.currentURLDirty = false;
                this.WebViewNavigated?.Invoke(this, (newWebView, path));
            };

            newWebView.OnceCreated.ContinueWith((task) =>
            {
                // Disposed before the new webview could be created.
                if (this == null)
                {
                    newWebView.Dispose();
                }
                else if (task.IsFaulted)
                {
                    creationException = task.Exception;
                    this.WebViewCreationFailed?.Invoke(this, creationException);
                }
                else
                {
                    this.webView = newWebView;
                    MatchTextureSizeToQuad();
                    this.WebViewReady?.Invoke(this, this.webView);
                    this.webViewTCS.SetResult(this.webView);
                }
            }, TaskScheduler.FromCurrentSynchronizationContext());
            this.Load(this.currentURL);
        }

        private void MatchTextureSizeToQuad()
        {
            // Adjust width and height
            Vector3 lossyScale = transform.lossyScale;
            float scaleHorizontal = lossyScale.x;
            // Sometimes quads are aligned with their vertical component on y, and some on z.
            float scaleVertical = Math.Max(lossyScale.y, lossyScale.z);
            int smallDimension = (int)(720 * TextureScale);

            // For D3D11, texture dimensions must be between 1 and 16384, inclusively.
            // This is a reasonable cap for all platforms.
            int maxSize = 16384;

            int width, height;
            bool landscape = scaleHorizontal > scaleVertical;
            var aspectRatio = landscape ? scaleHorizontal / scaleVertical : scaleVertical / scaleHorizontal;
            int bigDimension = (int)(smallDimension * aspectRatio);

            // Adjust if the larger dimension is too big.
            if (bigDimension > maxSize)
            {
                bigDimension = maxSize;
                smallDimension = (int)(bigDimension / aspectRatio);
            }

            width = landscape ? bigDimension : smallDimension;
            height = landscape ? smallDimension : bigDimension;

            (webView as IWithContentScale)?.SetContentScale(TextureScale);
            webView.Resize(width, height);
        }

        private void OnDestroy()
        {
            this.webView?.Dispose();
        }

#if UNITY_EDITOR
        [CustomEditor(typeof(WebView))]
        private class WebViewInspector : Editor
        {
            public override void OnInspectorGUI()
            {
                var webViewComponent = (WebView)this.target;
                DrawDefaultInspector();
                if (webViewComponent.currentURLDirty)
                {
                    if (GUILayout.Button("Navigate"))
                    {
                        webViewComponent.Load(webViewComponent.currentURL);
                    }

                    if (GUILayout.Button("Cancel"))
                    {
                        webViewComponent.currentURL = webViewComponent.CurrentURL.AbsoluteUri;
                        webViewComponent.currentURLDirty = false;
                    }
                }
            }
        }
#endif
    }
}