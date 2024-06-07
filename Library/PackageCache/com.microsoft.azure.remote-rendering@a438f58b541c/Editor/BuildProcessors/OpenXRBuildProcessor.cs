#if OPENXR_PLUGIN_AVAILABLE

using System;
using System.IO;
using System.Xml.Linq;
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEditor.XR.OpenXR.Features;

namespace Microsoft.Azure.RemoteRendering.Unity.Editor
{
    /// <summary>
    /// The build processor for <see cref="AzureRemoteRenderingFeature"/>.
    /// Adds additional required files to the build.
    /// </summary>
    /// <remarks>
    /// For Azure Remote Rendering we need to add the HolographicAppRemoting API layer json to the build.
    /// </remarks>
    public class OpenXRBuildProcessor : OpenXRFeatureBuildHooks
    {
        private static readonly string HolographicAppRemotingDllFilename = "Microsoft.Holographic.HybridRemoting.dll";
        private static readonly string HolographicAppRemotingJsonFilename = "XrApiLayer_msft_holographic_remoting.json";
        private static readonly string HolographicAppRemotingJsonGuid = "e24cbcfdc6c32884092566ddac9dba0a";


        /// <inheritdoc/>
        public override int callbackOrder => 1;

        /// <inheritdoc/>
        public override Type featureType => typeof(AzureRemoteRenderingFeature);


        protected override void OnPreprocessBuildExt(BuildReport report) {}
        protected override void OnPostprocessBuildExt(BuildReport report)
        {
            switch(report.summary.platform)
            {
                case BuildTarget.WSAPlayer:
                    this.CopyJsonFile(report.summary.outputPath);
                    this.AddJsonFileToUnityDataVcxItems(report.summary.outputPath);
                    break;
            }
        }
        protected override void OnPostGenerateGradleAndroidProjectExt(string path) {}


        /// <summary>
        /// Copies the <see cref="HolographicAppRemotingJsonFilename"/> to <paramref name="buildDirectory"/>.
        /// </summary>
        /// <param name="buildDirectory"></param>
        private void CopyJsonFile(string buildDirectory)
        {
            string targetPath = Path.Combine(buildDirectory, PlayerSettings.productName, HolographicAppRemotingJsonFilename);
            File.Copy(Path.GetFullPath(AssetDatabase.GUIDToAssetPath(HolographicAppRemotingJsonGuid)), targetPath, true);
        }
        /// <summary>
        /// Modifies the UWP "UnityData.vcxitems" to include the <see cref="HolographicAppRemotingJsonFilename"/> in the buid.
        /// </summary>
        /// <param name="buildDirectory"></param>
        /// <remarks>
        /// Searches through the "Unity Data.vcxitems" XML entries for the HolographicAppRemoting DLL node.
        /// Then makes a copy of the node and changes it to include the json file. Making a copy will preserve
        /// the "Condition" attribute, so the json file is only included in the build when the DLL file exists.
        /// </remarks>
        private void AddJsonFileToUnityDataVcxItems(string buildDirectory)
        {
            string unityDataFilePath = Path.Combine(buildDirectory, PlayerSettings.productName, "Unity Data.vcxitems");

            XElement root = XElement.Load(unityDataFilePath);
            foreach (XElement itemGroup in root.Elements(root.GetDefaultNamespace() + "ItemGroup"))
            {
                foreach (XElement item in itemGroup.Elements(root.GetDefaultNamespace() + "None"))
                {
                    XAttribute includeAttribute = item.Attribute("Include");
                    if (includeAttribute != null && includeAttribute.Value.Contains(HolographicAppRemotingDllFilename))
                    {
                        XElement newElement = new XElement(item);
                        newElement.Attribute("Include").Value = newElement.Attribute("Include").Value.Replace(HolographicAppRemotingDllFilename, HolographicAppRemotingJsonFilename);
                        itemGroup.Add(newElement);
                        root.Save(unityDataFilePath);
                        return;
                    }
                }
            }
        }
    }
}

#endif
