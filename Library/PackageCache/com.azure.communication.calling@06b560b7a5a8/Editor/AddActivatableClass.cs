// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

#if UNITY_EDITOR
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;
using System;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace Azure.Communication.Calling.UnityClient
{
    /// <summary>
    /// Adds ASA activatable classes to the appx manifest during build so that they can be found at runtime.
    /// </summary>
    internal class AddActivatableClasses
    {
        [PostProcessBuild(1000)]
        public static void OnPostprocessBuild(BuildTarget target, string pathToBuiltProject)
        {
            if (target != BuildTarget.WSAPlayer)
            {
                return;
            }

            // Find the appxmanifest, assume the one we want is the first one
            string[] manifests = Directory.GetFiles(
                pathToBuiltProject,
                "Package.appxmanifest",
                SearchOption.AllDirectories);

            if (manifests != null && manifests.Length > 0)
            {
                var manifest = manifests[0];
                var dllPath = "RtmMvrUap.dll";

                XInProcessServer inProcessServer = new XInProcessServer();
                inProcessServer.Open(manifest, dllPath);
                inProcessServer.AddActivableClass("VideoN.VideoSchemeHandler", ThreadingModel.both);
                inProcessServer.Close(manifest);
            }
        }

        private enum ThreadingModel
        {
            both,
            STA,
            MTA
        }

        /// <summary>
        /// Sample output
        ///
        /// <Extension Category="windows.activatableClass.inProcessServer">
        ///   <InProcessServer>
        ///     <Path>RtmMvrUap.dll</Path>
        ///     <ActivatableClass ActivatableClassId="VideoN.VideoSchemeHandler" ThreadingModel="both" />
        ///   </InProcessServer>
        /// </Extension>
        /// </summary>
        private class XInProcessServer
        {
            private string _dllPath = null;
            private XElement _root = null;
            private XElement _inProcessServerNode = null;
            private XNamespace _defaultNamespace = null;

            public XInProcessServer()
            {
            }

            /// <summary>
            /// Open a manifest file, and start inserting an in process server.
            /// </summary>
            /// <param name="manifestFile">The manifest file to open.</param>
            /// <param name="dllPath">The DLL path of the in process server.</param>
            public void Open(string manifestFile, string dllPath)
            {
                if (_root != null)
                {
                    return;
                }

                try
                {
                    _root = XElement.Load(manifestFile);
                }
                catch (Exception ex)
                {
                    Debug.LogError($"Failed to load manifest file ({manifestFile}). Exception: {ex}");
                }

                if (_root == null)
                {
                    return;
                }

                _dllPath = dllPath;
                _defaultNamespace = _root.GetDefaultNamespace();

                // Find or create "in proc" node of _dllName
                _inProcessServerNode = FindOrCreateInProcessServerNode(FindOrCreateExtensionsNode());
            }

            /// <summary>
            /// Add an activable class to the opened manifest file.
            /// </summary>
            /// <param name="classId">The class id to insert.</param>
            /// <param name="threadingModel">The threading model.</param>
            public void AddActivableClass(string classId, ThreadingModel threadingModel)
            {
                if (_root == null)
                {
                    Debug.LogError("Manifest file not opened.");
                    return;
                }

                AddActivableClass(classId, threadingModel.ToString());
            }

            /// <summary>
            /// Close the current manifest file, and save the changes to the given file path
            /// </summary>
            /// <param name="destinationFile">The file path to save manifest files changes to.</param>
            public void Close(string destinationFile)
            {
                if (_root == null)
                {
                    return;
                }

                try
                {
                    _root.Save(destinationFile);
                }
                catch (Exception ex)
                {
                    Debug.LogError($"Failed to save manifest file ({destinationFile}). Exception: {ex}");
                }

                _root = null;
                _inProcessServerNode = null;
                _dllPath = null;
            }

            private XElement FindOrCreateExtensionsNode()
            {
                var extensionsTag = "Extensions";

                var extensionsNode = _root.Element(_defaultNamespace + extensionsTag);
                if (extensionsNode == null)
                {
                    extensionsNode = new XElement(_defaultNamespace + extensionsTag);
                    _root.Add(extensionsNode);
                }

                return extensionsNode;
            }

            private XElement FindOrCreateInProcessServerNode(XElement extensionsNode)
            {
                var extensionTag = "Extension";
                var categoryAttribute = "Category";
                var categoryAttributeValue = "windows.activatableClass.inProcessServer";
                var inProcessServerTag = "InProcessServer";
                var pathTag = "Path";

                var extensionNodes = extensionsNode.Elements(_defaultNamespace + extensionTag).Where(
                    el => (string)el?.Attribute(categoryAttribute) == categoryAttributeValue);

                var extensionNode = extensionNodes?.FirstOrDefault(
                    el0 => el0?.Elements(_defaultNamespace + inProcessServerTag).FirstOrDefault(
                        el1 => el1?.Elements(_defaultNamespace + pathTag).FirstOrDefault(
                            el2 => el2?.Value == _dllPath) != null) != null);

                var inProcessServerNode = extensionNode?.Element(_defaultNamespace + inProcessServerTag);

                if (inProcessServerNode == null)
                {
                    extensionNode = new XElement(_defaultNamespace + extensionTag);
                    extensionNode.Add(new XAttribute(categoryAttribute, categoryAttributeValue));

                    inProcessServerNode = new XElement(_defaultNamespace + inProcessServerTag);

                    var pathNode = new XElement(_defaultNamespace + pathTag);
                    pathNode.Value = _dllPath;

                    inProcessServerNode.Add(pathNode);
                    extensionNode.Add(inProcessServerNode);
                    extensionsNode.Add(extensionNode);
                }

                return inProcessServerNode;
            }

            private void AddActivableClass(string classId, string threadingModel)
            {
                var activatableClassTag = "ActivatableClass";
                var activatableClassIdAttributeName = "ActivatableClassId";
                var threadingModelAttributeName = "ThreadingModel";

                var activableClassNode = _inProcessServerNode.Descendants(_defaultNamespace + activatableClassTag).FirstOrDefault(
                    el => (string)el?.Attribute(activatableClassIdAttributeName) == classId);

                if (activableClassNode == null)
                {
                    activableClassNode = new XElement(_defaultNamespace + activatableClassTag);
                    activableClassNode.Add(new XAttribute(activatableClassIdAttributeName, classId));
                    _inProcessServerNode.Add(activableClassNode);
                }

                var threadingModelAttribute = activableClassNode.Attribute(threadingModelAttributeName);

                if (threadingModelAttribute == null)
                {
                    threadingModelAttribute = new XAttribute(threadingModelAttributeName, threadingModel);
                    activableClassNode.Add(threadingModelAttribute);
                }
                else
                {
                    threadingModelAttribute.Value = threadingModel;
                }
            }
        }
    }
}
#endif