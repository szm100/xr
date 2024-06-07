//
// ACSCallingShared
// This file was auto-generated from ACSCallingModelBETA.cs.
//

// Enumerations

//
// Additional failed states for Azure Communication Services
//
const sam_calling_communication_errors =
{
    // No errors
    none: 0,
    // No Audio permissions available.
    no_audio_permission: 1,
    // No Video permissions available.
    no_video_permission: 2,
    // No Video and Audio permissions available.
    no_audio_and_video_permission: 3,
    // Failed to process push notification payload.
    received_invalid_push_notification_payload: 4,
    // Received empty/invalid notification payload.
    failed_to_process_push_notification_payload: 8,
    // Received invalid group Id.
    invalid_guid_group_id: 16,
    // Push notification device registration token is invalid.
    invalid_push_notification_device_registration_token: 32,
    // Cannot create multiple renders for same device or stream.
    multiple_renderers_not_supported: 64,
    // Renderer doesn't support creating multiple views.
    multiple_views_not_supported: 128,
    // The local video stream on the video options is invalid.
    invalid_local_video_stream_for_video_options: 256,
    // No multiple connections with same identity per app is allowed.
    no_multiple_connections_with_same_identity: 512,
    // Invalid server call Id because it's empty or has invalid values.
    invalid_server_call_id: 1024,
    // Failure while switch source on a local video stream.
    local_video_stream_switch_source_failure: 2048,
    // Attempt to answer an incoming call that has been unplaced.
    incoming_call_already_unplaced: 4096,
    // Invalid meeting link provided.
    invalid_meeting_link: 16384,
    // Attempt to add participant to a unconnected call.
    participant_added_to_unconnected_call: 32768,
    // Participant already added to the call.
    participant_already_added_to_call: 65536,
    // Call feature extension not found.
    call_feature_extension_not_found: 131072,
    // User display name is longer than the supported length.
    display_name_length_longer_than_supported: 8388608,
    // Cannot hangup for everyone in a non-hostless call
    failed_to_hangup_for_everyone: 16777216,
    // Attempted to added a participant with an invalid type to the call
    invalid_participant_added_to_call: 536870912,
    // Feature extension not found.
    feature_extension_not_found: 134217728,
    // Video effect not supported by device
    video_effect_not_supported: 268435456,
    // Sending Raw Audio Buffer Failed
    failed_to_send_raw_audio_buffer: 5,
    // Cannot mute virtual audio stream
    cannot_mute_virtual_audio_stream: 6,
    // Virtual tried to register an already registered device id.
    duplicate_device_id: 262144,
    // App is expected to register a delegation to complete the operation.
    delegate_is_required: 524288,
    // Virtual device is not started.
    virtual_device_not_started: 1048576,
    // Invalid video stream combination provided.
    invalid_video_stream_combination: 4194304,
    // No multiple connections with different cloud type per app is allowed.
    no_multiple_connections_with_different_clouds: 33554432,
    // No active audio stream to stop.
    no_active_audio_stream_to_stop: 67108864,
    // Invalid video format set
    invalid_video_format: 257,
    // The buffer does not match the video format set or does contain valid data
    invalid_buffer: 258,
    // There was a problem while sending the video frame
    raw_video_frame_not_sent: 259,
    // The selected video resolution is not valid for the virtual video
    unsupported_video_stream_resolution: 260,
    // Start captions failed
    captions_failed_to_start: 261,
    // Start captions failed, captions is disabled by configurations
    captions_disabled_by_configurations: 262,
    // Start captions failed, captions policy is disabled
    captions_policy_disabled: 263,
    // Captions are not active
    captions_not_active: 264,
    // The requested language is not supported
    captions_requested_language_not_supported: 265,
    // Set caption language failed
    failed_to_set_caption_language: 266,
    // Set caption language is disabled
    set_caption_language_disabled: 267,
    // Set caption language failed, teams premium license needed
    set_caption_language_teams_premium_license_needed: 268,
    // Failed to set spoken language
    captions_failed_to_set_spoken_language: 269,
    // Set spoken language is disabled
    captions_set_spoken_language_disabled: 270,
    // Get captions failed, call should be connected
    get_captions_failed_call_state_not_connected: 271,
    // Get captions failed
    get_captions_failed: 272,
    // Spotlight failed, spotlight feature is disabled by configurations
    spotlight_disabled_by_configurations: 273,
    // Max supported spotlight reached
    max_spotlight_reached: 274,
    // Spotlight Input List empty
    spotlight_participant_empty_list: 275,
    // Signaling Service Status Code
    signaling_operation_failed: 276,
    // Teams Interop is disabled while using proxy
    proxy_not_available_for_teams: 277,
    // Forbidden to mute others
    mute_others_forbidden: 278,
    // Internal server error occurred when muting others
    mute_others_internal_server_error: 279,
    // Not found exception occurred when muting others
    mute_others_not_found: 280,
    // Lobby is disabled by configurations
    lobby_disabled_by_configurations: 281,
    // Current conversation type does not support Lobby
    lobby_conversation_type_not_supported: 282,
    // Current meeting role does not have permission to admit/reject user from Lobby
    lobby_meeting_role_not_allowed: 283,
    // Participant is not exist in the Lobby
    lobby_participant_not_exist: 284,
    // Remove participant operation failure
    remove_participant_operation_failure: 285,
    // Music mode not enabled
    music_mode_not_enabled: 286,
    // Survey Rating Scale Invalid Bounds
    survey_rating_scale_out_of_bounds: 287,
    // Survey Rating Scale Invalid Threshold
    survey_rating_scale_invalid_threshold: 288,
    // Survey Score Out of Bounds
    survey_score_out_of_bounds: 289,
    // Survey Double Submission Not Allowed
    survey_double_submission_not_allowed: 290,
    // Admit/AdmitAll operation failure
    lobby_admit_operation_failure: 291,
    // Set media proxy failed
    failed_to_set_media_proxy: 292,
    // Invalid token provider given.
    invalid_token_provider: 293,
    // Invalid report interval for Media Statistics Call Feature.
    media_statistics_invalid_report_interval: 294,
    // Start Data Channel Call Feature failed
    data_channel_failed_to_start: 295,
    // Data Channel sender already closed
    data_channel_sender_closed: 296,
    // Random data channel id not available
    data_channel_random_id_not_available: 297,
    // Data Channel message size over the limit
    data_channel_message_size_over_limit: 298,
    // Data Channel message failed to send due to bandwidth
    data_channel_message_failure_for_bandwidth: 299,
    // Start Data Channel message failed to send due to traffic limit
    data_channel_message_failure_for_traffic_limit: 300
};
//
// Type of outgoing video stream is being used on the call
//
const sam_video_stream_type =
{
    //
    // Remote
    //
    remote_incoming: 1,
    //
    // Raw
    //
    raw_incoming: 2,
    //
    // Local
    //
    local_outgoing: 3,
    //
    // Video
    //
    virtual_outgoing: 4,
    //
    // Screen share
    //
    screen_share_outgoing: 5
};
//
// Local and Remote Video Stream types
//
const sam_video_stream_source_type =
{
    //
    // Video
    //
    video: 1,
    //
    // Screen share
    //
    screen_sharing: 2
};
//
// Defines possible running states for a video stream
//
const sam_video_stream_state =
{
    //
    // Available
    //
    available: 0,
    //
    // Started
    //
    started: 1,
    //
    // Stopping
    //
    stopping: 2,
    //
    // Stopped
    //
    stopped: 3,
    //
    // NotAvailable
    //
    not_available: 4
};
//
// Defines direction of the CallAudioStream or CallVideoStream
//
const sam_stream_direction =
{
    //
    // Incoming
    //
    incoming: 0,
    //
    // Outgoing
    //
    outgoing: 1
};
//
// Local and Remote Video Stream types
//
const sam_media_stream_type =
{
    //
    // Video
    //
    video: 1,
    //
    // Screen share
    //
    screen_sharing: 2
};
const sam_video_content_type_preference =
{
    //
    // System maintained the balance between frame rate vs resolution
    //
    auto: 0,
    //
    // Prefer high framerate video feed
    //
    high_framerate: 1,
    //
    // Prefer high resolution video feed
    //
    high_resolution: 2
};
//
// Informs how media frames will be available for encoding or decoding.
//
const sam_raw_video_frame_type =
{
    buffer: 0,
    texture: 1
};
//
// Direction of the camera
//
const sam_camera_facing =
{
    //
    // Unknown
    //
    unknown: 0,
    //
    // External device
    //
    external: 1,
    //
    // Front camera
    //
    front: 2,
    //
    // Back camera
    //
    back: 3,
    //
    // Panoramic camera
    //
    panoramic: 4,
    //
    // Left front camera
    //
    left_front: 5,
    //
    // Right front camera
    //
    right_front: 6
};
//
// Describes the video device type
//
const sam_video_device_kind =
{
    //
    // Unknown type of video device
    //
    unknown: 0,
    //
    // USB Camera Video Device
    //
    usb_camera: 1,
    //
    // Capture Adapter Video Device
    //
    capture_adapter: 2,
    //
    // Virtual Video Device
    //
    virtual: 3
};
//
// Describes the video device type
//
const sam_video_device_type =
{
    //
    // Unknown type of video device
    //
    unknown: 0,
    //
    // USB Camera Video Device
    //
    usb_camera: 1,
    //
    // Capture Adapter Video Device
    //
    capture_adapter: 2,
    //
    // Virtual Video Device
    //
    virtual: 3
};
const sam_video_binding_event_state =
{
    //
    // Created
    //
    unknown: 0,
    //
    // Created
    //
    created: 1,
    //
    // Released
    //
    released: 2,
    //
    // Failed
    //
    failed: 3
};
//
// Specifies the noise suppression modes supported by outgoing audio filters
//
const sam_noise_suppression_mode =
{
    off: 0,
    auto: 1,
    low: 2,
    high: 3
};
//
// Describes different types of Push notifications supported
//
const sam_push_notification_event_type =
{
    incoming_call: 107,
    incoming_group_call: 109,
    incoming_pstn_call: 111,
    stop_ringing: 110
};
//
// The role of an user in the Call.
//
const sam_call_participant_role =
{
    //
    // Uninitialized
    //
    uninitialized: 0,
    //
    // Attendee
    //
    attendee: 1,
    //
    // Consumer
    //
    consumer: 2,
    //
    // Presenter
    //
    presenter: 3,
    //
    // Organizer
    //
    organizer: 4,
    //
    // CoOrganizer
    //
    co_organizer: 5
};
//
// State of a participant in the call
//
const sam_participant_state =
{
    //
    // Idle
    //
    idle: 0,
    //
    // Early Media
    //
    early_media: 1,
    //
    // Connecting
    //
    connecting: 2,
    //
    // Connected
    //
    connected: 3,
    //
    // On Hold
    //
    hold: 4,
    //
    // In Lobby
    //
    in_lobby: 5,
    //
    // Disconnected
    //
    disconnected: 6,
    //
    // Ringing
    //
    ringing: 7
};
//
// Represents a diagnostic quality scale.
//
const sam_diagnostic_quality =
{
    //
    // Unknown
    //
    unknown: 0,
    //
    // Good
    //
    good: 1,
    //
    // Poor
    //
    poor: 2,
    //
    // Bad
    //
    bad: 3
};
//
// Enumerates each network diagnostic available.
//
const sam_network_diagnostic_type =
{
    //
    // Connection was lost, reconnecting to network in GOOD, POOR or BAD scale.
    //
    network_reconnect: 0,
    //
    // Received an indicator regarding incoming network quality in GOOD, POOR or BAD scale.
    //
    network_receive_quality: 1,
    //
    // Received an indicator regarding outgoing network quality in GOOD, POOR or BAD scale.
    //
    network_send_quality: 2,
    //
    // A boolean diagnostic indicating that there is no network available.
    //
    network_unavailable: 3,
    //
    // A boolean diagnostic indicating that although network available, it failed to reach ACS relays.
    //
    network_relays_unreachable: 4
};
//
// Enumerates each media diagnostic available.
//
const sam_media_diagnostic_type =
{
    //
    // Speaker is not functioning (failed to initialized the audio device client or device became inactive for more than 5 seconds).
    //
    speaker_not_functioning: 0,
    //
    // Speaker is already in use. Either the device is being used in exclusive mode,
    // or the device is being used in shared mode and the caller asked to use the device in exclusive mode.
    //
    speaker_not_functioning_device_in_use: 1,
    //
    // Speaker is muted.
    //
    speaker_muted: 2,
    //
    // Zero volume on a speaker.
    //
    speaker_volume_zero: 3,
    //
    // There is no audio speaker device on the user's system.
    //
    no_speaker_devices_enumerated: 4,
    //
    // Speaking while being on mute.
    //
    speaking_while_microphone_is_muted: 5,
    //
    // No audio microphone devices on the user's system.
    //
    no_microphone_devices_enumerated: 6,
    //
    // Microphone is already in use. Either the device is being used in exclusive mode,
    // or the device is being used in shared mode and the caller asked to use the device in exclusive mode.
    //
    microphone_not_functioning_device_in_use: 7,
    //
    // Camera stops producing frames for more than 5 seconds.
    //
    camera_freeze: 8,
    //
    // Generic camera failure.
    //
    camera_start_failed: 9,
    //
    // Common scenario where camera is in bad state.
    //
    camera_start_timed_out: 10,
    //
    // Microphone is not functioning.
    //
    microphone_not_functioning: 11,
    //
    // Microphone enters muted state unexpectedly.
    //
    microphone_muted_unexpectedly: 12,
    //
    // Camera permissions were denied in settings.
    //
    camera_permission_denied: 13
};
//
// Type of Communication
//
const sam_communication_call_type =
{
    //
    // Call
    //
    call: 0,
    //
    // TeamsCall
    //
    teams_call: 1
};
//
// Local and Remote Video scaling mode
//
const sam_scaling_mode =
{
    //
    // Cropped
    //
    crop: 1,
    //
    // Fitted
    //
    fit: 2
};
//
// State of a call
//
const sam_call_state =
{
    //
    // None - disposed or applicable very early in lifetime of a call
    //
    none: 0,
    //
    // Early Media
    //
    early_media: 1,
    //
    // Call is being connected
    //
    connecting: 3,
    //
    // Call is ringing
    //
    ringing: 4,
    //
    // Call is connected
    //
    connected: 5,
    //
    // Call held by local participant
    //
    local_hold: 6,
    //
    // Call is being disconnected
    //
    disconnecting: 7,
    //
    // Call is disconnected
    //
    disconnected: 8,
    //
    // In Lobby
    //
    in_lobby: 9,
    //
    // Call held by a remote participant
    //
    remote_hold: 10
};
//
// Type of audio device
//
const sam_audio_device_type =
{
    //
    // Audio device is a microphone
    //
    microphone: 0,
    //
    // Audio device is a speaker
    //
    speaker: 1
};
//
// DTMF (Dual-Tone Multi-Frequency) tone for PSTN calls
//
const sam_dtmf_tone =
{
    //
    // Zero
    //
    zero: 0,
    //
    // One
    //
    one: 1,
    //
    // Two
    //
    two: 2,
    //
    // Three
    //
    three: 3,
    //
    // Four
    //
    four: 4,
    //
    // Five
    //
    five: 5,
    //
    // Six
    //
    six: 6,
    //
    // Seven
    //
    seven: 7,
    //
    // Eight
    //
    eight: 8,
    //
    // Nine
    //
    nine: 9,
    //
    // Star
    //
    star: 10,
    //
    // Pound
    //
    pound: 11,
    //
    // A
    //
    a: 12,
    //
    // B
    //
    b: 13,
    //
    // C
    //
    c: 14,
    //
    // D
    //
    d: 15,
    //
    // Flash
    //
    flash: 16
};
//
// Direction of a Call
//
const sam_call_direction =
{
    //
    // Outgoing call
    //
    outgoing: 1,
    //
    // Incoming call
    //
    incoming: 2
};
//
// Indicates the state of recording
//
const sam_recording_state =
{
    //
    // Recording started
    //
    started: 0,
    //
    // Recording paused
    //
    paused: 1,
    //
    // Recording stopped
    //
    ended: 2
};
//
// Priority options for data channel.
//
const sam_data_channel_priority =
{
    normal: 0,
    high: 1
};
//
// Reliability options for data channel.
//
const sam_data_channel_reliability =
{
    lossy: 0,
    durable: 1
};
//
// Defines possible running states for content sharing
//
const sam_content_sharing_state =
{
    started: 0,
    stopped: 1
};
const sam_content_sharing_type =
{
    none: 0,
    powerpoint: 1
};
//
// Indicates the captions result type
//
const sam_captions_result_type =
{
    //
    // Text contains partially spoken sentence.
    //
    partial: 0,
    //
    // Sentence has been completely transcribed.
    //
    final: 1
};
//
// Indicates the active captions type
//
const sam_captions_type =
{
    //
    // Teams Captions.
    //
    teams_captions: 0,
    //
    // Communication Captions.
    //
    communication_captions: 1
};
//
// Informs how the pixels of the video frame is encoded.
//
const sam_video_stream_pixel_format =
{
    //
    // Pixel format is encoded as single plane with 32 bits per pixels,
    // 8 bits per channel, ordered as blue, followed by green, followed
    // by red and discarding the last 8 bits.
    //
    bgrx: 0,
    //
    // Pixel format is encoded as single plane with 24 bits per pixels,
    // 8 bits per channel, ordered as blue, followed by green, followed
    // by red.
    //
    bgr24: 1,
    //
    // Pixel format is encoded as single plane with 32 bits per pixels,
    // 8 bits per channel, ordered as blue, followed by green, followed
    // by red and discarding the last 8 bits.
    //
    rgbx: 2,
    //
    // Pixel format is encoded as single plane with 32 bits per pixels,
    // 8 bits per channel, ordered as blue, followed by green, followed
    // by red and alpha as 8 bits each. Alpha is discarded.
    //
    rgba: 3,
    //
    // Pixel format  is encoded as YUV 4:2:0 with a plane of 8 bit Y
    // samples, followed by an interleaved U/V plane containing 8 bit
    // 2x2 sub-sampled color difference samples.
    //
    nv12: 4,
    //
    // Pixel format is encoded as YUV 4:2:0 with a plane of 8 bit ordered
    // by Y, followed by a U plane, followed by a V plane.
    //
    i420: 5
};
//
// Represents the list of supported video resolution for VirtualOutgoingVideoStream
//
const sam_video_stream_resolution =
{
    //
    // Represents unknown resolution
    //
    unknown: 0,
    //
    // Represents 1920x1080 resolution
    //
    p1080: 1,
    //
    // Represents 1280x720 resolution
    //
    p720: 2,
    //
    // Represents 960x540 resolution
    //
    p540: 3,
    //
    // Represents 858x480 resolution
    //
    p480: 4,
    //
    // Represents 640x360 resolution
    //
    p360: 5,
    //
    // Represents 480x270 resolution
    //
    p270: 6,
    //
    // Represents 352x240 resolution
    //
    p240: 7,
    //
    // Represents 320x180 resolution
    //
    p180: 8,
    //
    // Represents 1920x1080 resolution
    //
    full_hd: 9,
    //
    // Represents 1280x720 resolution
    //
    hd: 10,
    //
    // Represents 640x480 resolution
    //
    vga: 11,
    //
    // Represents 320x240 resolution
    //
    qvga: 12
};
//
// Defines possible running states for an audio stream
//
const sam_audio_stream_state =
{
    //
    // Started
    //
    started: 0,
    //
    // Stopped
    //
    stopped: 1
};
//
// Specifies the sample rates supported by the RawAudioStreams entities
//
const sam_audio_stream_sample_rate =
{
    //
    // 16000 Hz
    //
    hz_16000: 0,
    //
    // 22050 Hz
    //
    hz_22050: 1,
    //
    // 24000 Hz
    //
    hz_24000: 2,
    //
    // 32000 Hz
    //
    hz_32000: 3,
    //
    // 44100 Hz
    //
    hz_44100: 4,
    //
    // 48000 Hz
    //
    hz_48000: 5
};
//
// Specifies the channel modes supported by the RawAudioStreams entities
//
const sam_audio_stream_channel_mode =
{
    //
    // Mono Channel Audio
    //
    mono: 0,
    //
    // Stereo Channel Audio
    //
    stereo: 1
};
//
// Specifies the audio formats supported by the RawAudioStreams entities
//
const sam_audio_stream_format =
{
    //
    // 16 BIT PCM bit-depth
    //
    pcm16_bit: 0
};
//
// Specifies the data per block in milliseconds for buffers supported by the RawOutgoingAudioStream entities
//
const sam_audio_stream_buffer_duration =
{
    //
    // 10 ms blocks
    //
    ms10: 0,
    //
    // 20 ms blocks
    //
    ms20: 1
};
//
// Type of outgoing audio stream is being used on the call
//
const sam_audio_stream_type =
{
    //
    // Remote Incoming
    //
    remote_incoming: 1,
    //
    // Raw Incoming
    //
    raw_incoming: 2,
    //
    // Local Outgoing
    //
    local_outgoing: 3,
    //
    // Virtual Outgoing
    //
    virtual_outgoing: 4
};
const sam_call_cloud_environment =
{
    public: 0,
    dod: 1,
    gcch: 2
};
//
// List of used permissions to place a call
//
const sam_device_permission_type =
{
    camera: 0,
    speaker: 1,
    microphone: 2
};
const sam_handle_type =
{
    unknown: 0,
    join_call_options: 1,
    accept_call_options: 2,
    start_call_options: 3,
    group_chat_call_locator: 4,
    group_call_locator: 5,
    teams_meeting_coordinates_locator: 6,
    teams_meeting_link_locator: 7,
    call_agent_options: 8,
    call_agent: 9,
    incoming_call: 10,
    call_info: 11,
    call: 12,
    recording_call_feature: 13,
    transcription_call_feature: 14,
    communication_captions: 15,
    teams_captions: 16,
    captions_call_feature: 17,
    dominant_speakers_call_feature: 18,
    raise_hand_call_feature: 19,
    spotlight_call_feature: 20,
    raw_video_frame_buffer: 21,
    raw_video_frame_texture: 22,
    local_video_stream: 23,
    screen_share_outgoing_video_stream: 24,
    virtual_outgoing_video_stream: 25,
    raw_incoming_video_stream: 26,
    remote_video_stream: 27,
    room_call_locator: 28,
    raw_incoming_audio_stream_properties: 29,
    raw_outgoing_audio_stream_properties: 30,
    raw_outgoing_audio_stream_options: 31,
    raw_incoming_audio_stream_options: 32,
    local_outgoing_audio_stream: 33,
    remote_incoming_audio_stream: 34,
    raw_incoming_audio_stream: 35,
    raw_outgoing_audio_stream: 36,
    background_blur_effect: 37,
    background_replacement_effect: 38,
    local_video_effects_feature: 39,
    data_channel_call_feature: 40,
    user_call_identifier: 41,
    microsoft_teams_user_call_identifier: 42,
    phone_number_call_identifier: 43,
    unknown_call_identifier: 44,
    start_teams_call_options: 45,
    start_teams_group_call_options: 46,
    teams_call_agent_options: 47,
    teams_call_agent: 48,
    teams_incoming_call: 49,
    teams_call_info: 50,
    teams_call: 51,
    local_user_diagnostics_call_feature: 52,
    media_statistics_call_feature: 53,
    content_sharing_call_feature: 54,
    power_point_info: 55,
    pre_call_diagnostics_call_client_feature: 56
};
const sam_status =
{
    //
    // Success
    //
    ok: 0,
    //
    // Failed
    //
    failed: 1,
    //
    // Cannot access a disposed object.
    //
    object_disposed: 2,
    //
    // Out of memory.
    //
    out_of_memory: 12,
    //
    // Invalid argument.
    //
    invalid_argument: 22,
    //
    // The operation attempted to mutate a value already mutably accessed by another operation. The operation was aborted, as this would have caused a race condition.
    //
    concurrent_mutation: 24,
    //
    // The value is out of range.
    //
    out_of_range: 34,
    //
    // Not implemented.
    //
    not_implemented: 38,
    //
    // The operation was canceled.
    //
    operation_canceled: 59,
    //
    // The key does not exist in the collection.
    //
    key_not_found: 77,
    // No errors
    none: 78,
    // No Audio permissions available.
    no_audio_permission: 79,
    // No Video permissions available.
    no_video_permission: 80,
    // No Video and Audio permissions available.
    no_audio_and_video_permission: 81,
    // Failed to process push notification payload.
    received_invalid_push_notification_payload: 82,
    // Received empty/invalid notification payload.
    failed_to_process_push_notification_payload: 83,
    // Received invalid group Id.
    invalid_guid_group_id: 84,
    // Push notification device registration token is invalid.
    invalid_push_notification_device_registration_token: 85,
    // Cannot create multiple renders for same device or stream.
    multiple_renderers_not_supported: 86,
    // Renderer doesn't support creating multiple views.
    multiple_views_not_supported: 87,
    // The local video stream on the video options is invalid.
    invalid_local_video_stream_for_video_options: 88,
    // No multiple connections with same identity per app is allowed.
    no_multiple_connections_with_same_identity: 89,
    // Invalid server call Id because it's empty or has invalid values.
    invalid_server_call_id: 90,
    // Failure while switch source on a local video stream.
    local_video_stream_switch_source_failure: 91,
    // Attempt to answer an incoming call that has been unplaced.
    incoming_call_already_unplaced: 92,
    // Invalid meeting link provided.
    invalid_meeting_link: 93,
    // Attempt to add participant to a unconnected call.
    participant_added_to_unconnected_call: 94,
    // Participant already added to the call.
    participant_already_added_to_call: 95,
    // Call feature extension not found.
    call_feature_extension_not_found: 96,
    // User display name is longer than the supported length.
    display_name_length_longer_than_supported: 97,
    // Cannot hangup for everyone in a non-hostless call
    failed_to_hangup_for_everyone: 98,
    // Attempted to added a participant with an invalid type to the call
    invalid_participant_added_to_call: 99,
    // Feature extension not found.
    feature_extension_not_found: 100,
    // Video effect not supported by device
    video_effect_not_supported: 101,
    // Sending Raw Audio Buffer Failed
    failed_to_send_raw_audio_buffer: 102,
    // Cannot mute virtual audio stream
    cannot_mute_virtual_audio_stream: 103,
    // Virtual tried to register an already registered device id.
    duplicate_device_id: 104,
    // App is expected to register a delegation to complete the operation.
    delegate_is_required: 105,
    // Virtual device is not started.
    virtual_device_not_started: 106,
    // Invalid video stream combination provided.
    invalid_video_stream_combination: 107,
    // No multiple connections with different cloud type per app is allowed.
    no_multiple_connections_with_different_clouds: 108,
    // No active audio stream to stop.
    no_active_audio_stream_to_stop: 109,
    // Invalid video format set
    invalid_video_format: 110,
    // The buffer does not match the video format set or does contain valid data
    invalid_buffer: 111,
    // There was a problem while sending the video frame
    raw_video_frame_not_sent: 112,
    // The selected video resolution is not valid for the virtual video
    unsupported_video_stream_resolution: 113,
    // Start captions failed
    captions_failed_to_start: 114,
    // Start captions failed, captions is disabled by configurations
    captions_disabled_by_configurations: 115,
    // Start captions failed, captions policy is disabled
    captions_policy_disabled: 116,
    // Captions are not active
    captions_not_active: 117,
    // The requested language is not supported
    captions_requested_language_not_supported: 118,
    // Set caption language failed
    failed_to_set_caption_language: 119,
    // Set caption language is disabled
    set_caption_language_disabled: 120,
    // Set caption language failed, teams premium license needed
    set_caption_language_teams_premium_license_needed: 121,
    // Failed to set spoken language
    captions_failed_to_set_spoken_language: 122,
    // Set spoken language is disabled
    captions_set_spoken_language_disabled: 123,
    // Get captions failed, call should be connected
    get_captions_failed_call_state_not_connected: 124,
    // Get captions failed
    get_captions_failed: 125,
    // Spotlight failed, spotlight feature is disabled by configurations
    spotlight_disabled_by_configurations: 126,
    // Max supported spotlight reached
    max_spotlight_reached: 127,
    // Spotlight Input List empty
    spotlight_participant_empty_list: 128,
    // Signaling Service Status Code
    signaling_operation_failed: 129,
    // Teams Interop is disabled while using proxy
    proxy_not_available_for_teams: 130,
    // Forbidden to mute others
    mute_others_forbidden: 131,
    // Internal server error occurred when muting others
    mute_others_internal_server_error: 132,
    // Not found exception occurred when muting others
    mute_others_not_found: 133,
    // Lobby is disabled by configurations
    lobby_disabled_by_configurations: 134,
    // Current conversation type does not support Lobby
    lobby_conversation_type_not_supported: 135,
    // Current meeting role does not have permission to admit/reject user from Lobby
    lobby_meeting_role_not_allowed: 136,
    // Participant is not exist in the Lobby
    lobby_participant_not_exist: 137,
    // Remove participant operation failure
    remove_participant_operation_failure: 138,
    // Music mode not enabled
    music_mode_not_enabled: 139,
    // Survey Rating Scale Invalid Bounds
    survey_rating_scale_out_of_bounds: 140,
    // Survey Rating Scale Invalid Threshold
    survey_rating_scale_invalid_threshold: 141,
    // Survey Score Out of Bounds
    survey_score_out_of_bounds: 142,
    // Survey Double Submission Not Allowed
    survey_double_submission_not_allowed: 143,
    // Admit/AdmitAll operation failure
    lobby_admit_operation_failure: 144,
    // Set media proxy failed
    failed_to_set_media_proxy: 145,
    // Invalid token provider given.
    invalid_token_provider: 146,
    // Invalid report interval for Media Statistics Call Feature.
    media_statistics_invalid_report_interval: 147,
    // Start Data Channel Call Feature failed
    data_channel_failed_to_start: 148,
    // Data Channel sender already closed
    data_channel_sender_closed: 149,
    // Random data channel id not available
    data_channel_random_id_not_available: 150,
    // Data Channel message size over the limit
    data_channel_message_size_over_limit: 151,
    // Data Channel message failed to send due to bandwidth
    data_channel_message_failure_for_bandwidth: 152,
    // Start Data Channel message failed to send due to traffic limit
    data_channel_message_failure_for_traffic_limit: 153
};

// Promise runtime

const sam_packed_value_type = 
{
    none: 0,
    pointer: 1,
    uint64: 2,
    int64: 3,
    narrow_string: 4,
    wide_string: 5,

    simple_array: 0x40000000
};

class sam_packed_value {

    static size = 4 + 4 + 8;

    // Use sam_packed_value.size/copyTo for filling memory for passing to promise
    static copyTo(ptr, type, value, arrSize) {
        
        HEAP32[(ptr + 0) >> 2] = type;
        HEAP32[(ptr + 4) >> 2] = arrSize ?? 0;

        if (0 !== (type & sam_packed_value_type.simple_array)) {
            HEAP32[(ptr + 8) >> 2] = value;
        }
        else {
            switch (type) {
                case sam_packed_value_type.pointer:
                case sam_packed_value_type.narrow_string:
                case sam_packed_value_type.wide_string:
                    HEAP32[(ptr + 8) >> 2] = value;
                    break;
                case sam_packed_value_type.int64:
                    HEAP64[(ptr + 8) >> 3] = value;
                    break;
                case sam_packed_value_type.none:
                    break;

                default: throw new Error("Not supported packed value type: " + type);
            }
        }
    }
}

// typedef void (*sam_promise_on_complete)(void* pContext, sam_packed_value * pValue);
// typedef void (*sam_promise_on_error)(void* pContext, void* pHandle, int result);
// typedef void (*sam_promise_on_progress)(void* context, float progress);

class sam_promise_create_options {
    constructor(ptr){
        this.context = HEAP32[(ptr + 0) >> 2]; // void *
        this.on_complete = HEAP32[(ptr + 4) >> 2]; // sam_promise_on_complete
        this.on_error = HEAP32[(ptr + 8) >> 2]; // sam_promise_on_error
        this.on_progress = HEAP32[(ptr + 12) >> 2]; // sam_promise_on_progres
    }
};

class sam_apigen_guid {
    constructor(ptr) {
        this._data1 = HEAPU32[(ptr + 0) >> 2]; // int32
        this._data2 = HEAPU16[(ptr + 4) >> 1]; // int 16
        this._data3 = HEAPU16[(ptr + 6) >> 1]; // int 16
        this._data4 = new Uint8Array(8);
        this._data4.set(new Uint8Array(HEAP8.buffer, ptr + 8, 8))
    }

    copyToHeap(ptr) {
        HEAPU32[(ptr + 0) >> 2] = this._data1
        HEAPU16[(ptr + 4) >> 1] = this._data2
        HEAPU16[(ptr + 6) >> 1] = this._data3
        new Uint8Array(HEAP8.buffer, ptr + 8, 8).set(this._data4)
    }

    toString() {
        // "%08x-%04x-%04x-%02x%02x-%02x%02x%02x%02x%02x%02x"
        return this._data1.toString(16).padStart(8, 0) + '-' + 
            this._data2.toString(16).padStart(4, '0') + '-' +
            this._data3.toString(16).padStart(4, '0') + '-' +
            this._data4[0].toString(16).padStart(2, '0') + 
            this._data4[1].toString(16).padStart(2, '0') + '-' +
            this._data4[2].toString(16).padStart(2, '0') + 
            this._data4[3].toString(16).padStart(2, '0') + 
            this._data4[4].toString(16).padStart(2, '0') + 
            this._data4[5].toString(16).padStart(2, '0') + 
            this._data4[6].toString(16).padStart(2, '0') + 
            this._data4[7].toString(16).padStart(2, '0')
    }
}


class sam_guid extends sam_apigen_guid {
    constructor(ptr) { super(ptr) }
}


