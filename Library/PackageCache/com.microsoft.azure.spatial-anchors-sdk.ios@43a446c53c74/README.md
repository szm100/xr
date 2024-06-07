# Unity iOS SDK for Azure Spatial Anchors

This guide will show you how to set up your Unity project to use the Unity iOS SDK for Azure Spatial Anchors.


## Configure the Spatial Anchors account information

1. Navigate to `Assets/AzureSpatialAnchors.SDK/Resources`.
2. Select **SpatialAnchorConfig**. This file will have been automatically generated, if it did not already exist.
3. Set `Spatial Anchors Account Id` to the value provided by the Azure portal.
4. Set `Spatial Anchors Account Key` to the value provided by the Azure portal.
5. Set `Spatial Anchors Account Domain` to the value provided by the Azure portal.

**NOTE:** The **SpatialAnchorConfig** file can be used in your own projects to share service credentials across scenes. When this file is used, you do not need to set these values on each **SpatialAnchorManager** in each scene. It's also possible to ignore this file in source control to avoid checking credentials into your repository.


## Export the Xcode project

1. Open **Build Settings** by selecting **File > Build Settings**.
2. Under **Scenes in Build**, ensure all the scenes have a check mark next to them.
3. Select **Build**. In the dialog box that opens, select the folder where you would like to export the Xcode project.
4. When the export is complete, a folder that contains the exported Xcode project will appear.

> [!NOTE]
> If you see a `library not found for -lPods-SampleObjC` error, you likely opened the `.xcodeproj` file instead of the
> `.xcworkspace`. Open the `.xcworkspace` and try again.


## Open the Xcode project

Now you can open `Unity-iPhone.xcodeproj` in Xcode. You can either launch Xcode and open the exported Unity-iPhone.xcodeproj project, or launch the project in Xcode by running the following command from the location you exported the project:

```bash
open ./Unity-iPhone.xcodeproj
```

Select the root **Unity-iPhone** node to view the project settings, and then select the **General** tab.

Under **Signing**, make sure **Automatically manage signing** is enabled. If it's not, enable it, and then select **Enable Automatic** in the dialog box that appears to reset the build settings.

Under **Deployment Info**, make sure the **Deployment Target** is set to `11.0`.


## Deploy the app to your iOS device

1. Connect the iOS device to the Mac, and set the **active scheme** to your iOS device.
2. Select **Build and then run the current scheme**.
3. When finished, stop the app by pressing **Stop** in Xcode.
