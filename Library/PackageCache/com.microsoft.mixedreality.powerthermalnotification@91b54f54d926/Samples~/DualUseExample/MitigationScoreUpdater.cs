//---------------------------------------------------------------------------
//
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//
//---------------------------------------------------------------------------

using UnityEngine;
using TMPro;
using Microsoft.MixedReality.PowerThermalNotification;
using System;

namespace Microsoft.MixedReality.PowerThermalNotificationSample
{
    // The MitigationScoreUpdater class contains helper methods used by
    // other classes for updating components based on thermal score
    // and PowerThermalMitigationLevel
    abstract public class MitigationScoreUpdater : MonoBehaviour
    {
        [Tooltip("Note that this could be multiple peripherals, just need to make sure to look at impactedPeripherals in the handler")]
        public PowerThermalPeripheralFlags MonitoredPeripheral = PowerThermalPeripheralFlags.Cpu;

        [SerializeField]
        public TextMeshPro mitigationScoreText;

        private Renderer mitigationCubeRenderer;
        private MaterialPropertyBlock mitigationCubePropertyBlock;

        public void SetMitigationLevel(PowerThermalMitigationLevel level)
        {
            Color newColor = Color.white;

            if (level == PowerThermalMitigationLevel.NoUserImpact)
            {
                newColor = Color.green;
            }
            else if (level == PowerThermalMitigationLevel.MinimumUserImpact)
            {
                newColor = Color.yellow;
            }
            else if (level == PowerThermalMitigationLevel.MediumUserImpact)
            {
                newColor = new Color32(255, 127, 37, 255);//Orange
            }
            else
            {
                newColor = Color.red;            
            }

            mitigationCubePropertyBlock.SetColor("_Color", newColor);
            mitigationCubeRenderer.SetPropertyBlock(mitigationCubePropertyBlock);
        }

        protected virtual void Start()
        {
            mitigationCubeRenderer = GetComponent<Renderer>();
            mitigationCubePropertyBlock = new MaterialPropertyBlock();
        }

        public void SetMitigationLevel(PowerThermalPeripheralFlags impactedPeripherals, PowerThermalMitigationLevel level)
        {
            if (impactedPeripherals.HasFlag(MonitoredPeripheral))
            {
                SetMitigationLevel(level);
            }
        }

        public void SetThermalScore(PowerThermalPeripheralFlags impactedPeripherals, uint thermalScore)
        {
            if (impactedPeripherals.HasFlag(MonitoredPeripheral))
            { 
                mitigationScoreText.SetText($"{MonitoredPeripheral} {Environment.NewLine} Score: {thermalScore}");
            }
        }
    }
}
