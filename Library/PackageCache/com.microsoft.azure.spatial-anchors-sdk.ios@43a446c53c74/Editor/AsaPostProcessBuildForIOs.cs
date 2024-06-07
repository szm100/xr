using UnityEditor;
using UnityEditor.Callbacks;
using System.IO;

#if UNITY_IOS

using UnityEditor.iOS.Xcode;
using UnityEditor.iOS.Xcode.Extensions;

#endif

public class AsaPostProcessBuildForIOs
{
    [PostProcessBuild(100)]
    public static void OnPostprocessBuild(BuildTarget target, string pathToBuiltProject)
    {
        if (target != BuildTarget.iOS)
        {
            return;
        }

#if UNITY_IOS
        //EmbedFrameworks
        string pathToPbxProjectFile = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromString(File.ReadAllText(pathToPbxProjectFile));

        string targetGuid = pbxProject.GetUnityMainTargetGuid();

        const string defaultLocationInProj = "com.microsoft.azure.spatial-anchors-sdk.ios/Plugins/iOS";

        // Embed the ASA framework
        const string asaFrameworkName = "AzureSpatialAnchors.framework";
        string asaFrameworkPath = Path.Combine(defaultLocationInProj, asaFrameworkName);
        string asaFileGuid = pbxProject.AddFile(asaFrameworkPath, "Frameworks/" + asaFrameworkPath, PBXSourceTree.Sdk);
        pbxProject.AddFileToEmbedFrameworks(targetGuid, asaFileGuid);

        // Embed the CoarseReloc framework
        const string coarseRelocFrameworkName = "CoarseReloc.framework";
        string coarseRelocFrameworkPath = Path.Combine(defaultLocationInProj, coarseRelocFrameworkName);
        string coarseRelocFileGuid = pbxProject.AddFile(coarseRelocFrameworkPath, "Frameworks/" + coarseRelocFrameworkPath, PBXSourceTree.Sdk);
        pbxProject.AddFileToEmbedFrameworks(targetGuid, coarseRelocFileGuid);

        pbxProject.SetBuildProperty(targetGuid, "LD_RUNPATH_SEARCH_PATHS", "$(inherited) @executable_path/Frameworks");
        pbxProject.WriteToFile(pathToPbxProjectFile);
        //EmbedFrameworks end
#endif
    }
}
