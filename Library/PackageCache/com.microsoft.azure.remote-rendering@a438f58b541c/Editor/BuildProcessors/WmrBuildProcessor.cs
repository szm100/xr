#if WMR_XR_PLUGIN_AVAILABLE || WMR_LEGACY_PLUGIN_AVAILABLE

using System.IO;
using System.Xml.Linq;

using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;


namespace Microsoft.Azure.RemoteRendering.Unity.Editor
{
    /// <summary>
    /// The build processor for Azure Remote Rendering when using the legacy Windows Mixed Reality plugin.
    /// </summary>
    /// <remarks>
    /// For Azure Remote Rendering we have to add an initializer hook to the output UWP project. This requires
    /// patching the "Main.cpp"/"App.xaml.cpp" file and adding the HolographicAppRemoting lib file to the project.
    /// </remarks>
    public class WmrBuildProcessor : IPostprocessBuildWithReport
    {
        private static readonly string WsaPluginsFolderGuid = "742505a4fe42fe443ad60d4bfcaaeda9";
        private static readonly string[] Platforms = new string[] { "ARM", "ARM64", "x64", "x86" };
        private static readonly string HolographicAppRemotingLibFilename = "Microsoft.Holographic.HybridRemoting.lib";
        private static readonly string HolographicAppRemotingDllFilename = "Microsoft.Holographic.HybridRemoting.dll";


        /// <inheritdoc/>
        public int callbackOrder => 1;

        /// <inheritdoc/>
        public void OnPostprocessBuild(BuildReport report)
        {
            switch (report.summary.platform)
            {
                case BuildTarget.WSAPlayer:
                    this.PatchMainCpp(report.summary.outputPath);
                    this.CopyLibFilesToBuildOutput(report.summary.outputPath);
                    this.AddLibCopyStep(report.summary.outputPath);
                    this.AddAdditionalLibDependencies(report.summary.outputPath);
                    break;
            }
        }


        /// <summary>
        /// Patches the "Main.cpp"/"App.xaml.cpp" to call "HolographicStreamerHybridPlayerInit".
        /// </summary>
        private void PatchMainCpp(string buildDirectory)
        {
            const string headerHook = "#include \"App.h\"";
            const string headerInclude = "#include \"StreamerHybridPlayer.h\"";
            const string initFunctionHook = "RoInitializeWrapper roInit;";
            const string initFunctionCall = "HolographicStreamerHybridPlayerInit();";

            string filePath = Path.Combine(buildDirectory, PlayerSettings.productName, "Main.cpp");
            if (!File.Exists(filePath))
            {
                filePath = Path.Combine(Path.GetDirectoryName(filePath), "App.xaml.cpp");
            }

            string fileContent = File.ReadAllText(filePath);
            bool fileChanged = false;

            if (!fileContent.Contains(headerInclude))
            {
                fileContent = fileContent.Replace(headerHook, $"{headerHook}\n{headerInclude}");
                fileChanged = true;
            }

            if (!fileContent.Contains(initFunctionCall))
            {
                fileContent = fileContent.Replace(initFunctionHook, $"{initFunctionHook}\n    {initFunctionCall}");
                fileChanged = true;
            }

            if (fileChanged)
            {
                File.WriteAllText(filePath, fileContent);
            }
        }
        /// <summary>
        /// Copies the HolographicAppRemoting libs to the output plugin folder.
        /// </summary>
        /// <param name="buildDirectory"></param>
        private void CopyLibFilesToBuildOutput(string buildDirectory)
        {
            string wsaPluginPath = Path.GetFullPath(AssetDatabase.GUIDToAssetPath(WsaPluginsFolderGuid));

            foreach (string platform in Platforms)
            {
                File.Copy(Path.Combine(wsaPluginPath, platform, HolographicAppRemotingLibFilename), Path.Combine(buildDirectory, PlayerSettings.productName, "Plugins", platform, HolographicAppRemotingLibFilename), true);
            }
        }
        /// <summary>
        /// Modifies "Unity Data.vcxitems" to automatically copy the
        /// corresponding platform lib to the build directory.
        /// </summary>
        /// <param name="buildDirectory"></param>
        private void AddLibCopyStep(string buildDirectory)
        {
            string unityDataFilePath = Path.Combine(buildDirectory, PlayerSettings.productName, "Unity Data.vcxitems");

            XElement root = XElement.Load(unityDataFilePath);
            foreach (XElement target in root.Elements(root.GetDefaultNamespace() + "Target"))
            {
                XAttribute nameAttribute = target.Attribute("Name");
                if (nameAttribute != null && (nameAttribute.Value == "BeforeResolveReferences"))
                {
                    foreach (XElement copyElement in target.Elements(root.GetDefaultNamespace() + "Copy"))
                    {
                        XAttribute sourceAttribute = copyElement.Attribute("SourceFiles");
                        if (sourceAttribute != null && sourceAttribute.Value.Contains(HolographicAppRemotingDllFilename))
                        {
                            XElement newElement = new XElement(copyElement);
                            newElement.Attribute("SourceFiles").Value = newElement.Attribute("SourceFiles").Value.Replace(HolographicAppRemotingDllFilename, HolographicAppRemotingLibFilename);
                            newElement.Attribute("DestinationFiles").Value = newElement.Attribute("DestinationFiles").Value.Replace(HolographicAppRemotingDllFilename, HolographicAppRemotingLibFilename);
                            newElement.Attribute("Condition").Value = newElement.Attribute("Condition").Value.Replace(HolographicAppRemotingDllFilename, HolographicAppRemotingLibFilename);
                            target.Add(newElement);

                            root.Save(unityDataFilePath);
                            return;
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Modifies the output UWP solution to link against the HolographicAppRemoting lib.
        /// </summary>
        /// <param name="buildDirectory"></param>
        private void AddAdditionalLibDependencies(string buildDirectory)
        {
            string vcxprojFilePath = Path.Combine(buildDirectory, PlayerSettings.productName, $"{PlayerSettings.productName}.vcxproj");

            XElement root = XElement.Load(vcxprojFilePath);
            foreach (XElement itemDefinitionGroup in root.Elements(root.GetDefaultNamespace() + "ItemDefinitionGroup"))
            {
                foreach (XElement link in itemDefinitionGroup.Elements(root.GetDefaultNamespace() + "Link"))
                {
                    foreach(XElement additionalDependencies in link.Elements(root.GetDefaultNamespace() + "AdditionalDependencies"))
                    {
                        if (!additionalDependencies.Value.Contains(HolographicAppRemotingLibFilename))
                        {
                            additionalDependencies.Value = $"{HolographicAppRemotingLibFilename};{additionalDependencies.Value}";
                            root.Save(vcxprojFilePath);
                        }

                        return;
                    }
                }
            }
        }
    }
}

#endif
