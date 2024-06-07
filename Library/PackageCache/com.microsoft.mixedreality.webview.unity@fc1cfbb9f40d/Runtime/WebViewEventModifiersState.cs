// <copyright file="WebViewEventModifiersState.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>
// Originally written in the EDT/MeshBrowser project by paarnese

namespace Microsoft.MixedReality.WebView
{
    public class WebViewEventModifiersState
    {
        private bool swigCMemOwn;

        public bool IsAltDown { get; set; }

        public bool IsCapsOn { get; set; }

        public bool IsCtrlDown { get; set; }

        public bool IsMetaDown { get; set; }

        public bool IsNumLockOn { get; set; }

        public bool IsShiftDown { get; set; }
    }
}
