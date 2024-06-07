// --------------------------------------------------------------------------------------------------------------------
// <copyright company="Microsoft">
//   Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

namespace Microsoft.Azure.RemoteRendering
{
    internal class PromiseBase : IDisposable
    {
        private bool disposed = false;

#if DEBUG
        private System.Diagnostics.StackTrace stackTrace = new System.Diagnostics.StackTrace(true);
#endif

        private readonly CancellationTokenRegistration cancellationTokenRegistration;

        private readonly PromiseCreateOptions createOptions;

        public readonly PromiseSafeHandle Handle;

        protected PromiseBase(PromiseCreateOptions createOptions, CancellationToken cancellationToken)
        {
            PromiseSafeHandle promiseSafeHandle = null;
            int result = -1;
            try
            {
                result = NativeLibrary.ApiGenPromiseCreate(ref createOptions, out promiseSafeHandle);
            }
            catch (Exception ex)
            {
                Debug.Assert(false, $"NativeLibrary.ApiGenPromiseCreate threw exception {ex.Message}");
            }

            if (result != 0)
            {
                throw new InvalidOperationException();
            }

            this.Handle = promiseSafeHandle;
            this.createOptions = createOptions;
            this.cancellationTokenRegistration = cancellationToken.Register(() => NativeLibrary.ApiGenPromiseCancel(promiseSafeHandle));
        }

        ~PromiseBase()
        {
#if DEBUG
            Debug.Assert(false, $"A {nameof(Promise)} should never be finalized. Ensure all instances are disposed. Allocation at: {this.stackTrace}");
#else
            Debug.Assert(false, $"A {nameof(Promise)} should never be finalized. Ensure all instances are disposed.");
#endif
            this.Dispose(disposing: false);
        }

        /// <summary>
        /// An implementation of <see cref="IDisposable.Dispose"/> that cleans up the resources owned by this object.
        /// </summary>
        public void Dispose()
        {
            this.Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        /// <summary>
        /// An implementation of Dispose using the Dispose pattern.
        /// </summary>
        /// <remarks>
        /// Order is important here - the <see cref="CancellationTokenRegistration"/> instance must be disposed before the <see cref="PromiseSafeHandle"/>.
        /// </remarks>
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                ((IDisposable)this.cancellationTokenRegistration).Dispose();
                ((IDisposable)this.Handle).Dispose();
                this.disposed = true;
            }
        }
    }

    internal class Promise<T> : PromiseBase
    {
        private readonly TaskCompletionSource<T> taskCompletionSource;

        public Task<T> Task => this.taskCompletionSource.Task;

        public Promise(TaskCompletionSource<T> taskCompletionSource, PromiseCreateOptions createOptions, CancellationToken cancellationToken)
            : base(createOptions, cancellationToken)
        {
            this.taskCompletionSource = taskCompletionSource;
        }
    }

    internal class Promise : PromiseBase
    {
        private readonly TaskCompletionSource<bool> taskCompletionSource;

        public Task Task => this.taskCompletionSource.Task;

        public Promise(TaskCompletionSource<bool> taskCompletionSource, PromiseCreateOptions createOptions, CancellationToken cancellationToken)
            : base(createOptions, cancellationToken)
        {
            this.taskCompletionSource = taskCompletionSource;
        }

        public static Promise Create(CancellationToken cancellationToken)
        {
            return Promise.Create(null, cancellationToken);
        }

        public static Promise Create(Action<float> progress, CancellationToken cancellationToken)
        {
            TaskCompletionSource<bool> taskCompletionSource = new TaskCompletionSource<bool>();
            PromiseCreateOptions createOptions = BuildOptions(_ => true, taskCompletionSource, SynchronizationContext.Current, progress);

            return new Promise(taskCompletionSource, createOptions, cancellationToken);
        }

        public static Promise<TResult> Create<TResult>(Func<PackedValue, TResult> factory, CancellationToken cancellationToken)
        {
            return Promise.Create<TResult>(factory, null, cancellationToken);
        }

        public static Promise<TResult> Create<TResult>(Func<PackedValue, TResult> factory, Action<float> progress, CancellationToken cancellationToken)
        {
            TaskCompletionSource<TResult> taskCompletionSource = new TaskCompletionSource<TResult>();
            PromiseCreateOptions createOptions = BuildOptions(factory, taskCompletionSource, SynchronizationContext.Current, progress);

            return new Promise<TResult>(taskCompletionSource, createOptions, cancellationToken);
        }

        /// <summary>
        /// Generates an <see cref="Exception"/> according to the given <paramref name="statusCode"/>.
        ///
        /// <see cref="NativeLibraryHelpers.CheckStatus(ulong, status)"/> directly throws, while this one just returns.
        /// This method is just an intermediate solution and needs to go away when ApiGen has better exception handling.
        /// </summary>
        private static Exception CreateException(status statusCode)
        {
            // This isn't an ideal solution, though the alternative would be a manually maintained
            // mapping list. So better use the auto-generated "NativeLibraryHelpers.CheckStatus" methods.
            try
            {
                // Use the "CheckStatus(ulong handle, status value)" overload variant,
                // that is the only one producing a nice message containing the error code string.
                NativeLibraryHelpers.CheckStatus(0, statusCode);
            }
            catch (Exception e)
            {
                return e;
            }

            // We expect "CheckStatus" to generate an exception. If not it is an unknow error.
            return new Exception("Unknown reason");
        }

        internal delegate void apigen_promise_on_complete2(IntPtr context, ref PackedValue value);
        internal delegate void apigen_promise_on_error2(IntPtr context, status result);

        internal struct InternalCallbacks
        {
            public apigen_promise_on_complete2 completeCallback;
            public apigen_promise_on_error2 errorCallback;
            public Action<float> progressCallback;
        }
#if UNITY_EDITOR || UNITY_STANDALONE || UNITY_WSA || UNITY_ANDROID || UNITY_WEBGL
        [AOT.MonoPInvokeCallback(typeof(apigen_promise_on_complete))]
#endif
        static void InternalComplete(IntPtr context, ref PackedValue value)
        {
            try
            {
                if (s_cookieTracker.TryRemove(context, out InternalCallbacks entry))
                {
                    entry.completeCallback(context, ref value);
                }
            }
            catch
            {

            }
        }
#if UNITY_EDITOR || UNITY_STANDALONE || UNITY_WSA || UNITY_ANDROID || UNITY_WEBGL
        [AOT.MonoPInvokeCallback(typeof(apigen_promise_on_error))]
#endif
        static void InternalError(IntPtr context, status result)
        {
            try
            {
                if (s_cookieTracker.TryRemove(context, out InternalCallbacks entry))
                {
                    entry.errorCallback(context, result);
                }
            }
            catch
            {

            }
        }
#if UNITY_EDITOR || UNITY_STANDALONE || UNITY_WSA || UNITY_ANDROID || UNITY_WEBGL
        [AOT.MonoPInvokeCallback(typeof(apigen_promise_on_progress))]
#endif
        static void InternalProgress(IntPtr context, float progress)
        {
            try
            {
                if (s_cookieTracker.TryGetValue(context, out InternalCallbacks entry))
                {
                    entry.progressCallback(progress);
                }
            }
            catch
            {

            }
        }

        static ConcurrentDictionary<IntPtr, InternalCallbacks> s_cookieTracker = new ConcurrentDictionary<IntPtr, InternalCallbacks>();
        static Int64 s_cookieID = 0;

        private static PromiseCreateOptions BuildOptions<TResult>(Func<PackedValue, TResult> factory, TaskCompletionSource<TResult> taskCompletionSource, SynchronizationContext synchronizationContext, Action<float> progress)
        {
            IntPtr cookie = (IntPtr)(Interlocked.Increment(ref s_cookieID));

            void tryRunOnOriginalThreadContext(Action action)
            {
                // Try to schedule the continuation on the original thread context.
                if (synchronizationContext != null)
                {
                    synchronizationContext.Post(_ => action(), null);
                }
                else
                {
                    action();
                }
            }

            InternalCallbacks internalCB = new InternalCallbacks()
            {
                completeCallback = (IntPtr context, ref PackedValue value) =>
                {
                    TResult result = factory(value);

                    // Use the TrySetResult variant instead of SetResult to also cover the case that the task has been disposed already
                    tryRunOnOriginalThreadContext(() => taskCompletionSource.TrySetResult(result));
                },

                errorCallback = (IntPtr context, status result) =>
                {
                    if (result == status.Cancelled)
                    {
                        // Use the TrySetCanceled variant instead of SetCanceled to also cover the case that the task has been disposed already
                        tryRunOnOriginalThreadContext(() => taskCompletionSource.TrySetCanceled());
                        
                    }
                    else
                    {
                        // Use the TrySetException variant instead of SetException to also cover the case that the task has been disposed already
                        tryRunOnOriginalThreadContext(() => taskCompletionSource.TrySetException(CreateException(result)));
                    }
                },

                progressCallback = progress
            };

            // This should be impossible, so we throw a general fail
            // if a key is already present in the dictionary.
            if  (!s_cookieTracker.TryAdd(cookie, internalCB))
            {
                throw CreateException(status.Fail);
            }

            return new PromiseCreateOptions()
            {
                context = cookie,
                onComplete = InternalComplete,
                onError = InternalError,
                onProgress = ((progress != null) ? InternalProgress : (apigen_promise_on_progress)null)
            };
        }
    }
}
