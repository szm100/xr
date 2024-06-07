# Azure Communication Calling

This Unity package uses the [ACS calling SDKs](https://docs.microsoft.com/en-us/azure/communication-services/concepts/sdk-options) for Android, Javascript and Windows by ACS to provide access in Unity to ACS calls and Teams meetings.

## How to install this package

You may add this package through the [Unity Package Manager](https://docs.unity3d.com/Manual/upm-ui.html)

## WebGL

Currently the ACSWebpack is not built when building this project locally, nor is it included in any Unity project output that references the package. You will need to script or manually copy the ACSWebpack.jspre from the package (Plugins/Web/ACSWEbpack.jspre) to the output build directory and update your index.html to load it in the head section.

Example from ACSCallingTestApp:

```html
<head>
    <script type="text/javascript" src="TemplateData/ACSWebpack.jspre"></script>
</head>
```

For running ACSCallingTestApp application locally, place the `ACSWebpack.jspre` in `Assets\WebGLTemplates\MeshBrowser\TemplateData` before building.
