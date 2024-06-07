// --------------------------------------------------------------------------------------------------------------------
// <copyright company="Microsoft">
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------
#if WINDOWS_UWP || DOTNETWINRT_PRESENT
#define SPATIALCOORDINATESYSTEM_API_PRESENT
#endif

#if WINDOWS_UWP
using global::Windows.Perception.Spatial;
#elif DOTNETWINRT_PRESENT
using Microsoft.Windows.Perception.Spatial;
#endif

using Microsoft.Azure.ObjectAnchors.SpatialGraph;
using Microsoft.Azure.ObjectAnchors.Unity;
using System;
using System.Threading.Tasks;
using UnityEngine;

using PlacementInitializer = System.Func<Microsoft.Azure.ObjectAnchors.SpatialGraph.SpatialGraphCoordinateSystem, Microsoft.Azure.ObjectAnchors.SpatialGraph.SpatialGraphPlacement>;

public class MultiAnchorPlacement : MonoBehaviour
{
    PlacementInitializer _pendingPlacementInitializer;
    PlacementInitializer _currentPlacementInitializer;
    bool _isLocated = true; // Initialize to true so children are deactivated on first update if the placement has no pose yet
#if SPATIALCOORDINATESYSTEM_API_PRESENT
    SpatialCoordinateSystem _worldOrigin;
    SpatialCoordinateSystem _referenceCoordinateSystem;
#endif
    SpatialGraphPlacement _placement;

    /// <summary>
    /// Indicates whether the placement is currently located in the world coordinate system. Tracking loss may cause a placement to become temporarily not located.
    /// </summary>
    public bool IsLocated => this._isLocated;

    /// <summary>
    /// Fired when <see cref="IsLocated"/> changes. By default, all children are automatically deactivated when <see cref="IsLocated"/> is false and vice versa.
    /// This behavior can be overridden by subscribing to this event, in which case tracking loss affordances for children are the responsibility of the subscriber.
    /// </summary>
    public event EventHandler IsLocatedChanged;

    /// <summary>
    /// Sets the definition of the placement to use the provided creation function.
    /// </summary>
    public async Task SetPlacementDefinitionAsync(PlacementInitializer tryCreatePlacementInCoordinateSystem)
    {
        await this.InitializePlacementAsync(tryCreatePlacementInCoordinateSystem);
    }

    public async void SetPlacementDefinition(PlacementInitializer tryCreatePlacementInCoordinateSystem) => await this.SetPlacementDefinitionAsync(tryCreatePlacementInCoordinateSystem);

    /// <summary>
    /// Sets the definition of the placement to the provided list of control points.
    /// </summary>
    /// <param name="controlPoints"></param>
    public async Task SetPlacementDefinitionAsync(SpatialGraphPlacementControlPoint[] controlPoints)
    {
        await this.InitializePlacementAsync(referenceCoordinateSystem => SpatialGraphPlacement.TryCreate(referenceCoordinateSystem, controlPoints));
    }

    public async void SetPlacementDefinition(SpatialGraphPlacementControlPoint[] controlPoints) => await this.SetPlacementDefinitionAsync(controlPoints);

    /// <summary>
    /// Attempts to persist the control points which define this placement under the given name. Returns the control points themselves which
    /// must be stored separately by the caller. These may be reloaded by the caller in a future session and used to set the definition of
    /// a new placement by calling <see cref="SetPlacementDefinition(SpatialGraphPlacementControlPoint[])"/>.
    /// </summary>
    /// <param name="name">A name that disambiguates this set of control points from others which may reference the same nodes.</param>
    /// <returns></returns>
    public async Task<SpatialGraphPlacementControlPoint[]> TryPersistAsync(string name)
    {
        // Cache current placement in local reference before awaiting async task
        SpatialGraphPlacement placement = this._placement;
        if (placement == null)
        {
            return null;
        }

        if (!await placement.TryPersistStaticNodesAsync(name)) { return null; }

        return placement.GetControlPoints();
    }

    /// <summary>
    /// Removes persisted static nodes associated with the set of control points provided that were previously persisted with the given name.
    /// </summary>
    /// <param name="name">The name previously used to persist the control points.</param>
    /// <param name="controlPoints">The control points which were previously persisted.</param>
    public static async Task UnpersistAsync(string name)
    {
        await SpatialGraphPlacement.UnpersistStaticNodesAsync(name);
    }

    /// <summary>
    /// Called each frame by Unity to update the transform of the associated GameObject to optimize for the current <see cref="View"/> transform.
    /// If the transform cannot be determined this frame, all children are deactivated until the transform is known again.
    /// </summary>
    private void Update()
    {
        Transform view = Camera.main.transform;
        Pose? placementInWorld = this.TryComputeOriginForView(new Pose(view.position, view.rotation));
        if (placementInWorld.HasValue)
        {
            this.transform.SetPositionAndRotation(placementInWorld.Value.position, placementInWorld.Value.rotation);
        }

        // Activate/deactivate children when transform is known/unknown, or else invoke app-provided delegate to handle these states.
        // (Note: don't deactivate this GameObject itself; otherwise, Update() would not get called and the transform would never be regained.)
        if (placementInWorld.HasValue != this._isLocated)
        {
            this._isLocated = placementInWorld.HasValue;
            if (this.IsLocatedChanged != null)
            {
                this.IsLocatedChanged(this, EventArgs.Empty);
            }
            else
            {
                foreach (Transform child in this.transform)
                {
                    child.gameObject.SetActive(this._isLocated);
                }
            }
        }
    }

    /// <summary>
    /// Computes the pose of the placement's origin in the world coordinate system, optimized for the given view. Returns null if the pose cannot be determined.
    /// </summary>
    public Pose? TryComputeOriginForView(Pose viewInWorld)
    {
        bool needToReinitializePlacement = false;

#if SPATIALCOORDINATESYSTEM_API_PRESENT
        // Reset placement if world origin changes
        if (this._worldOrigin != ObjectAnchorsWorldManager.WorldOrigin)
        {
            needToReinitializePlacement = true;
        }

        if (!needToReinitializePlacement)
        {
            System.Numerics.Matrix4x4? worldToReference = this._worldOrigin?.TryGetTransformTo(this._referenceCoordinateSystem);
            if (worldToReference.HasValue)
            {
                // Located the placement; compute view-dependent pose for its origin
                return this._placement.ComputeOriginForView(viewInWorld.ToSpatialGraph(), worldToReference.Value).ToUnity();
            }
            else
            {
                // Reset placement if world origin cannot be located
                needToReinitializePlacement = true;
            }
        }
#endif

        if (needToReinitializePlacement && this._currentPlacementInitializer != null)
        {
            // Reinitialize placement
            PlacementInitializer placementInitializer = this._currentPlacementInitializer;
            this._currentPlacementInitializer = null;
            this.SetPlacementDefinition(placementInitializer);
        }

        return null;
    }

    private async Task InitializePlacementAsync(PlacementInitializer placementInitializer)
    {
#if SPATIALCOORDINATESYSTEM_API_PRESENT
        this._pendingPlacementInitializer = placementInitializer;

        // World origin must be accessed from main thread
        SpatialCoordinateSystem worldOrigin = ObjectAnchorsWorldManager.WorldOrigin;
        SpatialCoordinateSystem referenceCoordinateSystem = null;
        SpatialGraphPlacement placement = await Task.Run(() =>
        {
            // Initialize placement on a background thread to avoid potentially dropping frames
            SpatialGraphCoordinateSystem? referenceCoordinateSystemInSpatialGraph = worldOrigin?.TryToSpatialGraph(out referenceCoordinateSystem);
            if (!referenceCoordinateSystemInSpatialGraph.HasValue) { return null; }
            return placementInitializer(referenceCoordinateSystemInSpatialGraph.Value);
        });

        // Always update "current" placement initializer even if we failed to initialize so that we can re-attempt on failure.
        this._currentPlacementInitializer = placementInitializer;

        // Apply the result, unless there isn't one, or someone else started another initialization while ours was running (last writer wins)
        if (placement != null && this._pendingPlacementInitializer == placementInitializer)
        {
            this._pendingPlacementInitializer = null;

            this._worldOrigin = worldOrigin;
            this._referenceCoordinateSystem = referenceCoordinateSystem;
            this._placement = placement;
        }
#else
        await Task.CompletedTask;
#endif
    }
}

public class MultiAnchorObjectPlacement : MultiAnchorPlacement
{
    /// <summary>
    /// The node to use as the parent of all model-space content. Will be enabled/disabled depending on whether the placement is currently valid.
    /// </summary>
    public GameObject ModelSpaceContent;

    /// <summary>
    /// The surface coverage of the latest placement update.
    /// </summary>
    [HideInInspector]
    public float SurfaceCoverage = 0;

    /// <summary>
    /// Updates the placement of the model to reflect the current state of the given detected instance.
    /// </summary>
    public async Task UpdatePlacementAsync(IObjectAnchorsTrackingResult trackingResult)
    {
        await this.SetPlacementDefinitionAsync(referenceCoordinateSystem => trackingResult.TryCreatePlacement(referenceCoordinateSystem));
        this.SurfaceCoverage = trackingResult.SurfaceCoverage;
    }

    public async void UpdatePlacement(IObjectAnchorsTrackingResult trackingResult) => await this.UpdatePlacementAsync(trackingResult);
}
