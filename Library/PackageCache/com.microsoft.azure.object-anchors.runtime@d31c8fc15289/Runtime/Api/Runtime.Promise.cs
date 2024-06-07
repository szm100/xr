//
// Copyright (c) Microsoft Corporation. All rights reserved.
// Microsoft.Azure.ObjectAnchors
// This file was auto-generated from AbiDefinition.cs.
//

// <auto-generated />

namespace Microsoft.Azure.ObjectAnchors
{
    using System;
    using System.Diagnostics;
    using System.Runtime.InteropServices;
    using System.Threading;
    using System.Threading.Tasks;

    internal abstract class PromiseBase : IDisposable
    {
        private bool disposed = false;

#if DEBUG
        private System.Diagnostics.StackTrace stackTrace = new System.Diagnostics.StackTrace(true);
#endif

        private readonly GCHandle gcHandle;

        private readonly CancellationTokenRegistration cancellationTokenRegistration;

        private readonly PromiseCreateOptions createOptions;

        private readonly Action<float> progressCallback;

        private protected readonly SynchronizationContext synchronizationContext;

        public readonly PromiseSafeHandle Handle;

        protected PromiseBase(Action<float> progressCallback, CancellationToken cancellationToken)
        {
            this.progressCallback = progressCallback;
            this.gcHandle = GCHandle.Alloc(this);
            try
            {
                this.createOptions = new PromiseCreateOptions()
                {
                    context = GCHandle.ToIntPtr(this.gcHandle),
                    onComplete = PromiseBase.OnCompleteDelegate,
                    onError = PromiseBase.OnErrorDelegate,
                    onProgress = PromiseBase.OnProgressDelegate,
                };

                int result = NativeLibrary.PromiseCreate(ref this.createOptions, out this.Handle);
                if (result != 0)
                {
                    throw new InvalidOperationException();
                }

                this.cancellationTokenRegistration = cancellationToken.Register(() => NativeLibrary.PromiseCancel(this.Handle));
                this.synchronizationContext = SynchronizationContext.Current;
            }
            catch
            {
                if (this.cancellationTokenRegistration != default)
                {
                    this.cancellationTokenRegistration.Dispose();
                }

                if (!this.Handle.IsInvalid)
                {
                    ((IDisposable)this.Handle).Dispose();
                }

                if (this.gcHandle.IsAllocated)
                {
                    this.gcHandle.Free();
                }

                throw;
            }
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
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                ((IDisposable)this.cancellationTokenRegistration).Dispose();
                ((IDisposable)this.Handle).Dispose();
                if (this.gcHandle.IsAllocated)
                {
                    this.gcHandle.Free();
                }
                this.disposed = true;
            }
        }

        protected void OnProgressHandler(float progress)
        {
            this.progressCallback?.Invoke(progress);
        }

        protected void OnErrorHandler(IntPtr handle, status result)
        {
            if (result == status.OperationCanceled)
            {
                OnCanceledHandler();
            }
            else
            {
                try 
                {
                    if (handle != IntPtr.Zero)
                    {
                        NativeLibraryHelpers.CheckStatus(handle, result);
                    }
                    else
                    {
                        NativeLibraryHelpers.CheckStatus(result);
                    }
                }
                catch(Exception e)
                {
                    OnExceptionHandler(e);
                    return;
                }

                throw new ArgumentException($"Invalid value passed as error - {result}", nameof(result));
            }
        }

        protected abstract void OnCanceledHandler();
        protected abstract void OnExceptionHandler(Exception exception);
        protected abstract void OnCompleteHandler(PackedValue value);


#if ENABLE_IL2CPP
        [AOT.MonoPInvokeCallback(typeof(aoa_promise_on_complete))]
#endif
        private static void OnCompleteThunk(IntPtr context, ref PackedValue value)
        {
            GCHandle handle = GCHandle.FromIntPtr(context);
            Debug.Assert(handle.IsAllocated, $"{nameof(OnCompleteThunk)} should not be called with an unallocated Promise GCHandle");

            PromiseBase promise = (PromiseBase)handle.Target;
            promise.OnCompleteHandler(value);
        }

#if ENABLE_IL2CPP
        [AOT.MonoPInvokeCallback(typeof(aoa_promise_on_error))]
#endif
         private static void OnErrorThunk(IntPtr context, IntPtr handle, status result)
         {
             GCHandle promiseHandle = GCHandle.FromIntPtr(context);
             Debug.Assert(promiseHandle.IsAllocated, $"{nameof(OnErrorThunk)} should not be called with an unallocated Promise GCHandle");
 
             PromiseBase promise = (PromiseBase)promiseHandle.Target;
             promise.OnErrorHandler(handle, result);
         }

#if ENABLE_IL2CPP
        [AOT.MonoPInvokeCallback(typeof(aoa_promise_on_progress))]
#endif
        private static void OnProgressThunk(IntPtr context, float progress)
        {
            GCHandle handle = GCHandle.FromIntPtr(context);
            Debug.Assert(handle.IsAllocated, $"{nameof(OnProgressThunk)} should not be called with an unallocated Promise GCHandle");

            PromiseBase promise = (PromiseBase)handle.Target;
            promise.OnProgressHandler(progress);
        }

        private static readonly aoa_promise_on_complete OnCompleteDelegate = OnCompleteThunk;

        private static readonly aoa_promise_on_error OnErrorDelegate = OnErrorThunk;

        private static readonly aoa_promise_on_progress OnProgressDelegate = OnProgressThunk;
    }

    internal class Promise<T> : PromiseBase
    {
        private readonly Func<PackedValue, T> factory;

        private readonly TaskCompletionSource<T> taskCompletionSource = new TaskCompletionSource<T>();

        public Task<T> Task => this.taskCompletionSource.Task;

        public Promise(Func<PackedValue, T> factory, Action<float> progressCallback, CancellationToken cancellationToken)
            : base(progressCallback, cancellationToken)
        {
            this.factory = factory;
        }

        protected override void OnExceptionHandler(Exception exception)
        {
            this.taskCompletionSource.SetException(exception);
        }

        protected override void OnCanceledHandler()
        {
            this.taskCompletionSource.SetCanceled();
        }

        protected override void OnCompleteHandler(PackedValue value)
        {
            T result = this.factory(value);

            if (this.synchronizationContext != null)
            {
                this.synchronizationContext.Post(_ => this.taskCompletionSource.SetResult(result), null);
            }
            else
            {
                this.taskCompletionSource.SetResult(result);
            }
        }
    }

    internal class Promise : PromiseBase
    {
        private readonly TaskCompletionSource<bool> taskCompletionSource = new TaskCompletionSource<bool>();

        public Task Task => this.taskCompletionSource.Task;

        public Promise(Action<float> progressCallback, CancellationToken cancellationToken)
            : base(progressCallback, cancellationToken)
        {
        }

        protected override void OnExceptionHandler(Exception exception)
        {
            this.taskCompletionSource.SetException(exception);
        }

        protected override void OnCanceledHandler()
        {
            this.taskCompletionSource.SetCanceled();
        }

        protected override void OnCompleteHandler(PackedValue value)
        {
            if (this.synchronizationContext != null)
            {
                this.synchronizationContext.Post(_ => this.taskCompletionSource.SetResult(true), null);
            }
            else
            {
                this.taskCompletionSource.SetResult(true);
            }
        }

        public static Promise Create(CancellationToken cancellationToken)
        {
            return new Promise(null, cancellationToken);
        }

        public static Promise Create(Action<float> progress, CancellationToken cancellationToken)
        {
            return new Promise(progress, cancellationToken);
        }

        public static Promise<TResult> Create<TResult>(Func<PackedValue, TResult> factory, CancellationToken cancellationToken)
        {
            return new Promise<TResult>(factory, null, cancellationToken);
        }

        public static Promise<TResult> Create<TResult>(Func<PackedValue, TResult> factory, Action<float> progress, CancellationToken cancellationToken)
        {
            return new Promise<TResult>(factory, progress, cancellationToken);
        }
    }

}

