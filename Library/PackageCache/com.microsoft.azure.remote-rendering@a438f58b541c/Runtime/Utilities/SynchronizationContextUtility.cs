using System;
using System.Threading;
using System.Threading.Tasks;

using UnityEngine;


namespace Microsoft.Azure.RemoteRendering.Unity
{
    /// <summary>
    /// Contains some helpers around the <see cref="SynchronizationContext"/> for dealing with task scheduling in Unity.
    /// </summary>
    public static class SynchronizationContextUtility
    {
        private static SynchronizationContext unitySynchronizationContext = null;
        private static TaskScheduler unityTaskScheduler = null;

#if UNITY_EDITOR
        [UnityEditor.InitializeOnLoadMethod]
#endif
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void OnLoad()
        {
            unitySynchronizationContext = SynchronizationContext.Current;
            unityTaskScheduler = TaskScheduler.FromCurrentSynchronizationContext();
        }

        /// <summary>
        /// Ensures <paramref name="action"/> is run on the Unity main thread.
        /// If this is called from the Unity main thread, <paramref name="action"/> is invoked immediately.
        /// If this is called from any other thread, <paramref name="action"/> is scheduled on the Unity <see cref="SynchronizationContext"/>.
        /// </summary>
        /// <param name="action"></param>
        public static void EnsureUnityMainThread(Action action)
        {
            if (SynchronizationContext.Current == unitySynchronizationContext)
            {
                action();
            }
            else
            {
                unitySynchronizationContext.Post(_ => { action(); }, null);
            }
        }

        /// <summary>
        /// Use this to run an async API without a <see cref="SynchronizationContext"/>, this will let the async to complete and continue on it's native background thread.
        /// This allows you to block the Unity main thread and wait for the API to complete. However, use this with caution and only on APIs that are known to complete
        /// on a background thread.
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public static Task RunWithoutSynchronizationContext(Func<Task> action)
        {
            SynchronizationContext previousContext = SynchronizationContext.Current;
            SynchronizationContext.SetSynchronizationContext(null);
            try
            {
                return action();
            }
            catch
            {
                throw;
            }
            finally
            {
                SynchronizationContext.SetSynchronizationContext(previousContext);
            }
        }

        /// <summary>
        /// Creates a continuation that executes on the Unity main thread when the target <see cref="Task"/> completes.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="task"></param>
        /// <param name="continuation"></param>
        /// <returns></returns>
        public static Task ContinueOnUnityMainThread<T>(this Task<T> task, Action<Task<T>> continuation)
        {
            return task.ContinueWith(continuation, unityTaskScheduler);
        }
    }
}
