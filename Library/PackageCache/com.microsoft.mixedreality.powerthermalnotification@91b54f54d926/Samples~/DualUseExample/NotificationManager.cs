//---------------------------------------------------------------------------
//
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//
//--------------------------------------------------------------------------

using System.Collections.Generic;

namespace Microsoft.MixedReality.PowerThermalNotificationSample
{
    using Microsoft.MixedReality.PowerThermalNotification;
    

    //The NotificationManager is repsonsible for coordinating with the PowerThermalNotification
    //singleton instance to register events and dispatch those events to various other game 
    //components that have subscribed
    public class NotificationManager
    {
        private static readonly object listLock = new object();
        private static List<NotificationComponent> componentsList = new List<NotificationComponent>();
        private static PowerThermalNotification powerNotification = PowerThermalNotification.GetForCurrentProcess();
        private static bool firstRegistration = true;

        private const uint DEFAULT_SCORE = 100;
        private const PowerThermalMitigationLevel DEFAULT_MITIGATION_LEVEL = PowerThermalMitigationLevel.NoUserImpact;

        private static void MitigationNotificationHandler(object sender, PowerThermalEventArgs args)
        {
            lock (listLock)
            {
                //Go through the components and send them notifications
                foreach (NotificationComponent c in componentsList)
                {
                    //But do this on the app thread and don't block this here
                    UnityEngine.WSA.Application.InvokeOnAppThread(() =>
                    {
                        c.SetMitigationLevel(args.ImpactedPeripherals, args.MitigationLevel);
                    }, false);
                }
            }
        }

        private static void ScoreNotificationHandler(object sender, PowerThermalScoreArgs args)
        {
            lock (listLock)
            {
                //Go through the components and send them notifications
                foreach (NotificationComponent c in componentsList)
                {
                    UnityEngine.WSA.Application.InvokeOnAppThread(() =>
                    {
                        //But do this on the app thread and don't block this here
                        c.SetThermalScore(args.ImpactedPeripherals, args.ThermalScore);
                    }, false);
                }
            }
        }

        public static void ChangeSuppression(PowerThermalPeripheralFlags peripherals, bool suppress)
        {
            powerNotification.SuppressPlatformMitigation(peripherals, suppress);
        }
        public static void AddNotification(NotificationComponent component, PowerThermalPeripheralFlags peripheralsOfInterest)
        {
            if (firstRegistration)
            {
                powerNotification.PowerThermalMitigationLevelChanged += MitigationNotificationHandler;
                powerNotification.PowerThermalThermalScoreChanged += ScoreNotificationHandler;
                firstRegistration = false;
            }

            if (PowerThermalNotification.IsSupported(peripheralsOfInterest))
            {
                lock (listLock)
                {
                    //Set defaults before registering for notifications
                    component.SetMitigationLevel(peripheralsOfInterest, DEFAULT_MITIGATION_LEVEL);
                    component.SetThermalScore(peripheralsOfInterest, DEFAULT_SCORE);

                    if (!componentsList.Exists(x => x == component))
                    {
                        componentsList.Add(component);
                    }
                }

                powerNotification.PeripheralsOfInterest |= peripheralsOfInterest;   
            }
        }
    }
}