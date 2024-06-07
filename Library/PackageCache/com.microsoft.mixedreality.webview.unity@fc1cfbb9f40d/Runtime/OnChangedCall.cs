// <copyright file="OnChangedCall.cs" company="Microsoft Corporation">
// Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>

namespace Microsoft.MixedReality.WebView
{
    using System.Linq;
    using UnityEngine;
    using UnityEditor;
    using System.Reflection;

    internal class OnChangedCallAttribute : PropertyAttribute
    {
        public readonly string methodName;
        public OnChangedCallAttribute(string methodNameNoArguments)
        {
            methodName = methodNameNoArguments;
        }
    }

    internal class OnRangeChangedCallAttribute : OnChangedCallAttribute
    {
        public readonly float min;
        public readonly float max;

        public OnRangeChangedCallAttribute(float min, float max, string methodNameNoArguments) : base(methodNameNoArguments)
        {
            this.min = min;
            this.max = max;
        }
    }

#if UNITY_EDITOR
    internal abstract class AbstractOnChangedCallAttributePropertyDrawer : PropertyDrawer
    {
        protected abstract void RenderField(Rect position, SerializedProperty property, GUIContent label);

        public override void OnGUI(Rect position, SerializedProperty property, GUIContent label)
        {
            EditorGUI.BeginChangeCheck();
            RenderField(position, property, label);
            if (EditorGUI.EndChangeCheck())
            {
                // Update the serialized field
                property.serializedObject.ApplyModifiedProperties();

                var targetMethodName = (attribute as OnChangedCallAttribute).methodName;
                var targetObject = property.serializedObject.targetObject;
                MethodInfo method = targetObject.GetType().GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic).Where((m) => m.Name == targetMethodName).First();
                if (method != null && method.GetParameters().Count() == 0)
                {
                    method.Invoke(targetObject, null);
                }
            }
        }
    }

    [CustomPropertyDrawer(typeof(OnChangedCallAttribute))]
    internal class OnChangedCallAttributePropertyDrawer : AbstractOnChangedCallAttributePropertyDrawer
    {
        protected override void RenderField(Rect position, SerializedProperty property, GUIContent label)
        {
            EditorGUI.PropertyField(position, property, label);
        }
    }

    [CustomPropertyDrawer(typeof(OnRangeChangedCallAttribute))]
    internal class OnRangeChangedCallAttributePropertyDrawer : AbstractOnChangedCallAttributePropertyDrawer
    {
        protected override void RenderField(Rect position, SerializedProperty property, GUIContent label)
        {
            var attribute = this.attribute as OnRangeChangedCallAttribute;
            if (property.propertyType == SerializedPropertyType.Float)
                EditorGUI.Slider(position, property, attribute.min, attribute.max, label);
            else if (property.propertyType == SerializedPropertyType.Integer)
                EditorGUI.IntSlider(position, property, (int)attribute.min, (int)attribute.max, label);
            else
                EditorGUI.LabelField(position, label.text, "Use OnRangeChangedCall with float or int.");
        }
    }
#endif
}