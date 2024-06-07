using System;
using System.Collections.Generic;
using System.Threading;

namespace Microsoft.Azure.RemoteRendering
{
    public partial class Entity
    {
        private static readonly ThreadLocal<List<ComponentBase>> ComponentListCache = new ThreadLocal<List<ComponentBase>>(() => new List<ComponentBase>());
        private static readonly ThreadLocal<List<List<Entity>>> ChildrenListCache = new ThreadLocal<List<List<Entity>>>(() => new List<List<Entity>>());
        private static readonly ThreadLocal<bool> ChildrenListCacheLocked = new ThreadLocal<bool>(() => false);

        /// <summary>
        ///  Result code used by the <see cref="VisitEntityDelegate"/> to signal if the visitor should continue to traverse the scenegraph or not.
        /// </summary>
        public enum VisitorResult
        {
            /// Continue traversing the scenegraph.
            ContinueVisit,

            /// Stop traversing the scenegraph and exit the call to VisitEntity.
            ExitVisit
        }

        /// <summary>
        /// Delegate used to visit an entity hierarchy inclusive of its children.
        /// </summary>
        /// <param name="entity">The current entity being visited.</param>
        /// <returns>Code to either continue traversing the scenegraph or to exit the call to Visit.</returns>
        public delegate VisitorResult VisitEntityDelegate(Entity entity);

        /// <summary>
        /// Delegate used to search an entity hierarchy for an entity inclusive of its children.
        /// </summary>
        /// <param name="entity">The current entity in the hierarchy being queried.</param>
        /// <returns>True if the entity has been found, otherwise false.</returns>
        public delegate bool EntitySearchDelegate(Entity entity);

        /// <summary>
        /// Find a component of a type on this <see cref="Entity"/>.
        /// </summary>
        /// <returns>The component if found, otherwise <c>null</c></returns>
        public T FindComponentOfType<T>() where T : ComponentBase
        {
            Type type = typeof(T);
            ObjectType objectType = ObjectType.Invalid;

            // Dictionary look up with types is quite slow, because "Type" is a reference type.
            // Manual conditional chaining is much faster.
            if (type == typeof(MeshComponent))
            {
                objectType = ObjectType.MeshComponent;
            }
            else if (type == typeof(HierarchicalStateOverrideComponent))
            {
                objectType = ObjectType.HierarchicalStateOverrideComponent;
            }
            else if (type == typeof(CutPlaneComponent))
            {
                objectType = ObjectType.CutPlaneComponent;
            }
            else if (type == typeof(PointLightComponent))
            {
                objectType = ObjectType.PointLightComponent;
            }
            else if (type == typeof(SpotLightComponent))
            {
                objectType = ObjectType.SpotLightComponent;
            }
            else if (type == typeof(DirectionalLightComponent))
            {
                objectType = ObjectType.DirectionalLightComponent;
            }

            return FindComponentOfType(objectType) as T;
        }

        /// <summary>
        /// Visit this entity and any children in a depth first traversal until every node is visited
        /// or until the visitor returns <see cref="VisitorResult.ExitVisit"/>.
        /// </summary>
        /// <remarks>
        /// You must not call <see cref="VisitEntity"/> or <see cref="FindFirstEntity"/> from within the given <paramref name="visitor"/> delegate.
        /// </remarks>
        public void VisitEntity(VisitEntityDelegate visitor)
        {
            if (ChildrenListCacheLocked.Value)
            {
                throw new InvalidOperationException($"{nameof(VisitEntity)} doesn't support nested calls!");
            }

            try
            {
                ChildrenListCacheLocked.Value = true;
                VisitEntityImpl(visitor, ChildrenListCache.Value, 0);
            }
            finally
            {
                ChildrenListCacheLocked.Value = false;
            }
        }

        /// <summary>
        /// Find first entity in this entity's hierarchy (inclusive of itself) that fulfills <paramref name="pred"/>.
        /// Search is performed in a depth first order.
        /// </summary>
        /// <remarks>
        /// You must not call <see cref="VisitEntity"/> or <see cref="FindFirstEntity"/> from within the given <paramref name="pred"/> delegate.
        /// </remarks>
        public Entity FindFirstEntity(EntitySearchDelegate pred)
        {
            Entity foundEntity = null;
            VisitEntityDelegate visitor = (entity) =>
            {
                if (pred(entity))
                {
                    foundEntity = entity;
                    return VisitorResult.ExitVisit;
                }
                else
                {
                    return VisitorResult.ContinueVisit;
                }
            };

            VisitEntity(visitor);
            return foundEntity;
        }

        private VisitorResult VisitEntityImpl(VisitEntityDelegate visitor, List<List<Entity>> childrenListCache, int childrenCacheIndex)
        {
            if (visitor(this) == VisitorResult.ExitVisit)
            {
                return VisitorResult.ExitVisit;
            }

            while (childrenCacheIndex >= childrenListCache.Count)
            {
                childrenListCache.Add(new List<Entity>());
            }

            List<Entity> children = childrenListCache[childrenCacheIndex];
            GetChildren(children);

            int count = children.Count;
            for (int i = 0; i < count; i++)
            {
                Entity child = children[i];
                if (child.VisitEntityImpl(visitor, childrenListCache, childrenCacheIndex + 1) == VisitorResult.ExitVisit)
                {
                    children.Clear();
                    return VisitorResult.ExitVisit;
                }
            }

            children.Clear();
            return VisitorResult.ContinueVisit;
        }
    }
}
