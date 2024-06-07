//---------------------------------------------------------------------------
//
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//
//--------------------------------------------------------------------------
using UnityEngine;

namespace Microsoft.MixedReality.PowerThermalNotificationSample
{
    // The NotificationComponent class is used to attach to a game object
    // to provide it event based updates on the PowerThermalMitigationLevel and
    // thermal score of a given peripheral.  It relies on properties and methods
    // from it's parent class MitigationScoreUpdater
    public class NotificationComponent : MitigationScoreUpdater
    {
        [SerializeField]
        private bool isSuppressed = false;

        override protected void Start()
        {
            base.Start();
            NotificationManager.AddNotification(this, MonitoredPeripheral);
            NotificationManager.ChangeSuppression(MonitoredPeripheral, isSuppressed);
        }
    }
}