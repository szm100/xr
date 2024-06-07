// <copyright file="IWebView.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>

namespace Microsoft.MixedReality.WebView
{
    using System;
    using System.Net;
    using System.Threading.Tasks;
    using UnityEngine;

    public delegate void WebView_OnNavigated(string path);

    public delegate void WebView_OnCanGoForwardUpdated(bool value);

    public delegate void WebView_OnCanGoBackUpdated(bool value);

    public delegate void WebView_OnNewWindowRequested(string uri);

    public delegate void WebView_OnCloseRequested();

    public delegate void WebView_OnInputChanged(bool requested);

    public delegate void WebView_OnPostMessage(string message);

    public delegate void WebView_OnNavigationBlocked(string uri);

    public delegate void WebView_OnNavigationStarting(Int64 navigationId, string uri);

    public delegate void WebView_OnNavigationCompleted(Int64 navigationId, bool succeeded);

    public delegate void WebView_OnDocumentTitleChanged(string newTitle);

    public delegate void WebView_OnPermissionSettingFound(string origin, WebViewPermissionKind kind, WebViewPermissionState state, bool enumerationComplete);

    public delegate void WebView_OnPermissionRequested(string origin, bool userInitiated, WebViewPermissionKind kind, ref WebViewPermissionState state, ref bool handled);

    public enum WebViewRefreshRate
    {
        None = 0,
        Slow,
        Fast
    }

    public enum WebViewPermissionKind
    {
        Unknown = 0,
        Microphone = 1,
        Camera = 2,
        Geolocation = 3,
        Notifications = 4,
        OtherSensors = 5,
        ClipboardRead = 6,
        MultipleAutomaticDownloads = 7,
        FileReadWrite = 8,
        Autoplay = 9,
        LocalFonts = 10,
        MidiSystemExclusiveMessages = 11,
        WindowManagement = 12
    }

    public enum WebViewPermissionState
    {
        Default = 0,
        Allow = 1,
        Deny = 2
    }

    public interface IWebView
    {
        event WebView_OnNavigated Navigated;

        event WebView_OnNewWindowRequested NewWindowRequested;

        event WebView_OnCloseRequested WindowCloseRequested;

        GameObject GameObject { get; }

        Texture2D Texture { get; }

        int Width { get; set; }

        int Height { get; set; }

        Uri Page { get; }
        
        Task OnceCreated { get; }

        void Resize(int width, int height);

        void Load(Uri url);

        void Dispose();
    }

    public interface IWithInputEvents : IWebView
    {
    }

    public interface IWithMouseEvents : IWithInputEvents
    {
        void MouseEvent(WebViewMouseEventData mouseEvent);
    }

    public interface IWithPostMessage : IWebView
    {
        event WebView_OnPostMessage MessageReceived;

        void PostMessage(string message, bool isJSON = false);
    }

    public interface IWithBrowserHistory : IWebView
    {
        event WebView_OnCanGoForwardUpdated CanGoForwardUpdated;

        event WebView_OnCanGoBackUpdated CanGoBackUpdated;

        void GoBack();

        void GoForward();
    }

    public interface IWithHTMLInjection : IWebView
    {
        void LoadHTMLContent(string htmlContent);
    }

    public interface IWithVirtualHost: IWebView
    {
        void SetVirtualHostMapping(string hostName, string folderPath);
    }

    public interface IWithSystemFocusCapture: IWebView
    {
        void ReleaseFocus(); 
    }

    internal interface IWithContentScale : IWebView
    {
        void SetContentScale(double scale);
    }

    public interface IWithNavigationFiltering : IWebView
    {
        event WebView_OnNavigationBlocked NavigationBlocked;
    }

    public interface IWithExtendedEvents : IWebView
    {
        event WebView_OnNavigationStarting NavigationStarting;
        event WebView_OnNavigationCompleted NavigationCompleted;
        event WebView_OnDocumentTitleChanged DocumentTitleChanged;
    }

    public interface IWithPermissionSettings : IWebView
    {
        event WebView_OnPermissionRequested PermissionRequested;
        void GetNonDefaultPermissionSettings(WebView_OnPermissionSettingFound settingFoundCallback);
        void SetPermissionState(string origin, WebViewPermissionKind kind, WebViewPermissionState state);
    }
}