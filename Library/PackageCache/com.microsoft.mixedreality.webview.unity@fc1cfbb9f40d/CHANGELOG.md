# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.18.0-pre.5] - 2024-05-07

### Added

- Added support for SSO
- Added new permission-related APIs:
    - `GetNonDefaultPermissionSettings()`
    - `SetPermissionState()`
    - `PermissionRequested` event
- Added new events:
    - `NavigationStarting`
    - `NavigationCompleted`
    - `DocumentTitleChanged`
