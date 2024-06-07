// <copyright file="WebViewMouseEventData.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>
// Originally written in the EDT/MeshBrowser project by paarnese

namespace Microsoft.MixedReality.WebView
{
    public class WebViewMouseEventData
    {
        public enum TertiaryAxisDevice
        {
            None = -1,
            PointingDevice = 0,
            Dpad
        }

        public enum DeviceType
        {
            Mouse = 1,
            // Pointer or ray-based controller
            Pointer = 2,
        }

        public enum EventType
        {
            MouseMove = 0,
            MouseDown = 1,
            MouseUp = 2,
            MouseWheel = 3,
        }

        public enum MouseButton
        {
            ButtonNone = -1,
            ButtonLeft = 0,
            ButtonMiddle = 1,
            ButtonRight = 2,
        }

        public enum WheelBehaviorHint
        {
            RelativeAndButtonDown = 0,
            Absolute = 1
        }

        public MouseButton Button { get; set; }

        public WebViewEventModifiersState Modifiers { get; set; }

        public WebViewEventMouseModifiersState MouseModifiers { get; set; }

        public EventType Type { get; set; }

        public DeviceType Device { get; set; }

        public float WheelX { get; set; }

        public float WheelY { get; set; }

        public int X { get; set; }

        public int Y { get; set; }

        public WheelBehaviorHint WheelHint { get; set; } = WheelBehaviorHint.RelativeAndButtonDown;

        public TertiaryAxisDevice TertiaryAxisDeviceType { get; set; }
    }

    public class WebViewEventMouseModifiersState
    {
        public bool IsLeftButtonDown { get; set; }

        public bool IsMiddleButtonDown { get; set; }

        public bool IsRightButtonDown { get; set; }
    }
}