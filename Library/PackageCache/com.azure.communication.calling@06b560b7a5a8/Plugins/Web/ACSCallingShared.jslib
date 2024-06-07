//
// ACSCallingShared
// This file was auto-generated from ACSCallingModelBETA.cs.
//

mergeInto(LibraryManager.library, {
    // Promise runtime

    /* sam_status */ sam_promise_create: function(/* sam_promise_create_options* */ pOptions, /* sam_promise_handle* */ pPromiseHandle) {
        if (typeof sam_exports_impl.sam_promise_create === "function"){
            return sam_exports_impl.sam_promise_create(pOptions, pPromiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_promise_cancel: function(/* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_promise_cancel === "function"){
            return sam_exports_impl.sam_promise_cancel(promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_promise_destroy: function(/* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_promise_destroy === "function"){
            return sam_exports_impl.sam_promise_destroy(promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },

    // Exported functions.

    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_accept_call_options_create: function (/* sam_accept_call_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_accept_call_options_create === "function"){
            return sam_exports_impl.sam_accept_call_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_accept_call_options_get_video_options: function (/* sam_accept_call_options_handle */ handle, /* sam_video_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_accept_call_options_get_video_options === "function"){
            return sam_exports_impl.sam_accept_call_options_get_video_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_accept_call_options_set_video_options: function (/* sam_accept_call_options_handle */ handle, /* sam_video_options_handle */ value) {
        if (typeof sam_exports_impl.sam_accept_call_options_set_video_options === "function"){
            return sam_exports_impl.sam_accept_call_options_set_video_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_add_phone_number_options_addref: function (/* sam_add_phone_number_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_add_phone_number_options_addref === "function"){
            return sam_exports_impl.sam_add_phone_number_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_add_phone_number_options_create: function (/* sam_add_phone_number_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_add_phone_number_options_create === "function"){
            return sam_exports_impl.sam_add_phone_number_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_add_phone_number_options_get_alternate_id: function (/* sam_add_phone_number_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_add_phone_number_options_get_alternate_id === "function"){
            return sam_exports_impl.sam_add_phone_number_options_get_alternate_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_add_phone_number_options_release: function (/* sam_add_phone_number_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_add_phone_number_options_release === "function"){
            return sam_exports_impl.sam_add_phone_number_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_add_phone_number_options_set_alternate_id: function (/* sam_add_phone_number_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_add_phone_number_options_set_alternate_id === "function"){
            return sam_exports_impl.sam_add_phone_number_options_set_alternate_id(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_add_teams_participant_options_addref: function (/* sam_add_teams_participant_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_add_teams_participant_options_addref === "function"){
            return sam_exports_impl.sam_add_teams_participant_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance of AddTeamsParticipantOptions
    //
    /* sam_status */ sam_add_teams_participant_options_create_string_thread_id: function (/* const char * */ thread_id, /* sam_add_teams_participant_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_add_teams_participant_options_create_string_thread_id === "function"){
            return sam_exports_impl.sam_add_teams_participant_options_create_string_thread_id(thread_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_add_teams_participant_options_get_thread_id: function (/* sam_add_teams_participant_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_add_teams_participant_options_get_thread_id === "function"){
            return sam_exports_impl.sam_add_teams_participant_options_get_thread_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_add_teams_participant_options_release: function (/* sam_add_teams_participant_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_add_teams_participant_options_release === "function"){
            return sam_exports_impl.sam_add_teams_participant_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_all_participants_result_addref: function (/* sam_admit_all_participants_result_handle */ handle) {
        if (typeof sam_exports_impl.sam_admit_all_participants_result_addref === "function"){
            return sam_exports_impl.sam_admit_all_participants_result_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_all_participants_result_get_failure_count: function (/* sam_admit_all_participants_result_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_admit_all_participants_result_get_failure_count === "function"){
            return sam_exports_impl.sam_admit_all_participants_result_get_failure_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_all_participants_result_get_success_count: function (/* sam_admit_all_participants_result_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_admit_all_participants_result_get_success_count === "function"){
            return sam_exports_impl.sam_admit_all_participants_result_get_success_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_all_participants_result_release: function (/* sam_admit_all_participants_result_handle */ handle) {
        if (typeof sam_exports_impl.sam_admit_all_participants_result_release === "function"){
            return sam_exports_impl.sam_admit_all_participants_result_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_participants_result_addref: function (/* sam_admit_participants_result_handle */ handle) {
        if (typeof sam_exports_impl.sam_admit_participants_result_addref === "function"){
            return sam_exports_impl.sam_admit_participants_result_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_participants_result_get_failed_participants: function (/* sam_admit_participants_result_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_admit_participants_result_get_failed_participants === "function"){
            return sam_exports_impl.sam_admit_participants_result_get_failed_participants(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_participants_result_get_success_count: function (/* sam_admit_participants_result_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_admit_participants_result_get_success_count === "function"){
            return sam_exports_impl.sam_admit_participants_result_get_success_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_admit_participants_result_release: function (/* sam_admit_participants_result_handle */ handle) {
        if (typeof sam_exports_impl.sam_admit_participants_result_release === "function"){
            return sam_exports_impl.sam_admit_participants_result_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_device_details_addref: function (/* sam_audio_device_details_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_device_details_addref === "function"){
            return sam_exports_impl.sam_audio_device_details_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_device_details_get_device_type: function (/* sam_audio_device_details_handle */ handle, /* sam_audio_device_type* */ result) {
        if (typeof sam_exports_impl.sam_audio_device_details_get_device_type === "function"){
            return sam_exports_impl.sam_audio_device_details_get_device_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_device_details_get_id: function (/* sam_audio_device_details_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_audio_device_details_get_id === "function"){
            return sam_exports_impl.sam_audio_device_details_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_device_details_get_is_system_default: function (/* sam_audio_device_details_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_audio_device_details_get_is_system_default === "function"){
            return sam_exports_impl.sam_audio_device_details_get_is_system_default(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_device_details_get_name: function (/* sam_audio_device_details_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_audio_device_details_get_name === "function"){
            return sam_exports_impl.sam_audio_device_details_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_device_details_release: function (/* sam_audio_device_details_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_device_details_release === "function"){
            return sam_exports_impl.sam_audio_device_details_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_devices_updated_event_args_addref: function (/* sam_audio_devices_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_devices_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_audio_devices_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_devices_updated_event_args_get_added_audio_devices: function (/* sam_audio_devices_updated_event_args_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_audio_devices_updated_event_args_get_added_audio_devices === "function"){
            return sam_exports_impl.sam_audio_devices_updated_event_args_get_added_audio_devices(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_devices_updated_event_args_get_removed_audio_devices: function (/* sam_audio_devices_updated_event_args_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_audio_devices_updated_event_args_get_removed_audio_devices === "function"){
            return sam_exports_impl.sam_audio_devices_updated_event_args_get_removed_audio_devices(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_devices_updated_event_args_release: function (/* sam_audio_devices_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_devices_updated_event_args_release === "function"){
            return sam_exports_impl.sam_audio_devices_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_options_addref: function (/* sam_audio_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_options_addref === "function"){
            return sam_exports_impl.sam_audio_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_audio_options_create: function (/* sam_audio_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_audio_options_create === "function"){
            return sam_exports_impl.sam_audio_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_options_get_muted: function (/* sam_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_audio_options_get_muted === "function"){
            return sam_exports_impl.sam_audio_options_get_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_options_release: function (/* sam_audio_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_options_release === "function"){
            return sam_exports_impl.sam_audio_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_options_set_muted: function (/* sam_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_audio_options_set_muted === "function"){
            return sam_exports_impl.sam_audio_options_set_muted(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_stream_state_changed_event_args_addref: function (/* sam_audio_stream_state_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_stream_state_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_audio_stream_state_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_stream_state_changed_event_args_get_message: function (/* sam_audio_stream_state_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_audio_stream_state_changed_event_args_get_message === "function"){
            return sam_exports_impl.sam_audio_stream_state_changed_event_args_get_message(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_stream_state_changed_event_args_get_stream: function (/* sam_audio_stream_state_changed_event_args_handle */ handle, /* sam_call_audio_stream_handle* */ result) {
        if (typeof sam_exports_impl.sam_audio_stream_state_changed_event_args_get_stream === "function"){
            return sam_exports_impl.sam_audio_stream_state_changed_event_args_get_stream(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_audio_stream_state_changed_event_args_release: function (/* sam_audio_stream_state_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_audio_stream_state_changed_event_args_release === "function"){
            return sam_exports_impl.sam_audio_stream_state_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_background_blur_effect_create: function (/* sam_background_blur_effect_handle* */ instance) {
        if (typeof sam_exports_impl.sam_background_blur_effect_create === "function"){
            return sam_exports_impl.sam_background_blur_effect_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance of BackgroundReplacementEffect
    //
    /* sam_status */ sam_background_replacement_effect_create: function (/* sam_background_replacement_effect_handle* */ instance) {
        if (typeof sam_exports_impl.sam_background_replacement_effect_create === "function"){
            return sam_exports_impl.sam_background_replacement_effect_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_background_replacement_effect_get_buffer: function (/* sam_background_replacement_effect_handle */ handle, /* sam_background_replacement_memory_buffer_handle* */ result) {
        if (typeof sam_exports_impl.sam_background_replacement_effect_get_buffer === "function"){
            return sam_exports_impl.sam_background_replacement_effect_get_buffer(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_background_replacement_effect_set_buffer: function (/* sam_background_replacement_effect_handle */ handle, /* sam_background_replacement_memory_buffer_handle */ value) {
        if (typeof sam_exports_impl.sam_background_replacement_effect_set_buffer === "function"){
            return sam_exports_impl.sam_background_replacement_effect_set_buffer(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_add_participant_string_participant: function (/* sam_call_handle */ handle, /* const char * */ participant, /* sam_remote_participant_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_add_participant_string_participant === "function"){
            return sam_exports_impl.sam_call_add_participant_string_participant(handle, participant, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_add_participant_string_participant_add_phone_number_options_options: function (/* sam_call_handle */ handle, /* const char * */ participant, /* sam_add_phone_number_options_handle */ options, /* sam_remote_participant_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_add_participant_string_participant_add_phone_number_options_options === "function"){
            return sam_exports_impl.sam_call_add_participant_string_participant_add_phone_number_options_options(handle, participant, options, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_get_calls: function (/* sam_call_agent_handle */ handle, /* sam_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_agent_get_calls === "function"){
            return sam_exports_impl.sam_call_agent_get_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_join_internal: function (/* sam_call_agent_handle */ handle, /* sam_join_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_agent_join_internal === "function"){
            return sam_exports_impl.sam_call_agent_join_internal(handle, meeting_locator, join_call_options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_join_internal_with_call_kit: function (/* sam_call_agent_handle */ handle, /* sam_join_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_agent_join_internal_with_call_kit === "function"){
            return sam_exports_impl.sam_call_agent_join_internal_with_call_kit(handle, meeting_locator, join_call_options, call_id, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default options
    //
    /* sam_status */ sam_call_agent_options_create: function (/* sam_call_agent_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_agent_options_create === "function"){
            return sam_exports_impl.sam_call_agent_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_options_get_display_name: function (/* sam_call_agent_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_agent_options_get_display_name === "function"){
            return sam_exports_impl.sam_call_agent_options_get_display_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_options_get_emergency_call_options: function (/* sam_call_agent_options_handle */ handle, /* sam_emergency_call_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_agent_options_get_emergency_call_options === "function"){
            return sam_exports_impl.sam_call_agent_options_get_emergency_call_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_options_get_push_notification_ttl: function (/* sam_call_agent_options_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_call_agent_options_get_push_notification_ttl === "function"){
            return sam_exports_impl.sam_call_agent_options_get_push_notification_ttl(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_options_set_display_name: function (/* sam_call_agent_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_call_agent_options_set_display_name === "function"){
            return sam_exports_impl.sam_call_agent_options_set_display_name(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_options_set_emergency_call_options: function (/* sam_call_agent_options_handle */ handle, /* sam_emergency_call_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_agent_options_set_emergency_call_options === "function"){
            return sam_exports_impl.sam_call_agent_options_set_emergency_call_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_options_set_push_notification_ttl: function (/* sam_call_agent_options_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_call_agent_options_set_push_notification_ttl === "function"){
            return sam_exports_impl.sam_call_agent_options_set_push_notification_ttl(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_set_calls_updated: function (/* sam_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_calls_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_call_agent_set_calls_updated === "function"){
            return sam_exports_impl.sam_call_agent_set_calls_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_set_incoming_call_received: function (/* sam_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_call_received_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_call_agent_set_incoming_call_received === "function"){
            return sam_exports_impl.sam_call_agent_set_incoming_call_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_set_on_calls_updated: function (/* sam_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_calls_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_agent_set_on_calls_updated === "function"){
            return sam_exports_impl.sam_call_agent_set_on_calls_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_set_on_incoming_call: function (/* sam_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_call_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_agent_set_on_incoming_call === "function"){
            return sam_exports_impl.sam_call_agent_set_on_incoming_call(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_start_call_internal: function (/* sam_call_agent_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_start_call_options_handle */ options, /* sam_join_meeting_locator_handle */ meeting_locator, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_agent_start_call_internal === "function"){
            return sam_exports_impl.sam_call_agent_start_call_internal(handle, participants, participants_count, options, meeting_locator, call_id, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_agent_start_call_with_context: function (/* sam_call_agent_handle */ handle, /* sam_context_handle */ context, /* const char * * */ participants, /* int */ participants_count, /* sam_start_call_options_handle */ options, /* sam_call_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_agent_start_call_with_context === "function"){
            return sam_exports_impl.sam_call_agent_start_call_with_context(handle, context, participants, participants_count, options, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_audio_stream_addref: function (/* sam_call_audio_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_audio_stream_addref === "function"){
            return sam_exports_impl.sam_call_audio_stream_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_audio_stream_get_direction: function (/* sam_call_audio_stream_handle */ handle, /* sam_stream_direction* */ result) {
        if (typeof sam_exports_impl.sam_call_audio_stream_get_direction === "function"){
            return sam_exports_impl.sam_call_audio_stream_get_direction(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_audio_stream_get_state: function (/* sam_call_audio_stream_handle */ handle, /* sam_audio_stream_state* */ result) {
        if (typeof sam_exports_impl.sam_call_audio_stream_get_state === "function"){
            return sam_exports_impl.sam_call_audio_stream_get_state(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_audio_stream_get_type: function (/* sam_call_audio_stream_handle */ handle, /* sam_audio_stream_type* */ result) {
        if (typeof sam_exports_impl.sam_call_audio_stream_get_type === "function"){
            return sam_exports_impl.sam_call_audio_stream_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_audio_stream_release: function (/* sam_call_audio_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_audio_stream_release === "function"){
            return sam_exports_impl.sam_call_audio_stream_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_audio_stream_set_state_changed: function (/* sam_call_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_stream_state_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_call_audio_stream_set_state_changed === "function"){
            return sam_exports_impl.sam_call_audio_stream_set_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_addref: function (/* sam_call_captions_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_captions_addref === "function"){
            return sam_exports_impl.sam_call_captions_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_active_spoken_language: function (/* sam_call_captions_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_captions_get_active_spoken_language === "function"){
            return sam_exports_impl.sam_call_captions_get_active_spoken_language(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_captions_type: function (/* sam_call_captions_handle */ handle, /* sam_captions_type* */ result) {
        if (typeof sam_exports_impl.sam_call_captions_get_captions_type === "function"){
            return sam_exports_impl.sam_call_captions_get_captions_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_is_enabled: function (/* sam_call_captions_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_call_captions_get_is_enabled === "function"){
            return sam_exports_impl.sam_call_captions_get_is_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_supported_spoken_languages: function (/* sam_call_captions_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_captions_get_supported_spoken_languages === "function"){
            return sam_exports_impl.sam_call_captions_get_supported_spoken_languages(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_supported_spoken_languages_flat: function (/* sam_call_captions_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_captions_get_supported_spoken_languages_flat === "function"){
            return sam_exports_impl.sam_call_captions_get_supported_spoken_languages_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_supported_spoken_languages_internal: function (/* sam_call_captions_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_captions_get_supported_spoken_languages_internal === "function"){
            return sam_exports_impl.sam_call_captions_get_supported_spoken_languages_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_supported_spoken_languages_internal_flat: function (/* sam_call_captions_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_captions_get_supported_spoken_languages_internal_flat === "function"){
            return sam_exports_impl.sam_call_captions_get_supported_spoken_languages_internal_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_get_type: function (/* sam_call_captions_handle */ handle, /* sam_captions_type* */ result) {
        if (typeof sam_exports_impl.sam_call_captions_get_type === "function"){
            return sam_exports_impl.sam_call_captions_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_captions_release: function (/* sam_call_captions_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_captions_release === "function"){
            return sam_exports_impl.sam_call_captions_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set the spoken language.
    //
    /* sam_status */ sam_call_captions_set_spoken_language: function (/* sam_call_captions_handle */ handle, /* const char * */ language, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_captions_set_spoken_language === "function"){
            return sam_exports_impl.sam_call_captions_set_spoken_language(handle, language, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Starts the captions.
    //
    /* sam_status */ sam_call_captions_start_captions: function (/* sam_call_captions_handle */ handle, /* sam_start_captions_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_captions_start_captions === "function"){
            return sam_exports_impl.sam_call_captions_start_captions(handle, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stop the captions.
    //
    /* sam_status */ sam_call_captions_stop_captions: function (/* sam_call_captions_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_captions_stop_captions === "function"){
            return sam_exports_impl.sam_call_captions_stop_captions(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_addref: function (/* sam_call_client_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_addref === "function"){
            return sam_exports_impl.sam_call_client_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_call_client_create: function (/* sam_call_client_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_client_create === "function"){
            return sam_exports_impl.sam_call_client_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_create_call_agent_internal: function (/* sam_call_client_handle */ handle, /* sam_internal_token_provider_handle */ token_provider, /* sam_call_agent_options_handle */ call_agent_options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_client_create_call_agent_internal === "function"){
            return sam_exports_impl.sam_call_client_create_call_agent_internal(handle, token_provider, call_agent_options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Internal method called by extension code to create a CallAgent with CallKit enabled or not.
    //
    /* sam_status */ sam_call_client_create_call_agent_with_call_kit: function (/* sam_call_client_handle */ handle, /* sam_internal_token_provider_handle */ token_provider, /* sam_call_agent_options_handle */ call_agent_options, /* sam_bool_u8 */ is_call_kit_enabled, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_client_create_call_agent_with_call_kit === "function"){
            return sam_exports_impl.sam_call_client_create_call_agent_with_call_kit(handle, token_provider, call_agent_options, is_call_kit_enabled, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with CallClientOptions
    //
    /* sam_status */ sam_call_client_create_call_client_options_options: function (/* sam_call_client_options_handle */ options, /* sam_call_client_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_client_create_call_client_options_options === "function"){
            return sam_exports_impl.sam_call_client_create_call_client_options_options(options, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_create_teams_call_agent_internal: function (/* sam_call_client_handle */ handle, /* sam_internal_token_provider_handle */ token_provider, /* sam_teams_call_agent_options_handle */ teams_call_agent_options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_client_create_teams_call_agent_internal === "function"){
            return sam_exports_impl.sam_call_client_create_teams_call_agent_internal(handle, token_provider, teams_call_agent_options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Internal method called by extension code to create a CallAgent with CallKit enabled or not.
    //
    /* sam_status */ sam_call_client_create_teams_call_agent_with_call_kit: function (/* sam_call_client_handle */ handle, /* sam_internal_token_provider_handle */ token_provider, /* sam_teams_call_agent_options_handle */ teams_call_agent_options, /* sam_bool_u8 */ is_call_kit_enabled, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_client_create_teams_call_agent_with_call_kit === "function"){
            return sam_exports_impl.sam_call_client_create_teams_call_agent_with_call_kit(handle, token_provider, teams_call_agent_options, is_call_kit_enabled, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Releases all the resources held by CallClient.
    // CallClient should be destroyed/nullified after dispose.
    //
    /* sam_status */ sam_call_client_dispose: function (/* sam_call_client_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_dispose === "function"){
            return sam_exports_impl.sam_call_client_dispose(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_dispose_internal: function (/* sam_call_client_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_dispose_internal === "function"){
            return sam_exports_impl.sam_call_client_dispose_internal(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_client_feature_addref: function (/* sam_call_client_feature_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_feature_addref === "function"){
            return sam_exports_impl.sam_call_client_feature_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_feature_get_name: function (/* sam_call_client_feature_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_client_feature_get_name === "function"){
            return sam_exports_impl.sam_call_client_feature_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_client_feature_release: function (/* sam_call_client_feature_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_feature_release === "function"){
            return sam_exports_impl.sam_call_client_feature_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_client_features_addref: function (/* sam_call_client_features_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_features_addref === "function"){
            return sam_exports_impl.sam_call_client_features_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_features_get_pre_call_diagnostics_call_client_feature: function (/* sam_call_client_features_handle */ handle, /* sam_pre_call_diagnostics_call_client_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_client_features_get_pre_call_diagnostics_call_client_feature === "function"){
            return sam_exports_impl.sam_call_client_features_get_pre_call_diagnostics_call_client_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_client_features_release: function (/* sam_call_client_features_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_features_release === "function"){
            return sam_exports_impl.sam_call_client_features_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_get_debug_info: function (/* sam_call_client_handle */ handle, /* sam_call_debug_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_client_get_debug_info === "function"){
            return sam_exports_impl.sam_call_client_get_debug_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Gets a device manager object that can be used to enumerates audio and video devices available for calls.
    //
    /* sam_status */ sam_call_client_get_device_manager_internal: function (/* sam_call_client_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_client_get_device_manager_internal === "function"){
            return sam_exports_impl.sam_call_client_get_device_manager_internal(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_get_features: function (/* sam_call_client_handle */ handle, /* sam_call_client_features_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_client_get_features === "function"){
            return sam_exports_impl.sam_call_client_get_features(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_get_initialization_options: function (/* sam_call_client_handle */ handle, /* sam_initialization_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_client_get_initialization_options === "function"){
            return sam_exports_impl.sam_call_client_get_initialization_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_get_internal_events_emitter: function (/* sam_call_client_handle */ handle, /* sam_internal_call_client_events_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_client_get_internal_events_emitter === "function"){
            return sam_exports_impl.sam_call_client_get_internal_events_emitter(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_options_addref: function (/* sam_call_client_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_options_addref === "function"){
            return sam_exports_impl.sam_call_client_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration for the call client
    //
    /* sam_status */ sam_call_client_options_create: function (/* sam_call_client_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_client_options_create === "function"){
            return sam_exports_impl.sam_call_client_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_options_get_diagnostics: function (/* sam_call_client_options_handle */ handle, /* sam_call_diagnostics_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_client_options_get_diagnostics === "function"){
            return sam_exports_impl.sam_call_client_options_get_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_options_get_network: function (/* sam_call_client_options_handle */ handle, /* sam_call_network_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_client_options_get_network === "function"){
            return sam_exports_impl.sam_call_client_options_get_network(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_options_release: function (/* sam_call_client_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_options_release === "function"){
            return sam_exports_impl.sam_call_client_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_options_set_diagnostics: function (/* sam_call_client_options_handle */ handle, /* sam_call_diagnostics_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_client_options_set_diagnostics === "function"){
            return sam_exports_impl.sam_call_client_options_set_diagnostics(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_options_set_network: function (/* sam_call_client_options_handle */ handle, /* sam_call_network_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_client_options_set_network === "function"){
            return sam_exports_impl.sam_call_client_options_set_network(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_release: function (/* sam_call_client_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_client_release === "function"){
            return sam_exports_impl.sam_call_client_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_set_initialization_options: function (/* sam_call_client_handle */ handle, /* sam_initialization_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_client_set_initialization_options === "function"){
            return sam_exports_impl.sam_call_client_set_initialization_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_client_set_internal_events_emitter: function (/* sam_call_client_handle */ handle, /* sam_internal_call_client_events_handle */ value) {
        if (typeof sam_exports_impl.sam_call_client_set_internal_events_emitter === "function"){
            return sam_exports_impl.sam_call_client_set_internal_events_emitter(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_debug_info_addref: function (/* sam_call_debug_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_debug_info_addref === "function"){
            return sam_exports_impl.sam_call_debug_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_debug_info_get_support_files_internal: function (/* sam_call_debug_info_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_debug_info_get_support_files_internal === "function"){
            return sam_exports_impl.sam_call_debug_info_get_support_files_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_debug_info_get_support_files_internal_flat: function (/* sam_call_debug_info_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_debug_info_get_support_files_internal_flat === "function"){
            return sam_exports_impl.sam_call_debug_info_get_support_files_internal_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_debug_info_release: function (/* sam_call_debug_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_debug_info_release === "function"){
            return sam_exports_impl.sam_call_debug_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_addref: function (/* sam_call_diagnostics_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_addref === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration for the call diagnostics options
    //
    /* sam_status */ sam_call_diagnostics_options_create: function (/* sam_call_diagnostics_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_create === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_get_app_name: function (/* sam_call_diagnostics_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_get_app_name === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_get_app_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_get_app_version: function (/* sam_call_diagnostics_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_get_app_version === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_get_app_version(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_get_tags: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_get_tags === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_get_tags(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_get_tags_flat: function (/* sam_call_diagnostics_options_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_get_tags_flat === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_get_tags_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_get_tags_internal: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_get_tags_internal === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_get_tags_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_get_tags_internal_flat: function (/* sam_call_diagnostics_options_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_get_tags_internal_flat === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_get_tags_internal_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_release: function (/* sam_call_diagnostics_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_release === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_set_app_name: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_set_app_name === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_set_app_name(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_set_app_version: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_set_app_version === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_set_app_version(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_set_tags: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_set_tags === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_set_tags(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_diagnostics_options_set_tags_internal: function (/* sam_call_diagnostics_options_handle */ handle, /* const char * * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_call_diagnostics_options_set_tags_internal === "function"){
            return sam_exports_impl.sam_call_diagnostics_options_set_tags_internal(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_end_reason_addref: function (/* sam_call_end_reason_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_end_reason_addref === "function"){
            return sam_exports_impl.sam_call_end_reason_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_end_reason_get_code: function (/* sam_call_end_reason_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_call_end_reason_get_code === "function"){
            return sam_exports_impl.sam_call_end_reason_get_code(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_end_reason_get_subcode: function (/* sam_call_end_reason_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_call_end_reason_get_subcode === "function"){
            return sam_exports_impl.sam_call_end_reason_get_subcode(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_end_reason_release: function (/* sam_call_end_reason_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_end_reason_release === "function"){
            return sam_exports_impl.sam_call_end_reason_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_feature_addref: function (/* sam_call_feature_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_feature_addref === "function"){
            return sam_exports_impl.sam_call_feature_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_feature_get_name: function (/* sam_call_feature_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_feature_get_name === "function"){
            return sam_exports_impl.sam_call_feature_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_feature_release: function (/* sam_call_feature_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_feature_release === "function"){
            return sam_exports_impl.sam_call_feature_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_addref: function (/* sam_call_features_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_features_addref === "function"){
            return sam_exports_impl.sam_call_features_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_captions: function (/* sam_call_features_handle */ handle, /* sam_captions_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_captions === "function"){
            return sam_exports_impl.sam_call_features_get_captions(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_content_sharing: function (/* sam_call_features_handle */ handle, /* sam_content_sharing_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_content_sharing === "function"){
            return sam_exports_impl.sam_call_features_get_content_sharing(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_data_channel: function (/* sam_call_features_handle */ handle, /* sam_data_channel_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_data_channel === "function"){
            return sam_exports_impl.sam_call_features_get_data_channel(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_dominant_speakers: function (/* sam_call_features_handle */ handle, /* sam_dominant_speakers_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_dominant_speakers === "function"){
            return sam_exports_impl.sam_call_features_get_dominant_speakers(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_local_user_diagnostics: function (/* sam_call_features_handle */ handle, /* sam_local_user_diagnostics_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_local_user_diagnostics === "function"){
            return sam_exports_impl.sam_call_features_get_local_user_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_media_statistics: function (/* sam_call_features_handle */ handle, /* sam_media_statistics_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_media_statistics === "function"){
            return sam_exports_impl.sam_call_features_get_media_statistics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_raised_hands: function (/* sam_call_features_handle */ handle, /* sam_raise_hand_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_raised_hands === "function"){
            return sam_exports_impl.sam_call_features_get_raised_hands(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_recording: function (/* sam_call_features_handle */ handle, /* sam_recording_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_recording === "function"){
            return sam_exports_impl.sam_call_features_get_recording(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_spotlight: function (/* sam_call_features_handle */ handle, /* sam_spotlight_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_spotlight === "function"){
            return sam_exports_impl.sam_call_features_get_spotlight(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_get_transcription: function (/* sam_call_features_handle */ handle, /* sam_transcription_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_features_get_transcription === "function"){
            return sam_exports_impl.sam_call_features_get_transcription(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_features_release: function (/* sam_call_features_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_features_release === "function"){
            return sam_exports_impl.sam_call_features_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_get_info: function (/* sam_call_handle */ handle, /* sam_call_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_get_info === "function"){
            return sam_exports_impl.sam_call_get_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_get_is_muted: function (/* sam_call_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_call_get_is_muted === "function"){
            return sam_exports_impl.sam_call_get_is_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_get_local_video_streams: function (/* sam_call_handle */ handle, /* sam_local_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_get_local_video_streams === "function"){
            return sam_exports_impl.sam_call_get_local_video_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_identifier_addref: function (/* sam_call_identifier_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_identifier_addref === "function"){
            return sam_exports_impl.sam_call_identifier_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_identifier_get_raw_id: function (/* sam_call_identifier_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_identifier_get_raw_id === "function"){
            return sam_exports_impl.sam_call_identifier_get_raw_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_identifier_release: function (/* sam_call_identifier_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_identifier_release === "function"){
            return sam_exports_impl.sam_call_identifier_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_lobby_addref: function (/* sam_call_lobby_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_lobby_addref === "function"){
            return sam_exports_impl.sam_call_lobby_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Admit all participants from the Teams meeting lobby
    //
    /* sam_status */ sam_call_lobby_admit_all: function (/* sam_call_lobby_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_lobby_admit_all === "function"){
            return sam_exports_impl.sam_call_lobby_admit_all(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Admit participants from the Teams meeting lobby
    //
    /* sam_status */ sam_call_lobby_admit_internal: function (/* sam_call_lobby_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_lobby_admit_internal === "function"){
            return sam_exports_impl.sam_call_lobby_admit_internal(handle, participants, participants_count, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_lobby_get_participants: function (/* sam_call_lobby_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_lobby_get_participants === "function"){
            return sam_exports_impl.sam_call_lobby_get_participants(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Reject a participant from the Teams meeting lobby
    //
    /* sam_status */ sam_call_lobby_reject_internal: function (/* sam_call_lobby_handle */ handle, /* const char * */ participant, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_lobby_reject_internal === "function"){
            return sam_exports_impl.sam_call_lobby_reject_internal(handle, participant, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_lobby_release: function (/* sam_call_lobby_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_lobby_release === "function"){
            return sam_exports_impl.sam_call_lobby_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_lobby_set_lobby_participants_updated: function (/* sam_call_lobby_handle */ handle, /* sam_callback_cookie */ value, /* sam_participants_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_call_lobby_set_lobby_participants_updated === "function"){
            return sam_exports_impl.sam_call_lobby_set_lobby_participants_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_lobby_set_on_lobby_participants_updated: function (/* sam_call_lobby_handle */ handle, /* sam_callback_cookie */ value, /* sam_participants_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_lobby_set_on_lobby_participants_updated === "function"){
            return sam_exports_impl.sam_call_lobby_set_on_lobby_participants_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Mute local microphone.
    //
    /* sam_status */ sam_call_mute: function (/* sam_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_mute === "function"){
            return sam_exports_impl.sam_call_mute(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_addref: function (/* sam_call_network_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_network_options_addref === "function"){
            return sam_exports_impl.sam_call_network_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default network options.
    //
    /* sam_status */ sam_call_network_options_create: function (/* sam_call_network_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_network_options_create === "function"){
            return sam_exports_impl.sam_call_network_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_get_ice_servers: function (/* sam_call_network_options_handle */ handle, /* sam_ice_server_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_call_network_options_get_ice_servers === "function"){
            return sam_exports_impl.sam_call_network_options_get_ice_servers(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_get_proxy_uri: function (/* sam_call_network_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_network_options_get_proxy_uri === "function"){
            return sam_exports_impl.sam_call_network_options_get_proxy_uri(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_get_proxy_url: function (/* sam_call_network_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_network_options_get_proxy_url === "function"){
            return sam_exports_impl.sam_call_network_options_get_proxy_url(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_release: function (/* sam_call_network_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_network_options_release === "function"){
            return sam_exports_impl.sam_call_network_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_set_ice_servers: function (/* sam_call_network_options_handle */ handle, /* sam_ice_server_handle * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_call_network_options_set_ice_servers === "function"){
            return sam_exports_impl.sam_call_network_options_set_ice_servers(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_set_ice_servers_internal: function (/* sam_call_network_options_handle */ handle, /* sam_ice_server_handle const* */ ice_servers, /* int */ ice_servers_count) {
        if (typeof sam_exports_impl.sam_call_network_options_set_ice_servers_internal === "function"){
            return sam_exports_impl.sam_call_network_options_set_ice_servers_internal(handle, ice_servers, ice_servers_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_set_proxy_uri: function (/* sam_call_network_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_call_network_options_set_proxy_uri === "function"){
            return sam_exports_impl.sam_call_network_options_set_proxy_uri(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_network_options_set_proxy_url: function (/* sam_call_network_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_call_network_options_set_proxy_url === "function"){
            return sam_exports_impl.sam_call_network_options_set_proxy_url(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_options_addref: function (/* sam_call_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_options_addref === "function"){
            return sam_exports_impl.sam_call_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_get_incoming_audio_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_audio_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_options_get_incoming_audio_options === "function"){
            return sam_exports_impl.sam_call_options_get_incoming_audio_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_get_incoming_video_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_video_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_options_get_incoming_video_options === "function"){
            return sam_exports_impl.sam_call_options_get_incoming_video_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_get_outgoing_audio_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_audio_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_options_get_outgoing_audio_options === "function"){
            return sam_exports_impl.sam_call_options_get_outgoing_audio_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_get_outgoing_video_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_video_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_options_get_outgoing_video_options === "function"){
            return sam_exports_impl.sam_call_options_get_outgoing_video_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_options_release: function (/* sam_call_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_options_release === "function"){
            return sam_exports_impl.sam_call_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_set_incoming_audio_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_audio_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_options_set_incoming_audio_options === "function"){
            return sam_exports_impl.sam_call_options_set_incoming_audio_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_set_incoming_video_options: function (/* sam_call_options_handle */ handle, /* sam_incoming_video_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_options_set_incoming_video_options === "function"){
            return sam_exports_impl.sam_call_options_set_incoming_video_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_set_outgoing_audio_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_audio_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_options_set_outgoing_audio_options === "function"){
            return sam_exports_impl.sam_call_options_set_outgoing_audio_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_options_set_outgoing_video_options: function (/* sam_call_options_handle */ handle, /* sam_outgoing_video_options_handle */ value) {
        if (typeof sam_exports_impl.sam_call_options_set_outgoing_video_options === "function"){
            return sam_exports_impl.sam_call_options_set_outgoing_video_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_id_changed: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_id_changed === "function"){
            return sam_exports_impl.sam_call_set_on_id_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_incoming_audio_state_changed: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_incoming_audio_state_changed === "function"){
            return sam_exports_impl.sam_call_set_on_incoming_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_is_muted_changed: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_is_muted_changed === "function"){
            return sam_exports_impl.sam_call_set_on_is_muted_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_local_video_streams_updated: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_local_video_streams_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_local_video_streams_updated === "function"){
            return sam_exports_impl.sam_call_set_on_local_video_streams_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_muted_by_others: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_muted_by_others === "function"){
            return sam_exports_impl.sam_call_set_on_muted_by_others(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_outgoing_audio_state_changed: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_outgoing_audio_state_changed === "function"){
            return sam_exports_impl.sam_call_set_on_outgoing_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_remote_participants_updated: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_participants_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_remote_participants_updated === "function"){
            return sam_exports_impl.sam_call_set_on_remote_participants_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_role_changed: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_role_changed === "function"){
            return sam_exports_impl.sam_call_set_on_role_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_state_changed: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_state_changed === "function"){
            return sam_exports_impl.sam_call_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_set_on_total_participant_count_changed: function (/* sam_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_call_set_on_total_participant_count_changed === "function"){
            return sam_exports_impl.sam_call_set_on_total_participant_count_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_addref: function (/* sam_call_token_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_addref === "function"){
            return sam_exports_impl.sam_call_token_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance of Azure.Communication.Calling.CallToken using the
    // provided  and .
    //
    /* sam_status */ sam_call_token_create_string_access_token_date_time_offset_expires_on: function (/* const char * */ access_token, /* int64_t */ expires_on, /* sam_call_token_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_token_create_string_access_token_date_time_offset_expires_on === "function"){
            return sam_exports_impl.sam_call_token_create_string_access_token_date_time_offset_expires_on(access_token, expires_on, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_credential_addref: function (/* sam_call_token_credential_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_credential_addref === "function"){
            return sam_exports_impl.sam_call_token_credential_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Initializes a new instance of Azure.Communication.Calling.CallTokenCredential.
    //
    /* sam_status */ sam_call_token_credential_create_string_token: function (/* const char * */ token, /* sam_call_token_credential_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_token_credential_create_string_token === "function"){
            return sam_exports_impl.sam_call_token_credential_create_string_token(token, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Initializes a new instance of Azure.Communication.Calling.CallTokenCredential
    // It automatically renews the token upon expiry or proactively prior to expiration to speed up the requests.
    //
    /* sam_status */ sam_call_token_credential_create_string_token_call_token_refresh_options_options: function (/* const char * */ token, /* sam_call_token_refresh_options_handle */ options, /* sam_call_token_credential_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_token_credential_create_string_token_call_token_refresh_options_options === "function"){
            return sam_exports_impl.sam_call_token_credential_create_string_token_call_token_refresh_options_options(token, options, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_credential_get_token: function (/* sam_call_token_credential_handle */ handle, /* sam_call_token_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_token_credential_get_token === "function"){
            return sam_exports_impl.sam_call_token_credential_get_token(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_credential_release: function (/* sam_call_token_credential_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_credential_release === "function"){
            return sam_exports_impl.sam_call_token_credential_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_get_expires_on: function (/* sam_call_token_handle */ handle, /* int64_t* */ result) {
        if (typeof sam_exports_impl.sam_call_token_get_expires_on === "function"){
            return sam_exports_impl.sam_call_token_get_expires_on(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_get_token: function (/* sam_call_token_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_call_token_get_token === "function"){
            return sam_exports_impl.sam_call_token_get_token(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_options_addref: function (/* sam_call_token_refresh_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_refresh_options_addref === "function"){
            return sam_exports_impl.sam_call_token_refresh_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Initializes a new instance of Azure.Communication.Calling.CallTokenRefreshOptions.
    //
    /* sam_status */ sam_call_token_refresh_options_create_boolean_refresh_proactively: function (/* sam_bool_u8 */ refresh_proactively, /* sam_call_token_refresh_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_call_token_refresh_options_create_boolean_refresh_proactively === "function"){
            return sam_exports_impl.sam_call_token_refresh_options_create_boolean_refresh_proactively(refresh_proactively, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_options_get_refresh_proactively: function (/* sam_call_token_refresh_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_call_token_refresh_options_get_refresh_proactively === "function"){
            return sam_exports_impl.sam_call_token_refresh_options_get_refresh_proactively(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_options_release: function (/* sam_call_token_refresh_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_refresh_options_release === "function"){
            return sam_exports_impl.sam_call_token_refresh_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_options_set_token_refresh_requested: function (/* sam_call_token_refresh_options_handle */ handle, /* sam_callback_cookie */ value, /* sam_call_token_refresh_requested_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_call_token_refresh_options_set_token_refresh_requested === "function"){
            return sam_exports_impl.sam_call_token_refresh_options_set_token_refresh_requested(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_requested_event_args_addref: function (/* sam_call_token_refresh_requested_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_refresh_requested_event_args_addref === "function"){
            return sam_exports_impl.sam_call_token_refresh_requested_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_requested_event_args_get_call_token: function (/* sam_call_token_refresh_requested_event_args_handle */ handle, /* sam_call_token_handle* */ result) {
        if (typeof sam_exports_impl.sam_call_token_refresh_requested_event_args_get_call_token === "function"){
            return sam_exports_impl.sam_call_token_refresh_requested_event_args_get_call_token(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_requested_event_args_release: function (/* sam_call_token_refresh_requested_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_refresh_requested_event_args_release === "function"){
            return sam_exports_impl.sam_call_token_refresh_requested_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_refresh_requested_event_args_set_call_token: function (/* sam_call_token_refresh_requested_event_args_handle */ handle, /* sam_call_token_handle */ value) {
        if (typeof sam_exports_impl.sam_call_token_refresh_requested_event_args_set_call_token === "function"){
            return sam_exports_impl.sam_call_token_refresh_requested_event_args_set_call_token(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_token_release: function (/* sam_call_token_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_token_release === "function"){
            return sam_exports_impl.sam_call_token_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Unmute local microphone.
    //
    /* sam_status */ sam_call_unmute: function (/* sam_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_call_unmute === "function"){
            return sam_exports_impl.sam_call_unmute(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_video_stream_addref: function (/* sam_call_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_video_stream_addref === "function"){
            return sam_exports_impl.sam_call_video_stream_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_video_stream_get_direction: function (/* sam_call_video_stream_handle */ handle, /* sam_stream_direction* */ result) {
        if (typeof sam_exports_impl.sam_call_video_stream_get_direction === "function"){
            return sam_exports_impl.sam_call_video_stream_get_direction(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_video_stream_get_id: function (/* sam_call_video_stream_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_call_video_stream_get_id === "function"){
            return sam_exports_impl.sam_call_video_stream_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_video_stream_get_media_stream_type: function (/* sam_call_video_stream_handle */ handle, /* sam_media_stream_type* */ result) {
        if (typeof sam_exports_impl.sam_call_video_stream_get_media_stream_type === "function"){
            return sam_exports_impl.sam_call_video_stream_get_media_stream_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_video_stream_get_source_type: function (/* sam_call_video_stream_handle */ handle, /* sam_video_stream_source_type* */ result) {
        if (typeof sam_exports_impl.sam_call_video_stream_get_source_type === "function"){
            return sam_exports_impl.sam_call_video_stream_get_source_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_video_stream_get_state: function (/* sam_call_video_stream_handle */ handle, /* sam_video_stream_state* */ result) {
        if (typeof sam_exports_impl.sam_call_video_stream_get_state === "function"){
            return sam_exports_impl.sam_call_video_stream_get_state(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_video_stream_get_type: function (/* sam_call_video_stream_handle */ handle, /* sam_video_stream_type* */ result) {
        if (typeof sam_exports_impl.sam_call_video_stream_get_type === "function"){
            return sam_exports_impl.sam_call_video_stream_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Used to notifiy video stream when the derived class has created the bindind successfully
    //
    /* sam_status */ sam_call_video_stream_on_binding_created: function (/* sam_call_video_stream_handle */ handle, /* sam_i64 */ binding_event_handle) {
        if (typeof sam_exports_impl.sam_call_video_stream_on_binding_created === "function"){
            return sam_exports_impl.sam_call_video_stream_on_binding_created(handle, binding_event_handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Used to notifiy video stream when the derived class failed to create the binding
    //
    /* sam_status */ sam_call_video_stream_on_binding_failed: function (/* sam_call_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_video_stream_on_binding_failed === "function"){
            return sam_exports_impl.sam_call_video_stream_on_binding_failed(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Used to notifiy video stream when the derived class has released the bindind successfully
    //
    /* sam_status */ sam_call_video_stream_on_binding_released: function (/* sam_call_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_video_stream_on_binding_released === "function"){
            return sam_exports_impl.sam_call_video_stream_on_binding_released(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_call_video_stream_release: function (/* sam_call_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_call_video_stream_release === "function"){
            return sam_exports_impl.sam_call_video_stream_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_call_video_stream_set_state_changed: function (/* sam_call_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_call_video_stream_set_state_changed === "function"){
            return sam_exports_impl.sam_call_video_stream_set_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_caller_info_addref: function (/* sam_caller_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_caller_info_addref === "function"){
            return sam_exports_impl.sam_caller_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_caller_info_get_caller_identifier: function (/* sam_caller_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_caller_info_get_caller_identifier === "function"){
            return sam_exports_impl.sam_caller_info_get_caller_identifier(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_caller_info_get_display_name: function (/* sam_caller_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_caller_info_get_display_name === "function"){
            return sam_exports_impl.sam_caller_info_get_display_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_caller_info_release: function (/* sam_caller_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_caller_info_release === "function"){
            return sam_exports_impl.sam_caller_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_calls_updated_event_args_addref: function (/* sam_calls_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_calls_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_calls_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_calls_updated_event_args_get_added_calls: function (/* sam_calls_updated_event_args_handle */ handle, /* sam_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_calls_updated_event_args_get_added_calls === "function"){
            return sam_exports_impl.sam_calls_updated_event_args_get_added_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_calls_updated_event_args_get_removed_calls: function (/* sam_calls_updated_event_args_handle */ handle, /* sam_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_calls_updated_event_args_get_removed_calls === "function"){
            return sam_exports_impl.sam_calls_updated_event_args_get_removed_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_calls_updated_event_args_release: function (/* sam_calls_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_calls_updated_event_args_release === "function"){
            return sam_exports_impl.sam_calls_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Get captions for a connected call.
    //
    /* sam_status */ sam_captions_call_feature_get_captions: function (/* sam_captions_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_captions_call_feature_get_captions === "function"){
            return sam_exports_impl.sam_captions_call_feature_get_captions(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_captions_call_feature_set_active_captions_type_changed: function (/* sam_captions_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_captions_call_feature_set_active_captions_type_changed === "function"){
            return sam_exports_impl.sam_captions_call_feature_set_active_captions_type_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_captions_call_feature_set_on_active_captions_type_changed: function (/* sam_captions_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_captions_call_feature_set_on_active_captions_type_changed === "function"){
            return sam_exports_impl.sam_captions_call_feature_set_on_active_captions_type_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_addref: function (/* sam_common_call_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_addref === "function"){
            return sam_exports_impl.sam_common_call_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_addref: function (/* sam_common_call_agent_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_agent_addref === "function"){
            return sam_exports_impl.sam_common_call_agent_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Releases all the resources held by Base CallAgent. Base CallAgent should be destroyed/nullified after dispose.
    // Closes this resource.
    // This gets projected to java.lang.AutoCloseable.close() in Java projection.
    //
    /* sam_status */ sam_common_call_agent_dispose: function (/* sam_common_call_agent_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_agent_dispose === "function"){
            return sam_exports_impl.sam_common_call_agent_dispose(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Releases all the resources held by Base CallAgent. Base CallAgent should be destroyed/nullified after dispose.
    // Closes this resource.
    // This gets projected to java.lang.AutoCloseable.close() in Java projection.
    //
    /* sam_status */ sam_common_call_agent_dispose_internal: function (/* sam_common_call_agent_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_agent_dispose_internal === "function"){
            return sam_exports_impl.sam_common_call_agent_dispose_internal(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_get_is_call_kit_enabled: function (/* sam_common_call_agent_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_common_call_agent_get_is_call_kit_enabled === "function"){
            return sam_exports_impl.sam_common_call_agent_get_is_call_kit_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_get_type: function (/* sam_common_call_agent_handle */ handle, /* sam_communication_call_type* */ result) {
        if (typeof sam_exports_impl.sam_common_call_agent_get_type === "function"){
            return sam_exports_impl.sam_common_call_agent_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Handle the push notification. If successful, will raise appropriate incoming call event.
    //
    /* sam_status */ sam_common_call_agent_handle_push_notification: function (/* sam_common_call_agent_handle */ handle, /* sam_push_notification_info_handle */ notification, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_agent_handle_push_notification === "function"){
            return sam_exports_impl.sam_common_call_agent_handle_push_notification(handle, notification, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_options_addref: function (/* sam_common_call_agent_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_agent_options_addref === "function"){
            return sam_exports_impl.sam_common_call_agent_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_options_get_disable_internal_push_for_incoming_call: function (/* sam_common_call_agent_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_common_call_agent_options_get_disable_internal_push_for_incoming_call === "function"){
            return sam_exports_impl.sam_common_call_agent_options_get_disable_internal_push_for_incoming_call(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_options_release: function (/* sam_common_call_agent_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_agent_options_release === "function"){
            return sam_exports_impl.sam_common_call_agent_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_options_set_disable_internal_push_for_incoming_call: function (/* sam_common_call_agent_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_common_call_agent_options_set_disable_internal_push_for_incoming_call === "function"){
            return sam_exports_impl.sam_common_call_agent_options_set_disable_internal_push_for_incoming_call(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Register device for receiving incoming calls push notifications.
    // token of device to be registered
    /* sam_status */ sam_common_call_agent_register_push_notification_internal: function (/* sam_common_call_agent_handle */ handle, /* const char * */ device_token, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_agent_register_push_notification_internal === "function"){
            return sam_exports_impl.sam_common_call_agent_register_push_notification_internal(handle, device_token, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_release: function (/* sam_common_call_agent_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_agent_release === "function"){
            return sam_exports_impl.sam_common_call_agent_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_send_call_accept_failed_telemetry: function (/* sam_common_call_agent_handle */ handle, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_agent_send_call_accept_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_agent_send_call_accept_failed_telemetry(handle, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_send_call_attempt_failed_telemetry: function (/* sam_common_call_agent_handle */ handle, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_agent_send_call_attempt_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_agent_send_call_attempt_failed_telemetry(handle, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_send_configure_audio_session_failed_telemetry: function (/* sam_common_call_agent_handle */ handle, /* sam_bool_u8 */ is_incoming, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_agent_send_configure_audio_session_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_agent_send_configure_audio_session_failed_telemetry(handle, is_incoming, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_set_common_calls_updated: function (/* sam_common_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_common_calls_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_agent_set_common_calls_updated === "function"){
            return sam_exports_impl.sam_common_call_agent_set_common_calls_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_set_common_incoming_call_received: function (/* sam_common_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_common_incoming_call_received_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_agent_set_common_incoming_call_received === "function"){
            return sam_exports_impl.sam_common_call_agent_set_common_incoming_call_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_set_on_common_calls_updated: function (/* sam_common_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_common_calls_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_agent_set_on_common_calls_updated === "function"){
            return sam_exports_impl.sam_common_call_agent_set_on_common_calls_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_agent_set_on_common_incoming_call: function (/* sam_common_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_common_incoming_call_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_agent_set_on_common_incoming_call === "function"){
            return sam_exports_impl.sam_common_call_agent_set_on_common_incoming_call(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Unregister all previously registered devices from receiving incoming calls push notifications.
    //
    /* sam_status */ sam_common_call_agent_unregister_push_notification: function (/* sam_common_call_agent_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_agent_unregister_push_notification === "function"){
            return sam_exports_impl.sam_common_call_agent_unregister_push_notification(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Releases all the resources held by Call object. Call should be destroyed/nullified after dispose.
    // Closes this resource.
    // This gets projected to java.lang.AutoCloseable.close() in Java projection.
    //
    /* sam_status */ sam_common_call_dispose: function (/* sam_common_call_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_dispose === "function"){
            return sam_exports_impl.sam_common_call_dispose(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_active_incoming_audio_stream: function (/* sam_common_call_handle */ handle, /* sam_incoming_audio_stream_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_active_incoming_audio_stream === "function"){
            return sam_exports_impl.sam_common_call_get_active_incoming_audio_stream(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_active_outgoing_audio_stream: function (/* sam_common_call_handle */ handle, /* sam_outgoing_audio_stream_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_active_outgoing_audio_stream === "function"){
            return sam_exports_impl.sam_common_call_get_active_outgoing_audio_stream(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_call_end_reason: function (/* sam_common_call_handle */ handle, /* sam_call_end_reason_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_call_end_reason === "function"){
            return sam_exports_impl.sam_common_call_get_call_end_reason(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_call_lobby: function (/* sam_common_call_handle */ handle, /* sam_call_lobby_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_call_lobby === "function"){
            return sam_exports_impl.sam_common_call_get_call_lobby(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_call_participant_role: function (/* sam_common_call_handle */ handle, /* sam_call_participant_role* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_call_participant_role === "function"){
            return sam_exports_impl.sam_common_call_get_call_participant_role(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_caller_info: function (/* sam_common_call_handle */ handle, /* sam_caller_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_caller_info === "function"){
            return sam_exports_impl.sam_common_call_get_caller_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_captions_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_captions_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_captions_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_content_sharing_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_content_sharing_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_content_sharing_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_current_audio_stream: function (/* sam_common_call_handle */ handle, /* sam_stream_direction */ stream_direction, /* sam_call_audio_stream_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_current_audio_stream === "function"){
            return sam_exports_impl.sam_common_call_get_current_audio_stream(handle, stream_direction, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_data_channel_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_data_channel_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_data_channel_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_direction: function (/* sam_common_call_handle */ handle, /* sam_call_direction* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_direction === "function"){
            return sam_exports_impl.sam_common_call_get_direction(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_dominant_speakers_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_dominant_speakers_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_dominant_speakers_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_features: function (/* sam_common_call_handle */ handle, /* sam_call_features_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_features === "function"){
            return sam_exports_impl.sam_common_call_get_features(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_id: function (/* sam_common_call_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_id === "function"){
            return sam_exports_impl.sam_common_call_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_incoming_raw_video_frame_type: function (/* sam_common_call_handle */ handle, /* sam_raw_video_frame_type* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_incoming_raw_video_frame_type === "function"){
            return sam_exports_impl.sam_common_call_get_incoming_raw_video_frame_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_is_call_kit_enabled: function (/* sam_common_call_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_is_call_kit_enabled === "function"){
            return sam_exports_impl.sam_common_call_get_is_call_kit_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_is_incoming_audio_muted: function (/* sam_common_call_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_is_incoming_audio_muted === "function"){
            return sam_exports_impl.sam_common_call_get_is_incoming_audio_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_is_outgoing_audio_muted: function (/* sam_common_call_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_is_outgoing_audio_muted === "function"){
            return sam_exports_impl.sam_common_call_get_is_outgoing_audio_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_live_outgoing_audio_filters: function (/* sam_common_call_handle */ handle, /* sam_live_outgoing_audio_filters_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_live_outgoing_audio_filters === "function"){
            return sam_exports_impl.sam_common_call_get_live_outgoing_audio_filters(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_local_identifier_internal: function (/* sam_common_call_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_local_identifier_internal === "function"){
            return sam_exports_impl.sam_common_call_get_local_identifier_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_local_user_diagnostics_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_local_user_diagnostics_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_local_user_diagnostics_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_media_statistics_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_media_statistics_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_media_statistics_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_original_id: function (/* sam_common_call_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_original_id === "function"){
            return sam_exports_impl.sam_common_call_get_original_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_outgoing_video_streams: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_common_call_get_outgoing_video_streams === "function"){
            return sam_exports_impl.sam_common_call_get_outgoing_video_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_raise_hand_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_raise_hand_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_raise_hand_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_recording_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_recording_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_recording_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_remote_participants: function (/* sam_common_call_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_common_call_get_remote_participants === "function"){
            return sam_exports_impl.sam_common_call_get_remote_participants(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_spotlight_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_spotlight_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_spotlight_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_state: function (/* sam_common_call_handle */ handle, /* sam_call_state* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_state === "function"){
            return sam_exports_impl.sam_common_call_get_state(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_total_participant_count: function (/* sam_common_call_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_total_participant_count === "function"){
            return sam_exports_impl.sam_common_call_get_total_participant_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_transcription_call_feature: function (/* sam_common_call_handle */ handle, /* sam_call_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_transcription_call_feature === "function"){
            return sam_exports_impl.sam_common_call_get_transcription_call_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_get_type: function (/* sam_common_call_handle */ handle, /* sam_communication_call_type* */ result) {
        if (typeof sam_exports_impl.sam_common_call_get_type === "function"){
            return sam_exports_impl.sam_common_call_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // HangUp a call
    //
    /* sam_status */ sam_common_call_hang_up: function (/* sam_common_call_handle */ handle, /* sam_hang_up_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_hang_up === "function"){
            return sam_exports_impl.sam_common_call_hang_up(handle, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_hangup_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_hang_up_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_hangup_via_call_kit_internal === "function"){
            return sam_exports_impl.sam_common_call_hangup_via_call_kit_internal(handle, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Hold this call
    //
    /* sam_status */ sam_common_call_hold: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_hold === "function"){
            return sam_exports_impl.sam_common_call_hold(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_hold_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_hold_via_call_kit_internal === "function"){
            return sam_exports_impl.sam_common_call_hold_via_call_kit_internal(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_info_addref: function (/* sam_common_call_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_info_addref === "function"){
            return sam_exports_impl.sam_common_call_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Get the server call ID
    //
    /* sam_status */ sam_common_call_info_get_server_call_id: function (/* sam_common_call_info_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_info_get_server_call_id === "function"){
            return sam_exports_impl.sam_common_call_info_get_server_call_id(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_info_release: function (/* sam_common_call_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_info_release === "function"){
            return sam_exports_impl.sam_common_call_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Mute all remote participants audio
    //
    /* sam_status */ sam_common_call_mute_all_remote_participants: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_mute_all_remote_participants === "function"){
            return sam_exports_impl.sam_common_call_mute_all_remote_participants(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Mute speaker.
    //
    /* sam_status */ sam_common_call_mute_incoming_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_mute_incoming_audio === "function"){
            return sam_exports_impl.sam_common_call_mute_incoming_audio(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Mute local microphone internal.
    //
    /* sam_status */ sam_common_call_mute_internal: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ mute, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_mute_internal === "function"){
            return sam_exports_impl.sam_common_call_mute_internal(handle, mute, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Mute microphone.
    //
    /* sam_status */ sam_common_call_mute_outgoing_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_mute_outgoing_audio === "function"){
            return sam_exports_impl.sam_common_call_mute_outgoing_audio(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Mute local speaker internal.
    //
    /* sam_status */ sam_common_call_mute_speaker_internal: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ mute, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_mute_speaker_internal === "function"){
            return sam_exports_impl.sam_common_call_mute_speaker_internal(handle, mute, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_release: function (/* sam_common_call_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_call_release === "function"){
            return sam_exports_impl.sam_common_call_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Remove a participant from a call
    //
    /* sam_status */ sam_common_call_remove_participant: function (/* sam_common_call_handle */ handle, /* sam_remote_participant_handle */ participant, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_remove_participant === "function"){
            return sam_exports_impl.sam_common_call_remove_participant(handle, participant, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Resume this call
    //
    /* sam_status */ sam_common_call_resume: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_resume === "function"){
            return sam_exports_impl.sam_common_call_resume(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_resume_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_resume_via_call_kit_internal === "function"){
            return sam_exports_impl.sam_common_call_resume_via_call_kit_internal(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_send_activate_audio_session_failed_telemetry: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ is_incoming, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_send_activate_audio_session_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_send_activate_audio_session_failed_telemetry(handle, is_incoming, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_send_call_in_progress_failed_telemetry: function (/* sam_common_call_handle */ handle, /* const char * */ old_state, /* const char * */ new_state, /* sam_bool_u8 */ is_incoming, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_send_call_in_progress_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_send_call_in_progress_failed_telemetry(handle, old_state, new_state, is_incoming, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send DTMF tone
    //
    /* sam_status */ sam_common_call_send_dtmf: function (/* sam_common_call_handle */ handle, /* sam_dtmf_tone */ tone, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_send_dtmf === "function"){
            return sam_exports_impl.sam_common_call_send_dtmf(handle, tone, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_send_dtmf_failed_telemetry: function (/* sam_common_call_handle */ handle, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_send_dtmf_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_send_dtmf_failed_telemetry(handle, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_send_dtmf_via_call_kit_internal: function (/* sam_common_call_handle */ handle, /* sam_dtmf_tone */ tone, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_send_dtmf_via_call_kit_internal === "function"){
            return sam_exports_impl.sam_common_call_send_dtmf_via_call_kit_internal(handle, tone, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_send_hangup_failed_telemetry: function (/* sam_common_call_handle */ handle, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_send_hangup_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_send_hangup_failed_telemetry(handle, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_send_mute_failed_telemetry: function (/* sam_common_call_handle */ handle, /* sam_bool_u8 */ old_state, /* sam_bool_u8 */ new_state, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_call_send_mute_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_call_send_mute_failed_telemetry(handle, old_state, new_state, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_id_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_id_changed === "function"){
            return sam_exports_impl.sam_common_call_set_id_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_incoming_audio_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_incoming_audio_state_changed === "function"){
            return sam_exports_impl.sam_common_call_set_incoming_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_muted_by_others: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_muted_by_others === "function"){
            return sam_exports_impl.sam_common_call_set_muted_by_others(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_id_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_id_changed === "function"){
            return sam_exports_impl.sam_common_call_set_on_id_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_incoming_audio_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_incoming_audio_state_changed === "function"){
            return sam_exports_impl.sam_common_call_set_on_incoming_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_muted_by_others: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_muted_by_others === "function"){
            return sam_exports_impl.sam_common_call_set_on_muted_by_others(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_outgoing_audio_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_outgoing_audio_state_changed === "function"){
            return sam_exports_impl.sam_common_call_set_on_outgoing_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_remote_participants_updated: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_participants_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_remote_participants_updated === "function"){
            return sam_exports_impl.sam_common_call_set_on_remote_participants_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_role_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_role_changed === "function"){
            return sam_exports_impl.sam_common_call_set_on_role_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_state_changed === "function"){
            return sam_exports_impl.sam_common_call_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_on_total_participant_count_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_on_total_participant_count_changed === "function"){
            return sam_exports_impl.sam_common_call_set_on_total_participant_count_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_outgoing_audio_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_outgoing_audio_state_changed === "function"){
            return sam_exports_impl.sam_common_call_set_outgoing_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_remote_participants_updated: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_participants_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_remote_participants_updated === "function"){
            return sam_exports_impl.sam_common_call_set_remote_participants_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_role_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_role_changed === "function"){
            return sam_exports_impl.sam_common_call_set_role_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_state_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_state_changed === "function"){
            return sam_exports_impl.sam_common_call_set_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_set_total_participant_count_changed: function (/* sam_common_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_call_set_total_participant_count_changed === "function"){
            return sam_exports_impl.sam_common_call_set_total_participant_count_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set the constraints for outgoing and incoming video streams
    //
    /* sam_status */ sam_common_call_set_video_constraints: function (/* sam_common_call_handle */ handle, /* sam_video_constraints_handle */ constraints) {
        if (typeof sam_exports_impl.sam_common_call_set_video_constraints === "function"){
            return sam_exports_impl.sam_common_call_set_video_constraints(handle, constraints);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Start audio stream
    //
    /* sam_status */ sam_common_call_start_audio: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_start_audio === "function"){
            return sam_exports_impl.sam_common_call_start_audio(handle, stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_start_audio_internal: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ audio_stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_start_audio_internal === "function"){
            return sam_exports_impl.sam_common_call_start_audio_internal(handle, audio_stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Start sharing system audio
    //
    /* sam_status */ sam_common_call_start_system_audio_sharing: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_start_system_audio_sharing === "function"){
            return sam_exports_impl.sam_common_call_start_system_audio_sharing(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Start sharing video stream to the call
    //
    /* sam_status */ sam_common_call_start_video: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_start_video === "function"){
            return sam_exports_impl.sam_common_call_start_video(handle, stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Start sharing video stream to the call
    //
    /* sam_status */ sam_common_call_start_video_internal: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_start_video_internal === "function"){
            return sam_exports_impl.sam_common_call_start_video_internal(handle, stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stop audio stream
    //
    /* sam_status */ sam_common_call_stop_audio: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_stop_audio === "function"){
            return sam_exports_impl.sam_common_call_stop_audio(handle, stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_call_stop_audio_internal: function (/* sam_common_call_handle */ handle, /* sam_call_audio_stream_handle */ audio_stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_stop_audio_internal === "function"){
            return sam_exports_impl.sam_common_call_stop_audio_internal(handle, audio_stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stop sharing system audio
    //
    /* sam_status */ sam_common_call_stop_system_audio_sharing: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_stop_system_audio_sharing === "function"){
            return sam_exports_impl.sam_common_call_stop_system_audio_sharing(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stop sharing video stream to the call
    //
    /* sam_status */ sam_common_call_stop_video: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_stop_video === "function"){
            return sam_exports_impl.sam_common_call_stop_video(handle, stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stop sharing video stream to the call
    //
    /* sam_status */ sam_common_call_stop_video_internal: function (/* sam_common_call_handle */ handle, /* sam_outgoing_video_stream_handle */ stream, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_stop_video_internal === "function"){
            return sam_exports_impl.sam_common_call_stop_video_internal(handle, stream, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Sets the desired RawVideoFrameKind when receiving video frames
    //
    /* sam_status */ sam_common_call_switch_incoming_raw_video_frame_kind: function (/* sam_common_call_handle */ handle, /* sam_raw_video_frame_type */ frame_kind) {
        if (typeof sam_exports_impl.sam_common_call_switch_incoming_raw_video_frame_kind === "function"){
            return sam_exports_impl.sam_common_call_switch_incoming_raw_video_frame_kind(handle, frame_kind);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // UnMute speaker.
    //
    /* sam_status */ sam_common_call_unmute_incoming_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_unmute_incoming_audio === "function"){
            return sam_exports_impl.sam_common_call_unmute_incoming_audio(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // UnMute microphone.
    //
    /* sam_status */ sam_common_call_unmute_outgoing_audio: function (/* sam_common_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_call_unmute_outgoing_audio === "function"){
            return sam_exports_impl.sam_common_call_unmute_outgoing_audio(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_calls_updated_event_args_addref: function (/* sam_common_calls_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_calls_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_common_calls_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_calls_updated_event_args_get_added_calls: function (/* sam_common_calls_updated_event_args_handle */ handle, /* sam_common_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_common_calls_updated_event_args_get_added_calls === "function"){
            return sam_exports_impl.sam_common_calls_updated_event_args_get_added_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_calls_updated_event_args_get_removed_calls: function (/* sam_common_calls_updated_event_args_handle */ handle, /* sam_common_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_common_calls_updated_event_args_get_removed_calls === "function"){
            return sam_exports_impl.sam_common_calls_updated_event_args_get_removed_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_calls_updated_event_args_release: function (/* sam_common_calls_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_calls_updated_event_args_release === "function"){
            return sam_exports_impl.sam_common_calls_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_addref: function (/* sam_common_incoming_call_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_incoming_call_addref === "function"){
            return sam_exports_impl.sam_common_incoming_call_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_get_call_end_reason: function (/* sam_common_incoming_call_handle */ handle, /* sam_call_end_reason_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_get_call_end_reason === "function"){
            return sam_exports_impl.sam_common_incoming_call_get_call_end_reason(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_get_caller_info: function (/* sam_common_incoming_call_handle */ handle, /* sam_caller_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_get_caller_info === "function"){
            return sam_exports_impl.sam_common_incoming_call_get_caller_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_get_current_mri: function (/* sam_common_incoming_call_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_get_current_mri === "function"){
            return sam_exports_impl.sam_common_incoming_call_get_current_mri(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_get_id: function (/* sam_common_incoming_call_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_get_id === "function"){
            return sam_exports_impl.sam_common_incoming_call_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_get_is_call_kit_enabled: function (/* sam_common_incoming_call_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_get_is_call_kit_enabled === "function"){
            return sam_exports_impl.sam_common_incoming_call_get_is_call_kit_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_get_is_video_enabled: function (/* sam_common_incoming_call_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_get_is_video_enabled === "function"){
            return sam_exports_impl.sam_common_incoming_call_get_is_video_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_get_type: function (/* sam_common_incoming_call_handle */ handle, /* sam_communication_call_type* */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_get_type === "function"){
            return sam_exports_impl.sam_common_incoming_call_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_received_event_args_addref: function (/* sam_common_incoming_call_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_incoming_call_received_event_args_addref === "function"){
            return sam_exports_impl.sam_common_incoming_call_received_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_received_event_args_get_incoming_call: function (/* sam_common_incoming_call_received_event_args_handle */ handle, /* sam_common_incoming_call_handle* */ result) {
        if (typeof sam_exports_impl.sam_common_incoming_call_received_event_args_get_incoming_call === "function"){
            return sam_exports_impl.sam_common_incoming_call_received_event_args_get_incoming_call(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_received_event_args_release: function (/* sam_common_incoming_call_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_incoming_call_received_event_args_release === "function"){
            return sam_exports_impl.sam_common_incoming_call_received_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Reject this incoming call
    //
    /* sam_status */ sam_common_incoming_call_reject: function (/* sam_common_incoming_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_incoming_call_reject === "function"){
            return sam_exports_impl.sam_common_incoming_call_reject(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_reject_via_call_kit_internal: function (/* sam_common_incoming_call_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_common_incoming_call_reject_via_call_kit_internal === "function"){
            return sam_exports_impl.sam_common_incoming_call_reject_via_call_kit_internal(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_release: function (/* sam_common_incoming_call_handle */ handle) {
        if (typeof sam_exports_impl.sam_common_incoming_call_release === "function"){
            return sam_exports_impl.sam_common_incoming_call_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_send_reject_failed_telemetry: function (/* sam_common_incoming_call_handle */ handle, /* const char * */ failure_message) {
        if (typeof sam_exports_impl.sam_common_incoming_call_send_reject_failed_telemetry === "function"){
            return sam_exports_impl.sam_common_incoming_call_send_reject_failed_telemetry(handle, failure_message);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_set_call_ended: function (/* sam_common_incoming_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_common_incoming_call_set_call_ended === "function"){
            return sam_exports_impl.sam_common_incoming_call_set_call_ended(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_common_incoming_call_set_on_call_ended: function (/* sam_common_incoming_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_common_incoming_call_set_on_call_ended === "function"){
            return sam_exports_impl.sam_common_incoming_call_set_on_call_ended(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_received_event_args_addref: function (/* sam_communication_captions_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_communication_captions_received_event_args_addref === "function"){
            return sam_exports_impl.sam_communication_captions_received_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_received_event_args_get_result_type: function (/* sam_communication_captions_received_event_args_handle */ handle, /* sam_captions_result_type* */ result) {
        if (typeof sam_exports_impl.sam_communication_captions_received_event_args_get_result_type === "function"){
            return sam_exports_impl.sam_communication_captions_received_event_args_get_result_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_received_event_args_get_speaker: function (/* sam_communication_captions_received_event_args_handle */ handle, /* sam_caller_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_communication_captions_received_event_args_get_speaker === "function"){
            return sam_exports_impl.sam_communication_captions_received_event_args_get_speaker(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_received_event_args_get_spoken_language: function (/* sam_communication_captions_received_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_communication_captions_received_event_args_get_spoken_language === "function"){
            return sam_exports_impl.sam_communication_captions_received_event_args_get_spoken_language(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_received_event_args_get_spoken_text: function (/* sam_communication_captions_received_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_communication_captions_received_event_args_get_spoken_text === "function"){
            return sam_exports_impl.sam_communication_captions_received_event_args_get_spoken_text(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_received_event_args_get_timestamp: function (/* sam_communication_captions_received_event_args_handle */ handle, /* int64_t* */ result) {
        if (typeof sam_exports_impl.sam_communication_captions_received_event_args_get_timestamp === "function"){
            return sam_exports_impl.sam_communication_captions_received_event_args_get_timestamp(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_received_event_args_release: function (/* sam_communication_captions_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_communication_captions_received_event_args_release === "function"){
            return sam_exports_impl.sam_communication_captions_received_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_set_active_spoken_language_changed: function (/* sam_communication_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_communication_captions_set_active_spoken_language_changed === "function"){
            return sam_exports_impl.sam_communication_captions_set_active_spoken_language_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_set_captions_enabled_changed: function (/* sam_communication_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_communication_captions_set_captions_enabled_changed === "function"){
            return sam_exports_impl.sam_communication_captions_set_captions_enabled_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_set_captions_received: function (/* sam_communication_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_communication_captions_received_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_communication_captions_set_captions_received === "function"){
            return sam_exports_impl.sam_communication_captions_set_captions_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_set_on_active_spoken_language_changed: function (/* sam_communication_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_communication_captions_set_on_active_spoken_language_changed === "function"){
            return sam_exports_impl.sam_communication_captions_set_on_active_spoken_language_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_set_on_captions_enabled_changed: function (/* sam_communication_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_communication_captions_set_on_captions_enabled_changed === "function"){
            return sam_exports_impl.sam_communication_captions_set_on_captions_enabled_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_communication_captions_set_on_captions_received: function (/* sam_communication_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_communication_captions_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_communication_captions_set_on_captions_received === "function"){
            return sam_exports_impl.sam_communication_captions_set_on_captions_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_call_feature_get_content_sharing_info: function (/* sam_content_sharing_call_feature_handle */ handle, /* sam_content_sharing_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_content_sharing_call_feature_get_content_sharing_info === "function"){
            return sam_exports_impl.sam_content_sharing_call_feature_get_content_sharing_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_call_feature_get_state: function (/* sam_content_sharing_call_feature_handle */ handle, /* sam_content_sharing_state* */ result) {
        if (typeof sam_exports_impl.sam_content_sharing_call_feature_get_state === "function"){
            return sam_exports_impl.sam_content_sharing_call_feature_get_state(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_call_feature_get_type: function (/* sam_content_sharing_call_feature_handle */ handle, /* sam_content_sharing_type* */ result) {
        if (typeof sam_exports_impl.sam_content_sharing_call_feature_get_type === "function"){
            return sam_exports_impl.sam_content_sharing_call_feature_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_call_feature_set_content_sharing_details_changed: function (/* sam_content_sharing_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_content_sharing_call_feature_set_content_sharing_details_changed === "function"){
            return sam_exports_impl.sam_content_sharing_call_feature_set_content_sharing_details_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_call_feature_set_on_content_sharing_info_changed: function (/* sam_content_sharing_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_content_sharing_call_feature_set_on_content_sharing_info_changed === "function"){
            return sam_exports_impl.sam_content_sharing_call_feature_set_on_content_sharing_info_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_call_feature_set_on_state_changed: function (/* sam_content_sharing_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_content_sharing_call_feature_set_on_state_changed === "function"){
            return sam_exports_impl.sam_content_sharing_call_feature_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_call_feature_set_state_changed: function (/* sam_content_sharing_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_content_sharing_call_feature_set_state_changed === "function"){
            return sam_exports_impl.sam_content_sharing_call_feature_set_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_info_addref: function (/* sam_content_sharing_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_content_sharing_info_addref === "function"){
            return sam_exports_impl.sam_content_sharing_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_content_sharing_info_release: function (/* sam_content_sharing_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_content_sharing_info_release === "function"){
            return sam_exports_impl.sam_content_sharing_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_create_view_options_addref: function (/* sam_create_view_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_create_view_options_addref === "function"){
            return sam_exports_impl.sam_create_view_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a scaling mode parameter
    //
    /* sam_status */ sam_create_view_options_create_scaling_mode_scaling_mode: function (/* sam_scaling_mode */ scaling_mode, /* sam_create_view_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_create_view_options_create_scaling_mode_scaling_mode === "function"){
            return sam_exports_impl.sam_create_view_options_create_scaling_mode_scaling_mode(scaling_mode, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_create_view_options_get_scaling_mode: function (/* sam_create_view_options_handle */ handle, /* sam_scaling_mode* */ result) {
        if (typeof sam_exports_impl.sam_create_view_options_get_scaling_mode === "function"){
            return sam_exports_impl.sam_create_view_options_get_scaling_mode(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_create_view_options_release: function (/* sam_create_view_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_create_view_options_release === "function"){
            return sam_exports_impl.sam_create_view_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_create_view_options_set_scaling_mode: function (/* sam_create_view_options_handle */ handle, /* sam_scaling_mode */ value) {
        if (typeof sam_exports_impl.sam_create_view_options_set_scaling_mode === "function"){
            return sam_exports_impl.sam_create_view_options_set_scaling_mode(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new data channel sender with user-specified options
    //
    /* sam_status */ sam_data_channel_call_feature_get_data_channel_sender: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_data_channel_sender_options_handle */ options, /* sam_data_channel_sender_handle* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_call_feature_get_data_channel_sender === "function"){
            return sam_exports_impl.sam_data_channel_call_feature_get_data_channel_sender(handle, options, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_call_feature_get_is_active: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_call_feature_get_is_active === "function"){
            return sam_exports_impl.sam_data_channel_call_feature_get_is_active(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_call_feature_set_active_changed: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_call_feature_set_active_changed === "function"){
            return sam_exports_impl.sam_data_channel_call_feature_set_active_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_call_feature_set_on_active_changed: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_call_feature_set_on_active_changed === "function"){
            return sam_exports_impl.sam_data_channel_call_feature_set_on_active_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_call_feature_set_on_receiver_created: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_data_channel_receiver_created_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_call_feature_set_on_receiver_created === "function"){
            return sam_exports_impl.sam_data_channel_call_feature_set_on_receiver_created(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_call_feature_set_receiver_created: function (/* sam_data_channel_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_data_channel_receiver_created_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_call_feature_set_receiver_created === "function"){
            return sam_exports_impl.sam_data_channel_call_feature_set_receiver_created(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_message_addref: function (/* sam_data_channel_message_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_message_addref === "function"){
            return sam_exports_impl.sam_data_channel_message_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_message_get_data: function (/* sam_data_channel_message_handle */ handle, /* sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_data_channel_message_get_data === "function"){
            return sam_exports_impl.sam_data_channel_message_get_data(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_message_get_sequence_number: function (/* sam_data_channel_message_handle */ handle, /* sam_i64* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_message_get_sequence_number === "function"){
            return sam_exports_impl.sam_data_channel_message_get_sequence_number(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Reads the data that was provided in this message.
    //
    /* sam_status */ sam_data_channel_message_read_data: function (/* sam_data_channel_message_handle */ handle, /* void ** */ bytes, /* int* */ size) {
        if (typeof sam_exports_impl.sam_data_channel_message_read_data === "function"){
            return sam_exports_impl.sam_data_channel_message_read_data(handle, bytes, size);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_message_release: function (/* sam_data_channel_message_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_message_release === "function"){
            return sam_exports_impl.sam_data_channel_message_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_receiver_addref: function (/* sam_data_channel_receiver_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_addref === "function"){
            return sam_exports_impl.sam_data_channel_receiver_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_created_event_args_addref: function (/* sam_data_channel_receiver_created_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_created_event_args_addref === "function"){
            return sam_exports_impl.sam_data_channel_receiver_created_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_created_event_args_get_receiver: function (/* sam_data_channel_receiver_created_event_args_handle */ handle, /* sam_data_channel_receiver_handle* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_created_event_args_get_receiver === "function"){
            return sam_exports_impl.sam_data_channel_receiver_created_event_args_get_receiver(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_created_event_args_release: function (/* sam_data_channel_receiver_created_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_created_event_args_release === "function"){
            return sam_exports_impl.sam_data_channel_receiver_created_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_get_channel_id: function (/* sam_data_channel_receiver_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_get_channel_id === "function"){
            return sam_exports_impl.sam_data_channel_receiver_get_channel_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_get_channel_id_internal: function (/* sam_data_channel_receiver_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_get_channel_id_internal === "function"){
            return sam_exports_impl.sam_data_channel_receiver_get_channel_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_get_sender_identifier_internal: function (/* sam_data_channel_receiver_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_get_sender_identifier_internal === "function"){
            return sam_exports_impl.sam_data_channel_receiver_get_sender_identifier_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Fetch data message from the data channel
    //
    /* sam_status */ sam_data_channel_receiver_pop_message: function (/* sam_data_channel_receiver_handle */ handle, /* sam_data_channel_message_handle* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_pop_message === "function"){
            return sam_exports_impl.sam_data_channel_receiver_pop_message(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_receiver_release: function (/* sam_data_channel_receiver_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_release === "function"){
            return sam_exports_impl.sam_data_channel_receiver_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_set_closed: function (/* sam_data_channel_receiver_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_set_closed === "function"){
            return sam_exports_impl.sam_data_channel_receiver_set_closed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_set_message_received: function (/* sam_data_channel_receiver_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_set_message_received === "function"){
            return sam_exports_impl.sam_data_channel_receiver_set_message_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_set_on_closed: function (/* sam_data_channel_receiver_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_set_on_closed === "function"){
            return sam_exports_impl.sam_data_channel_receiver_set_on_closed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_receiver_set_on_message_received: function (/* sam_data_channel_receiver_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_data_channel_receiver_set_on_message_received === "function"){
            return sam_exports_impl.sam_data_channel_receiver_set_on_message_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_sender_addref: function (/* sam_data_channel_sender_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_sender_addref === "function"){
            return sam_exports_impl.sam_data_channel_sender_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Close the data channel
    //
    /* sam_status */ sam_data_channel_sender_close_sender: function (/* sam_data_channel_sender_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_sender_close_sender === "function"){
            return sam_exports_impl.sam_data_channel_sender_close_sender(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_get_channel_id: function (/* sam_data_channel_sender_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_get_channel_id === "function"){
            return sam_exports_impl.sam_data_channel_sender_get_channel_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_get_channel_id_internal: function (/* sam_data_channel_sender_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_get_channel_id_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_get_channel_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_get_max_message_size_in_bytes: function (/* sam_data_channel_sender_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_get_max_message_size_in_bytes === "function"){
            return sam_exports_impl.sam_data_channel_sender_get_max_message_size_in_bytes(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_get_max_message_size_in_bytes_internal: function (/* sam_data_channel_sender_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_get_max_message_size_in_bytes_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_get_max_message_size_in_bytes_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_sender_options_addref: function (/* sam_data_channel_sender_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_addref === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_data_channel_sender_options_create: function (/* sam_data_channel_sender_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_create === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_bitrate_in_kbps: function (/* sam_data_channel_sender_options_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_bitrate_in_kbps === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_bitrate_in_kbps(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_bitrate_in_kbps_internal: function (/* sam_data_channel_sender_options_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_bitrate_in_kbps_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_bitrate_in_kbps_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_channel_id: function (/* sam_data_channel_sender_options_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_channel_id === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_channel_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_channel_id_internal: function (/* sam_data_channel_sender_options_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_channel_id_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_channel_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_participants_internal: function (/* sam_data_channel_sender_options_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_participants_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_participants_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_participants_internal_flat: function (/* sam_data_channel_sender_options_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_participants_internal_flat === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_participants_internal_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_priority: function (/* sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_priority* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_priority === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_priority(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_get_reliability: function (/* sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_reliability* */ result) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_get_reliability === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_get_reliability(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_sender_options_release: function (/* sam_data_channel_sender_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_release === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_set_bitrate_in_kbps: function (/* sam_data_channel_sender_options_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_set_bitrate_in_kbps === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_set_bitrate_in_kbps(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_set_bitrate_in_kbps_internal: function (/* sam_data_channel_sender_options_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_set_bitrate_in_kbps_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_set_bitrate_in_kbps_internal(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_set_channel_id: function (/* sam_data_channel_sender_options_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_set_channel_id === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_set_channel_id(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_set_channel_id_internal: function (/* sam_data_channel_sender_options_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_set_channel_id_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_set_channel_id_internal(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_set_participants_internal: function (/* sam_data_channel_sender_options_handle */ handle, /* const char * * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_set_participants_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_set_participants_internal(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_set_priority: function (/* sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_priority */ value) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_set_priority === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_set_priority(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_options_set_reliability: function (/* sam_data_channel_sender_options_handle */ handle, /* sam_data_channel_reliability */ value) {
        if (typeof sam_exports_impl.sam_data_channel_sender_options_set_reliability === "function"){
            return sam_exports_impl.sam_data_channel_sender_options_set_reliability(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_data_channel_sender_release: function (/* sam_data_channel_sender_handle */ handle) {
        if (typeof sam_exports_impl.sam_data_channel_sender_release === "function"){
            return sam_exports_impl.sam_data_channel_sender_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Sends data message
    //
    /* sam_status */ sam_data_channel_sender_send_message: function (/* sam_data_channel_sender_handle */ handle, /* sam_u8 const* */ data, /* int */ data_count) {
        if (typeof sam_exports_impl.sam_data_channel_sender_send_message === "function"){
            return sam_exports_impl.sam_data_channel_sender_send_message(handle, data, data_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_send_message_async_data: function (/* sam_data_channel_sender_handle */ handle, /* sam_u8 const* */ data, /* int */ data_count, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_data_channel_sender_send_message_async_data === "function"){
            return sam_exports_impl.sam_data_channel_sender_send_message_async_data(handle, data, data_count, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_data_channel_sender_send_message_async_int_ptr_data_int32_data_length: function (/* sam_data_channel_sender_handle */ handle, /* void * */ data, /* int */ data_length, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_data_channel_sender_send_message_async_int_ptr_data_int32_data_length === "function"){
            return sam_exports_impl.sam_data_channel_sender_send_message_async_int_ptr_data_int32_data_length(handle, data, data_length, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Updates the participants of this data channel
    //
    /* sam_status */ sam_data_channel_sender_set_participants_internal: function (/* sam_data_channel_sender_handle */ handle, /* const char * const* */ participants, /* int */ participants_count) {
        if (typeof sam_exports_impl.sam_data_channel_sender_set_participants_internal === "function"){
            return sam_exports_impl.sam_data_channel_sender_set_participants_internal(handle, participants, participants_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_addref: function (/* sam_device_manager_handle */ handle) {
        if (typeof sam_exports_impl.sam_device_manager_addref === "function"){
            return sam_exports_impl.sam_device_manager_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_get_cameras: function (/* sam_device_manager_handle */ handle, /* sam_video_device_info_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_device_manager_get_cameras === "function"){
            return sam_exports_impl.sam_device_manager_get_cameras(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_get_microphone: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle* */ result) {
        if (typeof sam_exports_impl.sam_device_manager_get_microphone === "function"){
            return sam_exports_impl.sam_device_manager_get_microphone(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_get_microphones: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_device_manager_get_microphones === "function"){
            return sam_exports_impl.sam_device_manager_get_microphones(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_get_speaker: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle* */ result) {
        if (typeof sam_exports_impl.sam_device_manager_get_speaker === "function"){
            return sam_exports_impl.sam_device_manager_get_speaker(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_get_speakers: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_device_manager_get_speakers === "function"){
            return sam_exports_impl.sam_device_manager_get_speakers(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_release: function (/* sam_device_manager_handle */ handle) {
        if (typeof sam_exports_impl.sam_device_manager_release === "function"){
            return sam_exports_impl.sam_device_manager_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_set_cameras_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_devices_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_device_manager_set_cameras_updated === "function"){
            return sam_exports_impl.sam_device_manager_set_cameras_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_set_device_orientation_internal: function (/* sam_device_manager_handle */ handle, /* int */ angle) {
        if (typeof sam_exports_impl.sam_device_manager_set_device_orientation_internal === "function"){
            return sam_exports_impl.sam_device_manager_set_device_orientation_internal(handle, angle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set the microphone to be used for all active calls
    //
    /* sam_status */ sam_device_manager_set_microphone: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle */ microphone_device) {
        if (typeof sam_exports_impl.sam_device_manager_set_microphone === "function"){
            return sam_exports_impl.sam_device_manager_set_microphone(handle, microphone_device);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_set_microphones_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_devices_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_device_manager_set_microphones_updated === "function"){
            return sam_exports_impl.sam_device_manager_set_microphones_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_set_on_cameras_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_devices_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_device_manager_set_on_cameras_updated === "function"){
            return sam_exports_impl.sam_device_manager_set_on_cameras_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_set_on_microphones_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_devices_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_device_manager_set_on_microphones_updated === "function"){
            return sam_exports_impl.sam_device_manager_set_on_microphones_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_set_on_speakers_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_devices_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_device_manager_set_on_speakers_updated === "function"){
            return sam_exports_impl.sam_device_manager_set_on_speakers_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set the speakers to be used for all active calls
    //
    /* sam_status */ sam_device_manager_set_speaker: function (/* sam_device_manager_handle */ handle, /* sam_audio_device_details_handle */ speaker_device) {
        if (typeof sam_exports_impl.sam_device_manager_set_speaker === "function"){
            return sam_exports_impl.sam_device_manager_set_speaker(handle, speaker_device);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_device_manager_set_speakers_updated: function (/* sam_device_manager_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_devices_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_device_manager_set_speakers_updated === "function"){
            return sam_exports_impl.sam_device_manager_set_speakers_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_flag_changed_event_args_addref: function (/* sam_diagnostic_flag_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_diagnostic_flag_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_diagnostic_flag_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_flag_changed_event_args_get_name: function (/* sam_diagnostic_flag_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_diagnostic_flag_changed_event_args_get_name === "function"){
            return sam_exports_impl.sam_diagnostic_flag_changed_event_args_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_flag_changed_event_args_get_value: function (/* sam_diagnostic_flag_changed_event_args_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_diagnostic_flag_changed_event_args_get_value === "function"){
            return sam_exports_impl.sam_diagnostic_flag_changed_event_args_get_value(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_flag_changed_event_args_get_value_internal: function (/* sam_diagnostic_flag_changed_event_args_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_diagnostic_flag_changed_event_args_get_value_internal === "function"){
            return sam_exports_impl.sam_diagnostic_flag_changed_event_args_get_value_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_flag_changed_event_args_release: function (/* sam_diagnostic_flag_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_diagnostic_flag_changed_event_args_release === "function"){
            return sam_exports_impl.sam_diagnostic_flag_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_quality_changed_event_args_addref: function (/* sam_diagnostic_quality_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_diagnostic_quality_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_diagnostic_quality_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_quality_changed_event_args_get_name: function (/* sam_diagnostic_quality_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_diagnostic_quality_changed_event_args_get_name === "function"){
            return sam_exports_impl.sam_diagnostic_quality_changed_event_args_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_quality_changed_event_args_get_value: function (/* sam_diagnostic_quality_changed_event_args_handle */ handle, /* sam_diagnostic_quality* */ result) {
        if (typeof sam_exports_impl.sam_diagnostic_quality_changed_event_args_get_value === "function"){
            return sam_exports_impl.sam_diagnostic_quality_changed_event_args_get_value(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_diagnostic_quality_changed_event_args_release: function (/* sam_diagnostic_quality_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_diagnostic_quality_changed_event_args_release === "function"){
            return sam_exports_impl.sam_diagnostic_quality_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_dominant_speakers_call_feature_get_dominant_speakers_info: function (/* sam_dominant_speakers_call_feature_handle */ handle, /* sam_dominant_speakers_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_dominant_speakers_call_feature_get_dominant_speakers_info === "function"){
            return sam_exports_impl.sam_dominant_speakers_call_feature_get_dominant_speakers_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_dominant_speakers_call_feature_set_dominant_speakers_changed: function (/* sam_dominant_speakers_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_dominant_speakers_call_feature_set_dominant_speakers_changed === "function"){
            return sam_exports_impl.sam_dominant_speakers_call_feature_set_dominant_speakers_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_dominant_speakers_call_feature_set_on_dominant_speakers_changed: function (/* sam_dominant_speakers_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_dominant_speakers_call_feature_set_on_dominant_speakers_changed === "function"){
            return sam_exports_impl.sam_dominant_speakers_call_feature_set_on_dominant_speakers_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_dominant_speakers_info_addref: function (/* sam_dominant_speakers_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_dominant_speakers_info_addref === "function"){
            return sam_exports_impl.sam_dominant_speakers_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_dominant_speakers_info_get_last_updated_at: function (/* sam_dominant_speakers_info_handle */ handle, /* int64_t* */ result) {
        if (typeof sam_exports_impl.sam_dominant_speakers_info_get_last_updated_at === "function"){
            return sam_exports_impl.sam_dominant_speakers_info_get_last_updated_at(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_dominant_speakers_info_get_speakers_internal: function (/* sam_dominant_speakers_info_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_dominant_speakers_info_get_speakers_internal === "function"){
            return sam_exports_impl.sam_dominant_speakers_info_get_speakers_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_dominant_speakers_info_release: function (/* sam_dominant_speakers_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_dominant_speakers_info_release === "function"){
            return sam_exports_impl.sam_dominant_speakers_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_emergency_call_options_addref: function (/* sam_emergency_call_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_emergency_call_options_addref === "function"){
            return sam_exports_impl.sam_emergency_call_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration for emergency call options
    //
    /* sam_status */ sam_emergency_call_options_create: function (/* sam_emergency_call_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_emergency_call_options_create === "function"){
            return sam_exports_impl.sam_emergency_call_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_emergency_call_options_get_country_code: function (/* sam_emergency_call_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_emergency_call_options_get_country_code === "function"){
            return sam_exports_impl.sam_emergency_call_options_get_country_code(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_emergency_call_options_release: function (/* sam_emergency_call_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_emergency_call_options_release === "function"){
            return sam_exports_impl.sam_emergency_call_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_emergency_call_options_set_country_code: function (/* sam_emergency_call_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_emergency_call_options_set_country_code === "function"){
            return sam_exports_impl.sam_emergency_call_options_set_country_code(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_endpoint_details_addref: function (/* sam_endpoint_details_handle */ handle) {
        if (typeof sam_exports_impl.sam_endpoint_details_addref === "function"){
            return sam_exports_impl.sam_endpoint_details_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_endpoint_details_get_audio_stream_delegated_id: function (/* sam_endpoint_details_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_endpoint_details_get_audio_stream_delegated_id === "function"){
            return sam_exports_impl.sam_endpoint_details_get_audio_stream_delegated_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_endpoint_details_get_is_audio_stream_delegated: function (/* sam_endpoint_details_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_endpoint_details_get_is_audio_stream_delegated === "function"){
            return sam_exports_impl.sam_endpoint_details_get_is_audio_stream_delegated(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_endpoint_details_get_participant_id: function (/* sam_endpoint_details_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_endpoint_details_get_participant_id === "function"){
            return sam_exports_impl.sam_endpoint_details_get_participant_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_endpoint_details_release: function (/* sam_endpoint_details_handle */ handle) {
        if (typeof sam_exports_impl.sam_endpoint_details_release === "function"){
            return sam_exports_impl.sam_endpoint_details_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_get_error_details: function (/* void * */ handle, /* const char ** */ result_message, /* const char ** */ result_requestCorrelationVector, /* const char ** */ result_responseCorrelationVector) {
        if (typeof sam_exports_impl.sam_get_error_details === "function"){
            return sam_exports_impl.sam_get_error_details(handle, result_message, result_requestCorrelationVector, result_responseCorrelationVector);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_get_handle_type: function (/* void * */ handle, /* sam_handle_type* */ result) {
        if (typeof sam_exports_impl.sam_get_handle_type === "function"){
            return sam_exports_impl.sam_get_handle_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a group id
    //
    /* sam_status */ sam_group_call_locator_create_guid_group_id: function (/* sam_guid */ group_id, /* sam_group_call_locator_handle* */ instance) {
        if (typeof sam_exports_impl.sam_group_call_locator_create_guid_group_id === "function"){
            return sam_exports_impl.sam_group_call_locator_create_guid_group_id(group_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_group_call_locator_get_group_id: function (/* sam_group_call_locator_handle */ handle, /* sam_guid* */ result) {
        if (typeof sam_exports_impl.sam_group_call_locator_get_group_id === "function"){
            return sam_exports_impl.sam_group_call_locator_get_group_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a thread id
    //
    /* sam_status */ sam_group_chat_call_locator_create_string_thread_id: function (/* const char * */ thread_id, /* sam_group_chat_call_locator_handle* */ instance) {
        if (typeof sam_exports_impl.sam_group_chat_call_locator_create_string_thread_id === "function"){
            return sam_exports_impl.sam_group_chat_call_locator_create_string_thread_id(thread_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_group_chat_call_locator_get_thread_id: function (/* sam_group_chat_call_locator_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_group_chat_call_locator_get_thread_id === "function"){
            return sam_exports_impl.sam_group_chat_call_locator_get_thread_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_hang_up_options_addref: function (/* sam_hang_up_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_hang_up_options_addref === "function"){
            return sam_exports_impl.sam_hang_up_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_hang_up_options_create: function (/* sam_hang_up_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_hang_up_options_create === "function"){
            return sam_exports_impl.sam_hang_up_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_hang_up_options_get_for_everyone: function (/* sam_hang_up_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_hang_up_options_get_for_everyone === "function"){
            return sam_exports_impl.sam_hang_up_options_get_for_everyone(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_hang_up_options_release: function (/* sam_hang_up_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_hang_up_options_release === "function"){
            return sam_exports_impl.sam_hang_up_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_hang_up_options_set_for_everyone: function (/* sam_hang_up_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_hang_up_options_set_for_everyone === "function"){
            return sam_exports_impl.sam_hang_up_options_set_for_everyone(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_addref: function (/* sam_ice_server_handle */ handle) {
        if (typeof sam_exports_impl.sam_ice_server_addref === "function"){
            return sam_exports_impl.sam_ice_server_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration.
    //
    /* sam_status */ sam_ice_server_create: function (/* sam_ice_server_handle* */ instance) {
        if (typeof sam_exports_impl.sam_ice_server_create === "function"){
            return sam_exports_impl.sam_ice_server_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_password: function (/* sam_ice_server_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_ice_server_get_password === "function"){
            return sam_exports_impl.sam_ice_server_get_password(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_realm: function (/* sam_ice_server_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_ice_server_get_realm === "function"){
            return sam_exports_impl.sam_ice_server_get_realm(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_tcp_port: function (/* sam_ice_server_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_ice_server_get_tcp_port === "function"){
            return sam_exports_impl.sam_ice_server_get_tcp_port(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_udp_port: function (/* sam_ice_server_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_ice_server_get_udp_port === "function"){
            return sam_exports_impl.sam_ice_server_get_udp_port(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_urls: function (/* sam_ice_server_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_ice_server_get_urls === "function"){
            return sam_exports_impl.sam_ice_server_get_urls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_urls_flat: function (/* sam_ice_server_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_ice_server_get_urls_flat === "function"){
            return sam_exports_impl.sam_ice_server_get_urls_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_urls_internal: function (/* sam_ice_server_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_ice_server_get_urls_internal === "function"){
            return sam_exports_impl.sam_ice_server_get_urls_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_urls_internal_flat: function (/* sam_ice_server_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_ice_server_get_urls_internal_flat === "function"){
            return sam_exports_impl.sam_ice_server_get_urls_internal_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_get_username: function (/* sam_ice_server_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_ice_server_get_username === "function"){
            return sam_exports_impl.sam_ice_server_get_username(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_release: function (/* sam_ice_server_handle */ handle) {
        if (typeof sam_exports_impl.sam_ice_server_release === "function"){
            return sam_exports_impl.sam_ice_server_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_set_password: function (/* sam_ice_server_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_ice_server_set_password === "function"){
            return sam_exports_impl.sam_ice_server_set_password(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_set_realm: function (/* sam_ice_server_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_ice_server_set_realm === "function"){
            return sam_exports_impl.sam_ice_server_set_realm(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_set_tcp_port: function (/* sam_ice_server_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_ice_server_set_tcp_port === "function"){
            return sam_exports_impl.sam_ice_server_set_tcp_port(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_set_udp_port: function (/* sam_ice_server_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_ice_server_set_udp_port === "function"){
            return sam_exports_impl.sam_ice_server_set_udp_port(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_set_urls: function (/* sam_ice_server_handle */ handle, /* const char * * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_ice_server_set_urls === "function"){
            return sam_exports_impl.sam_ice_server_set_urls(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_set_urls_internal: function (/* sam_ice_server_handle */ handle, /* const char * * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_ice_server_set_urls_internal === "function"){
            return sam_exports_impl.sam_ice_server_set_urls_internal(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_ice_server_set_username: function (/* sam_ice_server_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_ice_server_set_username === "function"){
            return sam_exports_impl.sam_ice_server_set_username(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_addref: function (/* sam_incoming_audio_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_addref === "function"){
            return sam_exports_impl.sam_incoming_audio_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_incoming_audio_options_create: function (/* sam_incoming_audio_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_create === "function"){
            return sam_exports_impl.sam_incoming_audio_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_get_is_muted: function (/* sam_incoming_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_get_is_muted === "function"){
            return sam_exports_impl.sam_incoming_audio_options_get_is_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_get_muted: function (/* sam_incoming_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_get_muted === "function"){
            return sam_exports_impl.sam_incoming_audio_options_get_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_get_stream: function (/* sam_incoming_audio_options_handle */ handle, /* sam_incoming_audio_stream_handle* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_get_stream === "function"){
            return sam_exports_impl.sam_incoming_audio_options_get_stream(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_release: function (/* sam_incoming_audio_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_release === "function"){
            return sam_exports_impl.sam_incoming_audio_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_set_is_muted: function (/* sam_incoming_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_set_is_muted === "function"){
            return sam_exports_impl.sam_incoming_audio_options_set_is_muted(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_set_muted: function (/* sam_incoming_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_set_muted === "function"){
            return sam_exports_impl.sam_incoming_audio_options_set_muted(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_options_set_stream: function (/* sam_incoming_audio_options_handle */ handle, /* sam_incoming_audio_stream_handle */ value) {
        if (typeof sam_exports_impl.sam_incoming_audio_options_set_stream === "function"){
            return sam_exports_impl.sam_incoming_audio_options_set_stream(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_audio_statistics_addref: function (/* sam_incoming_audio_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_addref === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_codec_name: function (/* sam_incoming_audio_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_codec_name === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_codec_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_jitter_in_ms: function (/* sam_incoming_audio_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_jitter_in_ms === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_jitter_in_ms(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_jitter_in_ms_internal: function (/* sam_incoming_audio_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_jitter_in_ms_internal === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_jitter_in_ms_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_packet_count: function (/* sam_incoming_audio_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_packet_count_internal: function (/* sam_incoming_audio_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_packets_lost_per_second: function (/* sam_incoming_audio_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_packets_lost_per_second === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_packets_lost_per_second(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_packets_lost_per_second_internal: function (/* sam_incoming_audio_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_packets_lost_per_second_internal === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_packets_lost_per_second_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_stream_id: function (/* sam_incoming_audio_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_stream_id === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_audio_statistics_get_stream_id_internal: function (/* sam_incoming_audio_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_get_stream_id_internal === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_get_stream_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_audio_statistics_release: function (/* sam_incoming_audio_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_audio_statistics_release === "function"){
            return sam_exports_impl.sam_incoming_audio_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Accept an incoming call
    //
    /* sam_status */ sam_incoming_call_accept: function (/* sam_incoming_call_handle */ handle, /* sam_accept_call_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_incoming_call_accept === "function"){
            return sam_exports_impl.sam_incoming_call_accept(handle, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_call_accept_via_call_kit_internal: function (/* sam_incoming_call_handle */ handle, /* sam_accept_call_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_incoming_call_accept_via_call_kit_internal === "function"){
            return sam_exports_impl.sam_incoming_call_accept_via_call_kit_internal(handle, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_call_accept_with_context: function (/* sam_incoming_call_handle */ handle, /* sam_context_handle */ context, /* sam_accept_call_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_incoming_call_accept_with_context === "function"){
            return sam_exports_impl.sam_incoming_call_accept_with_context(handle, context, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_call_received_event_args_addref: function (/* sam_incoming_call_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_call_received_event_args_addref === "function"){
            return sam_exports_impl.sam_incoming_call_received_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_call_received_event_args_get_incoming_call: function (/* sam_incoming_call_received_event_args_handle */ handle, /* sam_incoming_call_handle* */ result) {
        if (typeof sam_exports_impl.sam_incoming_call_received_event_args_get_incoming_call === "function"){
            return sam_exports_impl.sam_incoming_call_received_event_args_get_incoming_call(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_call_received_event_args_release: function (/* sam_incoming_call_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_call_received_event_args_release === "function"){
            return sam_exports_impl.sam_incoming_call_received_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_call_set_on_call_ended: function (/* sam_incoming_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_incoming_call_set_on_call_ended === "function"){
            return sam_exports_impl.sam_incoming_call_set_on_call_ended(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_data_channel_statistics_addref: function (/* sam_incoming_data_channel_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_data_channel_statistics_addref === "function"){
            return sam_exports_impl.sam_incoming_data_channel_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_data_channel_statistics_get_jitter_in_ms: function (/* sam_incoming_data_channel_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_data_channel_statistics_get_jitter_in_ms === "function"){
            return sam_exports_impl.sam_incoming_data_channel_statistics_get_jitter_in_ms(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_data_channel_statistics_get_jitter_in_ms_internal: function (/* sam_incoming_data_channel_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_incoming_data_channel_statistics_get_jitter_in_ms_internal === "function"){
            return sam_exports_impl.sam_incoming_data_channel_statistics_get_jitter_in_ms_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_data_channel_statistics_get_packet_count: function (/* sam_incoming_data_channel_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_data_channel_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_incoming_data_channel_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_data_channel_statistics_get_packet_count_internal: function (/* sam_incoming_data_channel_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_data_channel_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_incoming_data_channel_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_data_channel_statistics_release: function (/* sam_incoming_data_channel_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_data_channel_statistics_release === "function"){
            return sam_exports_impl.sam_incoming_data_channel_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_media_statistics_addref: function (/* sam_incoming_media_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_addref === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_audio: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_audio_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_audio === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_audio(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_audio_internal: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_audio_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_audio_internal === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_audio_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_data_channel: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_data_channel_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_data_channel === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_data_channel(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_data_channel_internal: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_data_channel_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_data_channel_internal === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_data_channel_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_screen_share: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_screen_share_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_screen_share === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_screen_share(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_screen_share_internal: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_screen_share_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_screen_share_internal === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_screen_share_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_video: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_video_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_video === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_video(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_media_statistics_get_video_internal: function (/* sam_incoming_media_statistics_handle */ handle, /* sam_incoming_video_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_get_video_internal === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_get_video_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_media_statistics_release: function (/* sam_incoming_media_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_media_statistics_release === "function"){
            return sam_exports_impl.sam_incoming_media_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_mixed_audio_event_args_addref: function (/* sam_incoming_mixed_audio_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_mixed_audio_event_args_addref === "function"){
            return sam_exports_impl.sam_incoming_mixed_audio_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_mixed_audio_event_args_get_audio_buffer: function (/* sam_incoming_mixed_audio_event_args_handle */ handle, /* sam_raw_audio_buffer_handle* */ result) {
        if (typeof sam_exports_impl.sam_incoming_mixed_audio_event_args_get_audio_buffer === "function"){
            return sam_exports_impl.sam_incoming_mixed_audio_event_args_get_audio_buffer(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_mixed_audio_event_args_get_stream_properties: function (/* sam_incoming_mixed_audio_event_args_handle */ handle, /* sam_raw_incoming_audio_stream_properties_handle* */ result) {
        if (typeof sam_exports_impl.sam_incoming_mixed_audio_event_args_get_stream_properties === "function"){
            return sam_exports_impl.sam_incoming_mixed_audio_event_args_get_stream_properties(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_mixed_audio_event_args_release: function (/* sam_incoming_mixed_audio_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_mixed_audio_event_args_release === "function"){
            return sam_exports_impl.sam_incoming_mixed_audio_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_screen_share_statistics_addref: function (/* sam_incoming_screen_share_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_addref === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_bitrate_in_bps: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_bitrate_in_bps === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_bitrate_in_bps(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_bitrate_in_bps_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_bitrate_in_bps_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_bitrate_in_bps_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_codec_name: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_codec_name === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_codec_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_frame_height: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_height === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_frame_height_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_height_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_height_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_frame_rate: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_rate === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_rate(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_frame_rate_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_rate_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_rate_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_frame_width: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_width === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_frame_width_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_width_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_frame_width_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_jitter_in_ms: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_jitter_in_ms === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_jitter_in_ms(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_jitter_in_ms_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_jitter_in_ms_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_jitter_in_ms_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_packet_count: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_packet_count_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_packets_lost_per_second: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_packets_lost_per_second === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_packets_lost_per_second(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_packets_lost_per_second_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_packets_lost_per_second_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_packets_lost_per_second_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_participant_identifier_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_participant_identifier_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_participant_identifier_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_stream_id: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_stream_id === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_stream_id_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_stream_id_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_stream_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_total_freeze_duration_in_ms: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_total_freeze_duration_in_ms === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_total_freeze_duration_in_ms(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_screen_share_statistics_get_total_freeze_duration_in_ms_internal: function (/* sam_incoming_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_get_total_freeze_duration_in_ms_internal === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_get_total_freeze_duration_in_ms_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_screen_share_statistics_release: function (/* sam_incoming_screen_share_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_screen_share_statistics_release === "function"){
            return sam_exports_impl.sam_incoming_screen_share_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_addref: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_addref === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_get_audio_buffer: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle, /* sam_raw_audio_buffer_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_audio_buffer === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_audio_buffer(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_get_remote_participant_ids: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_flat: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_flat === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_internal: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_internal === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_internal_flat: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_internal_flat === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_remote_participant_ids_internal_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_get_stream_properties: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle, /* sam_raw_incoming_audio_stream_properties_handle* */ result) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_stream_properties === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_get_stream_properties(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_unmixed_audio_event_args_release: function (/* sam_incoming_unmixed_audio_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_unmixed_audio_event_args_release === "function"){
            return sam_exports_impl.sam_incoming_unmixed_audio_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_incoming_video_constraints_addref: function (/* sam_incoming_video_constraints_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_video_constraints_addref === "function"){
            return sam_exports_impl.sam_incoming_video_constraints_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_incoming_video_constraints_create: function (/* sam_incoming_video_constraints_handle* */ instance) {
        if (typeof sam_exports_impl.sam_incoming_video_constraints_create === "function"){
            return sam_exports_impl.sam_incoming_video_constraints_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_constraints_get_max_height: function (/* sam_incoming_video_constraints_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_constraints_get_max_height === "function"){
            return sam_exports_impl.sam_incoming_video_constraints_get_max_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_constraints_get_max_width: function (/* sam_incoming_video_constraints_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_constraints_get_max_width === "function"){
            return sam_exports_impl.sam_incoming_video_constraints_get_max_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_incoming_video_constraints_release: function (/* sam_incoming_video_constraints_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_video_constraints_release === "function"){
            return sam_exports_impl.sam_incoming_video_constraints_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_constraints_set_max_height: function (/* sam_incoming_video_constraints_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_incoming_video_constraints_set_max_height === "function"){
            return sam_exports_impl.sam_incoming_video_constraints_set_max_height(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_constraints_set_max_width: function (/* sam_incoming_video_constraints_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_incoming_video_constraints_set_max_width === "function"){
            return sam_exports_impl.sam_incoming_video_constraints_set_max_width(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_incoming_video_options_addref: function (/* sam_incoming_video_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_video_options_addref === "function"){
            return sam_exports_impl.sam_incoming_video_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_incoming_video_options_create: function (/* sam_incoming_video_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_incoming_video_options_create === "function"){
            return sam_exports_impl.sam_incoming_video_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_options_get_constraints: function (/* sam_incoming_video_options_handle */ handle, /* sam_incoming_video_constraints_handle* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_options_get_constraints === "function"){
            return sam_exports_impl.sam_incoming_video_options_get_constraints(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_options_get_frame_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_raw_video_frame_type* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_options_get_frame_type === "function"){
            return sam_exports_impl.sam_incoming_video_options_get_frame_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_options_get_stream_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_video_stream_type* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_options_get_stream_type === "function"){
            return sam_exports_impl.sam_incoming_video_options_get_stream_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_incoming_video_options_release: function (/* sam_incoming_video_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_video_options_release === "function"){
            return sam_exports_impl.sam_incoming_video_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_options_set_constraints: function (/* sam_incoming_video_options_handle */ handle, /* sam_incoming_video_constraints_handle */ value) {
        if (typeof sam_exports_impl.sam_incoming_video_options_set_constraints === "function"){
            return sam_exports_impl.sam_incoming_video_options_set_constraints(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_options_set_frame_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_raw_video_frame_type */ value) {
        if (typeof sam_exports_impl.sam_incoming_video_options_set_frame_type === "function"){
            return sam_exports_impl.sam_incoming_video_options_set_frame_type(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_options_set_stream_type: function (/* sam_incoming_video_options_handle */ handle, /* sam_video_stream_type */ value) {
        if (typeof sam_exports_impl.sam_incoming_video_options_set_stream_type === "function"){
            return sam_exports_impl.sam_incoming_video_options_set_stream_type(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_video_statistics_addref: function (/* sam_incoming_video_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_addref === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_bitrate_in_bps: function (/* sam_incoming_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_bitrate_in_bps === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_bitrate_in_bps(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_bitrate_in_bps_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_bitrate_in_bps_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_bitrate_in_bps_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_codec_name: function (/* sam_incoming_video_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_codec_name === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_codec_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_frame_height: function (/* sam_incoming_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_frame_height === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_frame_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_frame_height_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_frame_height_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_frame_height_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_frame_rate: function (/* sam_incoming_video_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_frame_rate === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_frame_rate(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_frame_rate_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_frame_rate_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_frame_rate_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_frame_width: function (/* sam_incoming_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_frame_width === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_frame_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_frame_width_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_frame_width_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_frame_width_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_jitter_in_ms: function (/* sam_incoming_video_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_jitter_in_ms === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_jitter_in_ms(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_jitter_in_ms_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_jitter_in_ms_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_jitter_in_ms_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_packet_count: function (/* sam_incoming_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_packet_count_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_packets_lost_per_second: function (/* sam_incoming_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_packets_lost_per_second === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_packets_lost_per_second(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_packets_lost_per_second_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_packets_lost_per_second_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_packets_lost_per_second_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_participant_identifier_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_participant_identifier_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_participant_identifier_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_stream_id: function (/* sam_incoming_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_stream_id === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_stream_id_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_stream_id_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_stream_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_total_freeze_duration_in_ms: function (/* sam_incoming_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_total_freeze_duration_in_ms === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_total_freeze_duration_in_ms(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_statistics_get_total_freeze_duration_in_ms_internal: function (/* sam_incoming_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_get_total_freeze_duration_in_ms_internal === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_get_total_freeze_duration_in_ms_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_incoming_video_statistics_release: function (/* sam_incoming_video_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_incoming_video_statistics_release === "function"){
            return sam_exports_impl.sam_incoming_video_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_incoming_video_stream_get_participant_source_id: function (/* sam_incoming_video_stream_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_incoming_video_stream_get_participant_source_id === "function"){
            return sam_exports_impl.sam_incoming_video_stream_get_participant_source_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_addref: function (/* sam_initialization_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_initialization_options_addref === "function"){
            return sam_exports_impl.sam_initialization_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_initialization_options_create: function (/* sam_initialization_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_initialization_options_create === "function"){
            return sam_exports_impl.sam_initialization_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_get_data_path: function (/* sam_initialization_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_initialization_options_get_data_path === "function"){
            return sam_exports_impl.sam_initialization_options_get_data_path(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_get_is_encrypted: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_initialization_options_get_is_encrypted === "function"){
            return sam_exports_impl.sam_initialization_options_get_is_encrypted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_get_log_file_name: function (/* sam_initialization_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_initialization_options_get_log_file_name === "function"){
            return sam_exports_impl.sam_initialization_options_get_log_file_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_get_stdout_logging: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_initialization_options_get_stdout_logging === "function"){
            return sam_exports_impl.sam_initialization_options_get_stdout_logging(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_release: function (/* sam_initialization_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_initialization_options_release === "function"){
            return sam_exports_impl.sam_initialization_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_set_data_path: function (/* sam_initialization_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_initialization_options_set_data_path === "function"){
            return sam_exports_impl.sam_initialization_options_set_data_path(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_set_is_encrypted: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_initialization_options_set_is_encrypted === "function"){
            return sam_exports_impl.sam_initialization_options_set_is_encrypted(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_set_log_file_name: function (/* sam_initialization_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_initialization_options_set_log_file_name === "function"){
            return sam_exports_impl.sam_initialization_options_set_log_file_name(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_initialization_options_set_stdout_logging: function (/* sam_initialization_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_initialization_options_set_stdout_logging === "function"){
            return sam_exports_impl.sam_initialization_options_set_stdout_logging(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_call_client_events_addref: function (/* sam_internal_call_client_events_handle */ handle) {
        if (typeof sam_exports_impl.sam_internal_call_client_events_addref === "function"){
            return sam_exports_impl.sam_internal_call_client_events_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_call_client_events_create: function (/* sam_internal_call_client_events_handle* */ instance) {
        if (typeof sam_exports_impl.sam_internal_call_client_events_create === "function"){
            return sam_exports_impl.sam_internal_call_client_events_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_call_client_events_release: function (/* sam_internal_call_client_events_handle */ handle) {
        if (typeof sam_exports_impl.sam_internal_call_client_events_release === "function"){
            return sam_exports_impl.sam_internal_call_client_events_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_call_client_events_set_on_call_agent_registered_identifier_changed: function (/* sam_internal_call_client_events_handle */ handle, /* sam_callback_cookie */ value, /* sam_internal_identifiers_list_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_internal_call_client_events_set_on_call_agent_registered_identifier_changed === "function"){
            return sam_exports_impl.sam_internal_call_client_events_set_on_call_agent_registered_identifier_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_registered_identifiers_changed_event_args_addref: function (/* sam_internal_registered_identifiers_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_registered_identifiers_changed_event_args_get_registered_identifiers: function (/* sam_internal_registered_identifiers_changed_event_args_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_get_registered_identifiers === "function"){
            return sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_get_registered_identifiers(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_registered_identifiers_changed_event_args_get_registered_identifiers_flat: function (/* sam_internal_registered_identifiers_changed_event_args_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_get_registered_identifiers_flat === "function"){
            return sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_get_registered_identifiers_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_registered_identifiers_changed_event_args_release: function (/* sam_internal_registered_identifiers_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_release === "function"){
            return sam_exports_impl.sam_internal_registered_identifiers_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_token_provider_addref: function (/* sam_internal_token_provider_handle */ handle) {
        if (typeof sam_exports_impl.sam_internal_token_provider_addref === "function"){
            return sam_exports_impl.sam_internal_token_provider_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Exclusively for Internal. Do not use publicly. Will be removed in the future.
    //
    /* sam_status */ sam_internal_token_provider_check_token_scope: function (/* sam_internal_token_provider_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_internal_token_provider_check_token_scope === "function"){
            return sam_exports_impl.sam_internal_token_provider_check_token_scope(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Exclusively for Internal. Do not use publicly. Will be removed in the future.
    //
    /* sam_status */ sam_internal_token_provider_create: function (/* sam_internal_token_provider_handle* */ instance) {
        if (typeof sam_exports_impl.sam_internal_token_provider_create === "function"){
            return sam_exports_impl.sam_internal_token_provider_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_token_provider_get_mri: function (/* sam_internal_token_provider_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_internal_token_provider_get_mri === "function"){
            return sam_exports_impl.sam_internal_token_provider_get_mri(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Exclusively for Internal. Do not use publicly. Will be removed in the future.
    //
    /* sam_status */ sam_internal_token_provider_parse_token: function (/* sam_internal_token_provider_handle */ handle, /* const char * */ token) {
        if (typeof sam_exports_impl.sam_internal_token_provider_parse_token === "function"){
            return sam_exports_impl.sam_internal_token_provider_parse_token(handle, token);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_token_provider_release: function (/* sam_internal_token_provider_handle */ handle) {
        if (typeof sam_exports_impl.sam_internal_token_provider_release === "function"){
            return sam_exports_impl.sam_internal_token_provider_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Exclusively for Internal. Do not use publicly. Will be removed in the future.
    //
    /* sam_status */ sam_internal_token_provider_set_error: function (/* sam_internal_token_provider_handle */ handle, /* const char * */ error) {
        if (typeof sam_exports_impl.sam_internal_token_provider_set_error === "function"){
            return sam_exports_impl.sam_internal_token_provider_set_error(handle, error);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_internal_token_provider_set_on_token_requested: function (/* sam_internal_token_provider_handle */ handle, /* sam_callback_cookie */ value, /* sam_token_requested_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_internal_token_provider_set_on_token_requested === "function"){
            return sam_exports_impl.sam_internal_token_provider_set_on_token_requested(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Exclusively for Internal. Do not use publicly. Will be removed in the future.
    //
    /* sam_status */ sam_internal_token_provider_set_token: function (/* sam_internal_token_provider_handle */ handle, /* const char * */ token, /* const char * */ account_identity, /* const char * * */ scopes, /* int */ scopes_count, /* const char * */ display_name, /* const char * */ resource_id, /* const char * */ country_code) {
        if (typeof sam_exports_impl.sam_internal_token_provider_set_token === "function"){
            return sam_exports_impl.sam_internal_token_provider_set_token(handle, token, account_identity, scopes, scopes_count, display_name, resource_id, country_code);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_join_call_options_create: function (/* sam_join_call_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_join_call_options_create === "function"){
            return sam_exports_impl.sam_join_call_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_join_call_options_get_audio_options: function (/* sam_join_call_options_handle */ handle, /* sam_audio_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_join_call_options_get_audio_options === "function"){
            return sam_exports_impl.sam_join_call_options_get_audio_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_join_call_options_get_video_options: function (/* sam_join_call_options_handle */ handle, /* sam_video_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_join_call_options_get_video_options === "function"){
            return sam_exports_impl.sam_join_call_options_get_video_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_join_call_options_set_audio_options: function (/* sam_join_call_options_handle */ handle, /* sam_audio_options_handle */ value) {
        if (typeof sam_exports_impl.sam_join_call_options_set_audio_options === "function"){
            return sam_exports_impl.sam_join_call_options_set_audio_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_join_call_options_set_video_options: function (/* sam_join_call_options_handle */ handle, /* sam_video_options_handle */ value) {
        if (typeof sam_exports_impl.sam_join_call_options_set_video_options === "function"){
            return sam_exports_impl.sam_join_call_options_set_video_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_join_meeting_locator_addref: function (/* sam_join_meeting_locator_handle */ handle) {
        if (typeof sam_exports_impl.sam_join_meeting_locator_addref === "function"){
            return sam_exports_impl.sam_join_meeting_locator_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_join_meeting_locator_release: function (/* sam_join_meeting_locator_handle */ handle) {
        if (typeof sam_exports_impl.sam_join_meeting_locator_release === "function"){
            return sam_exports_impl.sam_join_meeting_locator_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_jwt_token_parser_addref: function (/* sam_jwt_token_parser_handle */ handle) {
        if (typeof sam_exports_impl.sam_jwt_token_parser_addref === "function"){
            return sam_exports_impl.sam_jwt_token_parser_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_jwt_token_parser_create: function (/* sam_jwt_token_parser_handle* */ instance) {
        if (typeof sam_exports_impl.sam_jwt_token_parser_create === "function"){
            return sam_exports_impl.sam_jwt_token_parser_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_jwt_token_parser_create_call_token: function (/* const char * */ token, /* sam_call_token_handle* */ result) {
        if (typeof sam_exports_impl.sam_jwt_token_parser_create_call_token === "function"){
            return sam_exports_impl.sam_jwt_token_parser_create_call_token(token, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_jwt_token_parser_release: function (/* sam_jwt_token_parser_handle */ handle) {
        if (typeof sam_exports_impl.sam_jwt_token_parser_release === "function"){
            return sam_exports_impl.sam_jwt_token_parser_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_live_outgoing_audio_filters_addref: function (/* sam_live_outgoing_audio_filters_handle */ handle) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_addref === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_live_outgoing_audio_filters_get_acoustic_echo_cancellation_enabled: function (/* sam_live_outgoing_audio_filters_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_get_acoustic_echo_cancellation_enabled === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_get_acoustic_echo_cancellation_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_live_outgoing_audio_filters_get_music_mode_enabled: function (/* sam_live_outgoing_audio_filters_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_get_music_mode_enabled === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_get_music_mode_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_live_outgoing_audio_filters_get_noise_suppression_mode: function (/* sam_live_outgoing_audio_filters_handle */ handle, /* sam_noise_suppression_mode* */ result) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_get_noise_suppression_mode === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_get_noise_suppression_mode(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_live_outgoing_audio_filters_release: function (/* sam_live_outgoing_audio_filters_handle */ handle) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_release === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_live_outgoing_audio_filters_set_acoustic_echo_cancellation_enabled: function (/* sam_live_outgoing_audio_filters_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_set_acoustic_echo_cancellation_enabled === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_set_acoustic_echo_cancellation_enabled(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_live_outgoing_audio_filters_set_music_mode_enabled: function (/* sam_live_outgoing_audio_filters_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_set_music_mode_enabled === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_set_music_mode_enabled(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_live_outgoing_audio_filters_set_noise_suppression_mode: function (/* sam_live_outgoing_audio_filters_handle */ handle, /* sam_noise_suppression_mode */ value) {
        if (typeof sam_exports_impl.sam_live_outgoing_audio_filters_set_noise_suppression_mode === "function"){
            return sam_exports_impl.sam_live_outgoing_audio_filters_set_noise_suppression_mode(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_local_outgoing_audio_stream_create: function (/* sam_local_outgoing_audio_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_local_outgoing_audio_stream_create === "function"){
            return sam_exports_impl.sam_local_outgoing_audio_stream_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_outgoing_audio_stream_set_on_state_changed: function (/* sam_local_outgoing_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_outgoing_audio_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_local_outgoing_audio_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_user_diagnostics_call_feature_get_media_diagnostics: function (/* sam_local_user_diagnostics_call_feature_handle */ handle, /* sam_media_diagnostics_handle* */ result) {
        if (typeof sam_exports_impl.sam_local_user_diagnostics_call_feature_get_media_diagnostics === "function"){
            return sam_exports_impl.sam_local_user_diagnostics_call_feature_get_media_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_user_diagnostics_call_feature_get_network_diagnostics: function (/* sam_local_user_diagnostics_call_feature_handle */ handle, /* sam_network_diagnostics_handle* */ result) {
        if (typeof sam_exports_impl.sam_local_user_diagnostics_call_feature_get_network_diagnostics === "function"){
            return sam_exports_impl.sam_local_user_diagnostics_call_feature_get_network_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Disable an enabled video effect.
    //
    /* sam_status */ sam_local_video_effects_feature_disable_effect: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_video_effect_handle */ effect) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_disable_effect === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_disable_effect(handle, effect);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Enables a video effect.
    // Video effect to start
    /* sam_status */ sam_local_video_effects_feature_enable_effect: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_video_effect_handle */ effect) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_enable_effect === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_enable_effect(handle, effect);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Checks if a video effect is supported on the device.
    // Video effect to check if supported
    /* sam_status */ sam_local_video_effects_feature_is_effect_supported: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_video_effect_handle */ effect, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_is_effect_supported === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_is_effect_supported(handle, effect, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_effects_feature_set_on_video_effect_disabled: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_effect_disabled_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_set_on_video_effect_disabled === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_set_on_video_effect_disabled(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_effects_feature_set_on_video_effect_enabled: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_effect_enabled_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_set_on_video_effect_enabled === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_set_on_video_effect_enabled(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_effects_feature_set_on_video_effect_error: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_effect_error_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_set_on_video_effect_error === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_set_on_video_effect_error(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_effects_feature_set_video_effect_disabled: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_effect_disabled_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_set_video_effect_disabled === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_set_video_effect_disabled(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_effects_feature_set_video_effect_enabled: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_effect_enabled_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_set_video_effect_enabled === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_set_video_effect_enabled(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_effects_feature_set_video_effect_error: function (/* sam_local_video_effects_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_effect_error_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_effects_feature_set_video_effect_error === "function"){
            return sam_exports_impl.sam_local_video_effects_feature_set_video_effect_error(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a camera device parameter
    //
    /* sam_status */ sam_local_video_stream_create_video_device_info_camera: function (/* sam_video_device_info_handle */ camera, /* sam_local_video_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_local_video_stream_create_video_device_info_camera === "function"){
            return sam_exports_impl.sam_local_video_stream_create_video_device_info_camera(camera, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a camera device and context parameter
    //
    /* sam_status */ sam_local_video_stream_create_video_device_info_camera_context_context: function (/* sam_video_device_info_handle */ camera, /* sam_context_handle */ context, /* sam_local_video_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_local_video_stream_create_video_device_info_camera_context_context === "function"){
            return sam_exports_impl.sam_local_video_stream_create_video_device_info_camera_context_context(camera, context, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_feature_addref: function (/* sam_local_video_stream_feature_handle */ handle) {
        if (typeof sam_exports_impl.sam_local_video_stream_feature_addref === "function"){
            return sam_exports_impl.sam_local_video_stream_feature_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_feature_get_name: function (/* sam_local_video_stream_feature_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_feature_get_name === "function"){
            return sam_exports_impl.sam_local_video_stream_feature_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_feature_release: function (/* sam_local_video_stream_feature_handle */ handle) {
        if (typeof sam_exports_impl.sam_local_video_stream_feature_release === "function"){
            return sam_exports_impl.sam_local_video_stream_feature_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_local_video_stream_features_addref: function (/* sam_local_video_stream_features_handle */ handle) {
        if (typeof sam_exports_impl.sam_local_video_stream_features_addref === "function"){
            return sam_exports_impl.sam_local_video_stream_features_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_features_get_video_effects: function (/* sam_local_video_stream_features_handle */ handle, /* sam_local_video_effects_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_features_get_video_effects === "function"){
            return sam_exports_impl.sam_local_video_stream_features_get_video_effects(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_local_video_stream_features_release: function (/* sam_local_video_stream_features_handle */ handle) {
        if (typeof sam_exports_impl.sam_local_video_stream_features_release === "function"){
            return sam_exports_impl.sam_local_video_stream_features_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_get_features: function (/* sam_local_video_stream_handle */ handle, /* sam_local_video_stream_features_handle* */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_get_features === "function"){
            return sam_exports_impl.sam_local_video_stream_get_features(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_get_is_sending: function (/* sam_local_video_stream_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_get_is_sending === "function"){
            return sam_exports_impl.sam_local_video_stream_get_is_sending(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_get_local_video_effects_feature: function (/* sam_local_video_stream_handle */ handle, /* sam_local_video_stream_feature_handle* */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_get_local_video_effects_feature === "function"){
            return sam_exports_impl.sam_local_video_stream_get_local_video_effects_feature(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_get_preview_id_internal: function (/* sam_local_video_stream_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_get_preview_id_internal === "function"){
            return sam_exports_impl.sam_local_video_stream_get_preview_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_get_source: function (/* sam_local_video_stream_handle */ handle, /* sam_video_device_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_get_source === "function"){
            return sam_exports_impl.sam_local_video_stream_get_source(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_register_view: function (/* sam_local_video_stream_handle */ handle, /* sam_uiview_handle */ view) {
        if (typeof sam_exports_impl.sam_local_video_stream_register_view === "function"){
            return sam_exports_impl.sam_local_video_stream_register_view(handle, view);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_set_on_binding_event_state_changed: function (/* sam_local_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_binding_event_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_stream_set_on_binding_event_state_changed === "function"){
            return sam_exports_impl.sam_local_video_stream_set_on_binding_event_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_set_on_device_info_updated: function (/* sam_local_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_device_info_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_stream_set_on_device_info_updated === "function"){
            return sam_exports_impl.sam_local_video_stream_set_on_device_info_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_set_on_frame_size_changed: function (/* sam_local_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_frame_size_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_stream_set_on_frame_size_changed === "function"){
            return sam_exports_impl.sam_local_video_stream_set_on_frame_size_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_set_on_state_changed: function (/* sam_local_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_local_video_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_local_video_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_start_preview_native: function (/* sam_local_video_stream_handle */ handle, /* const char * */ renderer_id) {
        if (typeof sam_exports_impl.sam_local_video_stream_start_preview_native === "function"){
            return sam_exports_impl.sam_local_video_stream_start_preview_native(handle, renderer_id);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates and attach the video binding event to the underlying video
    //
    /* sam_status */ sam_local_video_stream_start_preview_native_windows: function (/* sam_local_video_stream_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_local_video_stream_start_preview_native_windows === "function"){
            return sam_exports_impl.sam_local_video_stream_start_preview_native_windows(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Detach the video binding event to the underlying video
    //
    /* sam_status */ sam_local_video_stream_stop_preview_native: function (/* sam_local_video_stream_handle */ handle, /* const char * */ renderer_id) {
        if (typeof sam_exports_impl.sam_local_video_stream_stop_preview_native === "function"){
            return sam_exports_impl.sam_local_video_stream_stop_preview_native(handle, renderer_id);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Calls SwitchVideoDeviceInfo and RestartVideo while release the current video binding and creates a new one
    //
    /* sam_status */ sam_local_video_stream_switch_source_internal: function (/* sam_local_video_stream_handle */ handle, /* sam_video_device_info_handle */ video_device, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_local_video_stream_switch_source_internal === "function"){
            return sam_exports_impl.sam_local_video_stream_switch_source_internal(handle, video_device, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set a new video source
    //
    /* sam_status */ sam_local_video_stream_switch_video_device_info: function (/* sam_local_video_stream_handle */ handle, /* sam_video_device_info_handle */ video_device_info) {
        if (typeof sam_exports_impl.sam_local_video_stream_switch_video_device_info === "function"){
            return sam_exports_impl.sam_local_video_stream_switch_video_device_info(handle, video_device_info);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set a new video source
    //
    /* sam_status */ sam_local_video_stream_switch_video_device_info_native: function (/* sam_local_video_stream_handle */ handle, /* const char * */ renderer_id, /* sam_video_device_info_handle */ video_device_info) {
        if (typeof sam_exports_impl.sam_local_video_stream_switch_video_device_info_native === "function"){
            return sam_exports_impl.sam_local_video_stream_switch_video_device_info_native(handle, renderer_id, video_device_info);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_stream_unregister_view: function (/* sam_local_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_local_video_stream_unregister_view === "function"){
            return sam_exports_impl.sam_local_video_stream_unregister_view(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_streams_updated_event_args_addref: function (/* sam_local_video_streams_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_local_video_streams_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_local_video_streams_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_streams_updated_event_args_get_added_streams: function (/* sam_local_video_streams_updated_event_args_handle */ handle, /* sam_local_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_local_video_streams_updated_event_args_get_added_streams === "function"){
            return sam_exports_impl.sam_local_video_streams_updated_event_args_get_added_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_streams_updated_event_args_get_removed_streams: function (/* sam_local_video_streams_updated_event_args_handle */ handle, /* sam_local_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_local_video_streams_updated_event_args_get_removed_streams === "function"){
            return sam_exports_impl.sam_local_video_streams_updated_event_args_get_removed_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_local_video_streams_updated_event_args_release: function (/* sam_local_video_streams_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_local_video_streams_updated_event_args_release === "function"){
            return sam_exports_impl.sam_local_video_streams_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_lowered_hand_changed_event_args_addref: function (/* sam_lowered_hand_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_lowered_hand_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_lowered_hand_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_lowered_hand_changed_event_args_get_participant: function (/* sam_lowered_hand_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_lowered_hand_changed_event_args_get_participant === "function"){
            return sam_exports_impl.sam_lowered_hand_changed_event_args_get_participant(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_lowered_hand_changed_event_args_release: function (/* sam_lowered_hand_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_lowered_hand_changed_event_args_release === "function"){
            return sam_exports_impl.sam_lowered_hand_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_addref: function (/* sam_media_diagnostic_values_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_addref === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_camera_frozen: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_camera_frozen === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_camera_frozen(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_camera_permission_denied: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_camera_permission_denied === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_camera_permission_denied(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_camera_start_failed: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_camera_start_failed === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_camera_start_failed(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_camera_start_timed_out: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_camera_start_timed_out === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_camera_start_timed_out(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_microphone_busy: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_microphone_busy === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_microphone_busy(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_microphone_muted_unexpectedly: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_microphone_muted_unexpectedly === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_microphone_muted_unexpectedly(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_microphone_not_functioning: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_microphone_not_functioning === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_microphone_not_functioning(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_no_microphone_devices_available: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_no_microphone_devices_available === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_no_microphone_devices_available(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_no_speaker_devices_available: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_no_speaker_devices_available === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_no_speaker_devices_available(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_speaker_busy: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_busy === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_busy(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_speaker_muted: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_muted === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_speaker_not_functioning: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_not_functioning === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_not_functioning(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_speaker_volume_zero: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_volume_zero === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_speaker_volume_zero(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_is_speaking_while_microphone_is_muted: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_is_speaking_while_microphone_is_muted === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_is_speaking_while_microphone_is_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_get_last_updated_at: function (/* sam_media_diagnostic_values_handle */ handle, /* int64_t* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_last_updated_at === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_last_updated_at(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Internal facility for getting the diagnostics value.
    //
    /* sam_status */ sam_media_diagnostic_values_get_value_internal: function (/* sam_media_diagnostic_values_handle */ handle, /* sam_media_diagnostic_type */ diagnostic, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_get_value_internal === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_get_value_internal(handle, diagnostic, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostic_values_release: function (/* sam_media_diagnostic_values_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_diagnostic_values_release === "function"){
            return sam_exports_impl.sam_media_diagnostic_values_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_addref: function (/* sam_media_diagnostics_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_diagnostics_addref === "function"){
            return sam_exports_impl.sam_media_diagnostics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_get_latest: function (/* sam_media_diagnostics_handle */ handle, /* sam_media_diagnostic_values_handle* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostics_get_latest === "function"){
            return sam_exports_impl.sam_media_diagnostics_get_latest(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stored latest values for all known media diagnostics.
    //
    /* sam_status */ sam_media_diagnostics_get_latest_diagnostics: function (/* sam_media_diagnostics_handle */ handle, /* sam_media_diagnostic_values_handle* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostics_get_latest_diagnostics === "function"){
            return sam_exports_impl.sam_media_diagnostics_get_latest_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_get_latest_internal: function (/* sam_media_diagnostics_handle */ handle, /* sam_media_diagnostic_values_handle* */ result) {
        if (typeof sam_exports_impl.sam_media_diagnostics_get_latest_internal === "function"){
            return sam_exports_impl.sam_media_diagnostics_get_latest_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_release: function (/* sam_media_diagnostics_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_diagnostics_release === "function"){
            return sam_exports_impl.sam_media_diagnostics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_camera_frozen_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_camera_frozen_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_camera_frozen_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_camera_permission_denied_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_camera_permission_denied_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_camera_permission_denied_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_camera_start_failed_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_camera_start_failed_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_camera_start_failed_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_camera_start_timed_out_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_camera_start_timed_out_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_camera_start_timed_out_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_microphone_busy_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_microphone_busy_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_microphone_busy_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_microphone_muted_unexpectedly_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_microphone_muted_unexpectedly_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_microphone_muted_unexpectedly_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_microphone_not_functioning_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_microphone_not_functioning_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_microphone_not_functioning_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_no_microphone_devices_available_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_no_microphone_devices_available_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_no_microphone_devices_available_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_no_speaker_devices_available_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_no_speaker_devices_available_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_no_speaker_devices_available_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_camera_frozen_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_camera_frozen_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_camera_frozen_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_camera_permission_denied_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_camera_permission_denied_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_camera_permission_denied_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_camera_start_failed_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_camera_start_failed_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_camera_start_failed_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_camera_start_timed_out_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_camera_start_timed_out_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_camera_start_timed_out_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_microphone_busy_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_microphone_busy_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_microphone_busy_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_microphone_muted_unexpectedly_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_microphone_muted_unexpectedly_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_microphone_muted_unexpectedly_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_microphone_not_functioning_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_microphone_not_functioning_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_microphone_not_functioning_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_no_microphone_devices_available_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_no_microphone_devices_available_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_no_microphone_devices_available_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_no_speaker_devices_available_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_no_speaker_devices_available_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_no_speaker_devices_available_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_speaker_busy_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_busy_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_busy_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_speaker_muted_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_muted_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_muted_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_speaker_not_functioning_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_not_functioning_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_not_functioning_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_speaker_volume_zero_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_volume_zero_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_speaker_volume_zero_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_on_is_speaking_while_microphone_is_muted_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_on_is_speaking_while_microphone_is_muted_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_on_is_speaking_while_microphone_is_muted_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_speaker_busy_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_speaker_busy_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_speaker_busy_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_speaker_muted_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_speaker_muted_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_speaker_muted_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_speaker_not_functioning_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_speaker_not_functioning_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_speaker_not_functioning_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_speaker_volume_zero_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_speaker_volume_zero_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_speaker_volume_zero_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_diagnostics_set_speaking_while_microphone_is_muted_changed: function (/* sam_media_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_diagnostics_set_speaking_while_microphone_is_muted_changed === "function"){
            return sam_exports_impl.sam_media_diagnostics_set_speaking_while_microphone_is_muted_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_call_feature_get_report_interval_in_seconds: function (/* sam_media_statistics_call_feature_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_media_statistics_call_feature_get_report_interval_in_seconds === "function"){
            return sam_exports_impl.sam_media_statistics_call_feature_get_report_interval_in_seconds(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_call_feature_set_on_report_received: function (/* sam_media_statistics_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_media_statistics_report_received_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_media_statistics_call_feature_set_on_report_received === "function"){
            return sam_exports_impl.sam_media_statistics_call_feature_set_on_report_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_call_feature_set_report_received: function (/* sam_media_statistics_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_media_statistics_report_received_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_media_statistics_call_feature_set_report_received === "function"){
            return sam_exports_impl.sam_media_statistics_call_feature_set_report_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Updates how often Media Statistics information reports are informed to the
    // callback (min 10 seconds and max 3600 seconds)
    //
    /* sam_status */ sam_media_statistics_call_feature_update_report_interval_in_seconds: function (/* sam_media_statistics_call_feature_handle */ handle, /* int */ report_interval_in_seconds) {
        if (typeof sam_exports_impl.sam_media_statistics_call_feature_update_report_interval_in_seconds === "function"){
            return sam_exports_impl.sam_media_statistics_call_feature_update_report_interval_in_seconds(handle, report_interval_in_seconds);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_media_statistics_report_addref: function (/* sam_media_statistics_report_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_statistics_report_addref === "function"){
            return sam_exports_impl.sam_media_statistics_report_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_report_get_incoming_statistics: function (/* sam_media_statistics_report_handle */ handle, /* sam_incoming_media_statistics_handle* */ result) {
        if (typeof sam_exports_impl.sam_media_statistics_report_get_incoming_statistics === "function"){
            return sam_exports_impl.sam_media_statistics_report_get_incoming_statistics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_report_get_last_updated_at: function (/* sam_media_statistics_report_handle */ handle, /* int64_t* */ result) {
        if (typeof sam_exports_impl.sam_media_statistics_report_get_last_updated_at === "function"){
            return sam_exports_impl.sam_media_statistics_report_get_last_updated_at(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_report_get_outgoing_statistics: function (/* sam_media_statistics_report_handle */ handle, /* sam_outgoing_media_statistics_handle* */ result) {
        if (typeof sam_exports_impl.sam_media_statistics_report_get_outgoing_statistics === "function"){
            return sam_exports_impl.sam_media_statistics_report_get_outgoing_statistics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_report_received_event_args_addref: function (/* sam_media_statistics_report_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_statistics_report_received_event_args_addref === "function"){
            return sam_exports_impl.sam_media_statistics_report_received_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_report_received_event_args_get_report: function (/* sam_media_statistics_report_received_event_args_handle */ handle, /* sam_media_statistics_report_handle* */ result) {
        if (typeof sam_exports_impl.sam_media_statistics_report_received_event_args_get_report === "function"){
            return sam_exports_impl.sam_media_statistics_report_received_event_args_get_report(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_media_statistics_report_received_event_args_release: function (/* sam_media_statistics_report_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_statistics_report_received_event_args_release === "function"){
            return sam_exports_impl.sam_media_statistics_report_received_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_media_statistics_report_release: function (/* sam_media_statistics_report_handle */ handle) {
        if (typeof sam_exports_impl.sam_media_statistics_report_release === "function"){
            return sam_exports_impl.sam_media_statistics_report_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates an instance of Azure.Communication.Calling.MicrosoftTeamsUserCallIdentifier
    /* sam_status */ sam_microsoft_teams_user_call_identifier_create_string_user_id: function (/* const char * */ user_id, /* sam_microsoft_teams_user_call_identifier_handle* */ instance) {
        if (typeof sam_exports_impl.sam_microsoft_teams_user_call_identifier_create_string_user_id === "function"){
            return sam_exports_impl.sam_microsoft_teams_user_call_identifier_create_string_user_id(user_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a MicrosoftTeamsUserCallIdentifier object
    //
    /* sam_status */ sam_microsoft_teams_user_call_identifier_create_string_user_id_boolean_is_anonymous: function (/* const char * */ user_id, /* sam_bool_u8 */ is_anonymous, /* sam_microsoft_teams_user_call_identifier_handle* */ instance) {
        if (typeof sam_exports_impl.sam_microsoft_teams_user_call_identifier_create_string_user_id_boolean_is_anonymous === "function"){
            return sam_exports_impl.sam_microsoft_teams_user_call_identifier_create_string_user_id_boolean_is_anonymous(user_id, is_anonymous, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_microsoft_teams_user_call_identifier_get_cloud_environment: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* sam_call_cloud_environment* */ result) {
        if (typeof sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_cloud_environment === "function"){
            return sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_cloud_environment(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_microsoft_teams_user_call_identifier_get_is_anonymous: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_is_anonymous === "function"){
            return sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_is_anonymous(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_microsoft_teams_user_call_identifier_get_user_id: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_user_id === "function"){
            return sam_exports_impl.sam_microsoft_teams_user_call_identifier_get_user_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_microsoft_teams_user_call_identifier_set_cloud_environment: function (/* sam_microsoft_teams_user_call_identifier_handle */ handle, /* sam_call_cloud_environment */ value) {
        if (typeof sam_exports_impl.sam_microsoft_teams_user_call_identifier_set_cloud_environment === "function"){
            return sam_exports_impl.sam_microsoft_teams_user_call_identifier_set_cloud_environment(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_native_buffer_addref: function (/* sam_native_buffer_handle */ handle) {
        if (typeof sam_exports_impl.sam_native_buffer_addref === "function"){
            return sam_exports_impl.sam_native_buffer_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Create a new NativeBuffer with an unmanaged byte array of a particular size.
    //
    /* sam_status */ sam_native_buffer_create_int32_size: function (/* int */ size, /* sam_native_buffer_handle* */ instance) {
        if (typeof sam_exports_impl.sam_native_buffer_create_int32_size === "function"){
            return sam_exports_impl.sam_native_buffer_create_int32_size(size, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Dispose method for cleaning up resources
    //
    /* sam_status */ sam_native_buffer_dispose: function (/* sam_native_buffer_handle */ handle) {
        if (typeof sam_exports_impl.sam_native_buffer_dispose === "function"){
            return sam_exports_impl.sam_native_buffer_dispose(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Get the unmanaged memory pointer for the byte array backing this NativeBuffer object.
    //
    /* sam_status */ sam_native_buffer_get_data: function (/* sam_native_buffer_handle */ handle, /* void ** */ bytes, /* int* */ size) {
        if (typeof sam_exports_impl.sam_native_buffer_get_data === "function"){
            return sam_exports_impl.sam_native_buffer_get_data(handle, bytes, size);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_native_buffer_get_length: function (/* sam_native_buffer_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_native_buffer_get_length === "function"){
            return sam_exports_impl.sam_native_buffer_get_length(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_native_buffer_release: function (/* sam_native_buffer_handle */ handle) {
        if (typeof sam_exports_impl.sam_native_buffer_release === "function"){
            return sam_exports_impl.sam_native_buffer_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Copies byte data from an unmanaged memory pointer to this NativeBuffer object.
    //
    /* sam_status */ sam_native_buffer_write_data_int_ptr_source_array_int32_source_index_int32_destination_index_int32_length: function (/* sam_native_buffer_handle */ handle, /* void * */ source_array, /* int */ source_index, /* int */ destination_index, /* int */ length) {
        if (typeof sam_exports_impl.sam_native_buffer_write_data_int_ptr_source_array_int32_source_index_int32_destination_index_int32_length === "function"){
            return sam_exports_impl.sam_native_buffer_write_data_int_ptr_source_array_int32_source_index_int32_destination_index_int32_length(handle, source_array, source_index, destination_index, length);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Copies byte data from an array to this NativeBuffer object.
    //
    /* sam_status */ sam_native_buffer_write_data_source_array_int32_source_index_int32_destination_index_int32_length: function (/* sam_native_buffer_handle */ handle, /* sam_u8 * */ source_array, /* int */ source_array_count, /* int */ source_index, /* int */ destination_index, /* int */ length) {
        if (typeof sam_exports_impl.sam_native_buffer_write_data_source_array_int32_source_index_int32_destination_index_int32_length === "function"){
            return sam_exports_impl.sam_native_buffer_write_data_source_array_int32_source_index_int32_destination_index_int32_length(handle, source_array, source_array_count, source_index, destination_index, length);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_addref: function (/* sam_network_diagnostic_values_handle */ handle) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_addref === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Internal facility for getting the latest boolean diagnostic value.
    //
    /* sam_status */ sam_network_diagnostic_values_get_bool_value_internal: function (/* sam_network_diagnostic_values_handle */ handle, /* sam_network_diagnostic_type */ diagnostic, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_bool_value_internal === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_bool_value_internal(handle, diagnostic, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_get_is_network_relays_unreachable: function (/* sam_network_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_is_network_relays_unreachable === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_is_network_relays_unreachable(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_get_is_network_unavailable: function (/* sam_network_diagnostic_values_handle */ handle, /* sam_bool_u8_nullable* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_is_network_unavailable === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_is_network_unavailable(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_get_last_updated_at: function (/* sam_network_diagnostic_values_handle */ handle, /* int64_t* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_last_updated_at === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_last_updated_at(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_get_network_receive_quality: function (/* sam_network_diagnostic_values_handle */ handle, /* sam_diagnostic_quality_nullable* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_network_receive_quality === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_network_receive_quality(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_get_network_reconnection_quality: function (/* sam_network_diagnostic_values_handle */ handle, /* sam_diagnostic_quality_nullable* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_network_reconnection_quality === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_network_reconnection_quality(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_get_network_send_quality: function (/* sam_network_diagnostic_values_handle */ handle, /* sam_diagnostic_quality_nullable* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_network_send_quality === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_network_send_quality(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Internal facility for getting the latest quality diagnostic value.
    //
    /* sam_status */ sam_network_diagnostic_values_get_quality_value_internal: function (/* sam_network_diagnostic_values_handle */ handle, /* sam_network_diagnostic_type */ diagnostic, /* sam_diagnostic_quality* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_get_quality_value_internal === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_get_quality_value_internal(handle, diagnostic, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostic_values_release: function (/* sam_network_diagnostic_values_handle */ handle) {
        if (typeof sam_exports_impl.sam_network_diagnostic_values_release === "function"){
            return sam_exports_impl.sam_network_diagnostic_values_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_addref: function (/* sam_network_diagnostics_handle */ handle) {
        if (typeof sam_exports_impl.sam_network_diagnostics_addref === "function"){
            return sam_exports_impl.sam_network_diagnostics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_get_latest: function (/* sam_network_diagnostics_handle */ handle, /* sam_network_diagnostic_values_handle* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostics_get_latest === "function"){
            return sam_exports_impl.sam_network_diagnostics_get_latest(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stored latest values for all known network diagnostics.
    //
    /* sam_status */ sam_network_diagnostics_get_latest_diagnostics: function (/* sam_network_diagnostics_handle */ handle, /* sam_network_diagnostic_values_handle* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostics_get_latest_diagnostics === "function"){
            return sam_exports_impl.sam_network_diagnostics_get_latest_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_get_latest_internal: function (/* sam_network_diagnostics_handle */ handle, /* sam_network_diagnostic_values_handle* */ result) {
        if (typeof sam_exports_impl.sam_network_diagnostics_get_latest_internal === "function"){
            return sam_exports_impl.sam_network_diagnostics_get_latest_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_release: function (/* sam_network_diagnostics_handle */ handle) {
        if (typeof sam_exports_impl.sam_network_diagnostics_release === "function"){
            return sam_exports_impl.sam_network_diagnostics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_network_receive_quality_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_quality_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_network_receive_quality_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_network_receive_quality_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_network_reconnection_quality_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_quality_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_network_reconnection_quality_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_network_reconnection_quality_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_network_relays_unreachable_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_network_relays_unreachable_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_network_relays_unreachable_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_network_send_quality_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_quality_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_network_send_quality_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_network_send_quality_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_network_unavailable_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_network_unavailable_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_network_unavailable_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_on_is_network_relays_unreachable_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_on_is_network_relays_unreachable_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_on_is_network_relays_unreachable_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_on_is_network_unavailable_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_flag_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_on_is_network_unavailable_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_on_is_network_unavailable_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_on_network_receive_quality_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_quality_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_on_network_receive_quality_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_on_network_receive_quality_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_on_network_reconnection_quality_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_quality_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_on_network_reconnection_quality_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_on_network_reconnection_quality_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_network_diagnostics_set_on_network_send_quality_changed: function (/* sam_network_diagnostics_handle */ handle, /* sam_callback_cookie */ value, /* sam_diagnostic_quality_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_network_diagnostics_set_on_network_send_quality_changed === "function"){
            return sam_exports_impl.sam_network_diagnostics_set_on_network_send_quality_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_outgoing_audio_filters_addref: function (/* sam_outgoing_audio_filters_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_addref === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_outgoing_audio_filters_create: function (/* sam_outgoing_audio_filters_handle* */ instance) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_create === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_get_acoustic_echo_cancellation_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_get_acoustic_echo_cancellation_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_get_acoustic_echo_cancellation_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_get_analog_automatic_gain_control_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_get_analog_automatic_gain_control_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_get_analog_automatic_gain_control_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_get_digital_automatic_gain_control_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_get_digital_automatic_gain_control_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_get_digital_automatic_gain_control_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_get_music_mode_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_get_music_mode_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_get_music_mode_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_get_noise_suppression_mode: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_noise_suppression_mode* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_get_noise_suppression_mode === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_get_noise_suppression_mode(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_outgoing_audio_filters_release: function (/* sam_outgoing_audio_filters_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_release === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_set_acoustic_echo_cancellation_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_set_acoustic_echo_cancellation_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_set_acoustic_echo_cancellation_enabled(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_set_analog_automatic_gain_control_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_set_analog_automatic_gain_control_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_set_analog_automatic_gain_control_enabled(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_set_digital_automatic_gain_control_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_set_digital_automatic_gain_control_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_set_digital_automatic_gain_control_enabled(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_set_music_mode_enabled: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_set_music_mode_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_set_music_mode_enabled(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_filters_set_noise_suppression_mode: function (/* sam_outgoing_audio_filters_handle */ handle, /* sam_noise_suppression_mode */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_filters_set_noise_suppression_mode === "function"){
            return sam_exports_impl.sam_outgoing_audio_filters_set_noise_suppression_mode(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_addref: function (/* sam_outgoing_audio_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_addref === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_outgoing_audio_options_create: function (/* sam_outgoing_audio_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_create === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_get_communication_audio_mode_enabled: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_get_communication_audio_mode_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_get_communication_audio_mode_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_get_filters: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_filters_handle* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_get_filters === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_get_filters(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_get_is_muted: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_get_is_muted === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_get_is_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_get_muted: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_get_muted === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_get_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_get_stream: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_stream_handle* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_get_stream === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_get_stream(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_release: function (/* sam_outgoing_audio_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_release === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_set_communication_audio_mode_enabled: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_set_communication_audio_mode_enabled === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_set_communication_audio_mode_enabled(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_set_filters: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_filters_handle */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_set_filters === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_set_filters(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_set_is_muted: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_set_is_muted === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_set_is_muted(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_set_muted: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_set_muted === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_set_muted(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_options_set_stream: function (/* sam_outgoing_audio_options_handle */ handle, /* sam_outgoing_audio_stream_handle */ value) {
        if (typeof sam_exports_impl.sam_outgoing_audio_options_set_stream === "function"){
            return sam_exports_impl.sam_outgoing_audio_options_set_stream(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_audio_statistics_addref: function (/* sam_outgoing_audio_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_addref === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_bitrate_in_bps: function (/* sam_outgoing_audio_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_bitrate_in_bps === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_bitrate_in_bps(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_bitrate_in_bps_internal: function (/* sam_outgoing_audio_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_bitrate_in_bps_internal === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_bitrate_in_bps_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_codec_name: function (/* sam_outgoing_audio_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_codec_name === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_codec_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_jitter_in_ms: function (/* sam_outgoing_audio_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_jitter_in_ms === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_jitter_in_ms(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_jitter_in_ms_internal: function (/* sam_outgoing_audio_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_jitter_in_ms_internal === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_jitter_in_ms_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_packet_count: function (/* sam_outgoing_audio_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_packet_count_internal: function (/* sam_outgoing_audio_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_stream_id: function (/* sam_outgoing_audio_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_stream_id === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_audio_statistics_get_stream_id_internal: function (/* sam_outgoing_audio_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_get_stream_id_internal === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_get_stream_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_audio_statistics_release: function (/* sam_outgoing_audio_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_audio_statistics_release === "function"){
            return sam_exports_impl.sam_outgoing_audio_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_data_channel_statistics_addref: function (/* sam_outgoing_data_channel_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_data_channel_statistics_addref === "function"){
            return sam_exports_impl.sam_outgoing_data_channel_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_data_channel_statistics_get_packet_count: function (/* sam_outgoing_data_channel_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_data_channel_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_outgoing_data_channel_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_data_channel_statistics_get_packet_count_internal: function (/* sam_outgoing_data_channel_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_data_channel_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_outgoing_data_channel_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_data_channel_statistics_release: function (/* sam_outgoing_data_channel_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_data_channel_statistics_release === "function"){
            return sam_exports_impl.sam_outgoing_data_channel_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_media_statistics_addref: function (/* sam_outgoing_media_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_addref === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_audio: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_audio_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_audio === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_audio(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_audio_internal: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_audio_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_audio_internal === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_audio_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_data_channel: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_data_channel_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_data_channel === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_data_channel(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_data_channel_internal: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_data_channel_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_data_channel_internal === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_data_channel_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_screen_share: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_screen_share_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_screen_share === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_screen_share(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_screen_share_internal: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_screen_share_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_screen_share_internal === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_screen_share_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_video: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_video_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_video === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_video(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_media_statistics_get_video_internal: function (/* sam_outgoing_media_statistics_handle */ handle, /* sam_outgoing_video_statistics_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_get_video_internal === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_get_video_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_media_statistics_release: function (/* sam_outgoing_media_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_media_statistics_release === "function"){
            return sam_exports_impl.sam_outgoing_media_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor.
    //
    /* sam_status */ sam_outgoing_screen_share_statistics_addref: function (/* sam_outgoing_screen_share_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_addref === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_bitrate_in_bps: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_bitrate_in_bps === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_bitrate_in_bps(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_bitrate_in_bps_internal: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_bitrate_in_bps_internal === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_bitrate_in_bps_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_codec_name: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_codec_name === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_codec_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_frame_height: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_height === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_frame_height_internal: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_height_internal === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_height_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_frame_rate: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_rate === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_rate(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_frame_rate_internal: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_rate_internal === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_rate_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_frame_width: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_width === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_frame_width_internal: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_width_internal === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_frame_width_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_packet_count: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_packet_count_internal: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_stream_id: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_stream_id === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_screen_share_statistics_get_stream_id_internal: function (/* sam_outgoing_screen_share_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_get_stream_id_internal === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_get_stream_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor.
    //
    /* sam_status */ sam_outgoing_screen_share_statistics_release: function (/* sam_outgoing_screen_share_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_screen_share_statistics_release === "function"){
            return sam_exports_impl.sam_outgoing_screen_share_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_outgoing_video_constraints_addref: function (/* sam_outgoing_video_constraints_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_addref === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_outgoing_video_constraints_create: function (/* sam_outgoing_video_constraints_handle* */ instance) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_create === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_constraints_get_max_frame_rate: function (/* sam_outgoing_video_constraints_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_get_max_frame_rate === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_get_max_frame_rate(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_constraints_get_max_height: function (/* sam_outgoing_video_constraints_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_get_max_height === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_get_max_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_constraints_get_max_width: function (/* sam_outgoing_video_constraints_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_get_max_width === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_get_max_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_outgoing_video_constraints_release: function (/* sam_outgoing_video_constraints_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_release === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_constraints_set_max_frame_rate: function (/* sam_outgoing_video_constraints_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_set_max_frame_rate === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_set_max_frame_rate(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_constraints_set_max_height: function (/* sam_outgoing_video_constraints_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_set_max_height === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_set_max_height(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_constraints_set_max_width: function (/* sam_outgoing_video_constraints_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_outgoing_video_constraints_set_max_width === "function"){
            return sam_exports_impl.sam_outgoing_video_constraints_set_max_width(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_outgoing_video_options_addref: function (/* sam_outgoing_video_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_addref === "function"){
            return sam_exports_impl.sam_outgoing_video_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_outgoing_video_options_create: function (/* sam_outgoing_video_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_create === "function"){
            return sam_exports_impl.sam_outgoing_video_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_options_get_constraints: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_constraints_handle* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_get_constraints === "function"){
            return sam_exports_impl.sam_outgoing_video_options_get_constraints(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_options_get_mid_call_configuration: function (/* sam_outgoing_video_options_handle */ handle, /* sam_video_mid_call_configurations_handle* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_get_mid_call_configuration === "function"){
            return sam_exports_impl.sam_outgoing_video_options_get_mid_call_configuration(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_options_get_streams: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_get_streams === "function"){
            return sam_exports_impl.sam_outgoing_video_options_get_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_outgoing_video_options_release: function (/* sam_outgoing_video_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_release === "function"){
            return sam_exports_impl.sam_outgoing_video_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_options_set_constraints: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_constraints_handle */ value) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_set_constraints === "function"){
            return sam_exports_impl.sam_outgoing_video_options_set_constraints(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_options_set_mid_call_configuration: function (/* sam_outgoing_video_options_handle */ handle, /* sam_video_mid_call_configurations_handle */ value) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_set_mid_call_configuration === "function"){
            return sam_exports_impl.sam_outgoing_video_options_set_mid_call_configuration(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Get or set the OutgoingVideoStreams should start once the call start
    //
    /* sam_status */ sam_outgoing_video_options_set_outgoing_video_streams_internal: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_stream_handle const* */ outgoing_video_streams, /* int */ outgoing_video_streams_count) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_set_outgoing_video_streams_internal === "function"){
            return sam_exports_impl.sam_outgoing_video_options_set_outgoing_video_streams_internal(handle, outgoing_video_streams, outgoing_video_streams_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_options_set_streams: function (/* sam_outgoing_video_options_handle */ handle, /* sam_outgoing_video_stream_handle * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_outgoing_video_options_set_streams === "function"){
            return sam_exports_impl.sam_outgoing_video_options_set_streams(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_video_statistics_addref: function (/* sam_outgoing_video_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_addref === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_bitrate_in_bps: function (/* sam_outgoing_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_bitrate_in_bps === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_bitrate_in_bps(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_bitrate_in_bps_internal: function (/* sam_outgoing_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_bitrate_in_bps_internal === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_bitrate_in_bps_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_codec_name: function (/* sam_outgoing_video_statistics_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_codec_name === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_codec_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_frame_height: function (/* sam_outgoing_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_frame_height === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_frame_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_frame_height_internal: function (/* sam_outgoing_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_frame_height_internal === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_frame_height_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_frame_rate: function (/* sam_outgoing_video_statistics_handle */ handle, /* float_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_frame_rate === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_frame_rate(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_frame_rate_internal: function (/* sam_outgoing_video_statistics_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_frame_rate_internal === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_frame_rate_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_frame_width: function (/* sam_outgoing_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_frame_width === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_frame_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_frame_width_internal: function (/* sam_outgoing_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_frame_width_internal === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_frame_width_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_packet_count: function (/* sam_outgoing_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_packet_count === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_packet_count(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_packet_count_internal: function (/* sam_outgoing_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_packet_count_internal === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_packet_count_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_stream_id: function (/* sam_outgoing_video_statistics_handle */ handle, /* int_nullable* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_stream_id === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_outgoing_video_statistics_get_stream_id_internal: function (/* sam_outgoing_video_statistics_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_get_stream_id_internal === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_get_stream_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor.
    //
    /* sam_status */ sam_outgoing_video_statistics_release: function (/* sam_outgoing_video_statistics_handle */ handle) {
        if (typeof sam_exports_impl.sam_outgoing_video_statistics_release === "function"){
            return sam_exports_impl.sam_outgoing_video_statistics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_participants_updated_event_args_addref: function (/* sam_participants_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_participants_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_participants_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_participants_updated_event_args_get_added_participants: function (/* sam_participants_updated_event_args_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_participants_updated_event_args_get_added_participants === "function"){
            return sam_exports_impl.sam_participants_updated_event_args_get_added_participants(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_participants_updated_event_args_get_removed_participants: function (/* sam_participants_updated_event_args_handle */ handle, /* sam_remote_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_participants_updated_event_args_get_removed_participants === "function"){
            return sam_exports_impl.sam_participants_updated_event_args_get_removed_participants(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_participants_updated_event_args_release: function (/* sam_participants_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_participants_updated_event_args_release === "function"){
            return sam_exports_impl.sam_participants_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates an instance of of Azure.Communication.Calling.PhoneNumberCallIdentifier
    /* sam_status */ sam_phone_number_call_identifier_create_string_phone_number: function (/* const char * */ phone_number, /* sam_phone_number_call_identifier_handle* */ instance) {
        if (typeof sam_exports_impl.sam_phone_number_call_identifier_create_string_phone_number === "function"){
            return sam_exports_impl.sam_phone_number_call_identifier_create_string_phone_number(phone_number, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_phone_number_call_identifier_get_phone_number: function (/* sam_phone_number_call_identifier_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_phone_number_call_identifier_get_phone_number === "function"){
            return sam_exports_impl.sam_phone_number_call_identifier_get_phone_number(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_power_point_info_get_is_private_viewing_enabled: function (/* sam_power_point_info_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_power_point_info_get_is_private_viewing_enabled === "function"){
            return sam_exports_impl.sam_power_point_info_get_is_private_viewing_enabled(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_power_point_info_get_slide_index: function (/* sam_power_point_info_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_power_point_info_get_slide_index === "function"){
            return sam_exports_impl.sam_power_point_info_get_slide_index(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_pre_call_diagnostics_addref: function (/* sam_pre_call_diagnostics_handle */ handle) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_addref === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_pre_call_diagnostics_call_client_feature_create: function (/* sam_pre_call_diagnostics_call_client_feature_handle* */ instance) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_create === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_call_client_feature_get_device_permissions: function (/* sam_pre_call_diagnostics_call_client_feature_handle */ handle, /* int ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_get_device_permissions === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_get_device_permissions(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_call_client_feature_get_id: function (/* sam_pre_call_diagnostics_call_client_feature_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_get_id === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Start diagnostics
    //
    /* sam_status */ sam_pre_call_diagnostics_call_client_feature_run_diagnostics: function (/* sam_pre_call_diagnostics_call_client_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_run_diagnostics === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_run_diagnostics(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_call_client_feature_set_on_pre_call_diagnostics_ready: function (/* sam_pre_call_diagnostics_call_client_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_pre_call_diagnostics_ready_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_set_on_pre_call_diagnostics_ready === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_set_on_pre_call_diagnostics_ready(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_call_client_feature_set_pre_call_diagnostics_ready: function (/* sam_pre_call_diagnostics_call_client_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_pre_call_diagnostics_ready_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_set_pre_call_diagnostics_ready === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_call_client_feature_set_pre_call_diagnostics_ready(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_get_media_diagnostics: function (/* sam_pre_call_diagnostics_handle */ handle, /* sam_media_diagnostics_handle* */ result) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_get_media_diagnostics === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_get_media_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_get_media_statistics_report: function (/* sam_pre_call_diagnostics_handle */ handle, /* sam_media_statistics_report_handle* */ result) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_get_media_statistics_report === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_get_media_statistics_report(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_get_network_diagnostics: function (/* sam_pre_call_diagnostics_handle */ handle, /* sam_network_diagnostics_handle* */ result) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_get_network_diagnostics === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_get_network_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_pre_call_diagnostics_ready_event_args_addref: function (/* sam_pre_call_diagnostics_ready_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_ready_event_args_addref === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_ready_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_pre_call_diagnostics_ready_event_args_get_diagnostics: function (/* sam_pre_call_diagnostics_ready_event_args_handle */ handle, /* sam_pre_call_diagnostics_handle* */ result) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_ready_event_args_get_diagnostics === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_ready_event_args_get_diagnostics(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_pre_call_diagnostics_ready_event_args_release: function (/* sam_pre_call_diagnostics_ready_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_ready_event_args_release === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_ready_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_pre_call_diagnostics_release: function (/* sam_pre_call_diagnostics_handle */ handle) {
        if (typeof sam_exports_impl.sam_pre_call_diagnostics_release === "function"){
            return sam_exports_impl.sam_pre_call_diagnostics_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_property_changed_event_args_addref: function (/* sam_property_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_property_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_property_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_property_changed_event_args_release: function (/* sam_property_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_property_changed_event_args_release === "function"){
            return sam_exports_impl.sam_property_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_addref: function (/* sam_push_notification_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_push_notification_info_addref === "function"){
            return sam_exports_impl.sam_push_notification_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_get_call_id_internal: function (/* sam_push_notification_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_get_call_id_internal === "function"){
            return sam_exports_impl.sam_push_notification_info_get_call_id_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_get_caller_info: function (/* sam_push_notification_info_handle */ handle, /* sam_caller_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_get_caller_info === "function"){
            return sam_exports_impl.sam_push_notification_info_get_caller_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_get_event_type: function (/* sam_push_notification_info_handle */ handle, /* sam_push_notification_event_type* */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_get_event_type === "function"){
            return sam_exports_impl.sam_push_notification_info_get_event_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_get_from_display_name: function (/* sam_push_notification_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_get_from_display_name === "function"){
            return sam_exports_impl.sam_push_notification_info_get_from_display_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_get_from_internal: function (/* sam_push_notification_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_get_from_internal === "function"){
            return sam_exports_impl.sam_push_notification_info_get_from_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_get_incoming_with_video: function (/* sam_push_notification_info_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_get_incoming_with_video === "function"){
            return sam_exports_impl.sam_push_notification_info_get_incoming_with_video(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_get_to_internal: function (/* sam_push_notification_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_get_to_internal === "function"){
            return sam_exports_impl.sam_push_notification_info_get_to_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Static Method to parse payload into caller information
    //
    /* sam_status */ sam_push_notification_info_parse_internal: function (/* const char * */ payload, /* sam_push_notification_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_push_notification_info_parse_internal === "function"){
            return sam_exports_impl.sam_push_notification_info_parse_internal(payload, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_push_notification_info_release: function (/* sam_push_notification_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_push_notification_info_release === "function"){
            return sam_exports_impl.sam_push_notification_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raise_hand_call_feature_get_raised_hands: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_raised_hand_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_get_raised_hands === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_get_raised_hands(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send request to lower raised hands for every user on the call.
    //
    /* sam_status */ sam_raise_hand_call_feature_lower_all_hands: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_lower_all_hands === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_lower_all_hands(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send request to lower hand for local user.
    //
    /* sam_status */ sam_raise_hand_call_feature_lower_hand: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_lower_hand === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_lower_hand(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send request to lower the raised hands for local and remote users.
    //
    /* sam_status */ sam_raise_hand_call_feature_lower_hands_internal: function (/* sam_raise_hand_call_feature_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_lower_hands_internal === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_lower_hands_internal(handle, participants, participants_count, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send request to raise hand for local user.
    //
    /* sam_status */ sam_raise_hand_call_feature_raise_hand: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_raise_hand === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_raise_hand(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raise_hand_call_feature_set_hand_lowered: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_lowered_hand_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_set_hand_lowered === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_set_hand_lowered(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raise_hand_call_feature_set_hand_raised: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_raised_hand_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_set_hand_raised === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_set_hand_raised(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raise_hand_call_feature_set_on_hand_lowered: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_lowered_hand_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_set_on_hand_lowered === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_set_on_hand_lowered(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raise_hand_call_feature_set_on_hand_raised: function (/* sam_raise_hand_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_raised_hand_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raise_hand_call_feature_set_on_hand_raised === "function"){
            return sam_exports_impl.sam_raise_hand_call_feature_set_on_hand_raised(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raised_hand_addref: function (/* sam_raised_hand_handle */ handle) {
        if (typeof sam_exports_impl.sam_raised_hand_addref === "function"){
            return sam_exports_impl.sam_raised_hand_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raised_hand_changed_event_args_addref: function (/* sam_raised_hand_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_raised_hand_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_raised_hand_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raised_hand_changed_event_args_get_participant: function (/* sam_raised_hand_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_raised_hand_changed_event_args_get_participant === "function"){
            return sam_exports_impl.sam_raised_hand_changed_event_args_get_participant(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raised_hand_changed_event_args_release: function (/* sam_raised_hand_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_raised_hand_changed_event_args_release === "function"){
            return sam_exports_impl.sam_raised_hand_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raised_hand_get_order: function (/* sam_raised_hand_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_raised_hand_get_order === "function"){
            return sam_exports_impl.sam_raised_hand_get_order(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raised_hand_get_participant: function (/* sam_raised_hand_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_raised_hand_get_participant === "function"){
            return sam_exports_impl.sam_raised_hand_get_participant(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raised_hand_release: function (/* sam_raised_hand_handle */ handle) {
        if (typeof sam_exports_impl.sam_raised_hand_release === "function"){
            return sam_exports_impl.sam_raised_hand_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_audio_buffer_addref: function (/* sam_raw_audio_buffer_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_addref === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_audio_buffer_create: function (/* sam_raw_audio_buffer_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_create === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Dispose method for cleaning up resources
    //
    /* sam_status */ sam_raw_audio_buffer_dispose: function (/* sam_raw_audio_buffer_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_dispose === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_dispose(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Get buffer from ABI represented as CoreAudio::AudioBuffer.
    //
    /* sam_status */ sam_raw_audio_buffer_get_audio_buffer_data: function (/* sam_raw_audio_buffer_handle */ handle, /* void * */ audio_buffer) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_get_audio_buffer_data === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_get_audio_buffer_data(handle, audio_buffer);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_buffer_get_buffer: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_audio_memory_buffer_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_get_buffer === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_get_buffer(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_buffer_get_raw_audio_stream_properties: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_raw_audio_stream_properties_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_get_raw_audio_stream_properties === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_get_raw_audio_stream_properties(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_buffer_get_timestamp_in_ticks: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_i64* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_get_timestamp_in_ticks === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_get_timestamp_in_ticks(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set the native buffer used with Unity apps.
    //
    /* sam_status */ sam_raw_audio_buffer_get_unity_buffer: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_native_buffer_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_get_unity_buffer === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_get_unity_buffer(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_audio_buffer_release: function (/* sam_raw_audio_buffer_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_release === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set buffer in ABI from AudioBuffer underlying data of the `AVAudioBuffer` object in
    // projected side.
    //
    /* sam_status */ sam_raw_audio_buffer_set_audio_buffer_data: function (/* sam_raw_audio_buffer_handle */ handle, /* void * */ audio_buffer, /* int */ channel_count, /* double */ sample_rate) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_set_audio_buffer_data === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_set_audio_buffer_data(handle, audio_buffer, channel_count, sample_rate);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_buffer_set_buffer: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_audio_memory_buffer_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_set_buffer === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_set_buffer(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_buffer_set_raw_audio_stream_properties: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_raw_audio_stream_properties_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_set_raw_audio_stream_properties === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_set_raw_audio_stream_properties(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_buffer_set_timestamp_in_ticks: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_i64 */ value) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_set_timestamp_in_ticks === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_set_timestamp_in_ticks(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set the native buffer used with Unity apps.
    //
    /* sam_status */ sam_raw_audio_buffer_set_unity_buffer: function (/* sam_raw_audio_buffer_handle */ handle, /* sam_native_buffer_handle */ buffer) {
        if (typeof sam_exports_impl.sam_raw_audio_buffer_set_unity_buffer === "function"){
            return sam_exports_impl.sam_raw_audio_buffer_set_unity_buffer(handle, buffer);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_audio_stream_options_addref: function (/* sam_raw_audio_stream_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_options_addref === "function"){
            return sam_exports_impl.sam_raw_audio_stream_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_audio_stream_options_release: function (/* sam_raw_audio_stream_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_options_release === "function"){
            return sam_exports_impl.sam_raw_audio_stream_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_audio_stream_properties_addref: function (/* sam_raw_audio_stream_properties_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_addref === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_stream_properties_get_channel_mode: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_channel_mode* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_get_channel_mode === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_get_channel_mode(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_stream_properties_get_format: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_format* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_get_format === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_get_format(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_stream_properties_get_sample_rate: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_sample_rate* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_get_sample_rate === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_get_sample_rate(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_stream_properties_get_sample_rate_in_hz: function (/* sam_raw_audio_stream_properties_handle */ handle, /* double* */ result) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_get_sample_rate_in_hz === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_get_sample_rate_in_hz(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_audio_stream_properties_release: function (/* sam_raw_audio_stream_properties_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_release === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_stream_properties_set_channel_mode: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_channel_mode */ value) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_set_channel_mode === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_set_channel_mode(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_stream_properties_set_format: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_format */ value) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_set_format === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_set_format(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_audio_stream_properties_set_sample_rate: function (/* sam_raw_audio_stream_properties_handle */ handle, /* sam_audio_stream_sample_rate */ value) {
        if (typeof sam_exports_impl.sam_raw_audio_stream_properties_set_sample_rate === "function"){
            return sam_exports_impl.sam_raw_audio_stream_properties_set_sample_rate(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_incoming_audio_stream_create_raw_incoming_audio_stream_options_options: function (/* sam_raw_incoming_audio_stream_options_handle */ options, /* sam_raw_incoming_audio_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_create_raw_incoming_audio_stream_options_options === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_create_raw_incoming_audio_stream_options_options(options, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_incoming_audio_stream_options_create: function (/* sam_raw_incoming_audio_stream_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_options_create === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_options_get_properties: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_raw_incoming_audio_stream_properties_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_options_get_properties === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_options_get_properties(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_options_get_receive_unmixed_audio: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_options_get_receive_unmixed_audio === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_options_get_receive_unmixed_audio(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_options_set_properties: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_raw_incoming_audio_stream_properties_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_options_set_properties === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_options_set_properties(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_options_set_receive_unmixed_audio: function (/* sam_raw_incoming_audio_stream_options_handle */ handle, /* sam_bool_u8 */ value) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_options_set_receive_unmixed_audio === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_options_set_receive_unmixed_audio(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_incoming_audio_stream_properties_create: function (/* sam_raw_incoming_audio_stream_properties_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_properties_create === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_properties_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_set_mixed_audio_buffer_received: function (/* sam_raw_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_mixed_audio_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_set_mixed_audio_buffer_received === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_set_mixed_audio_buffer_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_set_on_mixed_audio_buffer_received: function (/* sam_raw_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_mixed_audio_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_set_on_mixed_audio_buffer_received === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_set_on_mixed_audio_buffer_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_set_on_state_changed: function (/* sam_raw_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_set_on_unmixed_audio_buffer_received: function (/* sam_raw_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_unmixed_audio_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_set_on_unmixed_audio_buffer_received === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_set_on_unmixed_audio_buffer_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_audio_stream_set_unmixed_audio_buffer_received: function (/* sam_raw_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_incoming_unmixed_audio_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_audio_stream_set_unmixed_audio_buffer_received === "function"){
            return sam_exports_impl.sam_raw_incoming_audio_stream_set_unmixed_audio_buffer_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_video_stream_set_on_raw_video_frame_received: function (/* sam_raw_incoming_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_raw_video_frame_received_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_video_stream_set_on_raw_video_frame_received === "function"){
            return sam_exports_impl.sam_raw_incoming_video_stream_set_on_raw_video_frame_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_video_stream_set_on_state_changed: function (/* sam_raw_incoming_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_video_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_raw_incoming_video_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_incoming_video_stream_set_raw_video_frame_received: function (/* sam_raw_incoming_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_raw_video_frame_received_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_incoming_video_stream_set_raw_video_frame_received === "function"){
            return sam_exports_impl.sam_raw_incoming_video_stream_set_raw_video_frame_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Start receiving frames
    //
    /* sam_status */ sam_raw_incoming_video_stream_start: function (/* sam_raw_incoming_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_incoming_video_stream_start === "function"){
            return sam_exports_impl.sam_raw_incoming_video_stream_start(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Stop receiving frames
    //
    /* sam_status */ sam_raw_incoming_video_stream_stop: function (/* sam_raw_incoming_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_incoming_video_stream_stop === "function"){
            return sam_exports_impl.sam_raw_incoming_video_stream_stop(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_outgoing_audio_stream_create_raw_outgoing_audio_stream_options_options: function (/* sam_raw_outgoing_audio_stream_options_handle */ options, /* sam_raw_outgoing_audio_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_create_raw_outgoing_audio_stream_options_options === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_create_raw_outgoing_audio_stream_options_options(options, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_audio_stream_get_expected_buffer_size_in_bytes: function (/* sam_raw_outgoing_audio_stream_handle */ handle, /* sam_i64* */ result) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_get_expected_buffer_size_in_bytes === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_get_expected_buffer_size_in_bytes(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_audio_stream_get_properties: function (/* sam_raw_outgoing_audio_stream_handle */ handle, /* sam_raw_outgoing_audio_stream_properties_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_get_properties === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_get_properties(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_outgoing_audio_stream_options_create: function (/* sam_raw_outgoing_audio_stream_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_options_create === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_audio_stream_options_get_properties: function (/* sam_raw_outgoing_audio_stream_options_handle */ handle, /* sam_raw_outgoing_audio_stream_properties_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_options_get_properties === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_options_get_properties(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_audio_stream_options_set_properties: function (/* sam_raw_outgoing_audio_stream_options_handle */ handle, /* sam_raw_outgoing_audio_stream_properties_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_options_set_properties === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_options_set_properties(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_outgoing_audio_stream_properties_create: function (/* sam_raw_outgoing_audio_stream_properties_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_properties_create === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_properties_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_audio_stream_properties_get_buffer_duration: function (/* sam_raw_outgoing_audio_stream_properties_handle */ handle, /* sam_audio_stream_buffer_duration* */ result) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_properties_get_buffer_duration === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_properties_get_buffer_duration(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_audio_stream_properties_set_buffer_duration: function (/* sam_raw_outgoing_audio_stream_properties_handle */ handle, /* sam_audio_stream_buffer_duration */ value) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_properties_set_buffer_duration === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_properties_set_buffer_duration(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Method for sending audio buffer.
    // The buffer should match the format, sample rate and channel mode specified in the stream properties.
    // For data per block property, we recommend sending data in the specified size, but additionally,
    // we support sending larger buffers limited to 100ms as long as it can be evenly divided by the specified
    // data per block.
    //
    /* sam_status */ sam_raw_outgoing_audio_stream_send_raw_audio_buffer: function (/* sam_raw_outgoing_audio_stream_handle */ handle, /* sam_raw_audio_buffer_handle */ raw_audio_buffer, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_send_raw_audio_buffer === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_send_raw_audio_buffer(handle, raw_audio_buffer, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_audio_stream_set_on_state_changed: function (/* sam_raw_outgoing_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_outgoing_audio_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_raw_outgoing_audio_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_video_stream_get_format: function (/* sam_raw_outgoing_video_stream_handle */ handle, /* sam_video_stream_format_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_get_format === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_get_format(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_video_stream_get_timestamp_in_ticks: function (/* sam_raw_outgoing_video_stream_handle */ handle, /* sam_i64* */ result) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_get_timestamp_in_ticks === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_get_timestamp_in_ticks(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_outgoing_video_stream_options_addref: function (/* sam_raw_outgoing_video_stream_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_options_addref === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_outgoing_video_stream_options_create: function (/* sam_raw_outgoing_video_stream_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_options_create === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_video_stream_options_get_formats: function (/* sam_raw_outgoing_video_stream_options_handle */ handle, /* sam_video_stream_format_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_options_get_formats === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_options_get_formats(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_outgoing_video_stream_options_release: function (/* sam_raw_outgoing_video_stream_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_options_release === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_video_stream_options_set_formats: function (/* sam_raw_outgoing_video_stream_options_handle */ handle, /* sam_video_stream_format_handle * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_options_set_formats === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_options_set_formats(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set supported VideoFormats
    //
    /* sam_status */ sam_raw_outgoing_video_stream_options_set_formats_internal: function (/* sam_raw_outgoing_video_stream_options_handle */ handle, /* sam_video_stream_format_handle const* */ video_stream_formats, /* int */ video_stream_formats_count) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_options_set_formats_internal === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_options_set_formats_internal(handle, video_stream_formats, video_stream_formats_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send Raw Video Frame
    //
    /* sam_status */ sam_raw_outgoing_video_stream_send_raw_video_frame: function (/* sam_raw_outgoing_video_stream_handle */ handle, /* sam_raw_video_frame_handle */ raw_video_frame, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_send_raw_video_frame === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_send_raw_video_frame(handle, raw_video_frame, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_outgoing_video_stream_set_format_changed: function (/* sam_raw_outgoing_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_format_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_raw_outgoing_video_stream_set_format_changed === "function"){
            return sam_exports_impl.sam_raw_outgoing_video_stream_set_format_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_video_frame_addref: function (/* sam_raw_video_frame_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_video_frame_addref === "function"){
            return sam_exports_impl.sam_raw_video_frame_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_video_frame_buffer_create: function (/* sam_raw_video_frame_buffer_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_create === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_get_buffer: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_mem_buffer_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_get_buffer === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_get_buffer(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_get_buffers: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_mem_buffer_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_get_buffers === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_get_buffers(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_get_buffers_android: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_mem_buffer_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_get_buffers_android === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_get_buffers_android(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_get_buffers_unity: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_native_buffer_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_get_buffers_unity === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_get_buffers_unity(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_set_buffer: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_mem_buffer_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_set_buffer === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_set_buffer(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_set_buffers: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_mem_buffer_handle * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_set_buffers === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_set_buffers(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_set_buffers_android: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_mem_buffer_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_set_buffers_android === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_set_buffers_android(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_buffer_set_buffers_unity: function (/* sam_raw_video_frame_buffer_handle */ handle, /* sam_native_buffer_handle * */ value, /* int */ value_count) {
        if (typeof sam_exports_impl.sam_raw_video_frame_buffer_set_buffers_unity === "function"){
            return sam_exports_impl.sam_raw_video_frame_buffer_set_buffers_unity(handle, value, value_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Dispose heavy resources
    //
    /* sam_status */ sam_raw_video_frame_dispose: function (/* sam_raw_video_frame_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_video_frame_dispose === "function"){
            return sam_exports_impl.sam_raw_video_frame_dispose(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_get_stream_format: function (/* sam_raw_video_frame_handle */ handle, /* sam_video_stream_format_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_get_stream_format === "function"){
            return sam_exports_impl.sam_raw_video_frame_get_stream_format(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_get_timestamp_in_ticks: function (/* sam_raw_video_frame_handle */ handle, /* sam_i64* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_get_timestamp_in_ticks === "function"){
            return sam_exports_impl.sam_raw_video_frame_get_timestamp_in_ticks(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_get_type: function (/* sam_raw_video_frame_handle */ handle, /* sam_raw_video_frame_type* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_get_type === "function"){
            return sam_exports_impl.sam_raw_video_frame_get_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_video_frame_received_event_args_addref: function (/* sam_raw_video_frame_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_video_frame_received_event_args_addref === "function"){
            return sam_exports_impl.sam_raw_video_frame_received_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_received_event_args_get_frame: function (/* sam_raw_video_frame_received_event_args_handle */ handle, /* sam_raw_video_frame_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_received_event_args_get_frame === "function"){
            return sam_exports_impl.sam_raw_video_frame_received_event_args_get_frame(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_received_event_args_get_video_stream_id: function (/* sam_raw_video_frame_received_event_args_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_received_event_args_get_video_stream_id === "function"){
            return sam_exports_impl.sam_raw_video_frame_received_event_args_get_video_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_video_frame_received_event_args_release: function (/* sam_raw_video_frame_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_video_frame_received_event_args_release === "function"){
            return sam_exports_impl.sam_raw_video_frame_received_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_raw_video_frame_release: function (/* sam_raw_video_frame_handle */ handle) {
        if (typeof sam_exports_impl.sam_raw_video_frame_release === "function"){
            return sam_exports_impl.sam_raw_video_frame_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_set_stream_format: function (/* sam_raw_video_frame_handle */ handle, /* sam_video_stream_format_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_video_frame_set_stream_format === "function"){
            return sam_exports_impl.sam_raw_video_frame_set_stream_format(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_set_timestamp_in_ticks: function (/* sam_raw_video_frame_handle */ handle, /* sam_i64 */ value) {
        if (typeof sam_exports_impl.sam_raw_video_frame_set_timestamp_in_ticks === "function"){
            return sam_exports_impl.sam_raw_video_frame_set_timestamp_in_ticks(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_raw_video_frame_texture_create: function (/* sam_raw_video_frame_texture_handle* */ instance) {
        if (typeof sam_exports_impl.sam_raw_video_frame_texture_create === "function"){
            return sam_exports_impl.sam_raw_video_frame_texture_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_texture_get_texture: function (/* sam_raw_video_frame_texture_handle */ handle, /* sam_gpu_texture_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_texture_get_texture === "function"){
            return sam_exports_impl.sam_raw_video_frame_texture_get_texture(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_texture_get_unity_buffer: function (/* sam_raw_video_frame_texture_handle */ handle, /* sam_native_buffer_handle* */ result) {
        if (typeof sam_exports_impl.sam_raw_video_frame_texture_get_unity_buffer === "function"){
            return sam_exports_impl.sam_raw_video_frame_texture_get_unity_buffer(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_texture_set_texture: function (/* sam_raw_video_frame_texture_handle */ handle, /* sam_gpu_texture_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_video_frame_texture_set_texture === "function"){
            return sam_exports_impl.sam_raw_video_frame_texture_set_texture(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_raw_video_frame_texture_set_unity_buffer: function (/* sam_raw_video_frame_texture_handle */ handle, /* sam_native_buffer_handle */ value) {
        if (typeof sam_exports_impl.sam_raw_video_frame_texture_set_unity_buffer === "function"){
            return sam_exports_impl.sam_raw_video_frame_texture_set_unity_buffer(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_call_feature_get_is_recording_active: function (/* sam_recording_call_feature_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_recording_call_feature_get_is_recording_active === "function"){
            return sam_exports_impl.sam_recording_call_feature_get_is_recording_active(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_call_feature_get_recordings: function (/* sam_recording_call_feature_handle */ handle, /* sam_recording_info_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_recording_call_feature_get_recordings === "function"){
            return sam_exports_impl.sam_recording_call_feature_get_recordings(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_call_feature_set_is_recording_active_changed: function (/* sam_recording_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_recording_call_feature_set_is_recording_active_changed === "function"){
            return sam_exports_impl.sam_recording_call_feature_set_is_recording_active_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_call_feature_set_on_is_recording_active_changed: function (/* sam_recording_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_recording_call_feature_set_on_is_recording_active_changed === "function"){
            return sam_exports_impl.sam_recording_call_feature_set_on_is_recording_active_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_call_feature_set_on_recording_updated: function (/* sam_recording_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_recording_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_recording_call_feature_set_on_recording_updated === "function"){
            return sam_exports_impl.sam_recording_call_feature_set_on_recording_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_call_feature_set_recording_updated: function (/* sam_recording_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_recording_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_recording_call_feature_set_recording_updated === "function"){
            return sam_exports_impl.sam_recording_call_feature_set_recording_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_info_addref: function (/* sam_recording_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_recording_info_addref === "function"){
            return sam_exports_impl.sam_recording_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_info_get_state: function (/* sam_recording_info_handle */ handle, /* sam_recording_state* */ result) {
        if (typeof sam_exports_impl.sam_recording_info_get_state === "function"){
            return sam_exports_impl.sam_recording_info_get_state(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_info_release: function (/* sam_recording_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_recording_info_release === "function"){
            return sam_exports_impl.sam_recording_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_updated_event_args_addref: function (/* sam_recording_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_recording_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_recording_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_updated_event_args_get_updated_recording: function (/* sam_recording_updated_event_args_handle */ handle, /* sam_recording_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_recording_updated_event_args_get_updated_recording === "function"){
            return sam_exports_impl.sam_recording_updated_event_args_get_updated_recording(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_recording_updated_event_args_release: function (/* sam_recording_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_recording_updated_event_args_release === "function"){
            return sam_exports_impl.sam_recording_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_remote_incoming_audio_stream_create: function (/* sam_remote_incoming_audio_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_remote_incoming_audio_stream_create === "function"){
            return sam_exports_impl.sam_remote_incoming_audio_stream_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_incoming_audio_stream_set_on_state_changed: function (/* sam_remote_incoming_audio_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_audio_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_incoming_audio_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_remote_incoming_audio_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_addref: function (/* sam_remote_participant_handle */ handle) {
        if (typeof sam_exports_impl.sam_remote_participant_addref === "function"){
            return sam_exports_impl.sam_remote_participant_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_call_end_reason: function (/* sam_remote_participant_handle */ handle, /* sam_call_end_reason_handle* */ result) {
        if (typeof sam_exports_impl.sam_remote_participant_get_call_end_reason === "function"){
            return sam_exports_impl.sam_remote_participant_get_call_end_reason(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_call_participant_role: function (/* sam_remote_participant_handle */ handle, /* sam_call_participant_role* */ result) {
        if (typeof sam_exports_impl.sam_remote_participant_get_call_participant_role === "function"){
            return sam_exports_impl.sam_remote_participant_get_call_participant_role(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_display_name: function (/* sam_remote_participant_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_remote_participant_get_display_name === "function"){
            return sam_exports_impl.sam_remote_participant_get_display_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_endpoint_details: function (/* sam_remote_participant_handle */ handle, /* sam_endpoint_details_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_remote_participant_get_endpoint_details === "function"){
            return sam_exports_impl.sam_remote_participant_get_endpoint_details(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Private Preview Only: Identity of the remote participant
    //
    /* sam_status */ sam_remote_participant_get_identifier_internal: function (/* sam_remote_participant_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_remote_participant_get_identifier_internal === "function"){
            return sam_exports_impl.sam_remote_participant_get_identifier_internal(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_incoming_video_streams: function (/* sam_remote_participant_handle */ handle, /* sam_incoming_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_remote_participant_get_incoming_video_streams === "function"){
            return sam_exports_impl.sam_remote_participant_get_incoming_video_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_is_muted: function (/* sam_remote_participant_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_remote_participant_get_is_muted === "function"){
            return sam_exports_impl.sam_remote_participant_get_is_muted(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_is_speaking: function (/* sam_remote_participant_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_remote_participant_get_is_speaking === "function"){
            return sam_exports_impl.sam_remote_participant_get_is_speaking(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_state: function (/* sam_remote_participant_handle */ handle, /* sam_participant_state* */ result) {
        if (typeof sam_exports_impl.sam_remote_participant_get_state === "function"){
            return sam_exports_impl.sam_remote_participant_get_state(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_get_video_streams: function (/* sam_remote_participant_handle */ handle, /* sam_remote_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_remote_participant_get_video_streams === "function"){
            return sam_exports_impl.sam_remote_participant_get_video_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Mute remote participant audio
    //
    /* sam_status */ sam_remote_participant_mute: function (/* sam_remote_participant_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_remote_participant_mute === "function"){
            return sam_exports_impl.sam_remote_participant_mute(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_release: function (/* sam_remote_participant_handle */ handle) {
        if (typeof sam_exports_impl.sam_remote_participant_release === "function"){
            return sam_exports_impl.sam_remote_participant_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_display_name_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_display_name_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_display_name_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_is_muted_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_is_muted_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_is_muted_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_is_speaking_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_is_speaking_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_is_speaking_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_on_display_name_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_on_display_name_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_on_display_name_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_on_is_muted_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_on_is_muted_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_on_is_muted_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_on_is_speaking_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_on_is_speaking_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_on_is_speaking_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_on_role_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_on_role_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_on_role_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_on_state_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_on_state_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_on_video_stream_state_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_on_video_stream_state_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_on_video_stream_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_on_video_streams_updated: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_remote_video_streams_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_on_video_streams_updated === "function"){
            return sam_exports_impl.sam_remote_participant_set_on_video_streams_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_role_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_role_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_role_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_state_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_state_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_participant_set_video_stream_state_changed: function (/* sam_remote_participant_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_participant_set_video_stream_state_changed === "function"){
            return sam_exports_impl.sam_remote_participant_set_video_stream_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_video_stream_get_is_available: function (/* sam_remote_video_stream_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_remote_video_stream_get_is_available === "function"){
            return sam_exports_impl.sam_remote_video_stream_get_is_available(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_video_stream_set_on_state_changed: function (/* sam_remote_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_remote_video_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_remote_video_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Attach the video binding event to the underlying video
    //
    /* sam_status */ sam_remote_video_stream_start_preview_internal: function (/* sam_remote_video_stream_handle */ handle, /* sam_i64 */ video_binding_event_handle, /* int */ video_binding_type) {
        if (typeof sam_exports_impl.sam_remote_video_stream_start_preview_internal === "function"){
            return sam_exports_impl.sam_remote_video_stream_start_preview_internal(handle, video_binding_event_handle, video_binding_type);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates and attach the video binding event to the underlying video
    //
    /* sam_status */ sam_remote_video_stream_start_preview_windows: function (/* sam_remote_video_stream_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_remote_video_stream_start_preview_windows === "function"){
            return sam_exports_impl.sam_remote_video_stream_start_preview_windows(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Detach the video binding event to the underlying video
    //
    /* sam_status */ sam_remote_video_stream_stop_preview_internal: function (/* sam_remote_video_stream_handle */ handle) {
        if (typeof sam_exports_impl.sam_remote_video_stream_stop_preview_internal === "function"){
            return sam_exports_impl.sam_remote_video_stream_stop_preview_internal(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_video_streams_event_args_addref: function (/* sam_remote_video_streams_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_remote_video_streams_event_args_addref === "function"){
            return sam_exports_impl.sam_remote_video_streams_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_video_streams_event_args_get_added_remote_video_streams: function (/* sam_remote_video_streams_event_args_handle */ handle, /* sam_remote_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_remote_video_streams_event_args_get_added_remote_video_streams === "function"){
            return sam_exports_impl.sam_remote_video_streams_event_args_get_added_remote_video_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_video_streams_event_args_get_removed_remote_video_streams: function (/* sam_remote_video_streams_event_args_handle */ handle, /* sam_remote_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_remote_video_streams_event_args_get_removed_remote_video_streams === "function"){
            return sam_exports_impl.sam_remote_video_streams_event_args_get_removed_remote_video_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_remote_video_streams_event_args_release: function (/* sam_remote_video_streams_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_remote_video_streams_event_args_release === "function"){
            return sam_exports_impl.sam_remote_video_streams_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a Room ID
    //
    /* sam_status */ sam_room_call_locator_create_string_room_id: function (/* const char * */ room_id, /* sam_room_call_locator_handle* */ instance) {
        if (typeof sam_exports_impl.sam_room_call_locator_create_string_room_id === "function"){
            return sam_exports_impl.sam_room_call_locator_create_string_room_id(room_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_room_call_locator_get_room_id: function (/* sam_room_call_locator_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_room_call_locator_get_room_id === "function"){
            return sam_exports_impl.sam_room_call_locator_get_room_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Constructor used to create an instance of a stream that send's screen frames
    //
    /* sam_status */ sam_screen_share_outgoing_video_stream_create_raw_outgoing_video_stream_options_video_stream_options: function (/* sam_raw_outgoing_video_stream_options_handle */ video_stream_options, /* sam_screen_share_outgoing_video_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_screen_share_outgoing_video_stream_create_raw_outgoing_video_stream_options_video_stream_options === "function"){
            return sam_exports_impl.sam_screen_share_outgoing_video_stream_create_raw_outgoing_video_stream_options_video_stream_options(video_stream_options, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_screen_share_outgoing_video_stream_set_on_format_changed: function (/* sam_screen_share_outgoing_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_format_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_screen_share_outgoing_video_stream_set_on_format_changed === "function"){
            return sam_exports_impl.sam_screen_share_outgoing_video_stream_set_on_format_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_screen_share_outgoing_video_stream_set_on_state_changed: function (/* sam_screen_share_outgoing_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_screen_share_outgoing_video_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_screen_share_outgoing_video_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_set_projected_object_cleanup: function (/* sam_projected_object_cleanup_delegate */ callback) {
        if (typeof sam_exports_impl.sam_set_projected_object_cleanup === "function"){
            return sam_exports_impl.sam_set_projected_object_cleanup(callback);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send request to stop spotlight for all spotlighted participants
    //
    /* sam_status */ sam_spotlight_call_feature_cancel_all_spotlights: function (/* sam_spotlight_call_feature_handle */ handle, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_spotlight_call_feature_cancel_all_spotlights === "function"){
            return sam_exports_impl.sam_spotlight_call_feature_cancel_all_spotlights(handle, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send request to stop spotlight for local and remote users.
    //
    /* sam_status */ sam_spotlight_call_feature_cancel_spotlight_internal: function (/* sam_spotlight_call_feature_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_spotlight_call_feature_cancel_spotlight_internal === "function"){
            return sam_exports_impl.sam_spotlight_call_feature_cancel_spotlight_internal(handle, participants, participants_count, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_call_feature_get_max_spotlighted_participants: function (/* sam_spotlight_call_feature_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_spotlight_call_feature_get_max_spotlighted_participants === "function"){
            return sam_exports_impl.sam_spotlight_call_feature_get_max_spotlighted_participants(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_call_feature_get_spotlighted_participants: function (/* sam_spotlight_call_feature_handle */ handle, /* sam_spotlighted_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_spotlight_call_feature_get_spotlighted_participants === "function"){
            return sam_exports_impl.sam_spotlight_call_feature_get_spotlighted_participants(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_call_feature_set_on_spotlight_changed: function (/* sam_spotlight_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_spotlight_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_spotlight_call_feature_set_on_spotlight_changed === "function"){
            return sam_exports_impl.sam_spotlight_call_feature_set_on_spotlight_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_call_feature_set_spotlight_changed: function (/* sam_spotlight_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_spotlight_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_spotlight_call_feature_set_spotlight_changed === "function"){
            return sam_exports_impl.sam_spotlight_call_feature_set_spotlight_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Send request to start spotlight for local and remote users.
    //
    /* sam_status */ sam_spotlight_call_feature_spotlight_internal: function (/* sam_spotlight_call_feature_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_spotlight_call_feature_spotlight_internal === "function"){
            return sam_exports_impl.sam_spotlight_call_feature_spotlight_internal(handle, participants, participants_count, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_changed_event_args_addref: function (/* sam_spotlight_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_spotlight_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_spotlight_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_changed_event_args_get_added: function (/* sam_spotlight_changed_event_args_handle */ handle, /* sam_spotlighted_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_spotlight_changed_event_args_get_added === "function"){
            return sam_exports_impl.sam_spotlight_changed_event_args_get_added(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_changed_event_args_get_removed: function (/* sam_spotlight_changed_event_args_handle */ handle, /* sam_spotlighted_participant_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_spotlight_changed_event_args_get_removed === "function"){
            return sam_exports_impl.sam_spotlight_changed_event_args_get_removed(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlight_changed_event_args_release: function (/* sam_spotlight_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_spotlight_changed_event_args_release === "function"){
            return sam_exports_impl.sam_spotlight_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlighted_participant_addref: function (/* sam_spotlighted_participant_handle */ handle) {
        if (typeof sam_exports_impl.sam_spotlighted_participant_addref === "function"){
            return sam_exports_impl.sam_spotlighted_participant_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlighted_participant_get_participant: function (/* sam_spotlighted_participant_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_spotlighted_participant_get_participant === "function"){
            return sam_exports_impl.sam_spotlighted_participant_get_participant(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_spotlighted_participant_release: function (/* sam_spotlighted_participant_handle */ handle) {
        if (typeof sam_exports_impl.sam_spotlighted_participant_release === "function"){
            return sam_exports_impl.sam_spotlighted_participant_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default configuration
    //
    /* sam_status */ sam_start_call_options_create: function (/* sam_start_call_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_start_call_options_create === "function"){
            return sam_exports_impl.sam_start_call_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_call_options_get_alternate_id: function (/* sam_start_call_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_start_call_options_get_alternate_id === "function"){
            return sam_exports_impl.sam_start_call_options_get_alternate_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_call_options_get_audio_options: function (/* sam_start_call_options_handle */ handle, /* sam_audio_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_start_call_options_get_audio_options === "function"){
            return sam_exports_impl.sam_start_call_options_get_audio_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_call_options_get_video_options: function (/* sam_start_call_options_handle */ handle, /* sam_video_options_handle* */ result) {
        if (typeof sam_exports_impl.sam_start_call_options_get_video_options === "function"){
            return sam_exports_impl.sam_start_call_options_get_video_options(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_call_options_set_alternate_id: function (/* sam_start_call_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_start_call_options_set_alternate_id === "function"){
            return sam_exports_impl.sam_start_call_options_set_alternate_id(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_call_options_set_audio_options: function (/* sam_start_call_options_handle */ handle, /* sam_audio_options_handle */ value) {
        if (typeof sam_exports_impl.sam_start_call_options_set_audio_options === "function"){
            return sam_exports_impl.sam_start_call_options_set_audio_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_call_options_set_video_options: function (/* sam_start_call_options_handle */ handle, /* sam_video_options_handle */ value) {
        if (typeof sam_exports_impl.sam_start_call_options_set_video_options === "function"){
            return sam_exports_impl.sam_start_call_options_set_video_options(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_captions_options_addref: function (/* sam_start_captions_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_start_captions_options_addref === "function"){
            return sam_exports_impl.sam_start_captions_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Start captions options constructor.
    //
    /* sam_status */ sam_start_captions_options_create: function (/* sam_start_captions_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_start_captions_options_create === "function"){
            return sam_exports_impl.sam_start_captions_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_captions_options_get_spoken_language: function (/* sam_start_captions_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_start_captions_options_get_spoken_language === "function"){
            return sam_exports_impl.sam_start_captions_options_get_spoken_language(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_captions_options_release: function (/* sam_start_captions_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_start_captions_options_release === "function"){
            return sam_exports_impl.sam_start_captions_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_captions_options_set_spoken_language: function (/* sam_start_captions_options_handle */ handle, /* const char * */ value) {
        if (typeof sam_exports_impl.sam_start_captions_options_set_spoken_language === "function"){
            return sam_exports_impl.sam_start_captions_options_set_spoken_language(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with the given threadId
    //
    /* sam_status */ sam_start_teams_call_options_create: function (/* sam_start_teams_call_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_start_teams_call_options_create === "function"){
            return sam_exports_impl.sam_start_teams_call_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with the given threadId
    //
    /* sam_status */ sam_start_teams_group_call_options_create_string_thread_id: function (/* const char * */ thread_id, /* sam_start_teams_group_call_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_start_teams_group_call_options_create_string_thread_id === "function"){
            return sam_exports_impl.sam_start_teams_group_call_options_create_string_thread_id(thread_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_start_teams_group_call_options_get_thread_id: function (/* sam_start_teams_group_call_options_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_start_teams_group_call_options_get_thread_id === "function"){
            return sam_exports_impl.sam_start_teams_group_call_options_get_thread_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_switch_source_telemetry_event_addref: function (/* sam_switch_source_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_switch_source_telemetry_event_addref === "function"){
            return sam_exports_impl.sam_switch_source_telemetry_event_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_switch_source_telemetry_event_create_local_video_stream_local_stream: function (/* sam_local_video_stream_handle */ local_stream, /* sam_switch_source_telemetry_event_handle* */ instance) {
        if (typeof sam_exports_impl.sam_switch_source_telemetry_event_create_local_video_stream_local_stream === "function"){
            return sam_exports_impl.sam_switch_source_telemetry_event_create_local_video_stream_local_stream(local_stream, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_switch_source_telemetry_event_release: function (/* sam_switch_source_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_switch_source_telemetry_event_release === "function"){
            return sam_exports_impl.sam_switch_source_telemetry_event_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_switch_source_telemetry_event_send_attempt: function (/* sam_switch_source_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_switch_source_telemetry_event_send_attempt === "function"){
            return sam_exports_impl.sam_switch_source_telemetry_event_send_attempt(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_switch_source_telemetry_event_send_failure: function (/* sam_switch_source_telemetry_event_handle */ handle, /* const char * */ reason) {
        if (typeof sam_exports_impl.sam_switch_source_telemetry_event_send_failure === "function"){
            return sam_exports_impl.sam_switch_source_telemetry_event_send_failure(handle, reason);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_switch_source_telemetry_event_send_success: function (/* sam_switch_source_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_switch_source_telemetry_event_send_success === "function"){
            return sam_exports_impl.sam_switch_source_telemetry_event_send_success(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_add_participant: function (/* sam_teams_call_handle */ handle, /* const char * */ participant, /* sam_add_teams_participant_options_handle */ options, /* sam_remote_participant_handle* */ result) {
        if (typeof sam_exports_impl.sam_teams_call_add_participant === "function"){
            return sam_exports_impl.sam_teams_call_add_participant(handle, participant, options, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_get_calls: function (/* sam_teams_call_agent_handle */ handle, /* sam_teams_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_teams_call_agent_get_calls === "function"){
            return sam_exports_impl.sam_teams_call_agent_get_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_join_internal: function (/* sam_teams_call_agent_handle */ handle, /* sam_join_teams_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_call_agent_join_internal === "function"){
            return sam_exports_impl.sam_teams_call_agent_join_internal(handle, meeting_locator, join_call_options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_join_internal_with_call_kit: function (/* sam_teams_call_agent_handle */ handle, /* sam_join_teams_meeting_locator_handle */ meeting_locator, /* sam_join_call_options_handle */ join_call_options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_call_agent_join_internal_with_call_kit === "function"){
            return sam_exports_impl.sam_teams_call_agent_join_internal_with_call_kit(handle, meeting_locator, join_call_options, call_id, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a default options
    //
    /* sam_status */ sam_teams_call_agent_options_create: function (/* sam_teams_call_agent_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_teams_call_agent_options_create === "function"){
            return sam_exports_impl.sam_teams_call_agent_options_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_set_calls_updated: function (/* sam_teams_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_calls_updated_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_agent_set_calls_updated === "function"){
            return sam_exports_impl.sam_teams_call_agent_set_calls_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_set_incoming_call_received: function (/* sam_teams_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_incoming_call_received_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_agent_set_incoming_call_received === "function"){
            return sam_exports_impl.sam_teams_call_agent_set_incoming_call_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_set_on_calls_updated: function (/* sam_teams_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_calls_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_agent_set_on_calls_updated === "function"){
            return sam_exports_impl.sam_teams_call_agent_set_on_calls_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_set_on_incoming_call: function (/* sam_teams_call_agent_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_incoming_call_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_agent_set_on_incoming_call === "function"){
            return sam_exports_impl.sam_teams_call_agent_set_on_incoming_call(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_start_call_internal: function (/* sam_teams_call_agent_handle */ handle, /* const char * */ participant, /* sam_start_teams_call_options_handle */ options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_call_agent_start_call_internal === "function"){
            return sam_exports_impl.sam_teams_call_agent_start_call_internal(handle, participant, options, call_id, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_start_call_with_context: function (/* sam_teams_call_agent_handle */ handle, /* sam_context_handle */ context, /* const char * */ participant, /* sam_start_teams_call_options_handle */ options, /* sam_teams_call_handle* */ result) {
        if (typeof sam_exports_impl.sam_teams_call_agent_start_call_with_context === "function"){
            return sam_exports_impl.sam_teams_call_agent_start_call_with_context(handle, context, participant, options, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_start_group_call_internal: function (/* sam_teams_call_agent_handle */ handle, /* const char * const* */ participants, /* int */ participants_count, /* sam_start_teams_group_call_options_handle */ options, /* const char * */ call_id, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_call_agent_start_group_call_internal === "function"){
            return sam_exports_impl.sam_teams_call_agent_start_group_call_internal(handle, participants, participants_count, options, call_id, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_agent_start_group_call_with_context: function (/* sam_teams_call_agent_handle */ handle, /* sam_context_handle */ context, /* const char * * */ participants, /* int */ participants_count, /* sam_start_teams_group_call_options_handle */ options, /* sam_teams_call_handle* */ result) {
        if (typeof sam_exports_impl.sam_teams_call_agent_start_group_call_with_context === "function"){
            return sam_exports_impl.sam_teams_call_agent_start_group_call_with_context(handle, context, participants, participants_count, options, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_get_info: function (/* sam_teams_call_handle */ handle, /* sam_teams_call_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_teams_call_get_info === "function"){
            return sam_exports_impl.sam_teams_call_get_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_info_get_thread_id: function (/* sam_teams_call_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_call_info_get_thread_id === "function"){
            return sam_exports_impl.sam_teams_call_info_get_thread_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_id_changed: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_id_changed === "function"){
            return sam_exports_impl.sam_teams_call_set_on_id_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_incoming_audio_state_changed: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_incoming_audio_state_changed === "function"){
            return sam_exports_impl.sam_teams_call_set_on_incoming_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_muted_by_others: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_muted_by_others === "function"){
            return sam_exports_impl.sam_teams_call_set_on_muted_by_others(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_outgoing_audio_state_changed: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_outgoing_audio_state_changed === "function"){
            return sam_exports_impl.sam_teams_call_set_on_outgoing_audio_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_remote_participants_updated: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_participants_updated_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_remote_participants_updated === "function"){
            return sam_exports_impl.sam_teams_call_set_on_remote_participants_updated(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_role_changed: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_role_changed === "function"){
            return sam_exports_impl.sam_teams_call_set_on_role_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_state_changed: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_state_changed === "function"){
            return sam_exports_impl.sam_teams_call_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_call_set_on_total_participant_count_changed: function (/* sam_teams_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_call_set_on_total_participant_count_changed === "function"){
            return sam_exports_impl.sam_teams_call_set_on_total_participant_count_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_calls_updated_event_args_addref: function (/* sam_teams_calls_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_teams_calls_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_teams_calls_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_calls_updated_event_args_get_added_calls: function (/* sam_teams_calls_updated_event_args_handle */ handle, /* sam_teams_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_teams_calls_updated_event_args_get_added_calls === "function"){
            return sam_exports_impl.sam_teams_calls_updated_event_args_get_added_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_calls_updated_event_args_get_removed_calls: function (/* sam_teams_calls_updated_event_args_handle */ handle, /* sam_teams_call_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_teams_calls_updated_event_args_get_removed_calls === "function"){
            return sam_exports_impl.sam_teams_calls_updated_event_args_get_removed_calls(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_calls_updated_event_args_release: function (/* sam_teams_calls_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_teams_calls_updated_event_args_release === "function"){
            return sam_exports_impl.sam_teams_calls_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_get_active_caption_language: function (/* sam_teams_captions_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_get_active_caption_language === "function"){
            return sam_exports_impl.sam_teams_captions_get_active_caption_language(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_get_supported_caption_languages: function (/* sam_teams_captions_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_teams_captions_get_supported_caption_languages === "function"){
            return sam_exports_impl.sam_teams_captions_get_supported_caption_languages(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_get_supported_caption_languages_flat: function (/* sam_teams_captions_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_teams_captions_get_supported_caption_languages_flat === "function"){
            return sam_exports_impl.sam_teams_captions_get_supported_caption_languages_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_get_supported_caption_languages_internal: function (/* sam_teams_captions_handle */ handle, /* const char * ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_teams_captions_get_supported_caption_languages_internal === "function"){
            return sam_exports_impl.sam_teams_captions_get_supported_caption_languages_internal(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_get_supported_caption_languages_internal_flat: function (/* sam_teams_captions_handle */ handle, /* const sam_u8 ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_teams_captions_get_supported_caption_languages_internal_flat === "function"){
            return sam_exports_impl.sam_teams_captions_get_supported_caption_languages_internal_flat(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_addref: function (/* sam_teams_captions_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_addref === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_get_caption_language: function (/* sam_teams_captions_received_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_get_caption_language === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_get_caption_language(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_get_caption_text: function (/* sam_teams_captions_received_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_get_caption_text === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_get_caption_text(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_get_result_type: function (/* sam_teams_captions_received_event_args_handle */ handle, /* sam_captions_result_type* */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_get_result_type === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_get_result_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_get_speaker: function (/* sam_teams_captions_received_event_args_handle */ handle, /* sam_caller_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_get_speaker === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_get_speaker(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_get_spoken_language: function (/* sam_teams_captions_received_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_get_spoken_language === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_get_spoken_language(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_get_spoken_text: function (/* sam_teams_captions_received_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_get_spoken_text === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_get_spoken_text(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_get_timestamp: function (/* sam_teams_captions_received_event_args_handle */ handle, /* int64_t* */ result) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_get_timestamp === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_get_timestamp(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_received_event_args_release: function (/* sam_teams_captions_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_teams_captions_received_event_args_release === "function"){
            return sam_exports_impl.sam_teams_captions_received_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_active_caption_language_changed: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_active_caption_language_changed === "function"){
            return sam_exports_impl.sam_teams_captions_set_active_caption_language_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_active_spoken_language_changed: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_active_spoken_language_changed === "function"){
            return sam_exports_impl.sam_teams_captions_set_active_spoken_language_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Set the captions language.
    //
    /* sam_status */ sam_teams_captions_set_caption_language: function (/* sam_teams_captions_handle */ handle, /* const char * */ language, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_captions_set_caption_language === "function"){
            return sam_exports_impl.sam_teams_captions_set_caption_language(handle, language, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_captions_enabled_changed: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_captions_enabled_changed === "function"){
            return sam_exports_impl.sam_teams_captions_set_captions_enabled_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_captions_received: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_captions_received_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_captions_received === "function"){
            return sam_exports_impl.sam_teams_captions_set_captions_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_on_active_caption_language_changed: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_on_active_caption_language_changed === "function"){
            return sam_exports_impl.sam_teams_captions_set_on_active_caption_language_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_on_active_spoken_language_changed: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_on_active_spoken_language_changed === "function"){
            return sam_exports_impl.sam_teams_captions_set_on_active_spoken_language_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_on_captions_enabled_changed: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_on_captions_enabled_changed === "function"){
            return sam_exports_impl.sam_teams_captions_set_on_captions_enabled_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_captions_set_on_captions_received: function (/* sam_teams_captions_handle */ handle, /* sam_callback_cookie */ value, /* sam_teams_captions_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_captions_set_on_captions_received === "function"){
            return sam_exports_impl.sam_teams_captions_set_on_captions_received(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Accept a teams incoming call
    //
    /* sam_status */ sam_teams_incoming_call_accept: function (/* sam_teams_incoming_call_handle */ handle, /* sam_accept_call_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_accept === "function"){
            return sam_exports_impl.sam_teams_incoming_call_accept(handle, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_incoming_call_accept_via_call_kit_internal: function (/* sam_teams_incoming_call_handle */ handle, /* sam_accept_call_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_accept_via_call_kit_internal === "function"){
            return sam_exports_impl.sam_teams_incoming_call_accept_via_call_kit_internal(handle, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_incoming_call_accept_with_context: function (/* sam_teams_incoming_call_handle */ handle, /* sam_context_handle */ context, /* sam_accept_call_options_handle */ options, /* sam_promise_handle */ promiseHandle) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_accept_with_context === "function"){
            return sam_exports_impl.sam_teams_incoming_call_accept_with_context(handle, context, options, promiseHandle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_incoming_call_get_call_info: function (/* sam_teams_incoming_call_handle */ handle, /* sam_teams_call_info_handle* */ result) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_get_call_info === "function"){
            return sam_exports_impl.sam_teams_incoming_call_get_call_info(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_incoming_call_received_event_args_addref: function (/* sam_teams_incoming_call_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_received_event_args_addref === "function"){
            return sam_exports_impl.sam_teams_incoming_call_received_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_incoming_call_received_event_args_get_incoming_call: function (/* sam_teams_incoming_call_received_event_args_handle */ handle, /* sam_teams_incoming_call_handle* */ result) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_received_event_args_get_incoming_call === "function"){
            return sam_exports_impl.sam_teams_incoming_call_received_event_args_get_incoming_call(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_incoming_call_received_event_args_release: function (/* sam_teams_incoming_call_received_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_received_event_args_release === "function"){
            return sam_exports_impl.sam_teams_incoming_call_received_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_incoming_call_set_on_call_ended: function (/* sam_teams_incoming_call_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_teams_incoming_call_set_on_call_ended === "function"){
            return sam_exports_impl.sam_teams_incoming_call_set_on_call_ended(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a threadId, OrganizerId, TenantId, MessageId
    //
    /* sam_status */ sam_teams_meeting_coordinates_locator_create_string_thread_id_guid_organizer_id_guid_tenant_id_string_message_id: function (/* const char * */ thread_id, /* sam_guid */ organizer_id, /* sam_guid */ tenant_id, /* const char * */ message_id, /* sam_teams_meeting_coordinates_locator_handle* */ instance) {
        if (typeof sam_exports_impl.sam_teams_meeting_coordinates_locator_create_string_thread_id_guid_organizer_id_guid_tenant_id_string_message_id === "function"){
            return sam_exports_impl.sam_teams_meeting_coordinates_locator_create_string_thread_id_guid_organizer_id_guid_tenant_id_string_message_id(thread_id, organizer_id, tenant_id, message_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_meeting_coordinates_locator_get_message_id: function (/* sam_teams_meeting_coordinates_locator_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_meeting_coordinates_locator_get_message_id === "function"){
            return sam_exports_impl.sam_teams_meeting_coordinates_locator_get_message_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_meeting_coordinates_locator_get_organizer_id: function (/* sam_teams_meeting_coordinates_locator_handle */ handle, /* sam_guid* */ result) {
        if (typeof sam_exports_impl.sam_teams_meeting_coordinates_locator_get_organizer_id === "function"){
            return sam_exports_impl.sam_teams_meeting_coordinates_locator_get_organizer_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_meeting_coordinates_locator_get_tenant_id: function (/* sam_teams_meeting_coordinates_locator_handle */ handle, /* sam_guid* */ result) {
        if (typeof sam_exports_impl.sam_teams_meeting_coordinates_locator_get_tenant_id === "function"){
            return sam_exports_impl.sam_teams_meeting_coordinates_locator_get_tenant_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_meeting_coordinates_locator_get_thread_id: function (/* sam_teams_meeting_coordinates_locator_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_meeting_coordinates_locator_get_thread_id === "function"){
            return sam_exports_impl.sam_teams_meeting_coordinates_locator_get_thread_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a new instance with a MeetingLink
    //
    /* sam_status */ sam_teams_meeting_link_locator_create_string_meeting_link: function (/* const char * */ meeting_link, /* sam_teams_meeting_link_locator_handle* */ instance) {
        if (typeof sam_exports_impl.sam_teams_meeting_link_locator_create_string_meeting_link === "function"){
            return sam_exports_impl.sam_teams_meeting_link_locator_create_string_meeting_link(meeting_link, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_meeting_link_locator_get_meeting_link: function (/* sam_teams_meeting_link_locator_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_meeting_link_locator_get_meeting_link === "function"){
            return sam_exports_impl.sam_teams_meeting_link_locator_get_meeting_link(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_teams_meeting_link_locator_get_meeting_link_uri: function (/* sam_teams_meeting_link_locator_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_teams_meeting_link_locator_get_meeting_link_uri === "function"){
            return sam_exports_impl.sam_teams_meeting_link_locator_get_meeting_link_uri(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_transcription_call_feature_get_is_transcription_active: function (/* sam_transcription_call_feature_handle */ handle, /* sam_bool_u8* */ result) {
        if (typeof sam_exports_impl.sam_transcription_call_feature_get_is_transcription_active === "function"){
            return sam_exports_impl.sam_transcription_call_feature_get_is_transcription_active(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_transcription_call_feature_set_is_transcription_active_changed: function (/* sam_transcription_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_event_args_event_handler */ value_fn) {
        if (typeof sam_exports_impl.sam_transcription_call_feature_set_is_transcription_active_changed === "function"){
            return sam_exports_impl.sam_transcription_call_feature_set_is_transcription_active_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_transcription_call_feature_set_on_is_transcription_active_changed: function (/* sam_transcription_call_feature_handle */ handle, /* sam_callback_cookie */ value, /* sam_property_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_transcription_call_feature_set_on_is_transcription_active_changed === "function"){
            return sam_exports_impl.sam_transcription_call_feature_set_on_is_transcription_active_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates an instance of of Azure.Communication.Calling.UnknownCallIdentifier
    /* sam_status */ sam_unknown_call_identifier_create_string_id: function (/* const char * */ id, /* sam_unknown_call_identifier_handle* */ instance) {
        if (typeof sam_exports_impl.sam_unknown_call_identifier_create_string_id === "function"){
            return sam_exports_impl.sam_unknown_call_identifier_create_string_id(id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_unknown_call_identifier_get_id: function (/* sam_unknown_call_identifier_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_unknown_call_identifier_get_id === "function"){
            return sam_exports_impl.sam_unknown_call_identifier_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Creates a UserIdentifier object
    //
    /* sam_status */ sam_user_call_identifier_create_string_id: function (/* const char * */ id, /* sam_user_call_identifier_handle* */ instance) {
        if (typeof sam_exports_impl.sam_user_call_identifier_create_string_id === "function"){
            return sam_exports_impl.sam_user_call_identifier_create_string_id(id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_user_call_identifier_get_id: function (/* sam_user_call_identifier_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_user_call_identifier_get_id === "function"){
            return sam_exports_impl.sam_user_call_identifier_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_binding_event_state_changed_event_args_addref: function (/* sam_video_binding_event_state_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_binding_event_state_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_video_binding_event_state_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_binding_event_state_changed_event_args_get_preview_id: function (/* sam_video_binding_event_state_changed_event_args_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_preview_id === "function"){
            return sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_preview_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_binding_event_state_changed_event_args_get_renderer_id: function (/* sam_video_binding_event_state_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_renderer_id === "function"){
            return sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_renderer_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_binding_event_state_changed_event_args_get_state: function (/* sam_video_binding_event_state_changed_event_args_handle */ handle, /* sam_video_binding_event_state* */ result) {
        if (typeof sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_state === "function"){
            return sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_state(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_binding_event_state_changed_event_args_get_video_binding_event_id: function (/* sam_video_binding_event_state_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_video_binding_event_id === "function"){
            return sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_video_binding_event_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_binding_event_state_changed_event_args_get_video_stream_id: function (/* sam_video_binding_event_state_changed_event_args_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_video_stream_id === "function"){
            return sam_exports_impl.sam_video_binding_event_state_changed_event_args_get_video_stream_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_binding_event_state_changed_event_args_release: function (/* sam_video_binding_event_state_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_binding_event_state_changed_event_args_release === "function"){
            return sam_exports_impl.sam_video_binding_event_state_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_constraints_addref: function (/* sam_video_constraints_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_constraints_addref === "function"){
            return sam_exports_impl.sam_video_constraints_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_video_constraints_create: function (/* sam_video_constraints_handle* */ instance) {
        if (typeof sam_exports_impl.sam_video_constraints_create === "function"){
            return sam_exports_impl.sam_video_constraints_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_constraints_get_incoming_video_constraints: function (/* sam_video_constraints_handle */ handle, /* sam_incoming_video_constraints_handle* */ result) {
        if (typeof sam_exports_impl.sam_video_constraints_get_incoming_video_constraints === "function"){
            return sam_exports_impl.sam_video_constraints_get_incoming_video_constraints(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_constraints_get_outgoing_video_constraints: function (/* sam_video_constraints_handle */ handle, /* sam_outgoing_video_constraints_handle* */ result) {
        if (typeof sam_exports_impl.sam_video_constraints_get_outgoing_video_constraints === "function"){
            return sam_exports_impl.sam_video_constraints_get_outgoing_video_constraints(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_constraints_release: function (/* sam_video_constraints_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_constraints_release === "function"){
            return sam_exports_impl.sam_video_constraints_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_constraints_set_incoming_video_constraints: function (/* sam_video_constraints_handle */ handle, /* sam_incoming_video_constraints_handle */ value) {
        if (typeof sam_exports_impl.sam_video_constraints_set_incoming_video_constraints === "function"){
            return sam_exports_impl.sam_video_constraints_set_incoming_video_constraints(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_constraints_set_outgoing_video_constraints: function (/* sam_video_constraints_handle */ handle, /* sam_outgoing_video_constraints_handle */ value) {
        if (typeof sam_exports_impl.sam_video_constraints_set_outgoing_video_constraints === "function"){
            return sam_exports_impl.sam_video_constraints_set_outgoing_video_constraints(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_addref: function (/* sam_video_device_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_device_info_addref === "function"){
            return sam_exports_impl.sam_video_device_info_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_get_camera_facing: function (/* sam_video_device_info_handle */ handle, /* sam_camera_facing* */ result) {
        if (typeof sam_exports_impl.sam_video_device_info_get_camera_facing === "function"){
            return sam_exports_impl.sam_video_device_info_get_camera_facing(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_get_device_type: function (/* sam_video_device_info_handle */ handle, /* sam_video_device_type* */ result) {
        if (typeof sam_exports_impl.sam_video_device_info_get_device_type === "function"){
            return sam_exports_impl.sam_video_device_info_get_device_type(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_get_id: function (/* sam_video_device_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_device_info_get_id === "function"){
            return sam_exports_impl.sam_video_device_info_get_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_get_name: function (/* sam_video_device_info_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_device_info_get_name === "function"){
            return sam_exports_impl.sam_video_device_info_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_get_video_device_kind: function (/* sam_video_device_info_handle */ handle, /* sam_video_device_kind* */ result) {
        if (typeof sam_exports_impl.sam_video_device_info_get_video_device_kind === "function"){
            return sam_exports_impl.sam_video_device_info_get_video_device_kind(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_release: function (/* sam_video_device_info_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_device_info_release === "function"){
            return sam_exports_impl.sam_video_device_info_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_device_info_updated_event_args_addref: function (/* sam_video_device_info_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_device_info_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_video_device_info_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_device_info_updated_event_args_get_renderer_id: function (/* sam_video_device_info_updated_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_device_info_updated_event_args_get_renderer_id === "function"){
            return sam_exports_impl.sam_video_device_info_updated_event_args_get_renderer_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_device_info_updated_event_args_release: function (/* sam_video_device_info_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_device_info_updated_event_args_release === "function"){
            return sam_exports_impl.sam_video_device_info_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_devices_updated_event_args_addref: function (/* sam_video_devices_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_devices_updated_event_args_addref === "function"){
            return sam_exports_impl.sam_video_devices_updated_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_devices_updated_event_args_get_added_video_devices: function (/* sam_video_devices_updated_event_args_handle */ handle, /* sam_video_device_info_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_video_devices_updated_event_args_get_added_video_devices === "function"){
            return sam_exports_impl.sam_video_devices_updated_event_args_get_added_video_devices(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_devices_updated_event_args_get_removed_video_devices: function (/* sam_video_devices_updated_event_args_handle */ handle, /* sam_video_device_info_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_video_devices_updated_event_args_get_removed_video_devices === "function"){
            return sam_exports_impl.sam_video_devices_updated_event_args_get_removed_video_devices(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_devices_updated_event_args_release: function (/* sam_video_devices_updated_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_devices_updated_event_args_release === "function"){
            return sam_exports_impl.sam_video_devices_updated_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_addref: function (/* sam_video_effect_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_addref === "function"){
            return sam_exports_impl.sam_video_effect_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_disabled_event_args_addref: function (/* sam_video_effect_disabled_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_disabled_event_args_addref === "function"){
            return sam_exports_impl.sam_video_effect_disabled_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_disabled_event_args_get_video_effect_name: function (/* sam_video_effect_disabled_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_effect_disabled_event_args_get_video_effect_name === "function"){
            return sam_exports_impl.sam_video_effect_disabled_event_args_get_video_effect_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_disabled_event_args_release: function (/* sam_video_effect_disabled_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_disabled_event_args_release === "function"){
            return sam_exports_impl.sam_video_effect_disabled_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_enabled_event_args_addref: function (/* sam_video_effect_enabled_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_enabled_event_args_addref === "function"){
            return sam_exports_impl.sam_video_effect_enabled_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_enabled_event_args_get_video_effect_name: function (/* sam_video_effect_enabled_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_effect_enabled_event_args_get_video_effect_name === "function"){
            return sam_exports_impl.sam_video_effect_enabled_event_args_get_video_effect_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_enabled_event_args_release: function (/* sam_video_effect_enabled_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_enabled_event_args_release === "function"){
            return sam_exports_impl.sam_video_effect_enabled_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_error_event_args_addref: function (/* sam_video_effect_error_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_error_event_args_addref === "function"){
            return sam_exports_impl.sam_video_effect_error_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_error_event_args_get_code: function (/* sam_video_effect_error_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_effect_error_event_args_get_code === "function"){
            return sam_exports_impl.sam_video_effect_error_event_args_get_code(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_error_event_args_get_message: function (/* sam_video_effect_error_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_effect_error_event_args_get_message === "function"){
            return sam_exports_impl.sam_video_effect_error_event_args_get_message(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_error_event_args_get_video_effect_name: function (/* sam_video_effect_error_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_effect_error_event_args_get_video_effect_name === "function"){
            return sam_exports_impl.sam_video_effect_error_event_args_get_video_effect_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_error_event_args_release: function (/* sam_video_effect_error_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_error_event_args_release === "function"){
            return sam_exports_impl.sam_video_effect_error_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_get_name: function (/* sam_video_effect_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_effect_get_name === "function"){
            return sam_exports_impl.sam_video_effect_get_name(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_effect_release: function (/* sam_video_effect_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_effect_release === "function"){
            return sam_exports_impl.sam_video_effect_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_frame_size_changed_event_args_addref: function (/* sam_video_frame_size_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_frame_size_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_video_frame_size_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_frame_size_changed_event_args_get_height: function (/* sam_video_frame_size_changed_event_args_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_frame_size_changed_event_args_get_height === "function"){
            return sam_exports_impl.sam_video_frame_size_changed_event_args_get_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_frame_size_changed_event_args_get_width: function (/* sam_video_frame_size_changed_event_args_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_frame_size_changed_event_args_get_width === "function"){
            return sam_exports_impl.sam_video_frame_size_changed_event_args_get_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_frame_size_changed_event_args_release: function (/* sam_video_frame_size_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_frame_size_changed_event_args_release === "function"){
            return sam_exports_impl.sam_video_frame_size_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_mid_call_configurations_addref: function (/* sam_video_mid_call_configurations_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_mid_call_configurations_addref === "function"){
            return sam_exports_impl.sam_video_mid_call_configurations_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_video_mid_call_configurations_create: function (/* sam_video_mid_call_configurations_handle* */ instance) {
        if (typeof sam_exports_impl.sam_video_mid_call_configurations_create === "function"){
            return sam_exports_impl.sam_video_mid_call_configurations_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_mid_call_configurations_get_content_type_preference: function (/* sam_video_mid_call_configurations_handle */ handle, /* sam_video_content_type_preference* */ result) {
        if (typeof sam_exports_impl.sam_video_mid_call_configurations_get_content_type_preference === "function"){
            return sam_exports_impl.sam_video_mid_call_configurations_get_content_type_preference(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_mid_call_configurations_release: function (/* sam_video_mid_call_configurations_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_mid_call_configurations_release === "function"){
            return sam_exports_impl.sam_video_mid_call_configurations_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_mid_call_configurations_set_content_type_preference: function (/* sam_video_mid_call_configurations_handle */ handle, /* sam_video_content_type_preference */ value) {
        if (typeof sam_exports_impl.sam_video_mid_call_configurations_set_content_type_preference === "function"){
            return sam_exports_impl.sam_video_mid_call_configurations_set_content_type_preference(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_options_addref: function (/* sam_video_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_options_addref === "function"){
            return sam_exports_impl.sam_video_options_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Receives an array of OutgoingVideoStream's that will be added to the call once it start's.
    //
    /* sam_status */ sam_video_options_create_local_video_streams: function (/* sam_local_video_stream_handle const* */ local_video_streams, /* int */ local_video_streams_count, /* sam_video_options_handle* */ instance) {
        if (typeof sam_exports_impl.sam_video_options_create_local_video_streams === "function"){
            return sam_exports_impl.sam_video_options_create_local_video_streams(local_video_streams, local_video_streams_count, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_options_get_local_video_streams: function (/* sam_video_options_handle */ handle, /* sam_local_video_stream_handle ** */ result, /* int* */ result_count) {
        if (typeof sam_exports_impl.sam_video_options_get_local_video_streams === "function"){
            return sam_exports_impl.sam_video_options_get_local_video_streams(handle, result, result_count);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_options_release: function (/* sam_video_options_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_options_release === "function"){
            return sam_exports_impl.sam_video_options_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_stream_format_addref: function (/* sam_video_stream_format_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_stream_format_addref === "function"){
            return sam_exports_impl.sam_video_stream_format_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_stream_format_changed_event_args_addref: function (/* sam_video_stream_format_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_stream_format_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_video_stream_format_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_changed_event_args_get_format: function (/* sam_video_stream_format_changed_event_args_handle */ handle, /* sam_video_stream_format_handle* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_changed_event_args_get_format === "function"){
            return sam_exports_impl.sam_video_stream_format_changed_event_args_get_format(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_stream_format_changed_event_args_release: function (/* sam_video_stream_format_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_stream_format_changed_event_args_release === "function"){
            return sam_exports_impl.sam_video_stream_format_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default constructor
    //
    /* sam_status */ sam_video_stream_format_create: function (/* sam_video_stream_format_handle* */ instance) {
        if (typeof sam_exports_impl.sam_video_stream_format_create === "function"){
            return sam_exports_impl.sam_video_stream_format_create(instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_frames_per_second: function (/* sam_video_stream_format_handle */ handle, /* float* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_frames_per_second === "function"){
            return sam_exports_impl.sam_video_stream_format_get_frames_per_second(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_height: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_height === "function"){
            return sam_exports_impl.sam_video_stream_format_get_height(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_pixel_format: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_pixel_format* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_pixel_format === "function"){
            return sam_exports_impl.sam_video_stream_format_get_pixel_format(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_resolution: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_resolution* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_resolution === "function"){
            return sam_exports_impl.sam_video_stream_format_get_resolution(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_stride1: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_stride1 === "function"){
            return sam_exports_impl.sam_video_stream_format_get_stride1(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_stride2: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_stride2 === "function"){
            return sam_exports_impl.sam_video_stream_format_get_stride2(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_stride3: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_stride3 === "function"){
            return sam_exports_impl.sam_video_stream_format_get_stride3(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_get_width: function (/* sam_video_stream_format_handle */ handle, /* int* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_format_get_width === "function"){
            return sam_exports_impl.sam_video_stream_format_get_width(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_stream_format_release: function (/* sam_video_stream_format_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_stream_format_release === "function"){
            return sam_exports_impl.sam_video_stream_format_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_frames_per_second: function (/* sam_video_stream_format_handle */ handle, /* float */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_frames_per_second === "function"){
            return sam_exports_impl.sam_video_stream_format_set_frames_per_second(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_height: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_height === "function"){
            return sam_exports_impl.sam_video_stream_format_set_height(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_pixel_format: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_pixel_format */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_pixel_format === "function"){
            return sam_exports_impl.sam_video_stream_format_set_pixel_format(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_resolution: function (/* sam_video_stream_format_handle */ handle, /* sam_video_stream_resolution */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_resolution === "function"){
            return sam_exports_impl.sam_video_stream_format_set_resolution(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_stride1: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_stride1 === "function"){
            return sam_exports_impl.sam_video_stream_format_set_stride1(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_stride2: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_stride2 === "function"){
            return sam_exports_impl.sam_video_stream_format_set_stride2(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_stride3: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_stride3 === "function"){
            return sam_exports_impl.sam_video_stream_format_set_stride3(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_format_set_width: function (/* sam_video_stream_format_handle */ handle, /* int */ value) {
        if (typeof sam_exports_impl.sam_video_stream_format_set_width === "function"){
            return sam_exports_impl.sam_video_stream_format_set_width(handle, value);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_stream_state_changed_event_args_addref: function (/* sam_video_stream_state_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_stream_state_changed_event_args_addref === "function"){
            return sam_exports_impl.sam_video_stream_state_changed_event_args_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_state_changed_event_args_get_message: function (/* sam_video_stream_state_changed_event_args_handle */ handle, /* const char ** */ result) {
        if (typeof sam_exports_impl.sam_video_stream_state_changed_event_args_get_message === "function"){
            return sam_exports_impl.sam_video_stream_state_changed_event_args_get_message(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_video_stream_state_changed_event_args_get_stream: function (/* sam_video_stream_state_changed_event_args_handle */ handle, /* sam_call_video_stream_handle* */ result) {
        if (typeof sam_exports_impl.sam_video_stream_state_changed_event_args_get_stream === "function"){
            return sam_exports_impl.sam_video_stream_state_changed_event_args_get_stream(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Default destructor
    //
    /* sam_status */ sam_video_stream_state_changed_event_args_release: function (/* sam_video_stream_state_changed_event_args_handle */ handle) {
        if (typeof sam_exports_impl.sam_video_stream_state_changed_event_args_release === "function"){
            return sam_exports_impl.sam_video_stream_state_changed_event_args_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_addref: function (/* sam_view_lifecycle_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_addref === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_addref(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_create_for_local_stream: function (/* sam_guid */ view_id, /* sam_local_video_stream_handle */ local_stream, /* sam_view_lifecycle_telemetry_event_handle* */ result) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_create_for_local_stream === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_create_for_local_stream(view_id, local_stream, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_create_for_remote_stream: function (/* sam_guid */ view_id, /* sam_remote_video_stream_handle */ remote_stream, /* sam_view_lifecycle_telemetry_event_handle* */ result) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_create_for_remote_stream === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_create_for_remote_stream(view_id, remote_stream, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_create_guid_view_id: function (/* sam_guid */ view_id, /* sam_view_lifecycle_telemetry_event_handle* */ instance) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_create_guid_view_id === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_create_guid_view_id(view_id, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_get_view_id: function (/* sam_view_lifecycle_telemetry_event_handle */ handle, /* sam_guid* */ result) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_get_view_id === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_get_view_id(handle, result);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_release: function (/* sam_view_lifecycle_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_release === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_release(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_send_create_view_attempt: function (/* sam_view_lifecycle_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_send_create_view_attempt === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_send_create_view_attempt(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_send_create_view_failed: function (/* sam_view_lifecycle_telemetry_event_handle */ handle, /* const char * */ reason) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_send_create_view_failed === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_send_create_view_failed(handle, reason);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_send_create_view_success: function (/* sam_view_lifecycle_telemetry_event_handle */ handle, /* int */ width, /* int */ height) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_send_create_view_success === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_send_create_view_success(handle, width, height);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_send_dispose_view_attempt: function (/* sam_view_lifecycle_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_send_dispose_view_attempt === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_send_dispose_view_attempt(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_send_dispose_view_failed: function (/* sam_view_lifecycle_telemetry_event_handle */ handle, /* const char * */ reason) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_send_dispose_view_failed === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_send_dispose_view_failed(handle, reason);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_view_lifecycle_telemetry_event_send_dispose_view_success: function (/* sam_view_lifecycle_telemetry_event_handle */ handle) {
        if (typeof sam_exports_impl.sam_view_lifecycle_telemetry_event_send_dispose_view_success === "function"){
            return sam_exports_impl.sam_view_lifecycle_telemetry_event_send_dispose_view_success(handle);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    //
    // Constructor used to create an instance of a stream that send's generated frames from external sources
    //
    /* sam_status */ sam_virtual_outgoing_video_stream_create_raw_outgoing_video_stream_options_video_stream_options: function (/* sam_raw_outgoing_video_stream_options_handle */ video_stream_options, /* sam_virtual_outgoing_video_stream_handle* */ instance) {
        if (typeof sam_exports_impl.sam_virtual_outgoing_video_stream_create_raw_outgoing_video_stream_options_video_stream_options === "function"){
            return sam_exports_impl.sam_virtual_outgoing_video_stream_create_raw_outgoing_video_stream_options_video_stream_options(video_stream_options, instance);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_virtual_outgoing_video_stream_set_on_format_changed: function (/* sam_virtual_outgoing_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_format_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_virtual_outgoing_video_stream_set_on_format_changed === "function"){
            return sam_exports_impl.sam_virtual_outgoing_video_stream_set_on_format_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    },
    /* sam_status */ sam_virtual_outgoing_video_stream_set_on_state_changed: function (/* sam_virtual_outgoing_video_stream_handle */ handle, /* sam_callback_cookie */ value, /* sam_video_stream_state_changed_delegate */ value_fn) {
        if (typeof sam_exports_impl.sam_virtual_outgoing_video_stream_set_on_state_changed === "function"){
            return sam_exports_impl.sam_virtual_outgoing_video_stream_set_on_state_changed(handle, value, value_fn);
        }
        else {
            return sam_status.not_implemented;
        }
    }
});
