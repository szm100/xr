
var sam_exports_impl = (function () {

    let setHeap8Value = function (heapPointer, value) {
        if (typeof value === 'boolean') {
            HEAP8[heapPointer] = value ? 1 : 0
        }
        else {
            HEAP8[heapPointer] = value
        }
    }

    let setHeap32Value = function (heapPointer, value) {
        HEAP32[heapPointer >> 2] = value;
    }

    let getHeap32Value = function (heapPointer) {
        return HEAP32[heapPointer >> 2];
    }

    // Handle HEAP64 not being defined by emscripten in Unity by default
    let _HEAP64 = null
    let setHeap64Value = function (heapPointer, value) {
        if(_HEAP64 === null) { 
            _HEAP64 = new BigInt64Array(HEAP8.buffer);
        }
        _HEAP64[heapPointer >> 3] = BigInt(value);
    }

    let stringToOutParam = function (str) {
        var len = lengthBytesUTF8(str) + 1;
        var strBuffer = _malloc(len);
        stringToUTF8(str, strBuffer, len);

        return strBuffer;
    }

    let stringsToOutparam = function (strs) {
        var lengthsInBytes = {}
        var totalLength = 0;
        for (let i = 0; i < strs.length; ++i) {
            lengthsInBytes[i] = lengthBytesUTF8(strs[i]) + 1;
            totalLength += lengthsInBytes[i];
        }

        if (totalLength < 1) { totalLength = 1; }

        var strBuffer = _malloc(totalLength);
        var strBufferOffset = 0;
        for (let i = 0; i < strs.length; ++i) {
            var len = lengthsInBytes[i];
            stringToUTF8(strs[i], strBuffer + strBufferOffset, len);
            strBufferOffset += len;
        }

        return { buffer: strBuffer, length: totalLength };
    }

    let stringsFromInParam = function (/* const char * * */ values, /* int */ value_count) {
        var strs = []
        let vend = values + (value_count * 4);
        for (let v = values; v < vend; v += 4) {
            strs.push(UTF8ToString(getHeap32Value(v)));
        }

        return strs;
    }

    let objectsToOutParam = function (objects) {
        if (!objects || objects.length == 0) { return 0 }

        let handleBufferLength = 4 * objects.length;
        let handleBufferStart = _malloc(handleBufferLength);
        let handleBufferWrite = handleBufferStart;

        for (var obj of objects) {
            setHeap32Value(handleBufferWrite, obj.acquireHandle());
            handleBufferWrite += 4;
        }

        return handleBufferStart;
    }

    let nativeToAbiCallState = function (state) {
        // https://learn.microsoft.com/en-us/javascript/api/azure-communication-services/@azure/communication-calling/callstate?view=azure-communication-services-js
        switch (state) {
            case 'None': return sam_call_state.none;
            case 'Connecting': return sam_call_state.connecting;
            case 'Ringing': return sam_call_state.ringing;
            case 'Connected': return sam_call_state.connected;
            case 'LocalHold': return sam_call_state.local_hold;
            case 'RemoteHold': return sam_call_state.remote_hold;
            case 'InLobby': return sam_call_state.in_lobby;
            case 'Disconnecting': return sam_call_state.disconnecting;
            case 'Disconnected': return sam_call_state.disconnected;
            case 'EarlyMedia': return sam_call_state.early_media;
            default:
                sam_logger.verbose(`sam - nativeToAbiCallState - Failed to convert state: ${state} to abi state, returning 'none'`)
                return sam_call_state.none;
        }
    }

    let nativeToAbiParticipantRole = function (role) {
        // https://learn.microsoft.com/en-us/javascript/api/azure-communication-services/%40azure/communication-calling/participantrole?view=azure-communication-services-js
        switch (role) {
            case 'Unknown': return sam_call_participant_role.uninitialized;
            case 'Attendee': return sam_call_participant_role.attendee;
            case 'Presenter': return sam_call_participant_role.presenter;
            case 'Organizer': return sam_call_participant_role.organizer;
            case 'Co-organizer': return sam_call_participant_role.coorganizer;
            case 'Consumer': return sam_call_participant_role.consumer;
            default:
                sam_logger.verbose(`sam - nativeToAbiParticipantRole - Failed to convert role: ${role} to abi role, returning 'uninitialized'`)
                return sam_call_participant_role.uninitialized;
        }
    }

    let nativeToAbiParticipantState = function (state) {
        // https://learn.microsoft.com/en-us/javascript/api/azure-communication-services/%40azure/communication-calling/remoteparticipantstate?view=azure-communication-services-js
        switch (state) {
            case 'Idle': return sam_participant_state.idle;
            case 'Connecting': return sam_participant_state.connecting;
            case 'Ringing': return sam_participant_state.ringing;
            case 'Connected': return sam_participant_state.connected;
            case 'Hold': return sam_participant_state.hold;
            case 'InLobby': return sam_participant_state.in_lobby;
            case 'EarlyMedia': return sam_participant_state.early_media;
            case 'Disconnected': return sam_participant_state.disconnected;
            default:
                sam_logger.verbose(`sam - nativeToAbiParticipantState - Failed to convert state: ${state} to abi state, returning 'idle'`)
                return sam_participant_state.idle;
        }
    }

    let nativeToAbiVideoStreamSourceType = function (mediaStreamType) {
        // https://learn.microsoft.com/en-us/javascript/api/azure-communication-services/%40azure/communication-calling/mediastreamtype?view=azure-communication-services-js
        switch (mediaStreamType) {
            case 'Video': return sam_video_stream_source_type.video;
            case 'ScreenSharing': return sam_video_stream_source_type.screen_sharing;
            default:
                sam_logger.verbose(`sam - nativeToAbiVideoStreamSourceType - Failed to convert mediaStreamType: ${state} to abi videoStreamSourceType, returning 'video'`)
                return sam_video_stream_source_type.video;
        }
    }

    let abiToNativeDataChannelPriority = function (priority) {

        // https://learn.microsoft.com/en-us/javascript/api/azure-communication-services/@azure/communication-calling/datachannelpriority?view=azure-communication-services-js
        switch (priority) {
            case sam_data_channel_priority.normal: return 'Normal'
            case sam_data_channel_priority.high: return 'High';
            default:
                sam_logger.verbose(`sam - abiToNativeDataChannelPriority - Failed to convert: ${state} to native, returning 'normal'`)
                return 'Normal';
        }
    }

    let abiToNativeDataChannelReliability = function (reliability) {
        // https://learn.microsoft.com/en-us/javascript/api/azure-communication-services/@azure/communication-calling/datachannelreliability?view=azure-communication-services-js
        switch (reliability) {
            case sam_data_channel_reliability.durable: return 'Durable'
            case sam_data_channel_reliability.lossy: return 'Lossy';
            default:
                sam_logger.verbose(`sam - abiToNativeDataChannelPriority - Failed to convert: ${state} to native, returning 'normal'`)
                return 'Normal';
        }
    }

    let resolveObjectPromise = function (abiPromise, nativePromise, promiseCreatesObject) {

        // Retain reference until we're done
        let promisePtr = new sam_object_ptr(abiPromise);
        return nativePromise
            .then((obj) => {
                if (promiseCreatesObject) { var objPtr = new sam_object_ptr(obj, true) }
                try {
                    let promise = promisePtr.get();
                    if (!promise.isCanceled) {
                        promise.setObjectResult(obj)
                    }
                }
                finally {
                    if (objPtr) { objPtr.reset() }
                }
            })
            .catch((reason) => {
                let promise = promisePtr.get();
                if (!promise.isCanceled) {
                    promise.setError(sam_status.failed, reason.toString())
                }
            })
            .finally(() => {
                promisePtr.reset();
            });
    }

    let resolveVoidPromise = function (abiPromise, nativePromise) {

        // Retain reference until we're done
        let promisePtr = new sam_object_ptr(abiPromise);
        return nativePromise
            .then(() => {
                let promise = promisePtr.get();
                if (!promise.isCanceled) {
                    promise.setVoidResult()
                }
            })
            .catch((reason) => {
                let promise = promisePtr.get();
                if (!promise.isCanceled) {
                    promise.setError(sam_status.failed, reason.toString())
                }
            })
            .finally(() => {
                promisePtr.reset();
            });
    }

    let createTexture = function () {
        const texture = GLctx.createTexture();

        // Choose an open slot for a new texture
        var texId = 1
        for (; texId < GL.textures.length; ++texId) {
            if (!GL.textures[texId]) { break; }
        }

        texture.name = texId;
        GL.textures[texId] = texture;

        return texture;
    }

    let destroyTexture = function (texture) {
        GL.textures[texture.name] = null;
        texture.name = undefined;
        GLctx.deleteTexture(texture);
    }

    // this function returns a promise that resolves after n milliseconds
    const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

    class sam_logger {

        static _logger = function () {

            // On first call we create the logger
            const logger = document._MeshGlobals.AzureCommunication.Logging.createClientLogger('sam');

            // Then replace ourselves with a function that returns the logger
            sam_logger._logger = function () {
                return logger;
            }

            return logger;
        }

        static verbose(args) {
            sam_logger._logger().verbose(`${new Date().toJSON()} ${args}`);
        }

        static info(args) {
            sam_logger._logger().info(`${new Date().toJSON()} ${args}`);
        }

        static warning(args) {
            sam_logger._logger().warning(`${new Date().toJSON()} ${args}`);
        }

        static error(args) {
            sam_logger._logger().error(`${new Date().toJSON()} ${args}`);
        }
    }

    class sam_object_ptr {
        constructor(samObjectOrHandleOrPtr, transfer = false) {
            this._sam_handle = 0;
            this.set(samObjectOrHandleOrPtr, transfer);
        }

        isValid() { return this._sam_handle != 0; }
        peekHandle() { return this._sam_handle }
        acquireHandle() {
            if (!this.isValid()) { return 0; }
            return this.get().acquireHandle();
        }
        makeWeak() {
            return new sam_object_weak_ptr(this._sam_handle);
        }
        get() { return sam_object.get(this._sam_handle); }
        set(samObjectOrHandleOrPtr, transfer = false) {

            var handle;
            if (typeof samObjectOrHandleOrPtr === 'undefined' || samObjectOrHandleOrPtr === null) {
                handle = 0
            }
            else if (typeof samObjectOrHandleOrPtr === 'number') {
                handle = samObjectOrHandleOrPtr
            }
            else if (typeof samObjectOrHandleOrPtr?._sam_handle === 'number') {
                handle = samObjectOrHandleOrPtr._sam_handle;
            }
            else {
                throw new Error("Could not determine handle from samObjectOrHandleOrPtr in sam_object_ptr.set");
            }

            // Nothing to do, same handle
            if (this._sam_handle == handle) {
                return;
            }

            this.reset();
            this._sam_handle = handle;
            if (!transfer && this.isValid()) {
                this.get().addReference();
            }
        }
        reset() {
            if (this.isValid()) {
                this.get().removeReference()
                this._sam_handle = 0
            }
        }
    }

    class sam_object_weak_ptr {
        constructor(samObjectOrHandleOrPtr) {
            this._sam_handle = 0
            this.set(samObjectOrHandleOrPtr);
        }

        get() {
            if (this._sam_handle == 0) {
                return null
            }

            return sam_object.get(this._sam_handle);
        }

        lock() {
            return new sam_object_ptr(this.get());
        }

        reset() {
            this._sam_handle = 0;
        }

        set(samObjectOrHandleOrPtr) {
            var handle;
            if (typeof samObjectOrHandleOrPtr === 'undefined' || samObjectOrHandleOrPtr === null) {
                handle = 0
            }
            else if (typeof samObjectOrHandleOrPtr === 'number') {
                handle = samObjectOrHandleOrPtr
            }
            else if (typeof samObjectOrHandleOrPtr?._sam_handle === 'number') {
                handle = samObjectOrHandleOrPtr._sam_handle;
            }
            else {
                throw new Error("Could not determine handle from samObjectOrHandleOrPtr in sam_object_weak_ptr.set");
            }

            this._sam_handle = handle;
        }
    }

    class sam_callback_pair {
        constructor(cookie, callback) {
            this.set(cookie, callback);
        }

        isValid() { return this._callback != 0; }

        set(cookie, callback) {
            this._cookie = cookie ?? 0;
            this._callback = callback ?? 0;
        }

        clear() {
            this._cookie = 0;
            this._callback = 0;
        }

        invoke(argsSignature, arrOfArgs) {
            if (this._callback == 0) { return; }

            let args = [this._cookie, ...arrOfArgs]
            let argsSig = 'vi' + argsSignature
            dynCall(argsSig, this._callback, args);
        }
    }

    class sam_object {
        static _objectMapping = {
            byHandle: {},
            nextHandle: 1,
            _cleaningUpObject: false,
            _cleanUpObjectQueue: [],
            addObject: function (object) {
                let handle = this.nextHandle++;
                this.byHandle[handle] = object;

                return handle;
            },
            getObject: function (handle) {
                return this.byHandle[handle]
            },
            cleanupObject: function (handle) {

                // We have to queue up because any call to managed might result in more finalizers
                if (this._cleaningUpObject) {

                    sam_logger.verbose('sam_object mapping - queueing up object for cleanup: ' + handle)
                    this._cleanUpObjectQueue.push(handle);
                    return;
                }

                this._cleaningUpObject = true;
                try {
                    sam_logger.verbose('sam_object mapping - cleaning up object: ' + handle)
                    if (this.projectedObjectCleanup) {
                        dynCall('vi', this.projectedObjectCleanup, [handle]);
                    }
                }
                catch (error) {
                    sam_logger.error('sam_object mapping - error cleaning up object: ' + handle + ', error: ' + error);
                    throw error;
                }
                finally {
                    delete this.byHandle[handle];
                    this._cleaningUpObject = false;

                    if (this._cleanUpObjectQueue.length > 0) {
                        var cleanUpQueue = this._cleanUpObjectQueue
                        this._cleanUpObjectQueue = []

                        for (let toClean of cleanUpQueue) {
                            this.cleanupObject(toClean)
                        }
                    }
                }
            }
        }

        static _addObject = function (object) {
            return sam_object._objectMapping.addObject(object)
        }

        static get = function (handle) {
            if (typeof handle === 'undefined' || handle === 0) {
                return null
            }

            return sam_object._objectMapping.getObject(handle)
        }

        static setProjectedObjectCleanup = function (callback) {
            sam_object._objectMapping.projectedObjectCleanup = callback;
        }

        static cleanupInstance = function (handle) {
            sam_object._objectMapping.cleanupObject(handle);
        }

        constructor(handleType) {
            this._handleType = handleType ?? sam_handle_type.unknown;
            this._refCount = 1;
            this._sam_handle = sam_object._addObject(this);
            sam_logger.verbose('sam_object.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_object.destructor - sam_handle: ' + this.peekHandle());
            sam_object.cleanupInstance(this.peekHandle());
            this._sam_handle = 0;
        }

        get handleType() {
            return this._handleType;
        }

        peekHandle() { return this._sam_handle; }
        acquireHandle() {
            if (this._sam_handle != 0) {
                this.addReference();
            }
            return this._sam_handle;
        }

        addReference() {
            if (this._refCount == 0) {
                throw new Error("sam_object had no refCount in addReference");
            }
            ++this._refCount;
        }

        removeReference() {
            if (this._refCount == 0) {
                throw new Error("sam_object had no refCount in removeReference");
            }

            --this._refCount;

            if (this._refCount == 0) {
                sam_logger.verbose('sam_object.removeReference, handle: ' + this.peekHandle() + ' has 0 refCount, destructing...');
                this.destructor();
            }
        }

        setErrorDetails(message, requestCorrelationVector, responseCorrelationVector) {
            this.errorDetails = {
                message: message,
                requestCorrelationVector: requestCorrelationVector,
                responseCorrelationVector: responseCorrelationVector
            }
            sam_logger.error('Reporting error from ACS ABI: ' + JSON.stringify(this.errorDetails))
        }
    }

    class sam_call_token extends sam_object {
        constructor(token, expirationDate) {
            super();
            this._token = token;
            this._expirationDate = expirationDate;
            sam_logger.verbose('sam_call_token.constructor - handle: ' + this.peekHandle());
        }

        get token() {
            return this._token;
        }

        get expirationDate() {
            return this._expirationDate;
        }

    }

    class sam_call_token_refresh_options extends sam_object {
        constructor(refreshProactively) {
            super()
            this.refreshProactively = refreshProactively;
            sam_logger.verbose('sam_call_token_refresh_options.constructor - handle: ' + this.peekHandle());
        }

        setTokenRefreshRequested(value, value_fn) {
            this._tokenRefreshRequested = new sam_callback_pair(value, value_fn);
        }
    }

    class sam_call_token_credential extends sam_object {
        constructor(token, refreshOptions) {
            super();
            this._token = new sam_object_ptr(new sam_call_token(token), true);

            if (refreshOptions) {
                this.refreshOptions = new sam_object_ptr(refreshOptions)
            }
            sam_logger.verbose('sam_call_token_credential.constructor - handle: ' + this.peekHandle());
        }

        get token() {
            return this._token;
        }

        destructor() {
            sam_logger.verbose('sam_call_token_credential.destructor - handle: ' + this.peekHandle());
            this.refreshOptions?.reset();
            this._token.reset();
            super.destructor();
        }
    }

    class sam_call_client extends sam_object {

        constructor(/* sam_call_client_options */ options) {
            super();

            document._MeshGlobals.AzureCommunication.Logging.setLogLevel('info')
            let nativeOptions = {
                logger: document._MeshGlobals.AzureCommunication.Logging.createClientLogger('ACS')
            }

            if (options) {
                nativeOptions.diagnostics = options.diagnostics
            }

            nativeOptions.firstPartyOptions = {
                acsDeviceType: options.diagnostics.tags[0],
                encodedStreamsJsPath: document._MeshGlobals.AzureCommunication.StreamTransformWorkerUrl
            }

            this._callClient = new document._MeshGlobals.AzureCommunication.Calling.CallClient(nativeOptions);
            this._initializationOptions = new sam_object_ptr();
            this._deviceManager = new sam_object_ptr();
            this._options = new sam_object_ptr(options ?? new sam_call_client_options());

            sam_logger.verbose('sam_call_client.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_call_client.destructor - handle: ' + this.peekHandle());
            this._callClient = null
            this._options.reset();
            this._initializationOptions.reset();
            this._deviceManager.reset();
            super.destructor();
        }

        get options() {
            return this._options.get();
        }

        get initializationOptions() {
            return this._initializationOptions.get();
        }

        set initializationOptions(samObjectOrHandleOrPtr) {
            return this._initializationOptions.set(samObjectOrHandleOrPtr);
        }

        async getDeviceManagerAsync() {
            if (!this._deviceManager.isValid()) {

                let deviceManager = await this._callClient.getDeviceManager();
                let microphones = await deviceManager.getMicrophones();
                this._deviceManager.set(new sam_device_manager(deviceManager, microphones), true)
            }

            return this._deviceManager.get();
        }

        async createCallAgentAsync(tokenProvider, agentOptions) {

            let token = await tokenProvider.requestToken();

            const credOptions = {
                token: token,
                tokenRefresher: async function () { return await tokenProvider.requestToken() },
                refreshProactively: true
            };

            const tokenCredential = new document._MeshGlobals.AzureCommunication.Common.AzureCommunicationTokenCredential(credOptions);
            const options = {};
            if (agentOptions && agentOptions.displayName.length > 0) {
                options.displayName = agentOptions.displayName;
            }

            let callAgent = await this._callClient.createCallAgent(tokenCredential, options);
            return new sam_call_agent(callAgent, tokenProvider);
        }

        async createTeamsCallAgentAsync(tokenProvider) {
            let token = await tokenProvider.requestToken();

            const credOptions = {
                token: token,
                tokenRefresher: async function () { return await tokenProvider.requestToken() },
                refreshProactively: true
            };

            const tokenCredential = new document._MeshGlobals.AzureCommunication.Common.AzureCommunicationTokenCredential(credOptions);

            const options = {};
            let callAgent = await this._callClient.createTeamsCallAgent(tokenCredential, options);
            return new sam_teams_call_agent(callAgent, tokenProvider);
        }
    }

    class sam_call_client_options extends sam_object {
        constructor() {
            super();
            this._diagnostics = new sam_object_ptr(new sam_call_diagnostics_options(), true);
            sam_logger.verbose('sam_call_client_options.constructor - handle: ' + this.peekHandle());
        }
        destructor() {
            sam_logger.verbose('sam_call_client_options.destructor - handle: ' + this.peekHandle());
            this._diagnostics.reset();
            super.destructor();
        }

        set diagnostics(samObjectOrHandleOrPtr) {
            this._diagnostics.set(samObjectOrHandleOrPtr)
        }

        get diagnostics() {
            return this._diagnostics.get()
        }
    }

    class sam_call_diagnostics_options extends sam_object {
        constructor() {
            super()
            this.appName = ''
            this.appVersion = ''
            this.tags = []

            sam_logger.verbose('sam_call_diagnostics_options.constructor - handle: ' + this.peekHandle());
        }
    }

    class sam_common_call_agent_options extends sam_object {
        constructor() {
            super()
            
            sam_logger.verbose('sam_common_call_agent_options.constructor - handle: ' + this.peekHandle());
        }
    }

    class sam_call_agent_options extends sam_common_call_agent_options {
        constructor() {
            super()
            this.displayName = '';

            sam_logger.verbose('sam_call_agent_options.constructor - handle: ' + this.peekHandle());
        }
    }

    class sam_teams_call_agent_options extends sam_common_call_agent_options { 
        constructor() {
            super()

            sam_logger.verbose('sam_teams_call_agent_options.constructor - handle: ' + this.peekHandle());
        }
    }

    class sam_initialization_options extends sam_object {
        constructor() {
            super();
            this.dataPath = "dataPath";
            this.logFileName = "acs_sdk.blog";
            this.isEncrypted = true;
            this.stdoutLogging = false;

            sam_logger.verbose('sam_initialization_options.constructor - handle: ' + this.peekHandle());
        }
    }

    class sam_object_map {
        constructor(keySelect, createObjectFromUpdated, createObjectAddedEventArgs, createObjectRemovedEventArgs) {
            this._objects = new Map()
            this._objectsUpdated = new sam_callback_pair();
            this._objectAdded = new sam_callback_pair();
            this._objectRemoved = new sam_callback_pair();
            this._keySelect = keySelect;
            this._createObjectFromUpdated = createObjectFromUpdated;
            this._createObjectAddedEventArgs = createObjectAddedEventArgs;
            this._createObjectRemovedEventArgs = createObjectRemovedEventArgs;

            sam_logger.verbose('sam_object_map.constructor')
        }

        get keys() {
            return this._objects.keys()
        }

        get objects() {
            return Array.from(this._objects.values(), v => v.get());
        }

        getObjectAtKey(key) {
            return this._objects.get(key)?.get();
        }

        getKey(updated) {
            return this._keySelect(updated);
        }

        find(updated) {
            let key = this.getKey(updated);
            return this.getObjectAtKey(key);
        }

        clear() {
            for (let o of this._objects.values()) { o.reset(); }
            this._objects.clear()
        }

        update(updates) {
            if (this._objectsUpdated.isValid()) {
                var objectsUpdatedEventArgsPtr = new sam_object_ptr(new sam_objects_updated_event_args(), true);
            }

            sam_logger.verbose('sam_object_map.update - addedCount: ' + updates.added.length + ', removedCount: ' + updates.removed.length);

            for (let removed of updates.removed) {
                let key = this.getKey(removed);
                sam_logger.verbose('sam_object_map.update - removed object found - key: ' + key);

                let objPtr = this._objects.get(key);
                let obj = objPtr.get()
                if (obj) {
                    objectsUpdatedEventArgsPtr?.get()?.remove(obj);
                    if (this._objectRemoved.isValid()) {
                        let argsPtr = new sam_object_ptr(this._createObjectRemovedEventArgs(removed), true);
                        try {
                            this._objectRemoved.invoke('i', [argsPtr.peekHandle()])
                        }
                        finally {
                            argsPtr.reset();
                        }
                    }
                }

                objPtr.reset();
                this._objects.delete(key);
            }

            for (let added of updates.added) {
                let key = this.getKey(added);
                sam_logger.verbose('sam_object_map.update - added object found - key: ' + key);
                let objPtr = new sam_object_ptr(this._createObjectFromUpdated(added), true);
                this._objects.set(key, objPtr)

                let obj = objPtr.get()
                if (obj) {
                    objectsUpdatedEventArgsPtr?.get()?.add(obj)
                    if (this._objectAdded.isValid()) {
                        let argsPtr = new sam_object_ptr(this._createObjectAddedEventArgs(added), true);
                        try {
                            this._objectAdded.invoke('i', [argsPtr.peekHandle()])
                        }
                        finally {
                            argsPtr.reset();
                        }
                    }
                }
            }

            if (objectsUpdatedEventArgsPtr) {
                this._objectsUpdated.invoke('i', [objectsUpdatedEventArgsPtr.peekHandle()])
                objectsUpdatedEventArgsPtr.reset();
            }
        }

        setObjectsUpdated(value, value_fn) {
            this._objectsUpdated = new sam_callback_pair(value, value_fn);
        }

        setObjectAdded(value, value_fn) {
            this._objectAdded = new sam_callback_pair(value, value_fn);
        }

        setObjectRemoved(value, value_fn) {
            this._objectRemoved = new sam_callback_pair(value, value_fn);
        }
    }

    class sam_microphone_map extends sam_object_map {
        constructor() {
            super((mic) => { return mic.id }, (mic) => { return new sam_audio_device_details(mic) })
        }
    }

    class sam_device_manager extends sam_object {
        constructor(deviceManager, microphones) {
            super();
            this._deviceManager = deviceManager;

            this._microphones = new sam_microphone_map();
            this._microphones.update({ added: microphones, removed: [] })

            this._onAudioDevicesUpdated = (args) => {
                this._microphones.update({
                    added: args.added.filter(d => { return d.deviceType == 'Microphone' }),
                    removed: args.removed.filter(d => { return d.deviceType == 'Microphone' }),
                });
            }
            this._deviceManager.on("audioDevicesUpdated", this._onAudioDevicesUpdated)

            this._onSelectedMicrophoneChanged = (args) => {
                sam_logger.info('sam_device_manager._onSelectedMicrophoneChanged - handle: ' + this.peekHandle());
                this.selectedMicrophone().audioDeviceInfo = this._deviceManager.selectedMicrophone;
            }
            this._deviceManager.on("selectedMicrophoneChanged", this._onSelectedMicrophoneChanged)
            this._selectedMicrophone = new sam_object_ptr(
                new sam_audio_device_details(this._deviceManager.selectedMicrophone), true);

            sam_logger.verbose('sam_device_manager.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_device_manager.destructor - handle: ' + this.peekHandle());
            this._deviceManager.off("audioDevicesUpdated", this._onAudioDevicesUpdated);
            this._deviceManager.off("selectedMicrophoneChanged", this._onSelectedMicrophoneChanged);
            this._microphones.clear();
            this._selectedMicrophone.reset();

            super.destructor()
        }

        selectMicrophone(microphone) {
            sam_logger.info('sam_device_manager.setMicrophone - handle: ' + this.peekHandle());
            this._selectedMicrophone.set(microphone);
            this._deviceManager.selectMicrophone(microphone.audioDeviceInfo); // dangling async
        }

        selectedMicrophone() {
            return this._selectedMicrophone.get();
        }

        getMicrophones() {
            return this._microphones.objects
        }

        setOnMicrophonesUpdated(value, value_fn) {
            this._microphones.setObjectsUpdated(value, value_fn);
        }
    }

    class sam_audio_device_details extends sam_object {
        constructor(audioDeviceInfo) {
            super();
            sam_logger.verbose('sam_audio_device_details.constructor - handle: ' + this.peekHandle());
            this.audioDeviceInfo = audioDeviceInfo
        }

        get id() { return this._audioDeviceInfo?.id }
        get name() { return this._audioDeviceInfo?.name }
        get isSystemDefault() { return this._audioDeviceInfo?.isSystemDefault }
        get deviceType() { return this._audioDeviceInfo?.deviceType }

        get audioDeviceInfo() { return this._audioDeviceInfo }
        set audioDeviceInfo(info) {
            this._audioDeviceInfo = info;
            sam_logger.info('sam_audio_device_details.set audioDeviceInfo - handle: ' + this.peekHandle() +
                ', id: ' + this.id +
                ', name: ' + this.name +
                ', isSystemDefault: ' + this.isSystemDefault +
                ', deviceType: ' + this.deviceType
            )
        }
    }

    class sam_objects_updated_event_args extends sam_object {
        constructor() {
            super();
            this._added = []
            this._removed = []
        }

        destructor() {
            for (var ptr of this._added) { ptr.reset(); }
            for (var ptr of this._removed) { ptr.reset(); }
            super.destructor();
        }

        get added() {
            return this._added.map((a) => { return a.get() })
        }

        get removed() {
            return this._removed.map((a) => { return a.get() })
        }

        add(samObjectOrHandleOrPtr) {
            this._added.push(new sam_object_ptr(samObjectOrHandleOrPtr))
        }

        remove(samObjectOrHandleOrPtr) {
            this._removed.push(new sam_object_ptr(samObjectOrHandleOrPtr))
        }
    }

    class sam_internal_token_provider extends sam_object {
        constructor() {
            super();
            this._onTokenRequested = new sam_callback_pair();
            sam_logger.verbose('sam_internal_token_provider.constructor - handle: ' + this.peekHandle())
        }

        setOnTokenRequested(value, value_fn) {
            this._onTokenRequested = new sam_callback_pair(value, value_fn);
        }

        async requestToken() {
            if (this._tokenDefer) {
                sam_logger.info('sam_internal_token_provider.requestToken, token was already deferred - handle: ' + this.peekHandle())
                return await this._tokenDefer.promise;
            }

            if (this._onTokenRequested.isValid()) {

                const defer = function () {
                    const deferred = {};
                    const promise = new Promise(function (resolve, reject) {
                        deferred.resolve = resolve;
                        deferred.reject = reject;
                    });
                    deferred.promise = promise;
                    return deferred;
                };

                sam_logger.info('sam_internal_token_provider.requestToken, requesting deferred token - handle: ' + this.peekHandle())
                this._tokenDefer = defer();
                try {
                    this._onTokenRequested.invoke('i', [this.peekHandle()])
                }
                catch (exception) {
                    sam_logger.error('sam_internal_token_provider.requestToken, error getting deferred token - handle: ' + this.peekHandle() + ', error: ' + exception)
                    throw exception;
                }

                this._token = await this._tokenDefer.promise;
                this._tokenDefer = null;
            }

            return this._token;
        }

        parseToken(token) {
            sam_logger.verbose('sam_internal_token_provider.parseToken - handle: ' + this.peekHandle())
            this._tokenDefer?.resolve(token)
        }

        setError(error) {
            sam_logger.error('sam_internal_token_provider.setError - handle: ' + this.peekHandle() + ', error: ' + error)
            this._tokenDefer?.reject(error);
        }
    }

    class sam_common_call_agent extends sam_object {
        constructor(callAgent, tokenProvider, calls, handleType) {
            super(handleType)
            this._callAgent = callAgent
            this._calls = calls;

            // We manage the call to updated so that join options are applied before the call back fires
            this._callsUpdated = new sam_callback_pair();

            this._tokenProvider = new sam_object_ptr(tokenProvider);
            this._callAgent.on("callsUpdated", this._onCallsUpdated)
            sam_logger.verbose('sam_common_call_agent.constructor - handle: ' + this.peekHandle())
        }

        _onCallsUpdated = (calls) => {
            sam_logger.info('sam_common_call_agent._onCallsUpdated - handle: ' + this.peekHandle())

            // Process event for removes here, but adds are handled after applying options in the 'join' call
            if (this._callsUpdated.isValid()) {
                var objectsUpdatedEventArgsPtr = new sam_object_ptr(new sam_objects_updated_event_args(), true);
                let objectsUpdatedEventArgs = objectsUpdatedEventArgsPtr.get();
                for (let call of calls.removed) {
                    objectsUpdatedEventArgs.remove(this._calls.getObjectAtKey(call))
                }
            }

            this._calls?.update(calls);

            if (objectsUpdatedEventArgsPtr) {
                this._callsUpdated.invoke('i', [objectsUpdatedEventArgsPtr.peekHandle()])
                objectsUpdatedEventArgsPtr.reset();
            }
        }

        destructor() {
            sam_logger.verbose('sam_common_call_agent.destructor - handle: ' + this.peekHandle())
            this.dispose();
            super.destructor();
        }

        setCallsUpdated(value, value_fn) {
            this._callsUpdated.set(value, value_fn);
        }

        dispose() {
            if (this._callAgent != null) {
                sam_logger.verbose('sam_common_call_agent.dispose - handle: ' + this.peekHandle())

                this._calls.clear();
                this._tokenProvider.reset();

                this._callAgent.off("callsUpdated", this._onCallsUpdated)
                this._callAgent.dispose();
                this._callAgent = null
            }
        }

        async join(meetingLocator, joinCallOptions) {
            sam_logger.info('sam_common_call_agent.join - handle: ' + this.peekHandle())
            let nativeCall = this._callAgent.join(meetingLocator, joinCallOptions?.nativeOptions ?? {})
            let abiCall = this._calls.getObjectAtKey(nativeCall)
            await abiCall._applyJoinCallOptions(joinCallOptions);

            if (this._callsUpdated.isValid()) {
                try {
                    var objectsUpdatedEventArgs = new sam_objects_updated_event_args();
                    objectsUpdatedEventArgs.add(abiCall)
                    this._callsUpdated.invoke('i', [objectsUpdatedEventArgs.peekHandle()])
                }
                finally {
                    objectsUpdatedEventArgs?.removeReference();
                }
            }

            return abiCall;
        }
    }

    class sam_common_call_map extends sam_object_map {
        constructor(createObjectFromUpdated) {
            super(c => { return c }, createObjectFromUpdated);
        }
    }

    class sam_call_map extends sam_common_call_map {
        constructor() {
            super(c => { return new sam_call(c) })
        }
    }

    class sam_teams_call_map extends sam_common_call_map {
        constructor() {
            super(c => { return new sam_teams_call(c) })
        }
    }

    class sam_call_agent extends sam_common_call_agent {
        constructor(callAgent, tokenProvider) {
            super(callAgent, tokenProvider, new sam_call_map(), sam_handle_type.call_agent)
            sam_logger.verbose('sam_call_agent.constructor - handle: ' + this.peekHandle())
        }
    }

    class sam_teams_call_agent extends sam_common_call_agent {
        constructor(callAgent, tokenProvider) {
            super(callAgent, tokenProvider, new sam_teams_call_map(), sam_handle_type.teams_call_agent)
            sam_logger.verbose('sam_teams_call_agent.constructor - handle: ' + this.peekHandle())
        }
    }

    class sam_endpoint_details extends sam_object {
        constructor(endpointDetails) {
            super()
            this._endpointDetails = endpointDetails;
            this.setAudioStreamDelegation(false)
            sam_logger.verbose('sam_endpoint_details.constructor - handle: ' + this.peekHandle())
        }

        get participantId() { return this._endpointDetails.participantId }

        get audioStreamIsDelegated() { return this._audioStream.isDelegated }
        get audioStreamDelegatedId() { return this._audioStream.delegatedId }
        get audioStreamMedia() { return this._audioStream.media }

        setAudioStreamDelegation(isDelegated, delegatedId, media) {
            this._audioStream = {
                isDelegated: isDelegated ?? false,
                delegatedId: isDelegated ? delegatedId : undefined,
                media: isDelegated ? media : undefined
            }
        }
    }

    class sam_endpoint_details_map extends sam_object_map {
        constructor() {
            super(
                epd => epd.participantId,
                epd => new sam_endpoint_details(epd))
        }
    }

    class sam_remote_participant extends sam_object {
        constructor(remoteParticipant, incomingVideoStreamType) {
            super();

            this._remoteParticipant = remoteParticipant;

            this._callEndReason = new sam_object_ptr();
            this._displayNameChanged = new sam_callback_pair();
            this._isMutedChanged = new sam_callback_pair();
            this._isSpeakingChanged = new sam_callback_pair();
            this._roleChanged = new sam_callback_pair();
            this._stateChanged = new sam_callback_pair();
            this._videoStreamStateChanged = new sam_callback_pair();
            this._videoStreamCallbacks = new Map();
            this._endpointDetails = new sam_endpoint_details_map();

            // Since this is an empty class we share one for all participant property changed events
            this._propertyChangedEventArgs = new sam_object_ptr(new sam_property_changed_event_args(), true);

            if (incomingVideoStreamType === sam_video_stream_type.raw_incoming) {
                this._videoStreams = new sam_raw_incoming_video_stream_map(this.peekHandle());
            }
            else {
                this._videoStreams = new sam_remote_incoming_video_stream_map(this.peekHandle());
            }

            this._remoteParticipant.on("videoStreamsUpdated", this._onVideoStreamsUpdated)
            this._onVideoStreamsUpdated({ added: this._remoteParticipant.videoStreams, removed: [] })

            sam_logger.verbose('sam_remote_participant.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_remote_participant.destructor - handle: ' + this.peekHandle())

            this._remoteParticipant.off("displayNameChanged", this._onDisplayNameChanged)
            this._remoteParticipant.off("isMutedChanged", this._onIsMutedChanged)
            this._remoteParticipant.off("isSpeakingChanged", this._onIsSpeakingChanged)
            this._remoteParticipant.off("roleChanged", this._onRoleChanged)
            this._remoteParticipant.off("stateChanged", this._onStateChanged)
            this._remoteParticipant.off("videoStreamsUpdated", this._onVideoStreamsUpdated)

            this._endpointDetails.clear();

            for (let stream of this._videoStreams.objects) {
                let callback = this._videoStreamCallbacks.get(stream);
                stream.off('stateChanged', callback)
            }
            this._videoStreamCallbacks.clear();

            this._videoStreams.clear();
            this._callEndReason.reset();
            this._propertyChangedEventArgs.reset();
            super.destructor();
        }

        get callEndReason() {

            // Cache the reason object if we have a valid native one
            if (!this._callEndReason.isValid() && this._remoteParticipant.callEndReason) {
                this._callEndReason.set(new sam_call_end_reason(this._remoteParticipant.callEndReason), true);
            }

            return this._callEndReason.get();
        }

        get role() { return nativeToAbiParticipantRole(this._remoteParticipant.role) }
        get displayName() { return this._remoteParticipant.displayName }
        get identifier() { return sam_call_identifier.getMri(this._remoteParticipant.identifier) }
        get incomingVideoStreams() { return this._videoStreams.objects }
        get isMuted() { return this._remoteParticipant.isMuted }
        get isSpeaking() { return this._remoteParticipant.isSpeaking }
        get state() { return nativeToAbiParticipantState(this._remoteParticipant.state) }

        get endpointDetails() {
            // No events to observe for updates so we update our mapping on access
            let epds = this._remoteParticipant.endpointDetails
            this._endpointDetails.update(
                {
                    added: epds.filter(epd => this._endpointDetails.find(epd) === undefined),

                    // This works because it's for removal and both native and sam endpoint details contain 'participantId'.
                    removed: this._endpointDetails.objects.filter(sepd => epds.find(epd => sepd.participantId === epd.participantId) === undefined)
                }
            )

            return this._endpointDetails.objects
        }

        async muteAsync() { await this._remoteParticipant.mute() }

        updateSpeaking(speakerInfos) {
            let oldEndpointDetails = this._endpointDetails.objects; // Capture current list
            let _ = this.endpointDetails // Update list

            for (let speakerInfo of speakerInfos) {
                let endpointDetails = this._endpointDetails.find(speakerInfo);
                if (!endpointDetails) {
                    sam_logger.error(`Could not find endpoint details for participantId ${speakerInfo.participantId}`)
                    continue;
                }

                // Stream changed, tear down the old one
                if (endpointDetails.audioStreamIsDelegated && endpointDetails.audioStreamMedia !== speakerInfo.stream) {
                    try {
                        sam_logger.info(`sam_remote_participant.updateSpeaking - speaker stream has changed, removing delegated stream processor - id: ${endpointDetails.audioStreamDelegatedId}`)
                        Module.SpatialAudioRemoveMediaStreamCallback(endpointDetails.audioStreamDelegatedId);
                    }
                    catch (error) {
                        sam_logger.error('sam_remote_participant.updateSpeaking - exception invoking Module.SpatialAudioRemoveMediaStreamCallback: ' + error)
                    }

                    endpointDetails.setAudioStreamDelegation(false);
                }

                // Delegate the stream if not already done so
                if (!endpointDetails.audioStreamIsDelegated && typeof Module.SpatialAudioAddMediaStreamCallback === 'function') {

                    try {
                        sam_logger.info(`sam_remote_participant.updateSpeaking - new speaker stream delegating processor...`)
                        const delegatedId = Module.SpatialAudioAddMediaStreamCallback(
                            false, speakerInfo.stream, this.identifier, endpointDetails.participantId);
                        sam_logger.info(`sam_remote_participant.updateSpeaking - new speaker stream delegated processor - ${delegatedId}`)

                        if (delegatedId) {
                            endpointDetails.setAudioStreamDelegation(true, delegatedId, speakerInfo.stream);
                        }
                    }
                    catch (error) {
                        sam_logger.error('sam_remote_participant.updateSpeaking - exception invoking Module.SpatialAudioAddMediaStreamCallback: ' + error)
                    }
                }
            }

            // Remove streams no longer in the participants
            for (let old of oldEndpointDetails.filter(ed => !this._endpointDetails.find(ed))) {
                if (old.audioStreamIsDelegated) {
                    sam_logger.info(`sam_remote_participant.updateSpeaking - speaker no longer active, removing delegated stream processor - id: ${old.audioStreamDelegatedId}`)
                    Module.SpatialAudioRemoveMediaStreamCallback(old.audioStreamDelegatedId);
                    old.setAudioStreamDelegation(false);
                }
            }
        }

        _setCallbackPair(pair, event, callback, value, value_fn) {
            if (pair.isValid()) { this._remoteParticipant.off(event, callback) }

            pair.set(value, value_fn);

            if (pair.isValid()) { this._remoteParticipant.on(event, callback) }
        }

        _onDisplayNameChanged = e => { this._displayNameChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()]) }
        setDisplayNameChanged(value, value_fn) {
            this._setCallbackPair(this._displayNameChanged, "displayNameChanged", this._onDisplayNameChanged, value, value_fn);
        }

        _onIsMutedChanged = e => { this._isMutedChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()]) }
        setIsMutedChanged(value, value_fn) {
            this._setCallbackPair(this._isMutedChanged, "isMutedChanged", this._onIsMutedChanged, value, value_fn);
        }

        _onIsSpeakingChanged = e => { this._isSpeakingChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()]) }
        setIsSpeakingChanged(value, value_fn) {
            this._setCallbackPair(this._isSpeakingChanged, "isSpeakingChanged", this._onIsSpeakingChanged, value, value_fn);
        }

        _onRoleChanged = e => { this._roleChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()]) }
        setRoleChanged(value, value_fn) {
            this._setCallbackPair(this._roleChanged, "roleChanged", this._onRoleChanged, value, value_fn);
        }

        _onStateChanged = e => { this._stateChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()]) }
        setStateChanged(value, value_fn) {
            this._setCallbackPair(this._stateChanged, "stateChanged", this._onStateChanged, value, value_fn);
        }

        _onVideoStreamStateChange(stream) {
            let argsPtr = new sam_object_ptr(new sam_video_stream_state_changed_event_args(stream), true);
            try {
                this._videoStreamStateChanged.invoke('i', [argsPtr.peekHandle()]);
            }
            finally {
                argsPtr.reset()
            }
        }

        _onVideoStreamsUpdated = e => {

            // Clear any callbacks before removing from internal map
            for (let s of e.removed) {
                let videoStream = this._videoStreams.find(s)
                let callback = this._videoStreamCallbacks.get(videoStream);
                videoStream.off('stateChanged', callback)
                this._videoStreamCallbacks.delete(videoStream)
            }

            this._videoStreams.update(e)

            for (let s of e.added) {

                // Cache a callback bound to this stream
                let videoStream = this._videoStreams.find(s)
                let callback = this._onVideoStreamStateChange.bind(this, videoStream);
                videoStream.on('stateChanged', callback)
                this._videoStreamCallbacks.set(videoStream, callback);

                // Fire the callback a first time
                callback();
            }
        }

        setVideoStreamStateChanged(value, value_fn) {
            this._videoStreamStateChanged.set(value, value_fn);
        }
    }

    class sam_remote_participant_map extends sam_object_map {
        constructor(videoStreamType) {
            super(
                p => { return sam_call_identifier.getMri(p.identifier) },
                p => { return new sam_remote_participant(p, videoStreamType) }
            )
        }
    }

    class sam_call_end_reason extends sam_object {
        constructor(reason) {
            this._reason = reason;
        }

        get code() { return this._reason?.code }
        get subCode() { return this._reason?.subCode }
    }

    class sam_common_call extends sam_object {
        constructor(call, handleType) {
            super(handleType);
            this._call = call;
            this._features = new sam_object_ptr(new sam_call_features(call), true)
            this._stateChanged = new sam_callback_pair();
            this._idChanged = new sam_callback_pair();
            this._isMutedChanged = new sam_callback_pair();
            this._rawIncomingAudioStream = new sam_object_ptr();

            this._mixedAudioStreams = new Map();

            // Since this is an empty class we share one for all call property changed events
            this._propertyChangedEventArgs = new sam_object_ptr(new sam_property_changed_event_args(), true);

            sam_logger.verbose('sam_common_call.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_common_call.destructor - handle: ' + this.peekHandle())

            this.setStateChanged(0, 0);
            this.setIdChanged(0, 0);
            this.setRemoteParticipantsUpdated(0, 0);
            this.setOutgoingAudioStateChanged(0, 0);

            this._rawIncomingAudioStream.reset();
            this._features.reset();
            this._propertyChangedEventArgs.reset();
            this._remoteParticipants?.clear();

            if (this._call) {
                let unmixedFeature = this._call.feature(document._MeshGlobals.AzureCommunication.Calling.Features.UnmixedAudio)
                unmixedFeature.off('participantSpeaking', this._onParticipantSpeaking);
            }

            super.destructor();
        }

        get features() { return this._features.get() }
        get id() { return this._call.id }
        get localParticipantId() { return this._call.tsCall.participantId }
        get localParticipantMri() { return this._call._callAgent.getUserMri() }
        get state() { return nativeToAbiCallState(this._call.state) }
        get remoteParticipants() { return this._remoteParticipants.objects }
        get isMuted() { return this._call.isMuted }

        async hangUpAsync(options) { await this._call.hangUp(options) }
        async muteAsync() { await this._call.mute() }
        async unmuteAsync() { await this._call.unmute() }
        async holdAsync() { await this._call.hold() }
        async resumeAsync() { await this._call.resume() }

        dispose() {
            this._call.dispose()
            this._call = null
        }

        setStateChanged(value, value_fn) {
            if (this._stateChanged.isValid()) {
                this._call.off("stateChanged", this._onStateChanged)
            }

            this._stateChanged = new sam_callback_pair(value, value_fn);

            if (this._stateChanged.isValid()) {
                this._call.on("stateChanged", this._onStateChanged)
            }
        }

        setIdChanged(value, value_fn) {
            if (this._idChanged.isValid()) {
                this._call.off("idChanged", this._onIdChanged)
            }

            this._idChanged = new sam_callback_pair(value, value_fn);

            if (this._idChanged.isValid()) {
                this._call.on("idChanged", this._onIdChanged)
            }
        }

        setOutgoingAudioStateChanged(value, value_fn) {
            if (this._isMutedChanged.isValid()) {
                this._call.off("isMutedChanged", this._onIsMutedChanged)
            }

            this._isMutedChanged = new sam_callback_pair(value, value_fn);

            if (this._isMutedChanged.isValid()) {
                this._call.on("isMutedChanged", this._onIsMutedChanged)
            }
        }

        setRemoteParticipantsUpdated(value, value_fn) {
            this._remoteParticipants.setObjectsUpdated(value, value_fn);
        }

        async _applyJoinCallOptions(options) {
            this._rawIncomingAudioStream.set(options?.incomingAudioOptions?.incomingAudioStream)

            this._remoteParticipants = new sam_remote_participant_map(options?.incomingVideoOptions?.streamType);
            this._call.on("remoteParticipantsUpdated", this._onRemoteParticipantsUpdated)
            this._onRemoteParticipantsUpdated({ added: this._call.remoteParticipants, removed: [] })

            if ((options?.incomingAudioOptions?.isMuted ?? false) || this._rawIncomingAudioStream.isValid()) {
                await this._call.muteIncomingAudio();
            }

            if (this._rawIncomingAudioStream.isValid()) {
                let stream = this._rawIncomingAudioStream.get()

                if (!stream.receiveUnmixedAudio) {
                    sam_logger.info('sam_common_call._applyJoinCallOptions - handle: ' + this.peekHandle() + ' registering for mixed audio')
                    this._call.on("remoteAudioStreamsUpdated", this._onRemoteAudioStreamsUpdated);
                    await this._onRemoteAudioStreamsUpdated({ added: this._call.remoteAudioStreams, removed: [] });
                }
                else {
                    sam_logger.info('sam_common_call._applyJoinCallOptions - handle: ' + this.peekHandle() + ' receiving unmixed audio, not registering for mixed audio')
                }

                //Note: unmixed audio is enabled in _onStateChanged as we have to wait till we're connected
            }
        }

        _onParticipantSpeaking = (e) => {

            // Update all remote participants with their speaker info
            for (let remoteParticipant of this._remoteParticipants.objects) {
                let participantSpeakerInfo = e.speakers.filter(s => sam_call_identifier.getMri(s.identifier) === remoteParticipant.identifier);
                remoteParticipant.updateSpeaking(participantSpeakerInfo);
            }
        }

        _onIdChanged = (e) => {
            sam_logger.info('sam_common_call._onIdChanged - handle: ' + this.peekHandle() + ', id: ' + this.id)
            this._idChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()])
        }
        _onIsMutedChanged = (e) => {
            sam_logger.info('sam_common_call._onIsMutedChanged - handle: ' + this.peekHandle() + ', isMuted: ' + this.isMuted)
            this._isMutedChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()])
        }
        _onRemoteParticipantsUpdated = (args) => {
            sam_logger.info('sam_common_call._onRemoteParticipantsUpdated - handle: ' + this.peekHandle())
            this._remoteParticipants.update(args);
        }
        _onStateChanged = async (e) => {
            sam_logger.info('sam_common_call._onStateChanged - handle: ' + this.peekHandle() + ', state: ' + this.state)

            // Have to wait till we're connected before we can enable unmixed audio or delegate mic capture
            if (this._call.state === 'Connected') {

                // Handle mic capture delegation
                // TODO: Replace this with support around new audio effects and browser based DeepVQE
                if (typeof Module.SpatialAudioGetMicrophoneMediaStreamCallback === 'function') {
                    const delegatedMediaStream = await Module.SpatialAudioGetMicrophoneMediaStreamCallback();
                    if (delegatedMediaStream) {
                        sam_logger.info(`sam_common_call._onStateChanged - delegated microphone media stream - ${delegatedMediaStream}`);
                        
                        try{
                            let localAudioStream = new document._MeshGlobals.AzureCommunication.Calling.LocalAudioStream(delegatedMediaStream);
                            await this._call.startAudio(localAudioStream);
                        }
                        catch(error){
                            sam_logger.error('sam_common_call._onStateChanged - exception starting delegated audio: ' + error)
                        }
                    }
                    else {
                        sam_logger.error("sam_common_call._onStateChanged - failed to get microphone media stream though method was defined");
                    }
                }

                // Handle raw incoming unmixed audio
                if (this._rawIncomingAudioStream.isValid()) {
                    let stream = this._rawIncomingAudioStream.get()
                    if (stream.receiveUnmixedAudio) {
                        let unmixedFeature = this._call.feature(document._MeshGlobals.AzureCommunication.Calling.Features.UnmixedAudio)
                        unmixedFeature.on('participantSpeaking', this._onParticipantSpeaking);

                        if (!unmixedFeature.isUnmixedAudioActive) {
                            try {
                                await unmixedFeature.enableUnmixedAudio();
                            }
                            catch (error) {
                                sam_logger.error('sam_common_call._onStateChanged - exception invoking enableUnmixedAudio: ' + error)
                            }
                        }
                    }
                }
            }

            try {
                this._stateChanged.invoke('i', [this._propertyChangedEventArgs.peekHandle()])
            }
            catch (error) {
                sam_logger.error('sam_common_call._onStateChanged - Exception invoking stateChanged: ' + error)
            }
        }
        _onRemoteAudioStreamsUpdated = async (e) => {
            sam_logger.info('sam_common_call._onRemoteStreamsUpdated - handle: ' + this.peekHandle())

            // Remove existing streams
            for (let s of e.removed) {
                let processor = this._mixedAudioStreams.get(s);
                if (processor.isDelegated) {
                    sam_logger.info(`sam_common_call._onRemoteStreamsUpdated - removing delegated stream processor - id: ${processor.delegatedId}`)
                    Module.SpatialAudioRemoveMediaStreamCallback(processor.delegatedId);
                }
                this._mixedAudioStreams.delete(s);
            }

            let aMediaStreamWasDelegated = false;

            // Add new streams
            for (let s of e.added) {
                if (typeof Module.SpatialAudioAddMediaStreamCallback === 'function') {

                    // Copy the tracks into our new stream
                    const stream = new MediaStream(await s.getMediaStream());

                    const delegatedId = Module.SpatialAudioAddMediaStreamCallback(true, stream);
                    if (delegatedId) {
                        aMediaStreamWasDelegated = true;

                        sam_logger.info(`sam_common_call._onRemoteStreamsUpdated - added delegated stream processor - id: ${delegatedId}`)
                        this._mixedAudioStreams.set(s, { isDelegated: true, delegatedId: delegatedId });
                        continue;
                    }
                    else {
                        sam_logger.error('sam_common_call._onRemoteStreamsUpdated - attempted to add delegated stream processor, but got 0 id')
                    }
                }

                this._mixedAudioStreams.set(s, { isDelegated: false });

                // TODO: support raw audio without delegation
            }

            if (aMediaStreamWasDelegated) {
                // Bug bug: We call muteIncomingAudio to mute the ACS output sound above.
                // Without unmuteIncomingAudio the raw stream will always be silent. Call unmuteIncomingAudio and muteIncomingAudio
                // sequentially will unmute the raw stream and keep the output sound muted.
                await this._call.unmuteIncomingAudio();
                await this._call.muteIncomingAudio();
            }
        }
    }

    class sam_call extends sam_common_call {
        constructor(call) {
            super(call, sam_handle_type.call);
            sam_logger.verbose('sam_call.constructor - handle: ' + this.peekHandle())
        }
    }

    class sam_teams_call extends sam_common_call {
        constructor(call) {
            super(call, sam_handle_type.teams_call);
            sam_logger.verbose('sam_teams_call.constructor - handle: ' + this.peekHandle())
        }
    }

    class sam_call_features extends sam_object {
        constructor(call) {
            super()
            this._mediaStats = new sam_object_ptr(new sam_media_statistics_call_feature(call))
            this._raisedHands = new sam_object_ptr(new sam_raise_hand_call_feature(call))
            this._dataChannel = new sam_object_ptr(new sam_data_channel_call_feature(call))
            sam_logger.verbose('sam_call_features.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_call_features.destructor - handle: ' + this.peekHandle())
            this._mediaStats.reset()
            this._raisedHands.reset()
            this._dataChannel.reset()
            super.destructor();
        }

        get mediaStats() { return this._mediaStats.get() }
        get raisedHands() { return this._raisedHands.get() }
        get dataChannel() { return this._dataChannel.get() }

    }

    class sam_call_feature extends sam_object {
        constructor(feature, handleType) {
            super(handleType)
            this._feature = feature;
            sam_logger.verbose('sam_call_feature.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_call_feature.destructor - handle: ' + this.peekHandle())
            this._feature?.dispose();
            this._feature = undefined

            super.destructor();
        }
    }

    class sam_media_statistics_call_feature extends sam_call_feature {
        constructor(call) {
            super(
                call.feature(document._MeshGlobals.AzureCommunication.Calling.Features.MediaStats),
                sam_handle_type.media_statistics_call_feature)

            this._sampleReported = new sam_callback_pair()
            this._reportIntervalInSeconds = 1
            this._onSampleReported = (args) => {
                let argsPtr = new sam_object_ptr(new sam_media_statistics_report_received_event_args(args), true);
                try {
                    this._sampleReported.invoke('i', [argsPtr.peekHandle()]);
                }
                finally {
                    argsPtr.reset()
                }
            }

            sam_logger.verbose('sam_media_statistics_call_feature.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_media_statistics_call_feature.destructor - handle: ' + this.peekHandle())
            this._mediaStatsCollector?.dispose();
            super.destructor()
        }

        _destroyCollector() {
            if (this._mediaStatsCollector) {
                sam_logger.info('sam_media_statistics_call_feature._destroyCollector - handle: ' + this.peekHandle())
                this._mediaStatsCollector?.dispose();
                this._mediaStatsCollector = undefined
            }
        }
        _createCollector() {
            sam_logger.info('sam_media_statistics_call_feature._createCollector - handle: ' + this.peekHandle())

            this._destroyCollector();

            const mediaStatsCollectorOptions = {
                aggregationInterval: this._reportIntervalInSeconds,
                dataPointsPerAggregation: 1
            };

            this._mediaStatsCollector = this._feature.createCollector(mediaStatsCollectorOptions)
        }

        get reportIntervalInSeconds() { return this._reportIntervalInSeconds }
        set reportIntervalInSeconds(interval) {
            if (interval != this._reportIntervalInSeconds) {
                if (this._sampleReported.isValid()) {
                    this._createCollector();
                }
            }
        }

        setSampleReported(value, value_fn) {
            if (this._sampleReported.isValid()) {
                this._destroyCollector()
            }

            this._sampleReported = new sam_callback_pair(value, value_fn);

            if (this._sampleReported.isValid()) {
                this._createCollector();
                this._mediaStatsCollector.on('summaryReported', this._onSampleReported);
            }
        }
    }

    class sam_raised_hand extends sam_object {
        constructor(raisedHand) {
            super();
            this._raisedHand = raisedHand;
        }

        get identifier() { return sam_call_identifier.getMri(this._raisedHand.identifier) }
    }

    class sam_raised_hand_map extends sam_object_map {
        constructor() {
            super(
                rh => { return sam_call_identifier.getMri(rh.identifier) },
                rh => { return new sam_raised_hand(rh) },
                rh => { return new sam_raised_hand_changed_event_args(rh) },
                rh => { return new sam_lowered_hand_changed_event_args(rh) });

            sam_logger.verbose('same_raised_hand_map.constructor');
        }
    }

    class sam_raise_hand_call_feature extends sam_call_feature {
        constructor(call) {
            super(
                call.feature(document._MeshGlobals.AzureCommunication.Calling.Features.RaiseHand),
                sam_handle_type.raise_hand_call_feature)

            this._raisedHands = new sam_raised_hand_map();
            this._raisedHands.update({ added: this._feature.getRaisedHands(), removed: [] })
            this._feature.on("raisedHandEvent", this._onHandRaised);
            this._feature.on("loweredHandEvent", this._onHandLowered);

            sam_logger.verbose('sam_raise_hand_call_feature.constructor - handle: ' + this.peekHandle())
        }

        _onHandRaised = (args) => {
            sam_logger.info('sam_raise_hand_call_feature._onHandRaised - handle: ' + this.peekHandle())
            let newRaisedHands = this._feature.getRaisedHands().filter(rh => {
                return sam_call_identifier.getMri(rh.identifier) == sam_call_identifier.getMri(args.identifier)
            });
            this._raisedHands.update({ added: newRaisedHands, removed: [] })
        }

        _onHandLowered = (args) => {
            sam_logger.info('sam_raise_hand_call_feature._onHandLowered - handle: ' + this.peekHandle())
            this._raisedHands.update({ added: [], removed: [args] })
        }

        get raisedHands() { return this._raisedHands.objects; }

        async raiseHandAsync() { await this._feature.raiseHand() }
        async lowerHandAsync() { await this._feature.lowerHand() }
        async lowerAllHandsAsync() { await this._feature.lowerAllHands() }

        destructor() {
            sam_logger.verbose('sam_raise_hand_call_feature.destructor - handle: ' + this.peekHandle())
            this._feature.off("raisedHandEvent", this._onHandRaised);
            this._feature.off("loweredHandEvent", this._onHandLowered);
            this._raisedHands.clear();
            super.destructor()
        }

        setHandRaised(value, value_fn) {
            this._raisedHands.setObjectAdded(value, value_fn);
        }

        setHandLowered(value, value_fn) {
            this._raisedHands.setObjectRemoved(value, value_fn);
        }
    }

    class sam_data_channel_receiver_map extends sam_object_map {
        constructor() {
            super(
                r => { return r },
                r => { return new sam_data_channel_receiver(r) }
            )
        }
    }

    // TODO: Get this from TSCalling like we do from slimcore for native ABI?
    const DataId = {
        DATA_ID_MESH_CONTROL: 19,
        DATA_ID_MESH_DATA: 20,

        DATA_ID_MASK: 0x80000000
    }

    class sam_data_channel_sender_options extends sam_object {
        constructor() {
            super()

            // Matches defaults in DataChannelSenderCreateOptions.cpp
            this.channelId = 0
            this.bitrateInKbps = 32
            this.priority = sam_data_channel_priority.normal
            this.reliability = sam_data_channel_reliability.lossy

            sam_logger.verbose('sam_data_channel_sender_options.constructor - handle: ' + this.peekHandle())
        }

        get nativeOptions() {

            // https://learn.microsoft.com/en-us/javascript/api/azure-communication-services/%40azure/communication-calling/datachannelsenderopenoptions?view=azure-communication-services-js
            return {
                channelId: this.channelId,
                bitrateInKbps: this.bitrateInKbps,
                priority: abiToNativeDataChannelPriority(this.priority),
                reliability: abiToNativeDataChannelReliability(this.reliability),
                participants: []
            }
        }
    }

    class sam_data_channel_sender extends sam_object {
        constructor(nativeOptions, sender, adapterPromise) {
            super()
            this._options = nativeOptions;
            this._sender = sender;
            this._adapterPromise = adapterPromise;

            sam_logger.verbose('sam_data_channel_sender.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_data_channel_sender.destructor - handle: ' + this.peekHandle())

            this.close()
            super.destructor()
        }

        get channelId() { return this._sender?.channelId }
        get maxMessageSize() { return this._sender?.maxMessageSize }

        close() {
            this._sender?.close()
            this._sender = undefined;

            this._adapter?.dispose();
            this._adapter = undefined;

            this._adapterPromise?.then(a => a?.dispose());
            this._adapterPromise = undefined
        }

        async sendMessage(data) {
            if (this._adapterPromise) {
                this._adapter = await this._adapterPromise;
                this._adapterPromise = undefined;
            }
            await this._sender?.sendMessage(data)
            await this._adapter?.send(data, [])
        }
    }

    class sam_data_channel_call_feature extends sam_call_feature {
        constructor(call) {
            super(
                call.feature(document._MeshGlobals.AzureCommunication.Calling.Features.DataChannel),
                sam_handle_type.data_channel_call_feature)

            
            this._activeChanged = new sam_callback_pair();
            this._dataChannelReceiverCreated = new sam_callback_pair();
            this._dataChannelReceivers = new sam_data_channel_receiver_map();
            this._feature.on("dataChannelReceiverCreated", this._onDataChannelReceiverCreated)
            this._feature._tsCall.dataChannel.on("onDataChannelStateUpdated", this._onDataChannelStateUpdated)
            this._onDataChannelStateUpdated(this._feature._tsCall.dataChannel.state)

            sam_logger.verbose('sam_data_channel_call_feature.constructor - handle: ' + this.peekHandle())
        }

        _onDataChannelStateUpdated = (_state) => {

            // The 'mainChannel' doesn't exist until the data channel is active, once it is, bind to the main channel
            // for connection, which is necessary to avoid send message failures.
            if(_state === 'Active') {
                this._feature._tsCall.dataChannel.mainChannel.on("onStateChanged", this._onMainChannelStateChanged)
                if(this._feature._tsCall.dataChannel.mainChannel.state === 'Connected') {
                    this._onMainChannelStateChanged(this._feature._tsCall.dataChannel.mainChannel.state)
                }
            }
        }

        _onMainChannelStateChanged = () => {
            if (this._activeChanged.isValid()) {
                let argsPtr = new sam_object_ptr(new sam_property_changed_event_args(), true);
                try {
                    this._activeChanged.invoke('i', [argsPtr.peekHandle()])
                }
                catch (error) {
                    sam_logger.error('sam_data_channel_call_feature._onMainChannelStateUpdated - exception invoking _activeChanged: ' + error)
                }
                finally {
                    argsPtr.reset();
                }
            }
        }

        _onDataChannelReceiverClosed = (nativeReceiver) => {
            nativeReceiver.off("close", this._onDataChannelReceiverClosed);
            this._dataChannelReceivers.update({ added: [], removed: [nativeReceiver] })
        }

        _onDataChannelReceiverCreated = (nativeReceiver) => {
            this._dataChannelReceivers.update({ added: [nativeReceiver], removed: [] })
            nativeReceiver.on("close", this._onDataChannelReceiverClosed);

            let receiver = this._dataChannelReceivers.find(nativeReceiver);
            if (this._dataChannelReceiverCreated.isValid()) {
                let argsPtr = new sam_object_ptr(new sam_data_channel_receiver_created_event_args(receiver), true);
                try {
                    this._dataChannelReceiverCreated.invoke('i', [argsPtr.peekHandle()])
                }
                catch (error) {
                    sam_logger.error('sam_data_channel_call_feature._onDataChannelReceiverCreated - exception invoking _dataChannelReceiverCreated: ' + error)
                }
                finally {
                    argsPtr.reset();
                }
            }
        }

        destructor() {
            sam_logger.verbose('sam_data_channel_call_feature.destructor - handle: ' + this.peekHandle())
            this._feature.off("dataChannelReceiverCreated", this._onDataChannelReceiverCreated)
            this._feature._tsCall.dataChannel.off("onDataChannelStateUpdated", this._onDataChannelStateUpdated )
            this._feature._tsCall.dataChannel.mainChannel?.off("onStateChanged", this._onMainChannelStateChanged)

            for (let receiver of this._dataChannelReceivers.objects) {
                receiver.off('close', this._onDataChannelReceiverClosed);
            }
            this._dataChannelReceivers.clear();

            super.destructor()
        }

        get isActive() { 
            return this._feature._tsCall.dataChannel.mainChannel?.state === 'Connected'
        }
        get receivers() { return this._dataChannelReceivers.objects }

        createDataChannelSender(options) {
            try {
                let nativeOptions = options.nativeOptions;

                let sender;
                let adapterPromise;
                switch (nativeOptions.channelId) {
                    case DataId.DATA_ID_MESH_CONTROL | DataId.DATA_ID_MASK: {
                        sam_logger.info('sam_data_channel_call_feature.createDataChannelSender - creating data channel adapater for data id: ' + DataId.DATA_ID_MESH_CONTROL)
                        adapterPromise = this._feature.createDataChannelAdapter(DataId.DATA_ID_MESH_CONTROL);
                        break;
                    }
                    default: {

                        if (nativeOptions.channelId & DataId.DATA_ID_MASK) {
                            let oldChannelId = nativeOptions.channelId;
                            nativeOptions.channelId = DataId.DATA_ID_MASK + (oldChannelId ^ DataId.DATA_ID_MASK);
                            sam_logger.info(`sam_data_channel_call_feature.createDataChannelSender - converted channelId masking logic: ${oldChannelId} became ${nativeOptions.channelId}`)
                        }

                        sam_logger.info('sam_data_channel_call_feature.createDataChannelSender - Creating data channel sender for channel id: ' + nativeOptions.channelId)
                        sender = this._feature.createDataChannelSender(nativeOptions);
                        break;
                    }
                }

                return new sam_data_channel_sender(nativeOptions, sender, adapterPromise)
            }
            catch (error) {
                this.setErrorDetails(error.toString())
                throw error
            }
        }

        setDataChannelReceiverCreated(value, value_fn) {
            this._dataChannelReceiverCreated.set(value, value_fn);
        }

        setActiveChanged(value, value_fn) {
            this._activeChanged.set(value, value_fn);
        }
    }

    class sam_data_channel_receiver extends sam_object {
        constructor(receiver) {
            super();
            this._receiver = receiver;
            this._closed = new sam_callback_pair()
            this._messageReceived = new sam_callback_pair();

            this._receiver.on('closed', this._onClosed);
            this._receiver.on('messageReady', this._onMessageReady);

            sam_logger.verbose('sam_data_channel_receiver.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_data_channel_receiver.destructor - handle: ' + this.peekHandle())

            this._receiver.off('closed', this._onClosed);
            this._receiver.off('messageReady', this._onMessageReady);

            super.destructor();
        }

        _onClosed = () => {
            if (this._closed.isValid()) {
                let argsPtr = new sam_object_ptr(new sam_property_changed_event_args(), true);
                try {
                    this._closed.invoke('i', [argsPtr.peekHandle()])
                }
                finally {
                    argsPtr.reset();
                }
            }
        }

        _onMessageReady = () => {
            if (this._messageReceived.isValid()) {
                let argsPtr = new sam_object_ptr(new sam_property_changed_event_args(), true);
                try {
                    this._messageReceived.invoke('i', [argsPtr.peekHandle()])
                }
                finally {
                    argsPtr.reset();
                }
            }
        }

        get channelId() { return this._receiver.channelId }
        get senderIdentifier() { return sam_call_identifier.getMri(this._receiver.senderParticipantIdentifier) }

        readMessage() {
            let message = this._receiver.readMessage()
            if (message) {
                return new sam_data_channel_message(message);
            }
            return undefined;
        }

        setClosed(value, value_fn) {
            this._closed.set(value, value_fn);
        }

        setMessageReceived(value, value_fn) {
            this._messageReceived.set(value, value_fn);
        }
    }

    class sam_data_channel_receiver_created_event_args extends sam_object {
        constructor(receiver) {
            super();
            this._receiver = new sam_object_ptr(receiver)
            sam_logger.verbose('sam_data_channel_receiver_created_event_args.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_data_channel_receiver_created_event_args.destructor - handle: ' + this.peekHandle())
            this._receiver.reset();
            super.destructor();
        }

        get receiver() { return this._receiver.get() }
    }

    class sam_data_channel_message extends sam_object {
        constructor(message) {
            super();
            this._message = message;
            sam_logger.verbose('sam_data_channel_message.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_data_channel_message.destructor - handle: ' + this.peekHandle())
            
            if (this._data) {
                let offset = this._data.byteOffset;
                this._data = undefined
                _free(offset);
            }

            super.destructor();
        }

        get sequenceNumber() { return this._message.sequenceNumber }
        get data() {
            if (!this._data) {
                let offset = _malloc(this._message.data.length)
                HEAPU8.set(this._message.data, offset);
                this._data = new Uint8Array(HEAPU8.buffer, offset, this._message.data.length);
            }
            return this._data
        }
    }

    class sam_property_changed_event_args extends sam_object { }

    class sam_media_statistics_report_received_event_args extends sam_object {
        constructor(args) {
            super()
            this._report = new sam_object_ptr(new sam_media_statistics_report(args), true);
            sam_logger.verbose('sam_media_statistics_report_received_event_args.constructor - handle: ' + this.peekHandle())
        }
        destructor() {
            sam_logger.verbose('sam_media_statistics_report_received_event_args.destructor - handle: ' + this.peekHandle())
            this._report.reset();
            super.destructor()
        }

        get report() { return this._report.get() }
    }

    class sam_media_statistics_report extends sam_object {
        constructor(report) {
            super()
            this._report = report;
        }

        get mediaStatsJson() {
            return JSON.stringify(this._report ?? {});
        }
    }

    class sam_raised_hand_changed_event_args extends sam_object {
        constructor(args) {
            super();
            this._args = args;
            sam_logger.verbose('sam_raised_hand_changed_event_args.constructor - handle: ' + this.peekHandle())
        }

        get participant() { return sam_call_identifier.getMri(this._args.identifier) }
    }

    class sam_lowered_hand_changed_event_args extends sam_object {
        constructor(args) {
            super();
            this._args = args;
            sam_logger.verbose('sam_lowered_hand_changed_event_args.constructor - handle: ' + this.peekHandle())
        }

        get participant() { return sam_call_identifier.getMri(this._args.identifier) }
    }

    class sam_call_identifier extends sam_object {
        static getMri(identifier) {
            if (typeof identifier.communicationUserId === 'string') {
                return identifier.communicationUserId;
            }
            else if (typeof identifier.phoneNumber === "string") {
                if (identifier.rawId) return `${identifierKind.rawId}`;
                if (identifierKind.phoneNumber) return `4:${identifier.phoneNumber}`;
            }
            else if (typeof identifier.microsoftTeamsUserId === "string") {
                if (identifier.rawId) return identifier.rawId;
                if (identifier.microsoftTeamsUserId) {
                    if (identifier.isAnonymous) return `8:teamsvisitor:${identifier.microsoftTeamsUserId}`;
                    if ("public" === identifier.cloud) return `8:orgid:${identifier.microsoftTeamsUserId}`;
                    if ("dod" === identifier.cloud) return `8:dod:${identifier.microsoftTeamsUserId}`;
                    if ("gcch" === identifier.cloud) return `8:gcch:${identifier.microsoftTeamsUserId}`;
                    if (!identifier.cloud) return `8:orgid:${identifier.microsoftTeamsUserId}`
                }
            }
            else if (typeof identifier.id === "string") {
                return identifierKind.id;
            }

            return undefined;
        }

        constructor(mri, handleType) {
            super(handleType)
            this.mri = mri;
        }
    }

    class sam_unknown_call_identifier extends sam_call_identifier {
        constructor(mri) { super(mri, sam_handle_type.unknown_call_identifier) }
    }
    class sam_user_call_identifier extends sam_call_identifier {
        constructor(mri) {
            super(mri, sam_handle_type.user_call_identifier)
        }
    }
    class sam_microsoft_teams_user_call_identifier extends sam_call_identifier {
        constructor(mri, isAnonymous) {
            super(mri, sam_handle_type.microsoft_teams_user_call_identifier);
            this.isAnonymous = isAnonymous;
            this.cloudEnvironment = sam_call_cloud_environment.public;
        }
    }
    class sam_phone_number_call_identifier extends sam_call_identifier {
        constructor(mri) { super(mri, sam_handle_type.phone_number_call_identifier) }
    }

    class sam_join_meeting_locator extends sam_object {
        constructor(handleType) { super(handleType) }
    }
    class sam_group_call_locator extends sam_join_meeting_locator {
        constructor(groupIdGuid) {
            super(sam_handle_type.group_call_locator)
            this._groupIdGuid = groupIdGuid;
            sam_logger.verbose('sam_group_call_locator.constructor handle: ' + this.peekHandle() + ', groupId: ' + this.groupId)
        }

        get groupIdGuid() {
            return this._groupIdGuid;
        }

        get groupId() {
            return this._groupIdGuid.toString();
        }
    }

    class sam_teams_meeting_link_locator extends sam_join_meeting_locator {
        constructor(meetingLink) {
            super(sam_handle_type.teams_meeting_link_locator)
            this._meetingLink = meetingLink;
        }

        get meetingLink() {
            return this._meetingLink;
        }
    }

    class sam_call_options extends sam_object {
        constructor() {
            super()
            this._incomingAudioOptions = new sam_object_ptr()
            this._outgoingAudioOptions = new sam_object_ptr()
            this._incomingVideoOptions = new sam_object_ptr()
            this._outgoingVideoOptions = new sam_object_ptr()
            sam_logger.verbose('sam_call_options.constructor - handle: ' + this.peekHandle())
        }

        destructor() {
            sam_logger.verbose('sam_call_options.destructor - handle: ' + this.peekHandle())
            this._incomingAudioOptions.reset()
            this._outgoingAudioOptions.reset()
            this._incomingVideoOptions.reset()
            this._outgoingVideoOptions.reset()
            super.destructor();
        }

        get incomingAudioOptions() {
            return this._incomingAudioOptions.get()
        }
        set incomingAudioOptions(samObjectOrHandleOrPtr) {
            this._incomingAudioOptions.set(samObjectOrHandleOrPtr)
        }
        get outgoingAudioOptions() {
            return this._outgoingAudioOptions.get()
        }
        set outgoingAudioOptions(samObjectOrHandleOrPtr) {
            this._outgoingAudioOptions.set(samObjectOrHandleOrPtr)
        }
        get incomingVideoOptions() {
            return this._incomingVideoOptions.get()
        }
        set incomingVideoOptions(samObjectOrHandleOrPtr) {
            this._incomingVideoOptions.set(samObjectOrHandleOrPtr)
        }
        get outgoingVideoOptions() {
            return this._outgoingVideoOptions.get()
        }
        set outgoingVideoOptions(samObjectOrHandleOrPtr) {
            this._outgoingVideoOptions.set(samObjectOrHandleOrPtr)
        }

        get nativeOptions() {
            // Todo: Flush out options
            return {
                audioOptions: {
                    muted: this.outgoingAudioOptions?.isMuted ?? false,
                },
                videoOptions: {}
            }
        }
    }

    class sam_join_call_options extends sam_call_options {
        constructor() {
            super(sam_handle_type.join_call_options)
            sam_logger.verbose('sam_join_call_options.constructor - handle: ' + this.peekHandle())
        }
    }
    class sam_hang_up_options extends sam_object {
        constructor() {
            super()
            this.forEveryone = false

            sam_logger.verbose('sam_hang_up_options.constructor - handle: ' + this.peekHandle())
        }
    }

    class sam_incoming_audio_options extends sam_object {
        constructor() {
            super()
            this.isMuted = false
            this._incomingAudioStream = new sam_object_ptr();
            sam_logger.verbose('sam_incoming_audio_options.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_incoming_audio_options.destructor - handle: ' + this.peekHandle());
            this._incomingAudioStream.reset();

            super.destructor();
        }

        get incomingAudioStream() { return this._incomingAudioStream.get() }
        set incomingAudioStream(samObjectOrHandleOrPtr) { this._incomingAudioStream.set(samObjectOrHandleOrPtr) }
    }

    class sam_outgoing_audio_options extends sam_object {
        constructor() {
            super()
            this._filters = new sam_object_ptr();
            this._stream = new sam_object_ptr();
            this.isMuted = false
            sam_logger.verbose('sam_outgoing_audio_options.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_outgoing_audio_options.destructor - handle: ' + this.peekHandle());
            this._filters.reset();
            this._stream.reset();
            super.destructor();
        }

        get filters() { return this._filters.get() }
        set filters(samObjectOrHandleOrPtr) { this._filters.set(samObjectOrHandleOrPtr) }

        get stream() { return this._stream.get() }
        set stream(samObjectOrHandleOrPtr) { this._stream.set(samObjectOrHandleOrPtr) }
    }

    class sam_incoming_video_options extends sam_object {
        constructor() {
            super();
            this.streamType = sam_video_stream_type.remote_incoming;
            this._constraints = new sam_object_ptr()

            sam_logger.verbose('sam_incoming_video_options.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_incoming_video_options.destructor - handle: ' + this.peekHandle());
            this._constraints.reset();
            super.destructor();
        }

        // We only support the texture type in WebGL
        get frameType() { return sam_raw_video_frame_type.texture }

        get constraints() { return this._constraints.get() }
        set constraints(samObjectOrHandleOrPtr) { this._constraints.set(samObjectOrHandleOrPtr) }
    }

    class sam_outgoing_video_options extends sam_object {
        constructor() {
            super();
            this._streams = [];
            this._constraints = new sam_object_ptr();
            sam_logger.verbose('sam_outgoing_video_options.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_outgoing_video_options.destructor - handle: ' + this.peekHandle());
            for (let s of this._streams) {
                s.reset();
            }
            this._streams = []
            this._constraints.reset();
            super.destructor();
        }

        get streams() { return this._streams }
        set streams(samObjectOrHandleOrPtrIterable) {

            // Reset after update to ensure object isn't destroyed in between
            let oldStreams = this._streams;

            this._streams = []
            for (let s of samObjectOrHandleOrPtrIterable) {
                this._streams[this._streams.length - 1] = new sam_object_ptr(s)
            }

            for (let s of oldStreams) { s.reset(); }
        }

        get constraints() { return this._constraints.get() }
        set constraints(samObjectOrHandleOrPtr) { this._constraints.set(samObjectOrHandleOrPtr) }
    }

    class sam_outgoing_audio_filters extends sam_object { }
    class sam_incoming_video_constraints extends sam_object { }
    class sam_outgoing_video_constraints extends sam_object { }

    class sam_raw_audio_stream_properties extends sam_object {
        constructor(handleType) {
            super(handleType)

            this.channelMode = sam_audio_stream_channel_mode.mono
            this.format = sam_audio_stream_format.pcm16_bit
            this.sampleRate = sam_audio_stream_sample_rate.hz_16000
        }
    }

    class sam_raw_incoming_audio_stream_properties extends sam_raw_audio_stream_properties {
        constructor() {
            super(sam_handle_type.raw_incoming_audio_stream_properties)
        }
    }

    class sam_raw_outgoing_audio_stream_properties extends sam_raw_audio_stream_properties {
        constructor() {
            super(sam_handle_type.raw_outgoing_audio_stream_properties)
            this.bufferDuration = sam_audio_stream_buffer_duration.ms10;
        }
    }

    class sam_raw_audio_stream_options extends sam_object {
        constructor(handleType) { super(handleType) }
    }

    class sam_raw_outgoing_audio_stream_options extends sam_raw_audio_stream_options {
        constructor() {
            super(sam_handle_type.raw_outgoing_audio_stream_options)
            this._properties = new sam_object_ptr()
        }

        destructor() {
            this._properties.reset();
            super.destructor()
        }

        get properties() { return this._properties.get() }
        set properties(samObjectOrHandleOrPtr) { this._properties.set(samObjectOrHandleOrPtr) }
    }

    class sam_raw_incoming_audio_stream_options extends sam_raw_audio_stream_options {
        constructor() {
            super(sam_handle_type.raw_incoming_audio_stream_options)
            this.receiveUnmixedAudio = false
            this._properties = new sam_object_ptr()
        }

        destructor() {
            this._properties.reset();
            super.destructor()
        }

        get properties() { return this._properties.get() }
        set properties(samObjectOrHandleOrPtr) { this._properties.set(samObjectOrHandleOrPtr) }
    }

    class sam_call_audio_stream extends sam_object {
        constructor(handleType) { super(handleType) }
    }

    class sam_incoming_audio_stream extends sam_call_audio_stream {
        constructor(handleType) { super(handleType) }
    }

    class sam_outgoing_audio_stream extends sam_call_audio_stream {
        constructor(handleType) { super(handleType) }
    }

    class sam_call_video_stream extends sam_object {
        constructor(direction, type, videoStream, handleType) {
            super(handleType)
            this._direction = direction;
            this._type = type;
            this._videoStream = videoStream;
            this._stateChangedListeners = []

            this._state = sam_video_stream_state.not_available
            this._videoStream.on('isAvailableChanged', this._onAvailableChanged)
            this._onAvailableChanged();
        }

        get id() { return this._videoStream.id }

        // sam_stream_direction
        get direction() { return this._direction }
        // sam_video_stream_source_type
        get sourceType() {
            return nativeToAbiVideoStreamSourceType(this._videoStream.mediaStreamType);
        }
        // sam_video_stream_state
        get state() { return this._state; }
        _setState(state) {
            if (state !== this._state) {
                this._state = state;

                let listeners = this._stateChangedListeners.slice();
                for (let l of listeners) {
                    l();
                }

                if (this._state === sam_video_stream_state.stopped) {
                    if (!this._videoStream.isAvailable) {
                        this._setState(sam_video_stream_state.not_available);
                    }
                    else {
                        this._setState(sam_video_stream_state.available);
                    }
                }
            }
        }

        // sam_video_stream_type
        get type() { return this._type }

        on(event, listener) {
            if (typeof listener !== 'function') {
                throw new Error(`Event listener was not a function: ${listener}`);
            }

            if (event === 'stateChanged') {
                this._stateChangedListeners.push(listener)
            }
            else {
                throw new Error(`Unrecognized event: ${event}`);
            }
        }

        off(event, listener) {
            if (typeof listener !== 'function') {
                throw new Error(`Event listener was not a function: ${listener}`);
            }

            if (event === 'stateChanged') {
                this._stateChangedListeners =
                    this._stateChangedListeners.filter(l => l != listener);
            }
            else {
                throw new Error(`Unrecognized event: ${event}`);
            }
        }

        _onAvailableChanged = () => {
            if (!this._videoStream.isAvailable) {
                if (this._state === sam_video_stream_state.started) {
                    if (typeof this.stop === 'function') {
                        this.stop();
                    }
                }

                // If 'stop' happened above this may be a no-op
                this._setState(sam_video_stream_state.not_available);
            }
            else {
                this._setState(sam_video_stream_state.available);
            }
        }
    }

    class sam_outgoing_video_stream extends sam_call_video_stream {
        constructor(type, videoStream, handleType) { super(sam_stream_direction.outgoing, type, videoStream, handleType) }
    }

    class sam_incoming_video_stream extends sam_call_video_stream {
        constructor(type, remoteParticipantHandle, videoStream, handleType) {
            super(sam_stream_direction.incoming, type, videoStream, handleType)
            this._remoteParticipant = new sam_object_weak_ptr(remoteParticipantHandle);
        }

        get participant() {
            return this._remoteParticipant.get();
        }

        get participantSourceId() {
            return this._videoStream.remoteParticipantId;
        }
    }

    class sam_local_video_stream extends sam_outgoing_video_stream {
        constructor() { super(sam_video_stream_type.local_outgoing, undefined, sam_handle_type.local_video_stream) }
    }

    class sam_raw_outgoing_video_stream extends sam_outgoing_video_stream {
        constructor(type, videoStream, handleType) { super(type, videoStream, handleType) }
    }

    class sam_screenshare_outgoing_video_stream extends sam_raw_outgoing_video_stream {
        constructor() { super(sam_video_stream_type.screen_share_outgoing, undefined, sam_handle_type.screen_share_outgoing_video_stream) }
    }

    class sam_virtual_outgoing_video_stream extends sam_raw_outgoing_video_stream {
        constructor() { super(sam_video_stream_type.virtual_outgoing, undefined, sam_handle_type.virtual_outgoing_video_stream) }
    }


    class sam_raw_video_frame_received_event_args extends sam_object {
        constructor(videoStreamId, frame) {
            super();
            this._videoStreamId = videoStreamId
            this._frame = new sam_object_ptr(frame)
            sam_logger.verbose('sam_raw_video_frame_received_event_args.constructor - handle: ' + this.peekHandle());
        }

        get videoStreamId() { return this._videoStreamId; }
        get frame() { return this._frame.get() }
    }

    class sam_video_stream_format extends sam_object {
        constructor(width, height, pixelFormat) {
            super();
            this._width = width ?? 0;
            this._height = height ?? 0;
            this._pixelFormat =
                (pixelFormat !== undefined ? pixelFormat : sam_video_stream_pixel_format.rgba);
        }

        get width() { return this._width; }
        set width(w) { this._width = w }

        get height() { return this._height; }
        set height(h) { this._height = h }

        get pixelFormat() { return this._pixelFormat }
        set pixelFormat(pf) { this._pixelFormat = pf }
    }

    class sam_raw_video_frame extends sam_object {
        constructor(handleType) {
            super(handleType);
            this._streamFormat = new sam_object_ptr(new sam_video_stream_format(), true)
        }

        get type() {
            if (this.handleType === sam_handle_type.raw_video_frame_texture) {
                return sam_raw_video_frame_type.texture;
            }
            else {
                return sam_raw_video_frame_type.buffer;
            }
        }
        get streamFormat() { return this._streamFormat.get() }
    }

    class sam_raw_video_frame_texture extends sam_raw_video_frame {
        constructor() {
            super(sam_handle_type.raw_video_frame_texture)
            this._texture = createTexture();

            sam_logger.verbose('sam_raw_video_frame_texture.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_raw_video_frame_texture.destructor - handle: ' + this.peekHandle());
            if (this._texture) {
                destroyTexture(this._texture);
                this._texture = undefined;
            }

            super.destructor();
        }

        update(video) {
            this.streamFormat.width = video.videoWidth;
            this.streamFormat.height = video.videoHeight;

            GLctx.bindTexture(GLctx.TEXTURE_2D, this._texture);

            GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_WRAP_S, GLctx.CLAMP_TO_EDGE);
            GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_WRAP_T, GLctx.CLAMP_TO_EDGE);
            GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_MIN_FILTER, GLctx.LINEAR);

            GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, true);
            GLctx.texImage2D(GLctx.TEXTURE_2D, 0, GLctx.RGBA, GLctx.RGBA, GLctx.UNSIGNED_BYTE, video);
            GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, false);
        }

        get texture() { return this._texture }
    }

    class sam_raw_incoming_video_stream extends sam_incoming_video_stream {
        constructor(remoteParticipantHandle, remoteVideoStream) {
            super(sam_video_stream_type.raw_incoming, remoteParticipantHandle, remoteVideoStream, sam_handle_type.raw_incoming_video_stream)

            this._rawVideoFrameReceived = new sam_callback_pair();
            this._frame = new sam_object_ptr()
        }

        setRawVideoFrameReceived(value, value_fn) {
            this._rawVideoFrameReceived.set(value, value_fn);
        }

        start() {

            // already started
            if (this._renderer) { return }

            this._renderer = new document._MeshGlobals.AzureCommunication.Calling.VideoStreamRenderer(this._videoStream);
            this._renderer.createView().then(this._onViewCreated, this._onViewFailed);
            this._setState(sam_video_stream_state.started);
        }

        stop() {

            // already stopped
            if (!this._renderer) { return; }

            this._frame.reset()

            if (this._animationRegistrationId) {
                window.cancelAnimationFrame(this._animationRegistrationId)
                this._animationRegistrationId = undefined;
            }

            if (this._view) {
                this._view.target?.firstChild?.removeEventListener('error', this._onVideoError)
                this._view.dispose();
                this._view = undefined;
            }

            this._renderer?.dispose()
            this._renderer = undefined;

            this._setState(sam_video_stream_state.stopped);
        }

        _onViewCreated = (view) => {
            this._view = view;
            this._startRendering();
        }

        _onViewFailed = () => {
            sam_logger.error("Failed to create view for raw incoming video stream")
            this.stop()
        }

        _startRendering = () => {

            // We were stopped while waiting for the target
            if (!this._view) { return; }

            // HTMLVideoElement
            const videoElement = this._view.target?.firstChild
            if (!videoElement || videoElement.videoWidth <= 0 || videoElement.videoHeight <= 0) {

                // Video was not ready, check again next frame
                setTimeout(this._startRendering)
                return;
            }

            // Bind for errors and signal any existing
            videoElement.addEventListener('error', this._onVideoError)
            if (videoElement.error) {
                this._onVideoError()
            }

            this._frame.set(new sam_raw_video_frame_texture(), true);

            this._lastFrameUpdateTime = undefined;
            this._updateFrame(window.performance.now())
        }

        _updateFrame = (timestamp) => {
            // In case we've stopped rendering but the callback still fires
            if (!this._view) { return; }

            // 30 FPS video
            const updateTextureDeltaTime = 1000 / 30;

            // Clear any animation registration id, but capture if we're animation or video callback
            const isVideoRenderCallback = this._animationRegistrationId === undefined
            this._animationRegistrationId = undefined;

            const videoElement = this._view.target.firstChild

            // Render if it's the first time, a video frame has happened, or the delta time has passed
            const elapsedTime = this._lastFrameUpdateTime ? (timestamp - this._lastFrameUpdateTime) : updateTextureDeltaTime
            const delayRemaining = updateTextureDeltaTime - elapsedTime
            if (isVideoRenderCallback || delayRemaining <= 0) {
                // Presereve any over step of delay so that error does not accumulate
                this._lastFrameUpdateTime = timestamp + delayRemaining;

                this._frame.get().update(videoElement);

                if (this._rawVideoFrameReceived.isValid()) {
                    let argsPtr = new sam_object_ptr(
                        new sam_raw_video_frame_received_event_args(this.id, this._frame), true)
                    try {
                        this._rawVideoFrameReceived.invoke('i', [argsPtr.peekHandle()])
                    }
                    finally {
                        argsPtr.reset();
                    }
                }
            }

            if (videoElement.requestVideoFrameCallback) {
                videoElement.requestVideoFrameCallback(this._updateFrame)
            }
            else {
                this._animationRegistrationId = window.requestAnimationFrame(this._updateFrame)
            }
        }

        _onVideoError = () => {
            const videoElement = this._view.target.firstChild
            sam_logger.error(`sam_raw_incoming_video_stream._onVideoError - code: ${videoElement.error.code}, message: ${videoElement.error.message}`)
        }
    }

    class sam_remote_incoming_video_stream extends sam_incoming_video_stream {
        constructor(remoteParticipantHandle, remoteVideoStream) {
            super(sam_video_stream_type.remote_incoming, remoteParticipantHandle, remoteVideoStream, sam_handle_type.remote_video_stream)
        }
    }

    class sam_incoming_video_stream_map extends sam_object_map {
        constructor(createObjectFromUpdated) {
            super(v => { return v.id }, createObjectFromUpdated)
        }
    }

    class sam_raw_incoming_video_stream_map extends sam_incoming_video_stream_map {
        constructor(remoteParticipantHandle) {
            super((v) => { return new sam_raw_incoming_video_stream(remoteParticipantHandle, v) })
        }
    }

    class sam_remote_incoming_video_stream_map extends sam_incoming_video_stream_map {
        constructor(remoteParticipantHandle) {
            super((v) => { return new sam_remote_incoming_video_stream(remoteParticipantHandle, v) })
        }
    }

    class sam_video_stream_state_changed_event_args extends sam_object {
        constructor(stream) {
            super();
            this._callVideoStream = new sam_object_ptr(stream);

            sam_logger.verbose('sam_video_stream_state_changed_event_args.constructor - handle: ' + this.peekHandle());
        }

        destructor() {
            sam_logger.verbose('sam_video_stream_state_changed_event_args.destructor - handle: ' + this.peekHandle());
            this._callVideoStream.reset();
            super.destructor();
        }

        get stream() { return this._callVideoStream.get() }
    }

    class sam_raw_incoming_audio_stream extends sam_incoming_audio_stream {
        constructor(options) {
            super(sam_handle_type.raw_incoming_audio_stream)

            this.receiveUnmixedAudio = options.receiveUnmixedAudio;

            this._mixedAudioBufferReceived = new sam_callback_pair();
            this._unmixedAudioBufferReceived = new sam_callback_pair();

            sam_logger.verbose('sam_raw_incoming_audio_stream.constructor - handle: ' + this.peekHandle());
        }

        setMixedAudioBufferReceived(value, value_fn) {
            this._mixedAudioBufferReceived = new sam_callback_pair(value, value_fn);
        }

        setUnmixedAudioBufferReceived(value, value_fn) {
            this._unmixedAudioBufferReceived = new sam_callback_pair(value, value_fn);
        }
    }

    class sam_remote_incoming_audio_stream extends sam_incoming_audio_stream {
        constructor() { super(sam_handle_type.remote_incoming_audio_stream) }
    }

    class sam_local_outgoing_audio_stream extends sam_outgoing_audio_stream {
        constructor() { super(sam_handle_type.local_outgoing_audio_stream) }
    }

    class sam_raw_outgoing_audio_stream extends sam_outgoing_audio_stream {
        constructor(options) {
            super(sam_handle_type.raw_outgoing_audio_stream)
            this._properties = new sam_object_ptr(options.properties)
        }

        get properties() { return this._properties.get() }
    }

    class sam_promise extends sam_object {
        constructor(options) {
            super()

            this._options = options;
            this.isCanceled = false;

            sam_logger.verbose('sam_promise.constructor - handle: ' + this.peekHandle()
                + ', on_complete:' + this._options.on_complete
                + ', on_progress:' + this._options.on_progress
                + ', on_error:' + this._options.on_error);
        }

        setProgress(progress) {
            if (this._options.on_progress) {
                dynCall('vf', this._options.on_progress, [this._options.context, progress]);
            }
        }

        setObjectResult(samObjectOrHandleOrPtr) {
            // Add a reference to the object as the managed expects to have one already
            let ptr = new sam_object_ptr(samObjectOrHandleOrPtr)
            sam_logger.verbose('sam_promise.setObjectResult - handle:' + this.peekHandle() + ', object handle: ' + ptr.peekHandle())
            this._setResult((pv) => {
                sam_packed_value.copyTo(pv, sam_packed_value_type.pointer, ptr.peekHandle());
            })
        }

        setVoidResult() {
            sam_logger.verbose('sam_promise.setVoidResult - handle:' + this.peekHandle())
            this._setResult((pv) => { sam_packed_value.copyTo(pv, sam_packed_value_type.none) })
        }

        _setResult(fillPackedValueFn) {
            var stack = stackSave();
            try {
                let packedValue = stackAlloc(sam_packed_value.size);
                fillPackedValueFn(packedValue);
                dynCall('vii', this._options.on_complete, [this._options.context, packedValue]);
            }
            catch (error) {
                sam_logger.error('sam_promise._setResult error - ' + error);
                throw error
            }
            finally {
                stackRestore(stack);
            }
        }

        setError(status, message) {
            if (message) { this.setErrorDetails(message); }
            dynCall('viii', this._options.on_error, [this._options.context, this.peekHandle(), status]);
        }

        setCancelled() {
            this.isCanceled = true;
            this.setError(sam_status.operation_canceled);
        }
    }

    return {

        // Promises

        /* sam_status */ sam_promise_create: function (/* sam_promise_create_options* */ pOptions, /* sam_promise_handle* */ pPromiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_promise_create');

            let promise = new sam_promise(new sam_promise_create_options(pOptions));
            setHeap32Value(pPromiseHandle, promise.peekHandle());

            return sam_status.ok;
        },

        /* sam_status */ sam_promise_cancel: function (/* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_promise_cancel');
            sam_object.get(promiseHandle)?.setCancelled();
            return sam_status.ok;
        },

        /* sam_status */ sam_promise_destroy: function (/* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_promise_destroy');

            let promise = sam_object.get(promiseHandle);
            promise?.removeReference();
            return sam_status.ok;
        },


        // Global

        /* sam_status */ sam_set_projected_object_cleanup: function (/* sam_projected_object_cleanup_delegate */ callback) {
            sam_logger.verbose('sam_exports_impl.sam_set_projected_object_cleanup - callback: ' + callback);
            sam_object.setProjectedObjectCleanup(callback);
            return sam_status.ok;
        },

        /* sam_status */ sam_get_error_details: function (/* void * */ handle, /* const char ** */ result_message, /* const char ** */ result_requestCorrelationVector, /* const char ** */ result_responseCorrelationVector) {
            sam_logger.verbose('sam_exports_impl.sam_get_error_details - handle: ' + handle);
            let errorDetails = sam_object.get(handle)?.errorDetails;

            setHeap32Value(result_message, stringToOutParam(errorDetails?.message ?? ''));
            setHeap32Value(result_requestCorrelationVector, stringToOutParam(errorDetails?.requestCorrelationVector ?? ''));
            setHeap32Value(result_responseCorrelationVector, stringToOutParam(errorDetails?.responseCorrelationVector ?? ''));
            return sam_status.ok;
        },
        /* sam_status */ sam_get_handle_type: function (/* void * */ handle, /* sam_handle_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_get_handle_type - handle: ' + handle);
            let handleType = sam_object.get(handle)?.handleType ?? sam_handle_type.unknown;
            setHeap32Value(result, handleType)
            return sam_status.ok
        },

        // sam_call_client

        /* sam_status */ sam_call_client_create: function (/* sam_call_client_handle* */ instance) {
            sam_logger.info('sam_exports_impl.sam_call_client_create');
            let callClient = new sam_call_client();
            setHeap32Value(instance, callClient.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_create_call_client_options_options: function (/* sam_call_client_options_handle */ options, /* sam_call_client_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_create_call_client_options_options');
            let callClient = new sam_call_client(sam_object.get(options));
            setHeap32Value(instance, callClient.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_override_endpoint: function (/* sam_call_client_handle */ handle, /* const char * */ mp_loc, /* const char * */ cs_uri, /* const char * */ cc_uri) {
            sam_logger.info('sam_exports_impl.sam_call_client_override_endpoint');
            if (UTF8ToString(mp_loc) || UTF8ToString(cs_uri) || UTF8ToString(cc_uri)) {

                // TODO: implement this!
                return sam_status.not_implemented;
            }
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_release: function (/* sam_call_client_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_release - handle:' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_get_initialization_options: function (/* sam_call_client_handle */ handle, /* sam_initialization_options_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_get_initialization_options - handle:' + handle);
            setHeap32Value(result, sam_object.get(handle)?.initializationOptions?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_set_initialization_options: function (/* sam_call_client_handle */ handle, /* sam_initialization_options_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_set_initialization_options - handle:' + handle);
            sam_object.get(handle).initializationOptions = value
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_set_ring_header: function (/* sam_call_client_handle */ handle, /* const char * */ ring) {
            sam_logger.info('sam_exports_impl.sam_call_client_set_ring_header - handle:' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_client_get_device_manager_internal: function (/* sam_call_client_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_get_device_manager_internal - handle:' + handle);

            // Retain references until we're done
            let clientPtr = new sam_object_ptr(handle);
            resolveObjectPromise(promiseHandle, clientPtr.get().getDeviceManagerAsync(), false)
                .finally(() => clientPtr.reset())

            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_create_call_agent_internal: function (/* sam_call_client_handle */ handle, /* sam_internal_token_provider_handle */ token_provider, /* sam_call_agent_options_handle */ call_agent_options, /* sam_promise_handle */ promiseHandle) {
            sam_logger.info('sam_exports_impl.sam_call_client_create_call_agent_internal - handle:' + handle);

            // Retain references until we're done
            let clientPtr = new sam_object_ptr(handle);
            let tokenProviderPtr = new sam_object_ptr(token_provider);
            let callAgentOptionsPtr = new sam_object_ptr(call_agent_options);

            let promise = clientPtr.get().createCallAgentAsync(tokenProviderPtr.get(), callAgentOptionsPtr.get())
            resolveObjectPromise(promiseHandle, promise, true)
                .finally(() => {
                    callAgentOptionsPtr.reset();
                    tokenProviderPtr.reset();
                    clientPtr.reset();
                });
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_create_teams_call_agent_internal: function (/* sam_call_client_handle */ handle, /* sam_internal_token_provider_handle */ token_provider, /* sam_promise_handle */ promiseHandle) {
            sam_logger.info('sam_exports_impl.sam_call_client_create_teams_call_agent_internal - handle:' + handle);

            // Retain references until we're done
            let clientPtr = new sam_object_ptr(handle);
            let tokenProviderPtr = new sam_object_ptr(token_provider);

            let promise = clientPtr.get().createTeamsCallAgentAsync(tokenProviderPtr.get())
            resolveObjectPromise(promiseHandle, promise, true)
                .finally(() => {
                    tokenProviderPtr.reset();
                    clientPtr.reset();
                });
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_dispose: function (/* sam_call_client_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_dispose - handle:' + handle);
            return sam_status.not_implemented
        },
        /* sam_status */ sam_call_client_dispose_internal: function (/* sam_call_client_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_dispose_internal - handle:' + handle);
            return sam_status.not_implemented
        },
        /* sam_status */ sam_call_client_get_call_client_options: function (/* sam_call_client_handle */ handle, /* sam_call_client_options_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_get_call_client_options - handle:' + handle);
            let callClientOptions = sam_object.get(handle)?.options
            setHeap32Value(result, callClientOptions?.acquireHandle() ?? 0)
            return sam_status.ok
        },
        /* sam_status */ sam_call_client_get_debug_info: function (/* sam_call_client_handle */ handle, /* sam_call_debug_info_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_get_debug_info');
            return sam_status.not_implemented
        },

        // sam_call_client_options

        /* sam_status */ sam_call_client_options_create: function (/* sam_call_client_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_options_create');

            let options = new sam_call_client_options()

            // Return value
            setHeap32Value(instance, options.peekHandle());

            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_options_release: function (/* sam_call_client_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_options_release - handle:' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_options_get_diagnostics: function (/* sam_call_client_options_handle */ handle, /* sam_call_diagnostics_options_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_options_get_diagnostics - handle: ' + handle);
            let callClientOptions = sam_object.get(handle)
            let diagnostics = callClientOptions?.diagnostics;
            setHeap32Value(result, diagnostics?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_client_options_set_diagnostics: function (/* sam_call_client_options_handle */ handle, /* sam_call_diagnostics_options_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_client_options_set_diagnostics - handle:' + handle);
            sam_object.get(handle).diagnostics = sam_object.get(value);
            return sam_status.ok;
        },

        // sam_call_diagnostic_options

        /* sam_status */ sam_call_diagnostics_options_create: function (/* sam_call_diagnostics_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_create');
            let diagOptions = new sam_call_diagnostics_options();
            setHeap32Value(instance, diagOptions.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_call_diagnostics_options_release: function (/* sam_call_diagnostics_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_diagnostics_options_get_app_name: function (/* sam_call_diagnostics_options_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_get_app_name - handle: ' + handle);
            setHeap32Value(result, stringToOutParam(sam_object.get(handle).appName));
            return sam_status.ok;
        },
        /* sam_status */ sam_call_diagnostics_options_set_app_name: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_set_app_name - handle: ' + handle);
            sam_object.get(handle).appName = UTF8ToString(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_diagnostics_options_get_app_version: function (/* sam_call_diagnostics_options_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_get_app_version - handle: ' + handle);
            setHeap32Value(result, stringToOutParam(sam_object.get(handle).appVersion));
            return sam_status.ok;
        },
        /* sam_status */ sam_call_diagnostics_options_set_app_version: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_set_app_version - handle: ' + handle);
            sam_object.get(handle).appVersion = UTF8ToString(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_diagnostics_options_get_tags_flat: function (/* sam_call_diagnostics_options_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_get_tags - handle: ' + handle);
            let tags = sam_object.get(handle).tags;
            let outParam = stringsToOutparam(tags)
            setHeap32Value(result, outParam.buffer);
            setHeap32Value(result_count, outParam.length);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_diagnostics_options_set_tags: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * * */ value, /* int */ value_count) {
            sam_logger.verbose('sam_exports_impl.sam_call_diagnostics_options_set_tags - handle: ' + handle);
            sam_object.get(handle).tags = stringsFromInParam(value, value_count);
            return sam_status.ok;
        },

        // sam_initialization_options
        /* sam_status */ sam_initialization_options_addref: function (/* sam_initialization_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_create: function (/* sam_initialization_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_create');
            let options = new sam_initialization_options();
            setHeap32Value(instance, options.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_get_data_path: function (/* sam_initialization_options_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_get_data_path - handle: ' + handle);
            setHeap32Value(result, stringToOutParam(sam_object.get(handle).dataPath));
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_get_is_encrypted: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_get_is_encrypted - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle).isEncrypted);
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_get_log_file_name: function (/* sam_initialization_options_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_get_log_file_name - handle: ' + handle);
            setHeap32Value(result, stringToOutParam(sam_object.get(handle).logFileName));
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_get_stdout_logging: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_get_stdout_logging - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle).stdoutLogging);
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_release: function (/* sam_initialization_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_set_data_path: function (/* sam_initialization_options_handle */ handle, /* const char * */ value) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_set_data_path - handle: ' + handle);
            sam_object.get(handle).dataPath = UTF8ToString(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_set_is_encrypted: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8 */ value) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_set_is_encrypted - handle: ' + handle);
            sam_object.get(handle).isEncrypted = (value != 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_set_log_file_name: function (/* sam_initialization_options_handle */ handle, /* const char * */ value) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_set_log_file_name - handle: ' + handle);
            sam_object.get(handle).logFileName = UTF8ToString(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_initialization_options_set_stdout_logging: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8 */ value) {
            sam_logger.verbose('sam_exports_impl.sam_initialization_options_set_stdout_logging - handle: ' + handle);
            sam_object.get(handle).stdoutLogging = (value != 0)
            return sam_status.ok;
        },

        // sam_call_token_credential

        /* sam_status */ sam_call_token_credential_create_string_token: function (/* const char * */ token, /* sam_call_token_credential_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_credential_create_string_token');
            let callToken = new sam_call_token_credential(UTF8ToString(token));
            setHeap32Value(instance, callToken.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_credential_create_string_token_call_token_refresh_options_options: function (
            /* const char * */ token,
            /* sam_call_token_refresh_options_handle */ options,
            /* sam_call_token_credential_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_credential_create_string_token_call_token_refresh_options_options');
            let callToken = new sam_call_token_credential(UTF8ToString(token), sam_object.get(options));
            setHeap32Value(instance, callToken.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_credential_get_token: function (/* sam_call_token_credential_handle */ handle, /* sam_call_token_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_credential_get_token - handle: ' + handle);
            let callToken = sam_object.get(handle)?.token;
            setHeap32Value(result, callToken?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_credential_release: function (/* sam_call_token_credential_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_credential_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_call_token

        /* sam_status */ sam_call_token_release: function (/* sam_call_token_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_addref: function (/* sam_call_token_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_get_token: function (/* sam_call_token_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_get_token - handle: ' + handle);
            setHeap32Value(result, stringToOutParam(sam_object.get(handle)?.token ?? ''));
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_get_expires_on: function (/* sam_call_token_handle */ handle, /* int64_t* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_get_expires_on - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_call_agent_options

        /* sam_status */ sam_call_agent_options_create: function (/* sam_call_agent_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_options_create');
            let agentOptions = new sam_call_agent_options();
            setHeap32Value(instance, agentOptions.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_call_agent_options_get_display_name: function (/* sam_call_agent_options_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_options_get_display_name - handle: ' + handle);
            setHeap32Value(result, stringToOutParam(sam_object.get(handle)?.displayName));
            return sam_status.ok;
        },
        
        /* sam_status */ sam_call_agent_options_set_display_name: function (/* sam_call_agent_options_handle */ handle, /* const char * */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_options_set_display_name - handle: ' + handle);
            sam_object.get(handle).displayName = UTF8ToString(value);
            return sam_status.ok;
        },

        // sam_common_call_agent_options

        /* sam_status */ sam_common_call_agent_options_addref: function (/* sam_common_call_agent_options */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_agent_options_release: function (/* sam_common_call_agent_options */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_teams_call_agent_options

        /* sam_status */ sam_teams_call_agent_options_create: function (/* sam_teams_call_agent_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_options_create');
            let options = new sam_teams_call_agent_options();
            setHeap32Value(instance, options.peekHandle())
            return sam_status.ok;
        },

        // sam_common_call_agent

        /* sam_status */ sam_common_call_agent_addref: function (/* sam_common_call_agent_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_agent_dispose: function (/* sam_common_call_agent_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_dispose - handle: ' + handle);
            sam_object.get(handle)?.dispose()
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_agent_get_is_call_kit_enabled: function (/* sam_common_call_agent_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_get_is_call_kit_enabled - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_agent_handle_push_notification: function (/* sam_common_call_agent_handle */ handle, /* sam_push_notification_info_handle */ notification, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_handle_push_notification - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_agent_register_push_notification_internal: function (/* sam_common_call_agent_handle */ handle, /* const char * */ device_token, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_register_push_notification_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_agent_release: function (/* sam_common_call_agent_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_agent_send_call_accept_failed_telemetry: function (/* sam_common_call_agent_handle */ handle, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_send_call_accept_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_agent_send_call_attempt_failed_telemetry: function (/* sam_common_call_agent_handle */ handle, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_send_call_attempt_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_agent_send_configure_audio_session_failed_telemetry: function (/* sam_common_call_agent_handle */ handle, /* sam_bool_u8 */ is_incoming, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_send_configure_audio_session_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_agent_unregister_push_notification: function (/* sam_common_call_agent_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_agent_unregister_push_notification - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_call_agent

        /* sam_status */ sam_call_agent_get_calls: function (/* sam_call_agent_handle */ handle, /* sam_call_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_get_calls - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_agent_join_internal: function (/* sam_call_agent_handle */ handle, /* sam_join_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_join_internal - handle: ' + handle);

            let callAgent = new sam_object_ptr(handle);
            let meetingLocator = new sam_object_ptr(meeting_locator);
            let joinCallOptions = new sam_object_ptr(join_call_options);

            resolveObjectPromise(promiseHandle, callAgent.get().join(meetingLocator.get(), joinCallOptions.get()), false)
                .finally(() => {
                    joinCallOptions.reset();
                    meetingLocator.reset();
                    callAgent.reset();
                })

            return sam_status.ok;
        },
        /* sam_status */ sam_call_agent_join_internal_with_call_kit: function (/* sam_call_agent_handle */ handle, /* sam_join_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_join_internal_with_call_kit - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_agent_set_calls_updated: function (/* sam_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_calls_updated_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_set_calls_updated - handle: ' + handle);
            sam_object.get(handle)?.setCallsUpdated(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_agent_set_incoming_call_received: function (/* sam_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_call_received_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_set_incoming_call_received - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_agent_start_call_internal: function (/* sam_call_agent_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_start_call_options_handle */ options, /* sam_join_meeting_locator_handle */ meeting_locator, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_start_call_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_agent_start_call_with_context: function (/* sam_call_agent_handle */ handle, /* sam_context_handle */ context, /* const char * * */ participants, /* int */ participants_count, /* sam_start_call_options_handle */ options, /* sam_call_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_agent_start_call_with_context - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_teams_call_agent

        /* sam_status */ sam_teams_call_agent_get_calls: function (/* sam_teams_call_agent_handle */ handle, /* sam_teams_call_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_get_calls - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_teams_call_agent_join_internal: function (/* sam_teams_call_agent_handle */ handle, /* sam_join_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_join_internal - handle: ' + handle);

            let callAgent = new sam_object_ptr(handle);
            let meetingLocator = new sam_object_ptr(meeting_locator);
            let joinCallOptions = new sam_object_ptr(join_call_options);

            resolveObjectPromise(promiseHandle, callAgent.get().join(meetingLocator.get(), joinCallOptions.get()), false)
                .finally(() => {
                    joinCallOptions.reset();
                    meetingLocator.reset();
                    callAgent.reset();
                })

            return sam_status.ok;
        },
        /* sam_status */ sam_teams_call_agent_join_internal_with_call_kit: function (/* sam_teams_call_agent_handle */ handle, /* sam_join_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_join_internal_with_call_kit - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_teams_call_agent_set_calls_updated: function (/* sam_teams_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_calls_updated_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_set_calls_updated - handle: ' + handle);
            sam_object.get(handle)?.setCallsUpdated(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_teams_call_agent_set_incoming_call_received: function (/* sam_teams_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_incoming_call_received_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_set_incoming_call_received - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_teams_call_agent_start_call_internal_participants_start_teams_group_call_options_options_string_call_id: function (/* sam_teams_call_agent_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_start_teams_group_call_options_handle */ options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_start_call_internal_participants_start_teams_group_call_options_options_string_call_id - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_teams_call_agent_start_call_internal_string_participant_start_teams_call_options_options_string_call_id: function (/* sam_teams_call_agent_handle */ handle, /* const char * */ participant, /* sam_start_teams_call_options_handle */ options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_start_call_internal_string_participant_start_teams_call_options_options_string_call_id - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_teams_call_agent_start_call_with_context_context_context_participants_start_teams_group_call_options_options: function (/* sam_teams_call_agent_handle */ handle, /* sam_context_handle */ context, /* const char * * */ participants, /* int */ participants_count, /* sam_start_teams_group_call_options_handle */ options, /* sam_teams_call_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_start_call_with_context_context_context_participants_start_teams_group_call_options_options - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_teams_call_agent_start_call_with_context_context_context_string_participant_start_teams_call_options_options: function (/* sam_teams_call_agent_handle */ handle, /* sam_context_handle */ context, /* const char * */ participant, /* sam_start_teams_call_options_handle */ options, /* sam_teams_call_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_teams_call_agent_start_call_with_context_context_context_string_participant_start_teams_call_options_options - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_call_token_refresh_options

        /* sam_status */ sam_call_token_refresh_options_create_boolean_refresh_proactively: function (/* sam_bool_u8 */ refresh_proactively, /* sam_call_token_refresh_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_refresh_options_create_boolean_refresh_proactively');
            let refreshOptions = new sam_call_token_refresh_options(refresh_proactively != 0);
            setHeap32Value(instance, refreshOptions.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_refresh_options_get_refresh_proactively: function (/* sam_call_token_refresh_options_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_refresh_options_get_refresh_proactively - handle: ' + handle);
            setValue(result, sam_object.get(handle)?.refreshProactively ?? false)
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_refresh_options_release: function (/* sam_call_token_refresh_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_refresh_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_token_refresh_options_set_token_refresh_requested: function (/* sam_call_token_refresh_options_handle */ handle, /* sam_callback_cookie */ value, /* sam_call_token_refresh_requested_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_call_token_refresh_options_set_token_refresh_requested - value: ' + value + ', value_fn: ' + value_fn);
            sam_object.get(handle)?.setTokenRefreshRequested(value, value_fn);
            return sam_status.ok;
        },

        //
        // sam_device_manager
        //
        /* sam_status */ sam_device_manager_addref: function (/* sam_device_manager_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_device_manager_get_cameras: function (/* sam_device_manager_handle */ handle, /* sam_video_device_info_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_get_cameras - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_device_manager_get_microphone: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_get_microphone');
            let mic = sam_object.get(handle)?.selectedMicrophone();
            setHeap32Value(result, mic?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_device_manager_get_microphones: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_get_microphones - handle: ' + handle);
            let microphones = sam_object.get(handle)?.getMicrophones();
            setHeap32Value(result, objectsToOutParam(microphones));
            setHeap32Value(result_count, microphones?.length ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_device_manager_get_speaker: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_get_speaker - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_device_manager_get_speakers: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_get_speakers - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_device_manager_release: function (/* sam_device_manager_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_device_manager_set_cameras_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_devices_updated_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_set_cameras_updated - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_device_manager_set_device_orientation_internal: function (/* sam_device_manager_handle */ handle, /* int */ angle) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_set_device_orientation_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_device_manager_set_microphone: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle */ microphone_device) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_set_microphone - handle: ' + handle);
            let deviceManager = sam_object.get(handle);
            let microphone = sam_object.get(microphone_device);
            deviceManager.selectMicrophone(microphone); // dangling async
            return sam_status.ok;
        },
        /* sam_status */ sam_device_manager_set_microphones_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_devices_updated_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_set_microphones_updated - value: ' + value + ', value_fn: ' + value_fn);
            sam_object.get(handle)?.setOnMicrophonesUpdated(value, value_fn)
            return sam_status.ok;
        },
        /* sam_status */ sam_device_manager_set_speaker: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle */ speaker_device) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_set_speaker - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_device_manager_set_speakers_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_devices_updated_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_device_manager_set_speakers_updated - handle: ' + handle);
            return sam_status.not_implemented;
        },

        //
        // sam_audio_device_details
        //

        /* sam_status */ sam_audio_device_details_addref: function (/* sam_audio_device_details_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_audio_device_details_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_device_details_get_device_type: function (/* sam_audio_device_details_handle */ handle, /* sam_audio_device_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_audio_device_details_get_device_type - handle: ' + handle);
            let deviceType = sam_object.get(handle)?.deviceType?.toString()
            setHeap32Value(result, stringToOutParam(deviceType ?? ''))
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_device_details_get_id: function (/* sam_audio_device_details_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_audio_device_details_get_id - handle: ' + handle);
            let deviceId = sam_object.get(handle)?.id
            setHeap32Value(result, stringToOutParam(deviceId ?? ''))
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_device_details_get_is_system_default: function (/* sam_audio_device_details_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_audio_device_details_get_is_system_default - handle: ' + handle);
            let deviceIsSystemDefault = sam_object.get(handle)?.isSystemDefault ?? false;
            HEAPU8[result] = deviceIsSystemDefault ? 1 : 0;
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_device_details_get_name: function (/* sam_audio_device_details_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_audio_device_details_get_name - handle: ' + handle);
            let deviceName = sam_object.get(handle)?.name
            setHeap32Value(result, stringToOutParam(deviceName ?? ''))
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_device_details_release: function (/* sam_audio_device_details_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_audio_device_details_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // 
        // sam_audio_devices_updated_event_args
        // 

         /* sam_status */ sam_audio_devices_updated_event_args_addref: function (/* sam_audio_devices_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_audio_devices_updated_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_devices_updated_event_args_get_added_audio_devices: function (/* sam_audio_devices_updated_event_args_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_audio_devices_updated_event_args_get_added_audio_devices - handle: ' + handle);
            let added = sam_object.get(handle)?.added;
            setHeap32Value(result, objectsToOutParam(added));
            setHeap32Value(resultCount, added?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_devices_updated_event_args_get_removed_audio_devices: function (/* sam_audio_devices_updated_event_args_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_audio_devices_updated_event_args_get_removed_audio_devices - handle: ' + handle);
            let removed = sam_object.get(handle)?.removed;
            setHeap32Value(result, objectsToOutParam(removed));
            setHeap32Value(resultCount, removed?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_audio_devices_updated_event_args_release: function (/* sam_audio_devices_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_audio_devices_updated_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        //
        // sam_internal_token_provider
        //

        /* sam_status */ sam_internal_token_provider_addref: function (/* sam_internal_token_provider_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_internal_token_provider_create: function (/* sam_internal_token_provider_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_create');
            let tokenProvider = new sam_internal_token_provider();
            setHeap32Value(instance, tokenProvider.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_internal_token_provider_get_mri: function (/* sam_internal_token_provider_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_get_mri - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_internal_token_provider_parse_token: function (/* sam_internal_token_provider_handle */ handle, /* const char * */ token) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_parse_token - handle: ' + handle);
            sam_object.get(handle)?.parseToken(UTF8ToString(token))
            return sam_status.ok;
        },
        /* sam_status */ sam_internal_token_provider_release: function (/* sam_internal_token_provider_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_internal_token_provider_set_error: function (/* sam_internal_token_provider_handle */ handle, /* const char * */ error) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_set_error - handle: ' + handle);
            sam_object.get(handle)?.setError(UTF8ToString(error));
            return sam_status.ok;
        },
        /* sam_status */ sam_internal_token_provider_set_on_token_requested: function (/* sam_internal_token_provider_handle */ handle, /* sam_callback_cookie */ value, /* sam_token_requested_delegate */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_set_on_token_requested - handle: ' + handle + ', value: ' + value + ', value_fn: ' + value_fn);
            sam_object.get(handle)?.setOnTokenRequested(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_internal_token_provider_set_token: function (/* sam_internal_token_provider_handle */ handle, /* const char * */ token, /* const char * */ account_identity, /* const char * */ display_name, /* const char * */ resource_id, /* const char * */ country_code) {
            sam_logger.verbose('sam_exports_impl.sam_internal_token_provider_set_token - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_join_meeting_locator

        /* sam_status */ sam_join_meeting_locator_addref: function (/* sam_join_meeting_locator_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_join_meeting_locator_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok
        },
        /* sam_status */ sam_join_meeting_locator_release: function (/* sam_join_meeting_locator_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_join_meeting_locator_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok
        },

        // sam_group_call_locator

        /* sam_status */ sam_group_call_locator_create_guid_group_id: function (/* sam_guid */ group_id, /* sam_group_call_locator_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_group_call_locator_create_guid_group_id');
            let groupCallLocator = new sam_group_call_locator(new sam_guid(group_id));
            setHeap32Value(instance, groupCallLocator.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_group_call_locator_get_group_id: function (/* sam_group_call_locator_handle */ handle, /* sam_guid* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_group_call_locator_get_group_id - handle: ' + handle);
            let groupCallLocator = sam_object.get(handle);
            groupCallLocator?.groupIdGuid?.copyToHeap(result);
            return sam_status.ok;
        },

        // sam_teams_meeting_link_locator

        /* sam_status */ sam_teams_meeting_link_locator_create_string_meeting_link: function (/* const char * */ meeting_link, /* sam_teams_meeting_link_locator_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_teams_meeting_link_locator_create_string_meeting_link');
            let locator = new sam_teams_meeting_link_locator(UTF8ToString(meeting_link));
            setHeap32Value(instance, locator.peekHandle());
            return sam_status.ok
        },
        /* sam_status */ sam_teams_meeting_link_locator_get_meeting_link_uri: function (/* sam_teams_meeting_link_locator_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_teams_meeting_link_locator_get_meeting_link_uri - handle: ' + handle);
            let link = sam_object.get(handle)?.meetingLink
            setHeap32Value(result, stringToOutParam(link));
            return sam_status.ok
        },

        // sam_join_call_options

        /* sam_status */ sam_join_call_options_create: function (/* sam_join_call_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_join_call_options_create');
            let joinCalLOptions = new sam_join_call_options();
            setHeap32Value(instance, joinCalLOptions.peekHandle());
            return sam_status.ok;
        },

        // sam_call_options

        /* sam_status */ sam_call_options_addref: function (/* sam_call_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok
        },
        /* sam_status */ sam_call_options_get_incoming_audio_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_audio_options_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_get_incoming_audio_options - handle: ' + handle);
            let callOptions = sam_object.get(handle);
            setHeap32Value(result, callOptions?.incomingAudioOptions?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_options_get_incoming_video_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_video_options_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_get_incoming_video_options - handle: ' + handle);
            let callOptions = sam_object.get(handle);
            setHeap32Value(result, callOptions?.incomingVideoOptions?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_options_get_outgoing_audio_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_audio_options_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_get_outgoing_audio_options - handle: ' + handle);
            let callOptions = sam_object.get(handle);
            setHeap32Value(result, callOptions?.outgoingAudioOptions?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_options_get_outgoing_video_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_video_options_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_get_outgoing_video_options - handle: ' + handle);
            let callOptions = sam_object.get(handle);
            setHeap32Value(result, callOptions?.outgoingVideoOptions?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_options_release: function (/* sam_call_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok
        },
        /* sam_status */ sam_call_options_set_incoming_audio_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_audio_options_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_set_incoming_audio_options - handle: ' + handle);
            sam_object.get(handle).incomingAudioOptions = sam_object.get(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_options_set_incoming_video_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_video_options_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_set_incoming_video_options - handle: ' + handle);
            sam_object.get(handle).incomingVideoOptions = sam_object.get(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_options_set_outgoing_audio_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_audio_options_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_set_outgoing_audio_options - handle: ' + handle);
            sam_object.get(handle).outgoingAudioOptions = sam_object.get(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_options_set_outgoing_video_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_video_options_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_call_options_set_outgoing_video_options - handle: ' + handle);
            sam_object.get(handle).outgoingVideoOptions = sam_object.get(value);
            return sam_status.ok;
        },

        // sam_incoming_audio_options

        /* sam_status */ sam_incoming_audio_options_addref: function (/* sam_incoming_audio_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_audio_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_audio_options_create: function (/* sam_incoming_audio_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_audio_options_create');
            let incomingAudioOptions = new sam_incoming_audio_options();
            setHeap32Value(instance, incomingAudioOptions.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_audio_options_get_is_muted: function (/* sam_incoming_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_audio_options_get_is_muted - handle: ' + handle);
            let incomingAudioOptions = sam_object.get(handle);
            HEAPU8[result] = (incomingAudioOptions?.isMuted ?? false) ? 1 : 0
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_audio_options_get_stream: function (/* sam_incoming_audio_options_handle */ handle, /* sam_incoming_audio_stream_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_audio_options_get_stream - handle: ' + handle);
            let incomingAudioStream = sam_object.get(handle)?.incomingAudioStream;
            setHeap32Value(result, incomingAudioStream?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_audio_options_release: function (/* sam_incoming_audio_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_audio_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_audio_options_set_is_muted: function (/* sam_incoming_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_audio_options_set_is_muted - handle: ' + handle);
            sam_object.get(handle).isMuted = (value != 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_audio_options_set_stream: function (/* sam_incoming_audio_options_handle */ handle, /* sam_incoming_audio_stream_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_audio_options_set_stream - handle: ' + handle);
            sam_object.get(handle).incomingAudioStream = sam_object.get(value);
            return sam_status.ok;
        },

        // sam_outgoing_audio_options

        /* sam_status */ sam_outgoing_audio_options_addref: function (/* sam_outgoing_audio_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_create: function (/* sam_outgoing_audio_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_create');
            let outgoingAudioOptions = new sam_outgoing_audio_options();
            setHeap32Value(instance, outgoingAudioOptions.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_get_filters: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_filters_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_get_filters - handle: ' + handle);
            let filters = sam_object.get(handle)?.filters
            setHeap32Value(result, filters?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_get_is_muted: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_get_is_muted - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle)?.isMuted ?? false)
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_get_stream: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_stream_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_get_stream - handle: ' + handle);
            let stream = sam_object.get(handle)?.stream
            setHeap32Value(result, stream?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_release: function (/* sam_outgoing_audio_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_set_filters: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_filters_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_set_filters - handle: ' + handle);
            sam_object.get(handle).filters = sam_object.get(value)
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_set_is_muted: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
            sam_object.get(handle).isMuted = (value != 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_audio_options_set_stream: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_stream_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_audio_options_set_stream - handle: ' + handle);
            sam_object.get(handle).stream = sam_object.get(value)
            return sam_status.ok;
        },

        // sam_incoming_video_options

        /* sam_status */ sam_incoming_video_options_addref: function (/* sam_incoming_video_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_create: function (/* sam_incoming_video_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_create');
            let incomingVideoOptions = new sam_incoming_video_options()
            setHeap32Value(instance, incomingVideoOptions.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_get_constraints: function (/* sam_incoming_video_options_handle */ handle, /* sam_incoming_video_constraints_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_get_constraints - handle: ' + handle);
            let constraints = sam_object.get(handle)?.constraints;
            setHeap32Value(result, constraints?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_get_frame_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_raw_video_frame_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_get_frame_type - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).frameType);
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_get_stream_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_video_stream_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_get_stream_type - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle)?.streamType);
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_release: function (/* sam_incoming_video_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_set_constraints: function (/* sam_incoming_video_options_handle */ handle, /* sam_incoming_video_constraints_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_set_constraints - handle: ' + handle);
            sam_object.get(handle).constraints = sam_object.get(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_set_frame_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_raw_video_frame_type */ value) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_set_frame_type - handle: ' + handle);

            let incomingVideoOptions = sam_object.get(handle);
            if (value !== sam_raw_video_frame_type.texture) {
                incomingVideoOptions.setErrorDetails("WebGL only supports the texture frame type for incoming video.")
                return sam_status.invalid_argument;
            }

            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_options_set_stream_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_video_stream_type */ value) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_options_set_stream_type - handle: ' + handle);

            let incomingVideoOptions = sam_object.get(handle);
            if (value !== sam_video_stream_type.remote_incoming && value !== sam_video_stream_type.raw_incoming) {
                incomingVideoOptions.setErrorDetails("Cannot set incoming video stream type to an outgoing type")
                return sam_status.invalid_argument;
            }

            incomingVideoOptions.streamType = value;
            return sam_status.ok;
        },

        // sam_outgoing_video_options

        /* sam_status */ sam_outgoing_video_options_addref: function (/* sam_outgoing_video_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_video_options_addref - handle: ' + handle);
            sam_object.get(handle).addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_video_options_create: function (/* sam_outgoing_video_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_video_options_create');
            let outgoingVideoOptions = new sam_outgoing_video_options()
            setHeap32Value(instance, outgoingVideoOptions.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_video_options_get_constraints: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_constraints_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_video_options_get_constraints - handle: ' + handle);
            let constraints = sam_object.get(handle)?.constraints
            setHeap32Value(result, constraints?.acquireHandle() ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_video_options_get_streams: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_stream_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_video_options_get_streams - handle: ' + handle);
            let streams = sam_object.get(handle)?.streams
            setHeap32Value(result, objectsToOutParam(streams))
            setHeap32Value(resultCount, streams?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_video_options_release: function (/* sam_outgoing_video_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_video_options_release - handle: ' + handle);
            sam_object.get(handle).removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_video_options_set_constraints: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_constraints_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_video_options_set_constraints - handle: ' + handle);
            sam_object.get(handle).constraints = sam_object.get(value);
            return sam_status.ok;
        },
        /* sam_status */ sam_outgoing_video_options_set_streams: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_stream_handle * */ value, /* int */ value_count) {
            sam_logger.verbose('sam_exports_impl.sam_outgoing_video_options_set_streams - handle: ' + handle);
            let streams = []
            for (let i = value_count - 1; i >= 0; --i) {
                streams[i] = sam_object.get(value[i])
            }

            sam_object.get(handle).streams = streams
            return sam_status.ok;
        },

        // sam_common_call

        /* sam_status */ sam_common_call_addref: function (/* sam_common_call_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_dispose: function (/* sam_common_call_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_dispose - handle: ' + handle);
            sam_object.get(handle)?.dispose();
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_active_incoming_audio_stream: function (/* sam_common_call_handle */ handle, /* sam_incoming_audio_stream_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_active_incoming_audio_stream - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_active_outgoing_audio_stream: function (/* sam_common_call_handle */ handle, /* sam_outgoing_audio_stream_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_active_outgoing_audio_stream - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_call_end_reason: function (/* sam_common_call_handle */ handle, /* sam_call_end_reason_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_call_end_reason - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_call_participant_role: function (/* sam_common_call_handle */ handle, /* sam_call_participant_role* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_call_participant_role - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_caller_info: function (/* sam_common_call_handle */ handle, /* sam_caller_info_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_caller_info - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_captions_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_captions_call_feature - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_content_sharing_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_content_sharing_call_feature - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_current_audio_stream: function (/* sam_common_call_handle */ handle, /* sam_stream_direction */ stream_direction, /* sam_call_audio_stream_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_current_audio_stream - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_data_channel_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_data_channel_call_feature - handle: ' + handle);
            let dataChannel = sam_object.get(handle)?.features?.dataChannel
            setHeap32Value(result, dataChannel?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_direction: function (/* sam_common_call_handle */ handle, /* sam_call_direction* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_direction - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_dominant_speakers_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_dominant_speakers_call_feature - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_features: function (/* sam_common_call_handle */ handle, /* sam_call_features_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_features - handle: ' + handle);
            let features = sam_object.get(handle)?.features
            setHeap32Value(result, features?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_id: function (/* sam_common_call_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_id - handle: ' + handle);
            let id = sam_object.get(handle)?.id
            setHeap32Value(result, stringToOutParam(id))
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_incoming_raw_video_frame_type: function (/* sam_common_call_handle */ handle, /* sam_raw_video_frame_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_incoming_raw_video_frame_type - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_is_call_kit_enabled: function (/* sam_common_call_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_is_call_kit_enabled - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_is_incoming_audio_muted: function (/* sam_common_call_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_is_incoming_audio_muted - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_is_muted: function (/* sam_common_call_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_is_muted - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_is_outgoing_audio_muted: function (/* sam_common_call_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_is_outgoing_audio_muted - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle)?.isMuted ?? false)
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_live_outgoing_audio_filters: function (/* sam_common_call_handle */ handle, /* sam_live_outgoing_audio_filters_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_live_outgoing_audio_filters - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_lobby: function (/* sam_common_call_handle */ handle, /* sam_lobby_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_lobby - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_local_endpoint_details: function (/* sam_common_call_handle */ handle, /* sam_endpoint_details_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_local_endpoint_details - handle: ' + handle);
            let localParticipantId = sam_object.get(handle)?.localParticipantId;
            let endpointDetails = new sam_endpoint_details({ participantId: localParticipantId });
            setHeap32Value(result, endpointDetails.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_local_identifier_internal: function (/* sam_common_call_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_local_identifier_internal - handle: ' + handle);
            let localParticipantMri = sam_object.get(handle)?.localParticipantMri;
            setHeap32Value(result, stringToOutParam(localParticipantMri));
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_local_user_diagnostics_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_local_user_diagnostics_call_feature - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_local_video_streams: function (/* sam_common_call_handle */ handle, /* sam_local_video_stream_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_local_video_streams - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_media_statistics_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_media_statistics_call_feature - handle: ' + handle);
            let mediaStats = sam_object.get()?.features?.mediaStats
            setHeap32Value(result, mediaStats?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_original_id: function (/* sam_common_call_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_original_id - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_outgoing_video_streams: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_outgoing_video_streams - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_raise_hand_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_raise_hand_call_feature - handle: ' + handle);
            let raisedHands = sam_object.get(handle)?.features?.raisedHands
            setHeap32Value(result, raisedHands?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_recording_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_recording_call_feature - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_remote_participants: function (/* sam_common_call_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_remote_participants - handle: ' + handle);
            let participants = sam_object.get(handle)?.remoteParticipants
            setHeap32Value(result, objectsToOutParam(participants))
            setHeap32Value(result_count, participants?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_spotlight_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_spotlight_call_feature - handle: ' + handle);
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_state: function (/* sam_common_call_handle */ handle, /* sam_call_state* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_state - handle: ' + handle);
            let state = sam_object.get(handle)?.state ?? sam_call_state.none
            setHeap32Value(result, state);
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_get_survey_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_survey_call_feature - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_total_participant_count: function (/* sam_common_call_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_get_total_participant_count - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_get_transcription_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_bsam_common_call_get_transcription_call_featurease_addref - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_hang_up: function (/* sam_common_call_handle */ handle, /* sam_hang_up_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_hang_up - handle: ' + handle);

            // Retain references until we're done
            let callPtr = new sam_object_ptr(handle);
            let optionsPtr = new sam_object_ptr(options);
            resolveVoidPromise(promiseHandle, callPtr.get().hangUpAsync(optionsPtr.get()))
                .finally(() => {
                    callPtr.reset()
                    optionsPtr.reset()
                })

            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_hangup_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_hang_up_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_hangup_via_call_kit_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_hold: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_hold - handle: ' + handle);

            // Retain references until we're done
            let callPtr = new sam_object_ptr(handle);
            resolveVoidPromise(promiseHandle, callPtr.get().holdAsync())
                .finally(() => { callPtr.reset() })

            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_hold_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_hold_via_call_kit_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_mute: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_mute - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_mute_all_remote_participants: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_mute_all_remote_participants - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_mute_incoming_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_mute_incoming_audio - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_mute_internal: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ mute, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_mute_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_mute_outgoing_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_mute_outgoing_audio - handle: ' + handle);

            // Retain references until we're done
            let callPtr = new sam_object_ptr(handle);
            resolveVoidPromise(promiseHandle, callPtr.get().muteAsync()).finally(() => callPtr.reset())
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_mute_speaker_internal: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ mute, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_mute_speaker_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_release: function (/* sam_common_call_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_release - handle: ' + handle);
            sam_object.get(handle).removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_remove_participant: function (/* sam_common_call_handle */ handle, /* sam_remote_participant_handle */ participant, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_remove_participant - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_resume: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_resume - handle: ' + handle);

            // Retain references until we're done
            let callPtr = new sam_object_ptr(handle);
            resolveVoidPromise(promiseHandle, callPtr.get().resumeAsync())
                .finally(() => { callPtr.reset() })

            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_resume_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_resume_via_call_kit_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_send_activate_audio_session_failed_telemetry: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ is_incoming, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_send_activate_audio_session_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_send_call_in_progress_failed_telemetry: function (/* sam_common_call_handle */ handle, /* const char * */ old_state, /* const char * */ new_state, /* sam_bool_u8 */ is_incoming, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_send_call_in_progress_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_send_dtmf: function (/* sam_common_call_handle */ handle, /* sam_dtmf_tone */ tone, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_send_dtmf - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_send_dtmf_failed_telemetry: function (/* sam_common_call_handle */ handle, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_send_dtmf_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_send_dtmf_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_dtmf_tone */ tone, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_send_dtmf_via_call_kit_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_send_hangup_failed_telemetry: function (/* sam_common_call_handle */ handle, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_send_hangup_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_send_mute_failed_telemetry: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ old_state, /* sam_bool_u8 */ new_state, /* const char * */ failure_message) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_send_mute_failed_telemetry - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_set_id_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_id_changed - handle: ' + handle + ', value: ' + value + ', value_fn: ' + value_fn);
            sam_object.get(handle)?.setIdChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_set_incoming_audio_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_incoming_audio_state_changed - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_set_outgoing_audio_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_outgoing_audio_state_changed - handle: ' + handle);
            sam_object.get(handle)?.setOutgoingAudioStateChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_set_remote_participants_updated: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_participants_updated_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_remote_participants_updated - handle: ' + handle);
            sam_object.get(handle)?.setRemoteParticipantsUpdated(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_set_role_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_role_changed - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_set_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_state_changed - handle: ' + handle + ', value: ' + value + ', value_fn: ' + value_fn);
            sam_object.get(handle)?.setStateChanged(value, value_fn)
            return sam_status.ok;
        },
        /* sam_status */ sam_common_call_set_total_participant_count_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_total_participant_count_changed - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_set_video_constraints: function (/* sam_common_call_handle */ handle, /* sam_video_constraints_handle */ constraints) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_set_video_constraints - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_start_audio: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_start_audio - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_start_audio_internal: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ audio_stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_start_audio_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_start_system_audio_sharing: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_start_system_audio_sharing - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_start_video: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_start_video - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_start_video_internal: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_start_video_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_stop_audio: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_stop_audio - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_stop_audio_internal: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ audio_stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_stop_audio_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_stop_system_audio_sharing: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_stop_system_audio_sharing - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_stop_video: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_stop_video - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_stop_video_internal: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_stop_video_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_switch_incoming_raw_video_frame_kind: function (/* sam_common_call_handle */ handle, /* sam_raw_video_frame_type */ frame_kind) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_switch_incoming_raw_video_frame_kind - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_unmute_incoming_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_unmute_incoming_audio - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_common_call_unmute_outgoing_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_common_call_unmute_outgoing_audio - handle: ' + handle);

            // Retain reference until the promise is resolved
            let callPtr = new sam_object_ptr(handle);
            resolveVoidPromise(promiseHandle, callPtr.get().unmuteAsync()).finally(() => callPtr.reset());
            return sam_status.ok;
        },

        // sam_property_changed_event_args

        /* sam_status */ sam_property_changed_event_args_addref: function (/* sam_property_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_property_changed_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_property_changed_event_args_release: function (/* sam_property_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_property_changed_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_participants_updated_event_args

        /* sam_status */ sam_participants_updated_event_args_addref: function (/* sam_participants_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_participants_updated_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_participants_updated_event_args_get_added_participants: function (/* sam_participants_updated_event_args_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_participants_updated_event_args_get_added_participants - handle: ' + handle);
            let added = sam_object.get(handle)?.added
            setHeap32Value(result, objectsToOutParam(added))
            setHeap32Value(result_count, added?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_participants_updated_event_args_get_removed_participants: function (/* sam_participants_updated_event_args_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_participants_updated_event_args_get_removed_participants - handle: ' + handle);
            let removed = sam_object.get(handle)?.removed
            setHeap32Value(result, objectsToOutParam(removed))
            setHeap32Value(result_count, removed?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_participants_updated_event_args_release: function (/* sam_participants_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_participants_updated_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_call_features

        /* sam_status */ sam_call_features_addref: function (/* sam_call_features_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_features_get_captions: function (/* sam_call_features_handle */ handle, /* sam_captions_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_captions - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_get_content_sharing: function (/* sam_call_features_handle */ handle, /* sam_content_sharing_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_content_sharing - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_get_data_channel: function (/* sam_call_features_handle */ handle, /* sam_data_channel_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_data_channel - handle: ' + handle);
            let dataChannel = sam_object.get(handle)?.dataChannel
            setHeap32Value(result, dataChannel?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_call_features_get_dominant_speakers: function (/* sam_call_features_handle */ handle, /* sam_dominant_speakers_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_dominant_speakers - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_get_local_user_diagnostics: function (/* sam_call_features_handle */ handle, /* sam_local_user_diagnostics_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_local_user_diagnostics - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_get_media_statistics: function (/* sam_call_features_handle */ handle, /* sam_media_statistics_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_media_statistics - handle: ' + handle);
            let mediaStats = sam_object.get(handle).mediaStats
            setHeap32Value(result, mediaStats?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_call_features_get_raised_hands: function (/* sam_call_features_handle */ handle, /* sam_raise_hand_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_raised_hands - handle: ' + handle);
            let raisedHands = sam_object.get(handle)?.raisedHands
            setHeap32Value(result, raisedHands?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_call_features_get_recording: function (/* sam_call_features_handle */ handle, /* sam_recording_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_recording - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_get_spotlight: function (/* sam_call_features_handle */ handle, /* sam_spotlight_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_spotlight - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_get_survey: function (/* sam_call_features_handle */ handle, /* sam_survey_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_survey - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_get_transcription: function (/* sam_call_features_handle */ handle, /* sam_transcription_call_feature_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_get_transcription - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_features_release: function (/* sam_call_features_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_features_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_call_feature

        /* sam_status */ sam_call_feature_addref: function (/* sam_call_feature_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_feature_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_feature_get_name: function (/* sam_call_feature_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_feature_get_name - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_feature_release: function (/* sam_call_feature_handle */ handle) {
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_media_statistics_call_feature

        /* sam_status */ sam_media_statistics_call_feature_get_report_interval_in_seconds: function (/* sam_media_statistics_call_feature_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_call_feature_get_report_interval_in_seconds - handle: ' + handle);
            let interval = sam_object.get(handle)?.reportIntervalInSeconds
            setHeap32Value(result, interval === undefined ? 0 : interval)
            return sam_status.ok;
        },
        /* sam_status */ sam_media_statistics_call_feature_update_report_interval_in_seconds: function (/* sam_media_statistics_call_feature_handle */ handle, /* int */ report_interval_in_seconds) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_call_feature_set_sample_interval_in_seconds - handle: ' + handle);
            sam_object.get(handle).reportIntervalInSeconds = report_interval_in_seconds
            return sam_status.ok;
        },
        /* sam_status */ sam_media_statistics_call_feature_set_report_received: function (/* sam_media_statistics_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_media_statistics_report_received_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_call_feature_set_on_report_received - handle: ' + handle + ', value: ' + value + ', value_fn: ' + value_fn);
            sam_object.get(handle)?.setSampleReported(value, value_fn)
            return sam_status.ok;
        },

        // sam_raise_hand_call_feature

        /* sam_status */ sam_raise_hand_call_feature_get_raised_hands: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_raised_hand_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_raise_hand_call_feature_get_raised_hands - handle: ' + handle);
            let raisedHands = sam_object.get(handle)?.raisedHands
            setHeap32Value(result, objectsToOutParam(raisedHands))
            setHeap32Value(result_count, raisedHands?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_raise_hand_call_feature_lower_all_hands: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_raise_hand_call_feature_lower_all_hands - handle: ' + handle);
            let featurePtr = new sam_object_ptr(handle)
            resolveVoidPromise(promiseHandle, featurePtr.get().lowerAllHandsAsync())
                .finally(() => { featurePtr.reset() })
            return sam_status.ok
        },
        /* sam_status */ sam_raise_hand_call_feature_lower_hand: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_raise_hand_call_feature_lower_hand - handle: ' + handle);
            let featurePtr = new sam_object_ptr(handle)
            resolveVoidPromise(promiseHandle, featurePtr.get().lowerHandAsync())
                .finally(() => { featurePtr.reset() })
            return sam_status.ok;
        },
        /* sam_status */ sam_raise_hand_call_feature_lower_hands_internal: function (/* sam_raise_hand_call_feature_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_raise_hand_call_feature_lower_hands_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_raise_hand_call_feature_raise_hand: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_raise_hand_call_feature_raise_hand - handle: ' + handle);

            let featurePtr = new sam_object_ptr(handle)
            resolveVoidPromise(promiseHandle, featurePtr.get().raiseHandAsync())
                .finally(() => { featurePtr.reset() })
            return sam_status.ok;
        },
        /* sam_status */ sam_raise_hand_call_feature_set_hand_lowered: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_lowered_hand_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_raise_hand_call_feature_set_hand_lowered - handle: ' + handle);
            sam_object.get(handle)?.setHandLowered(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_raise_hand_call_feature_set_hand_raised: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_raised_hand_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_raise_hand_call_feature_set_hand_raised - handle: ' + handle);
            sam_object.get(handle)?.setHandRaised(value, value_fn);
            return sam_status.ok;
        },

        // sam_data_channel_call_feature

        /* sam_status */ sam_data_channel_call_feature_get_data_channel_sender: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_data_channel_sender_options_handle */ options, /* sam_data_channel_sender_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_call_feature_get_data_channel_sender - handle: ' + handle);
            try {
                let sender = sam_object.get(handle).createDataChannelSender(sam_object.get(options));
                setHeap32Value(result, sender.peekHandle())
                return sam_status.ok;
            }
            catch (error) {
                setHeap32Value(result, 0)
                return sam_status.failed
            }
        },
        /* sam_status */ sam_data_channel_call_feature_get_is_active: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_call_feature_get_is_active - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle).isActive);
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_call_feature_set_active_changed: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_call_feature_set_active_changed - handle: ' + handle);
            sam_object.get(handle).setActiveChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_call_feature_get_receivers: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_data_channel_receiver_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_call_feature_get_receivers - handle: ' + handle);
            let receivers = sam_object.get(handle)?.receivers
            setHeap32Value(result, objectsToOutParam(receivers))
            setHeap32Value(result_count, receivers?.length ?? 0)
            return sam_status.ok;
        },
         /* sam_status */ sam_data_channel_call_feature_set_receiver_created: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_data_channel_receiver_created_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_call_feature_set_receiver_created - handle: ' + handle);
            sam_object.get(handle).setDataChannelReceiverCreated(value, value_fn);
            return sam_status.ok;
        },

        // sam_media_statistics_report

        /* sam_status */ sam_media_statistics_report_addref: function (/* sam_media_statistics_report_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_media_statistics_report_get_incoming_media_statistics: function (/* sam_media_statistics_report_handle */ handle, /* sam_incoming_media_statistics_info_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_get_incoming_media_statistics - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_media_statistics_report_get_last_updated_at: function (/* sam_media_statistics_report_handle */ handle, /* int64_t* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_get_last_updated_at - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_media_statistics_report_get_media_statistics_json: function (/* sam_media_statistics_report_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_get_media_statistics_json - handle: ' + handle);
            let json = sam_object.get(handle)?.mediaStatsJson
            setHeap32Value(result, stringToOutParam(json))
            return sam_status.ok;
        },
        /* sam_status */ sam_media_statistics_report_get_outgoing_media_statistics: function (/* sam_media_statistics_report_handle */ handle, /* sam_outgoing_media_statistics_info_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_get_outgoing_media_statistics - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_media_statistics_report_release: function (/* sam_media_statistics_report_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_media_statistics_report_received_event_args

        /* sam_status */ sam_media_statistics_report_received_event_args_addref: function (/* sam_media_statistics_report_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_received_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_media_statistics_report_received_event_args_get_report: function (/* sam_media_statistics_report_event_args_handle */ handle, /* sam_media_statistics_report_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_received_event_args_get_report - handle: ' + handle);
            let report = sam_object.get(handle)?.report
            setHeap32Value(result, report?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_media_statistics_report_received_event_args_release: function (/* sam_media_statistics_report_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_media_statistics_report_received_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_raised_hand_changed_event_args

        /* sam_status */ sam_raised_hand_changed_event_args_addref: function (/* sam_raised_hand_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raised_hand_changed_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raised_hand_changed_event_args_get_participant: function (/* sam_raised_hand_changed_event_args_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raised_hand_changed_event_args_get_participant - handle: ' + handle);
            let participant = sam_object.get(handle)?.participant
            setHeap32Value(result, stringToOutParam(participant))
            return sam_status.ok;
        },
        /* sam_status */ sam_raised_hand_changed_event_args_release: function (/* sam_raised_hand_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raised_hand_changed_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_lowered_hand_changed_event_args

        /* sam_status */ sam_lowered_hand_changed_event_args_addref: function (/* sam_lowered_hand_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_lowered_hand_changed_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_lowered_hand_changed_event_args_get_participant: function (/* sam_lowered_hand_changed_event_args_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_lowered_hand_changed_event_args_get_participant - handle: ' + handle);
            let participant = sam_object.get(handle)?.participant
            setHeap32Value(result, stringToOutParam(participant))
            return sam_status.ok;
        },
        /* sam_status */ sam_lowered_hand_changed_event_args_release: function (/* sam_lowered_hand_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_lowered_hand_changed_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_call_identifier

        /* sam_status */ sam_call_identifier_addref: function (/* sam_call_identifier_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_identifier_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_identifier_get_raw_id: function (/* sam_call_identifier_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_identifier_get_raw_id - handle: ' + handle);
            let mri = sam_object.get(handle)?.mri;
            setHeap32Value(result, stringToOutParam(mri));
            return sam_status.ok;
        },
        /* sam_status */ sam_call_identifier_release: function (/* sam_call_identifier_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_identifier_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_user_call_identifier

        /* sam_status */ sam_user_call_identifier_create_string_id: function (/* const char * */ id, /* sam_user_call_identifier_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_user_call_identifier_create_string_id');
            let identifier = new sam_user_call_identifier(UTF8ToString(id));
            setHeap32Value(instance, identifier.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_user_call_identifier_get_id: function (/* sam_user_call_identifier_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_user_call_identifier_get_id - handle: ' + handle);
            let mri = sam_object.get(handle)?.mri;
            setHeap32Value(result, stringToOutParam(mri));
            return sam_status.ok;
        },

        // sam_microsoft_teams_user_call_identifier

        /* sam_status */ sam_microsoft_teams_user_call_identifier_create_string_user_id: function (/* const char * */ user_id, /* sam_microsoft_teams_user_call_identifier_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_microsoft_teams_user_call_identifier_create_string_user_id - handle: ' + instance);
            let identifier = new sam_microsoft_teams_user_call_identifier(UTF8ToString(user_id), false);
            setHeap32Value(instance, identifier.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_microsoft_teams_user_call_identifier_create_string_user_id_boolean_is_anonymous: function (/* const char * */ user_id, /* sam_bool_u8 */ is_anonymous, /* sam_microsoft_teams_user_call_identifier_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_microsoft_teams_user_call_identifier_create_string_user_id_boolean_is_anonymous - handle: ' + instance);
            let identifier = new sam_microsoft_teams_user_call_identifier(UTF8ToString(user_id), (is_anonymous != 0));
            setHeap32Value(instance, identifier.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */ sam_microsoft_teams_user_call_identifier_get_cloud_environment: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* sam_call_cloud_environment* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_cloud_environment - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle)?.cloudEnvironment);
            return sam_status.ok;
        },
        /* sam_status */ sam_microsoft_teams_user_call_identifier_get_is_anonymous: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_is_anonymous - handle: ' + handle);
            let isAnonymous = sam_object.get(handle)?.isAnonymous;
            setHeap8Value(result, isAnonymous ?? false);
            return sam_status.ok;
        },
        /* sam_status */ sam_microsoft_teams_user_call_identifier_get_user_id: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_user_id - handle: ' + handle);
            let mri = sam_object.get(handle)?.mri;
            setHeap32Value(result, stringToOutParam(mri));
            return sam_status.ok;
        },
        /* sam_status */ sam_microsoft_teams_user_call_identifier_set_cloud_environment: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* sam_call_cloud_environment */ value) {
            sam_logger.verbose('sam_exports_impl.sam_microsoft_teams_user_call_identifier_set_cloud_environment - handle: ' + handle);
            sam_object.get(handle).cloudEnvironment = value;
            return sam_status.ok;
        },

        // sam_phone_number_call_identifier

        /* sam_status */ sam_phone_number_call_identifier_create_string_phone_number: function (/* const char * */ phone_number, /* sam_phone_number_call_identifier_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_phone_number_call_identifier_create_string_phone_number - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_phone_number_call_identifier_get_phone_number: function (/* sam_phone_number_call_identifier_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_phone_number_call_identifier_get_phone_number - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_unknown_call_identifier

        /* sam_status */ sam_unknown_call_identifier_create_string_id: function (/* const char * */ id, /* sam_unknown_call_identifier_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_unknown_call_identifier_create_string_id - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_unknown_call_identifier_get_id: function (/* sam_unknown_call_identifier_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_unknown_call_identifier_get_id - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_data_channel_receiver

        /* sam_status */ sam_data_channel_receiver_addref: function (/* sam_data_channel_receiver_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_get_channel_id: function (/* sam_data_channel_receiver_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_get_channel_id - handle: ' + handle);
            let channelId = sam_object.get(handle).channelId
            setHeap32Value(result, channelId);
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_get_sender_identifier_internal: function (/* sam_data_channel_receiver_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_get_sender_identifier_internal - handle: ' + handle);
            let senderId = sam_object.get(handle).senderIdentifier
            setHeap32Value(result, stringToOutParam(senderId))
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_pop_message: function (/* sam_data_channel_receiver_handle */ handle, /* sam_data_channel_message_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_read_message - handle: ' + handle);
            let message = sam_object.get(handle).readMessage() // Creates a new message
            setHeap32Value(result, message?.peekHandle() ?? 0) // Peek handle as we have one handle and we want to pass it along
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_release: function (/* sam_data_channel_receiver_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_set_closed: function (/* sam_data_channel_receiver_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_set_closed - handle: ' + handle);
            sam_object.get(handle).setClosed(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_set_message_received: function (/* sam_data_channel_receiver_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_set_message_received - handle: ' + handle);
            sam_object.get(handle).setMessageReceived(value, value_fn);
            return sam_status.ok;
        },

        // sam_data_channel_receiver_created_event_args

         /* sam_status */ sam_data_channel_receiver_created_event_args_addref: function (/* sam_data_channel_receiver_created_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_created_event_args_addref - handle: ' + handle);
            sam_object.get(handle).addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_created_event_args_get_receiver: function (/* sam_data_channel_receiver_created_event_args_handle */ handle, /* sam_data_channel_receiver_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_created_event_args_get_receiver - handle: ' + handle);
            let receiver = sam_object.get(handle).receiver;
            setHeap32Value(result, receiver?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_receiver_created_event_args_release: function (/* sam_data_channel_receiver_created_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_receiver_created_event_args_release - handle: ' + handle);
            sam_object.get(handle).removeReference();
            return sam_status.ok;
        },


        // sam_calls_updated_event_args

        /* sam_status */ sam_calls_updated_event_args_addref: function (/* sam_calls_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_calls_updated_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_calls_updated_event_args_get_added_calls: function (/* sam_calls_updated_event_args_handle */ handle, /* sam_call_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_calls_updated_event_args_get_added_calls - handle: ' + handle);
            let added = sam_object.get(handle)?.added;
            setHeap32Value(result, objectsToOutParam(added));
            setHeap32Value(result_count, added?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_calls_updated_event_args_get_removed_calls: function (/* sam_calls_updated_event_args_handle */ handle, /* sam_call_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_calls_updated_event_args_get_removed_calls - handle: ' + handle);
            let removed = sam_object.get(handle)?.removed;
            setHeap32Value(result, objectsToOutParam(removed));
            setHeap32Value(result_count, removed?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_calls_updated_event_args_release: function (/* sam_calls_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_calls_updated_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_teams_calls_updated_event_args

        /* sam_status */ sam_teams_calls_updated_event_args_addref: function (/* sam_teams_calls_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_teams_calls_updated_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_teams_calls_updated_event_args_get_added_calls: function (/* sam_teams_calls_updated_event_args_handle */ handle, /* sam_teams_call_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_teams_calls_updated_event_args_get_added_calls - handle: ' + handle);
            let added = sam_object.get(handle)?.added;
            setHeap32Value(result, objectsToOutParam(added));
            setHeap32Value(result_count, added?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_teams_calls_updated_event_args_get_removed_calls: function (/* sam_teams_calls_updated_event_args_handle */ handle, /* sam_teams_call_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_teams_calls_updated_event_args_get_removed_calls - handle: ' + handle);
            let removed = sam_object.get(handle)?.removed;
            setHeap32Value(result, objectsToOutParam(removed));
            setHeap32Value(result_count, removed?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_teams_calls_updated_event_args_release: function (/* sam_teams_calls_updated_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_teams_calls_updated_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },


        // sam_hang_up_options

        /* sam_status */ sam_hang_up_options_addref: function (/* sam_hang_up_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_hang_up_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_hang_up_options_create: function (/* sam_hang_up_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_hang_up_options_create');
            let options = new sam_hang_up_options();
            setHeap32Value(instance, options.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_hang_up_options_get_for_everyone: function (/* sam_hang_up_options_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_hang_up_options_get_for_everyone - handle: ' + handle);
            let forEveryone = sam_object.get(handle)?.forEveryone;
            setHeap8Value(result, forEveryone ?? false)
            return sam_status.ok;
        },
        /* sam_status */ sam_hang_up_options_release: function (/* sam_hang_up_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_hang_up_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_hang_up_options_set_for_everyone: function (/* sam_hang_up_options_handle */ handle, /* sam_bool_u8 */ value) {
            sam_logger.verbose('sam_exports_impl.sam_hang_up_options_set_for_everyone - handle: ' + handle);
            sam_object.get(handle).forEveryone = (value != 0)
            return sam_status.ok;
        },

        // sam_raised_hand

        /* sam_status */ sam_raised_hand_addref: function (/* sam_raised_hand_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raised_hand_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raised_hand_get_order: function (/* sam_raised_hand_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raised_hand_get_order - handle: ' + handle);
            let order = sam_object.get(handle)?.order;
            setHeap32Value(result, order === undefined ? -1 : order)
            return sam_status.ok;
        },
        /* sam_status */ sam_raised_hand_get_participant: function (/* sam_raised_hand_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raised_hand_get_participant - handle: ' + handle);
            let hand = sam_object.get(handle);
            setHeap32Value(result, stringToOutParam(hand.identifier));
            return sam_status.ok;
        },
        /* sam_status */ sam_raised_hand_release: function (/* sam_raised_hand_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raised_hand_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_call_audio_stream

        /* sam_status */ sam_call_audio_stream_addref: function (/* sam_call_audio_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_audio_stream_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_audio_stream_get_direction: function (/* sam_call_audio_stream_handle */ handle, /* sam_stream_direction* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_audio_stream_get_direction - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_audio_stream_get_state: function (/* sam_call_audio_stream_handle */ handle, /* sam_audio_stream_state* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_audio_stream_get_state - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_audio_stream_get_type: function (/* sam_call_audio_stream_handle */ handle, /* sam_audio_stream_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_audio_stream_get_type - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_audio_stream_release: function (/* sam_call_audio_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_audio_stream_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_audio_stream_set_state_changed: function (/* sam_call_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_stream_state_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_call_audio_stream_set_state_changed - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_raw_audio_stream_properties

        /* sam_status */ sam_raw_audio_stream_properties_addref: function (/* sam_raw_audio_stream_properties_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_properties_get_channel_mode: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_channel_mode* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_get_channel_mode - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).channelMode)
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_properties_get_format: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_format* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_get_format - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).format)
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_properties_get_sample_rate: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_sample_rate* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_get_sample_rate - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).sampleRate)
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_properties_release: function (/* sam_raw_audio_stream_properties_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_properties_set_channel_mode: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_channel_mode */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_set_channel_mode - handle: ' + handle);
            sam_object.get(handle).channelMode = value
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_properties_set_format: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_format */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_set_format - handle: ' + handle);
            sam_object.get(handle).format = value
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_properties_set_sample_rate: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_sample_rate */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_properties_set_sample_rate - handle: ' + handle);
            sam_object.get(handle).sampleRate = value
            return sam_status.ok;
        },

        // sam_raw_incoming_audio_stream_properties

        /* sam_status */ sam_raw_incoming_audio_stream_properties_create: function (/* sam_raw_incoming_audio_stream_properties_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_properties_create');
            let props = new sam_raw_incoming_audio_stream_properties();
            setHeap32Value(instance, props.peekHandle())
            return sam_status.ok;
        },

        // sam_raw_outgoing_audio_stream_properties

        /* sam_status */ sam_raw_outgoing_audio_stream_properties_create: function (/* sam_raw_outgoing_audio_stream_properties_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_properties_create');
            let props = new sam_raw_outgoing_audio_stream_properties();
            setHeap32Value(instance, props.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_outgoing_audio_stream_properties_get_buffer_duration: function (/* sam_raw_outgoing_audio_stream_properties_handle */ handle, /* sam_audio_stream_buffer_duration* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_properties_get_buffer_duration - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).bufferDuration)
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_outgoing_audio_stream_properties_set_buffer_duration: function (/* sam_raw_outgoing_audio_stream_properties_handle */ handle, /* sam_audio_stream_buffer_duration */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_properties_set_buffer_duration - handle: ' + handle);
            sam_object.get(handle).bufferDuration = value
            return sam_status.ok;
        },

        // sam_raw_audio_stream_options

        /* sam_status */ sam_raw_audio_stream_options_addref: function (/* sam_raw_audio_stream_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_options_addref - handle: ' + handle);
            sam_object.get(handle).addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_audio_stream_options_release: function (/* sam_raw_audio_stream_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_options_release - handle: ' + handle);
            sam_object.get(handle).removeReference();
            return sam_status.ok;
        },

        // sam_raw_outgoing_audio_stream_options

        /* sam_status */ sam_raw_outgoing_audio_stream_options_create: function (/* sam_raw_outgoing_audio_stream_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_raw_audio_stream_options_release');
            let options = new sam_raw_outgoing_audio_stream_options();
            setHeap32Value(instance, options.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_outgoing_audio_stream_options_get_properties: function (/* sam_raw_outgoing_audio_stream_options_handle */ handle, /* sam_raw_outgoing_audio_stream_properties_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_options_get_properties - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).properties.acquireHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_outgoing_audio_stream_options_set_properties: function (/* sam_raw_outgoing_audio_stream_options_handle */ handle, /* sam_raw_outgoing_audio_stream_properties_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_options_set_properties - handle: ' + handle);
            sam_object.get(handle).properties = value
            return sam_status.ok;
        },

        // sam_raw_incoming_audio_stream_options

        /* sam_status */ sam_raw_incoming_audio_stream_options_create: function (/* sam_raw_incoming_audio_stream_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_options_create');
            let options = new sam_raw_incoming_audio_stream_options();
            setHeap32Value(instance, options.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_audio_stream_options_get_properties: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_raw_incoming_audio_stream_properties_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_options_get_properties - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).properties.acquireHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_audio_stream_options_get_receive_unmixed_audio: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_options_get_receive_unmixed_audio - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle).receiveUnmixedAudio)
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_audio_stream_options_set_properties: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_raw_incoming_audio_stream_properties_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_options_set_properties - handle: ' + handle);
            sam_object.get(handle).properties = value
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_audio_stream_options_set_receive_unmixed_audio: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_bool_u8 */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_options_set_receive_unmixed_audio - handle: ' + handle);
            sam_object.get(handle).receiveUnmixedAudio = (value != 0)
            return sam_status.ok;
        },

        // sam_raw_outgoing_audio_stream

        /* sam_status */ sam_raw_outgoing_audio_stream_create_raw_outgoing_audio_stream_options_options: function (/* sam_raw_outgoing_audio_stream_options_handle */ options, /* sam_raw_outgoing_audio_stream_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_create_raw_outgoing_audio_stream_options_options');
            let stream = new sam_raw_outgoing_audio_stream(sam_object.get(options));
            setHeap32Value(instance, stream.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_outgoing_audio_stream_get_expected_buffer_size_in_bytes: function (/* sam_raw_outgoing_audio_stream_handle */ handle, /* sam_i64* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_get_expected_buffer_size_in_bytes');
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_raw_outgoing_audio_stream_get_properties: function (/* sam_raw_outgoing_audio_stream_handle */ handle, /* sam_raw_outgoing_audio_stream_properties_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_get_properties - handle: ' + handle);
            setHeap32Value(result, sam_object.get(handle).properties.acquireHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_outgoing_audio_stream_send_raw_audio_buffer: function (/* sam_raw_outgoing_audio_stream_handle */ handle, /* sam_raw_audio_buffer_handle */ raw_audio_buffer, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_outgoing_audio_stream_send_raw_audio_buffer');
            return sam_status.not_implemented;
        },

        // sam_raw_incoming_audio_stream

        /* sam_status */ sam_raw_incoming_audio_stream_create_raw_incoming_audio_stream_options_options: function (/* sam_raw_incoming_audio_stream_options_handle */ options, /* sam_raw_incoming_audio_stream_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_create_raw_incoming_audio_stream_options_options');
            let stream = new sam_raw_incoming_audio_stream(sam_object.get(options))
            setHeap32Value(instance, stream.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_audio_stream_set_mixed_audio_buffer_received: function (/* sam_raw_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_mixed_audio_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_set_mixed_audio_buffer_received - handle: ' + handle);
            sam_object.get(handle).setMixedAudioBufferReceived(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_audio_stream_set_unmixed_audio_buffer_received: function (/* sam_raw_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_unmixed_audio_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_audio_stream_set_unmixed_audio_buffer_received - handle: ' + handle);
            sam_object.get(handle).setUnmixedAudioBufferReceived(value, value_fn);
            return sam_status.ok;
        },

        // sam_data_channel_sender

        /* sam_status */ sam_data_channel_sender_addref: function (/* sam_data_channel_sender_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_addref - handle: ' + handle);
            sam_object.get(handle).addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_sender_close_sender: function (/* sam_data_channel_sender_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_close_sender - handle: ' + handle);
            sam_object.get(handle)?.close();
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_sender_get_channel_id: function (/* sam_data_channel_sender_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_get_channel_id - handle: ' + handle);
            let channelId = sam_object.get(handle).channelId
            setHeap32Value(result, channelId);
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_sender_get_max_message_size_in_bytes: function (/* sam_data_channel_sender_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_get_max_message_size_in_bytes - handle: ' + handle);
            let maxMessageSize = sam_object.get(handle).maxMessageSize
            setHeap32Value(result, maxMessageSize);
            return sam_status.ok
        },
        /* sam_status */ sam_data_channel_sender_release: function (/* sam_data_channel_sender_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_release - handle: ' + handle);
            sam_object.get(handle).removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_sender_send_message_async_data: function (/* sam_data_channel_sender_handle */ handle, /* sam_u8 const* */ data, /* int */ data_count, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_send_message_async_data - handle: ' + handle);

            // No guarantees on lifetime of data, so copy it
            let buffer = new Uint8Array(HEAPU8.buffer, data, data_count).slice()

            // Retain reference until we're done
            let senderPtr = new sam_object_ptr(handle);
            resolveVoidPromise(promiseHandle, senderPtr.get().sendMessage(buffer))
                .finally(() => senderPtr.reset())

            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_sender_send_message_async_int_ptr_data_int32_data_length: function (/* sam_data_channel_sender_handle */ handle, /* void * */ data, /* int */ data_length, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_send_message_async_int_ptr_data_int32_data_length - handle: ' + handle);

            // Memory is pinned for duration of async operation so no copy of data here
            let buffer = new Uint8Array(HEAPU8.buffer, data, data_count);

            // Retain reference until we're done
            let senderPtr = new sam_object_ptr(handle);
            resolveVoidPromise(promiseHandle, senderPtr.get().sendMessage(buffer))
                .finally(() => senderPtr.reset())

            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_sender_set_participants_internal: function (/* sam_data_channel_sender_handle */ handle, /* const char * const* */ participants, /* int */ participants_count) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_set_participants_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_data_channel_sender_options

         /* sam_status */ sam_data_channel_sender_options_addref: function (/* sam_data_channel_sender_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_create: function (/*sam_data_channel_sender_options_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_create');
            let options = new sam_data_channel_sender_options();
            setHeap32Value(instance, options.peekHandle());
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_get_bitrate_in_kbps: function (/*sam_data_channel_sender_options_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_get_bitrate_in_kbps - handle: ' + handle);
            let bitrateInKbps = sam_object.get(handle).bitrateInKbps
            setHeap32Value(result, bitrateInKbps);
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_get_channel_id: function (/*sam_data_channel_sender_options_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_get_channel_id - handle: ' + handle);
            let channelId = sam_object.get(handle).channelId
            setHeap32Value(result, channelId);
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_get_participants_internal: function (/*sam_data_channel_sender_options_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_get_participants_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */sam_data_channel_sender_options_get_participants_internal_flat: function (/*sam_data_channel_sender_options_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_get_participants_internal_flat - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */sam_data_channel_sender_options_get_priority: function (/*sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_priority* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_get_priority - handle: ' + handle);
            let priority = sam_object.get(handle).priority
            setHeap32Value(result, priority);
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_get_reliability: function (/*sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_reliability* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_get_reliability - handle: ' + handle);
            let reliability = sam_object.get(handle).reliability
            setHeap32Value(result, reliability);
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_release: function (/*sam_data_channel_sender_options_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_set_bitrate_in_kbps: function (/*sam_data_channel_sender_options_handle */ handle, /* int */ value) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_set_bitrate_in_kbps - handle: ' + handle);
            sam_object.get(handle).bitrateInKbps = value;
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_set_channel_id: function (/*sam_data_channel_sender_options_handle */ handle, /* int */ value) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_set_channel_id - handle: ' + handle);
            sam_object.get(handle).channelId = value;
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_set_participants_internal: function (/*sam_data_channel_sender_options_handle */ handle, /* const char * * */ value, /* int */ value_count) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_set_participants_internal - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */sam_data_channel_sender_options_set_priority: function (/*sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_priority */ value) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_set_priority - handle: ' + handle);
            sam_object.get(handle).priority = value;
            return sam_status.ok;
        },
        /* sam_status */sam_data_channel_sender_options_set_reliability: function (/*sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_reliability */ value) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_sender_options_set_reliability - handle: ' + handle);
            sam_object.get(handle).reliability = value;
            return sam_status.ok;
        },

        // sam_call_end_reason

        /* sam_status */ sam_call_end_reason_addref: function (/* sam_call_end_reason_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_end_reason_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_end_reason_get_code: function (/* sam_call_end_reason_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_end_reason_get_code - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_end_reason_get_subcode: function (/* sam_call_end_reason_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_end_reason_get_code - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_end_reason_release: function (/* sam_call_end_reason_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_end_reason_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_remote_participant

        /* sam_status */ sam_remote_participant_addref: function (/* sam_remote_participant_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_call_end_reason: function (/* sam_remote_participant_handle */ handle, /* sam_call_end_reason_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_call_end_reason - handle: ' + handle);
            let reason = sam_object.get(handle).callEndReason
            setHeap32Value(result, reason?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_call_participant_role: function (/* sam_remote_participant_handle */ handle, /* sam_call_participant_role* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_call_participant_role - handle: ' + handle);
            let role = sam_object.get(handle).role
            setHeap32Value(result, role);
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_display_name: function (/* sam_remote_participant_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_display_name - handle: ' + handle);
            let displayName = sam_object.get(handle).displayName
            setHeap32Value(result, stringToOutParam(displayName));
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_endpoint_details: function (/* sam_remote_participant_handle */ handle, /* sam_endpoint_details_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_endpoint_details - handle: ' + handle);
            let endpointDetails = sam_object.get(handle).endpointDetails
            setHeap32Value(result, objectsToOutParam(endpointDetails))
            setHeap32Value(result_count, endpointDetails.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_identifier_internal: function (/* sam_remote_participant_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_identifier_internal - handle: ' + handle);
            let identifier = sam_object.get(handle).identifier
            setHeap32Value(result, stringToOutParam(identifier));
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_incoming_video_streams: function (/* sam_remote_participant_handle */ handle, /* sam_incoming_video_stream_handle ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_incoming_video_streams - handle: ' + handle);
            let streams = sam_object.get(handle).incomingVideoStreams
            setHeap32Value(result, objectsToOutParam(streams))
            setHeap32Value(result_count, streams?.length ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_is_muted: function (/* sam_remote_participant_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_is_muted - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle)?.isMuted ?? false)
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_is_speaking: function (/* sam_remote_participant_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_is_speaking - handle: ' + handle);
            setHeap8Value(result, sam_object.get(handle)?.isSpeaking ?? false)
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_get_media_stream_audio_source_ids: function (/* sam_remote_participant_handle */ handle, /* unsigned int ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_media_stream_audio_source_ids - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_remote_participant_get_media_stream_data_source_ids: function (/* sam_remote_participant_handle */ handle, /* unsigned int ** */ result, /* int* */ result_count) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_media_stream_data_source_ids - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_remote_participant_get_state: function (/* sam_remote_participant_handle */ handle, /* sam_participant_state* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_get_state - handle: ' + handle);
            let state = sam_object.get(handle).state
            setHeap32Value(result, state);
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_mute: function (/* sam_remote_participant_handle */ handle, /* sam_promise_handle */ promiseHandle) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_mute - handle: ' + handle);

            let participantPtr = new sam_object_ptr(handle);
            resolveVoidPromise(promiseHandle, participantPtr.get().muteAsync())
                .finally(() => participantPtr.reset())

            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_release: function (/* sam_remote_participant_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_set_display_name_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_set_display_name_changed - handle: ' + handle);
            sam_object.get(handle).setDisplayNameChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_set_is_muted_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_set_is_muted_changed - handle: ' + handle);
            sam_object.get(handle).setIsMutedChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_set_is_speaking_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_set_is_speaking_changed - handle: ' + handle);
            sam_object.get(handle).setIsSpeakingChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_set_role_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_set_role_changed - handle: ' + handle);
            sam_object.get(handle).setRoleChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_set_state_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_set_state_changed - handle: ' + handle);
            sam_object.get(handle).setStateChanged(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_remote_participant_set_video_stream_state_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_remote_participant_set_video_stream_state_changed - handle: ' + handle);
            sam_object.get(handle).setVideoStreamStateChanged(value, value_fn);
            return sam_status.ok;
        },

        // sam_call_video_stream

        /* sam_status */ sam_call_video_stream_addref: function (/* sam_call_video_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_video_stream_get_direction: function (/* sam_call_video_stream_handle */ handle, /* sam_stream_direction* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_get_direction - handle: ' + handle);
            let direction = sam_object.get(handle).direction
            setHeap32Value(result, direction);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_video_stream_get_id: function (/* sam_call_video_stream_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_get_id - handle: ' + handle);
            let id = sam_object.get(handle).id;
            setHeap32Value(result, id);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_video_stream_get_source_type: function (/* sam_call_video_stream_handle */ handle, /* sam_video_stream_source_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_get_source_type - handle: ' + handle);
            let sourceType = sam_object.get(handle).sourceType;
            setHeap32Value(result, sourceType);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_video_stream_get_state: function (/* sam_call_video_stream_handle */ handle, /* sam_video_stream_state* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_get_state - handle: ' + handle);
            let stream = sam_object.get(handle);
            setHeap32Value(result, stream.state);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_video_stream_get_type: function (/* sam_call_video_stream_handle */ handle, /* sam_video_stream_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_get_type - handle: ' + handle);
            let type = sam_object.get(handle).type;
            setHeap32Value(result, type);
            return sam_status.ok;
        },
        /* sam_status */ sam_call_video_stream_on_binding_created: function (/* sam_call_video_stream_handle */ handle, /* sam_i64 */ binding_event_handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_on_binding_created - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_video_stream_on_binding_failed: function (/* sam_call_video_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_on_binding_failed - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_video_stream_on_binding_released: function (/* sam_call_video_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_on_binding_released - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_call_video_stream_release: function (/* sam_call_video_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_call_video_stream_set_state_changed: function (/* sam_call_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_call_video_stream_set_state_changed - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_incoming_video_stream

        /* sam_status */ sam_incoming_video_stream_get_participant: function (/* sam_incoming_video_stream_handle */ handle, /* sam_remote_participant_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_stream_get_participant - handle: ' + handle);
            let participant = sam_object.get(handle).participant;
            setHeap32Value(result, participant?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_incoming_video_stream_get_participant_source_id: function (/* sam_incoming_video_stream_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_incoming_video_stream_get_participant_source_id - handle: ' + handle);
            let stream = sam_object.get(handle);
            setHeap32Value(result, stringToOutParam(stream.participantSourceId))
            return sam_status.ok;
        },

        // sam_video_stream_state_changed_event_args

        /* sam_status */ sam_video_stream_state_changed_event_args_addref: function (/* sam_video_stream_state_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_state_changed_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_state_changed_event_args_get_message: function (/* sam_video_stream_state_changed_event_args_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_state_changed_event_args_get_message - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_state_changed_event_args_get_stream: function (/* sam_video_stream_state_changed_event_args_handle */ handle, /* sam_call_video_stream_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_state_changed_event_args_get_stream - handle: ' + handle);
            let stream = sam_object.get(handle)?.stream;
            setHeap32Value(result, stream?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_state_changed_event_args_release: function (/* sam_video_stream_state_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_state_changed_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_raw_incoming_video_stream

        /* sam_status */ sam_raw_incoming_video_stream_set_raw_video_frame_received: function (/* sam_raw_incoming_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_raw_video_frame_received_event_args_event_handler */ value_fn) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_video_stream_set_raw_video_frame_received - handle: ' + handle);
            let stream = sam_object.get(handle);
            stream.setRawVideoFrameReceived(value, value_fn);
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_video_stream_start: function (/* sam_raw_incoming_video_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_video_stream_start - handle: ' + handle);
            let stream = sam_object.get(handle);
            stream.start();
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_incoming_video_stream_stop: function (/* sam_raw_incoming_video_stream_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_incoming_video_stream_stop - handle: ' + handle);
            let stream = sam_object.get(handle);
            stream.stop();
            return sam_status.ok;
        },

        // sam_data_channel_message

        /* sam_status */ sam_data_channel_message_addref: function (/* sam_data_channel_message_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_message_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_message_get_sequence_number: function (/* sam_data_channel_message_handle */ handle, /* sam_i64* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_message_get_sequence_number - handle: ' + handle);
            let sequenceNumber = sam_object.get(handle)?.sequenceNumber
            setHeap64Value(result, sequenceNumber ?? 0);
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_message_read_data: function (/* sam_data_channel_message_handle */ handle, /* void ** */ bytes, /* int* */ size) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_message_read_data - handle: ' + handle);
            let data = sam_object.get(handle)?.data;
            setHeap32Value(bytes, data.byteOffset)
            setHeap32Value(size, data.byteLength)
            return sam_status.ok;
        },
        /* sam_status */ sam_data_channel_message_release: function (/* sam_data_channel_message_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_data_channel_message_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_endpoint_details

        /* sam_status */ sam_endpoint_details_addref: function (/* sam_endpoint_details_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_endpoint_details_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_endpoint_details_get_audio_stream_delegated_id: function (/* sam_endpoint_details_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_endpoint_details_get_audio_stream_delegated_id - handle: ' + handle);
            let edp = sam_object.get(handle);
            let delegatedId = edp.audioStreamDelegatedId;
            if (delegatedId === undefined) {
                edp.setErrorDetails('Cannot query audio stream delegate id for audio stream that is not delegated')
                return sam_status.failed;
            }

            setHeap32Value(result, delegatedId);
            return sam_status.ok;
        },
        /* sam_status */ sam_endpoint_details_get_is_audio_stream_delegated: function (/* sam_endpoint_details_handle */ handle, /* sam_bool_u8* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_endpoint_details_get_is_audio_stream_delegated - handle: ' + handle);
            let isDelegated = sam_object.get(handle).audioStreamIsDelegated;
            setHeap8Value(result, isDelegated)
            return sam_status.ok;
        },
        /* sam_status */ sam_endpoint_details_get_participant_id: function (/* sam_endpoint_details_handle */ handle, /* const char ** */ result) {
            sam_logger.verbose('sam_exports_impl.sam_endpoint_details_get_participant_id - handle: ' + handle);
            let participantId = sam_object.get(handle).participantId
            setHeap32Value(result, stringToOutParam(participantId));
            return sam_status.ok;
        },
        /* sam_status */ sam_endpoint_details_release: function (/* sam_endpoint_details_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_endpoint_details_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_video_stream_format

        /* sam_status */ sam_video_stream_format_addref: function (/* sam_video_stream_format_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_format_create: function (/* sam_video_stream_format_handle* */ instance) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_create');
            let format = new sam_video_stream_format();
            setHeap32Value(instance, format.peekHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_format_get_frames_per_second: function (/* sam_video_stream_format_handle */ handle, /* float* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_frames_per_second - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_get_height: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_height - handle: ' + handle);
            const height = sam_object.get(handle).height;
            setHeap32Value(result, height);
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_format_get_pixel_format: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_pixel_format* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_pixel_format - handle: ' + handle);
            const pixelFormat = sam_object.get(handle).pixelFormat
            setHeap32Value(result, pixelFormat);
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_format_get_resolution: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_resolution* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_resolution - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_get_stride1: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_stride1 - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_get_stride2: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_stride2 - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_get_stride3: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_stride3 - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_get_width: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_get_width - handle: ' + handle);
            const width = sam_object.get(handle).width;
            setHeap32Value(result, width);
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_format_release: function (/* sam_video_stream_format_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_format_set_frames_per_second: function (/* sam_video_stream_format_handle */ handle, /* float */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_frames_per_second - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_set_height: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_height - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_set_pixel_format: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_pixel_format */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_pixel_format - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_set_resolution: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_resolution */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_resolution - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_set_stride1: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_stride1 - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_set_stride2: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_stride2 - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_set_stride3: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_stride3 - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_set_width: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_set_width - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_video_stream_format_changed_event_args

        /* sam_status */ sam_video_stream_format_changed_event_args_addref: function (/* sam_video_stream_format_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_changed_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_video_stream_format_changed_event_args_get_format: function (/* sam_video_stream_format_changed_event_args_handle */ handle, /* sam_video_stream_format_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_changed_event_args_get_format - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_video_stream_format_changed_event_args_release: function (/* sam_video_stream_format_changed_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_video_stream_format_changed_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        // sam_raw_video_frame_received_event_args

        /* sam_status */ sam_raw_video_frame_received_event_args_addref: function (/* sam_raw_video_frame_received_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_received_event_args_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_received_event_args_get_frame: function (/* sam_raw_video_frame_received_event_args_handle */ handle, /* sam_raw_video_frame_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_received_event_args_get_frame - handle: ' + handle);
            let frame = sam_object.get(handle).frame;
            setHeap32Value(result, frame.acquireHandle())
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_received_event_args_get_video_stream_id: function (/* sam_raw_video_frame_received_event_args_handle */ handle, /* int* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_received_event_args_get_video_stream_id - handle: ' + handle);
            let videoStreamId = sam_object.get(handle).videoStreamId;
            setHeap32Value(result, videoStreamId ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_received_event_args_release: function (/* sam_raw_video_frame_received_event_args_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_received_event_args_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },

        //sam_raw_video_frame

        /* sam_status */ sam_raw_video_frame_addref: function (/* sam_raw_video_frame_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_addref - handle: ' + handle);
            sam_object.get(handle)?.addReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_dispose: function (/* sam_raw_video_frame_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_dispose - handle: ' + handle);
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_get_stream_format: function (/* sam_raw_video_frame_handle */ handle, /* sam_video_stream_format_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_get_stream_format - handle: ' + handle);
            const streamFormat = sam_object.get(handle).streamFormat;
            setHeap32Value(result, streamFormat?.acquireHandle() ?? 0)
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_get_timestamp_in_ticks: function (/* sam_raw_video_frame_handle */ handle, /* sam_i64* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_get_timestamp_in_ticks - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_raw_video_frame_get_type: function (/* sam_raw_video_frame_handle */ handle, /* sam_raw_video_frame_type* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_get_type - handle: ' + handle);
            const type = sam_object.get(handle).type
            setHeap32Value(result, type);
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_release: function (/* sam_raw_video_frame_handle */ handle) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_release - handle: ' + handle);
            sam_object.get(handle)?.removeReference();
            return sam_status.ok;
        },
        /* sam_status */ sam_raw_video_frame_set_stream_format: function (/* sam_raw_video_frame_handle */ handle, /* sam_video_stream_format_handle */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_set_stream_format - handle: ' + handle);
            return sam_status.not_implemented;
        },
        /* sam_status */ sam_raw_video_frame_set_timestamp_in_ticks: function (/* sam_raw_video_frame_handle */ handle, /* sam_i64 */ value) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_set_timestamp_in_ticks - handle: ' + handle);
            return sam_status.not_implemented;
        },

        // sam_raw_video_frame_texture

        /* sam_status */ sam_raw_video_frame_texture_get_texture: function (/* sam_raw_video_frame_texture_handle */ handle, /* sam_gpu_texture_handle* */ result) {
            sam_logger.verbose('sam_exports_impl.sam_raw_video_frame_texture_get_texture - handle: ' + handle);
            let name = sam_object.get(handle).texture?.name
            setHeap32Value(result, name ?? 0);
            return sam_status.ok;
        }
    }
})();

