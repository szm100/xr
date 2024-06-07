//---------------------------------------------------------------------------
//
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//
//--------------------------------------------------------------------------

using UnityEngine;

namespace Microsoft.MixedReality.PowerThermalNotificationSample
{
    using Microsoft.MixedReality.PowerThermalNotification;

    //The PollingComponent is used to get PowerThermalMitigationLevel and thermal score
    //information without the use of events.  It relies on some properties and functions
    //from it's parent class MitigationScoreUpdater.
    public class PollingComponent : MitigationScoreUpdater
    {
        private float timeSinceLastPoll = 0;
        
        [SerializeField]
        private float UpdateInterval = 1.0f;
        
        private static PowerThermalNotification powerNotification = PowerThermalNotification.GetForCurrentProcess();

        override protected void Start()
        {
            base.Start();
            powerNotification.PeripheralsOfInterest |= MonitoredPeripheral;//Required to poll this peripheral
        }

        private void Update()
        {
            timeSinceLastPoll += Time.deltaTime;

            if (timeSinceLastPoll > UpdateInterval)
            {
                PowerThermalPeripheralState state = powerNotification.GetLatestPeripheralState(MonitoredPeripheral);
                SetThermalScore(MonitoredPeripheral, state.ThermalScore);
                SetMitigationLevel(MonitoredPeripheral, state.MitigationLevel);

                timeSinceLastPoll = 0;
            }
        }
    }
}