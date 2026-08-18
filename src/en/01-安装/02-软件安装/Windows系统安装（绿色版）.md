---
description: Guide to extracting, launching, registering, and uninstalling the portable Windows version of ATK.
---

# Windows (Portable)

## Installation

ATK for Windows is provided as a **portable version** — simply extract and run.

### Prerequisites

- Operating system: Windows 7 SP1 / Windows 8 / Windows 10 / Windows 11
- CPU architecture: x86_64 (AMD64)

::: warning Important
Confirm that your CPU architecture is 64-bit via **Settings → System → About → System type**, then download the corresponding installation package.
:::

### Extract the Package

1. Download the ATK portable archive and extract it to any local folder.

2. It is recommended to extract it to a separate folder on a non-system drive, such as `D:\ATK` (the folder name can be customized). Avoid paths that contain Chinese characters, spaces, or special symbols.

3. The directory structure after extraction is as follows:

    ```text :no-line-numbers
    <Extraction Directory>/    # Main program directory
    ├── ATK.exe               # Main executable
    ├── AstroData/            # Astronomical data directory
    ├── config/               # Configuration files directory
    ├── Help/                 # Help documentation directory
    ├── IntegratingWithATK/   # External integration interfaces directory
    ├── licenses/             # Open-source licenses directory
    ├── platforms/            # Platform plugins directory
    ├── translations/         # UI translation files directory
    └── ...                   # Other runtime dependency files
    ```

#### Important Directories

| Directory | Description |
|-----------|-------------|
| `ATK.exe` | Main executable file. Double-click to launch the software. |
| `config/` | Stores software configuration files, including UI layout and user settings. |
| `Help/`   | Help documentation directory, containing built-in user guides and examples (see below). |
| `IntegratingWithATK/` | Files related to external system integration, for secondary development or API calls. |
| `translations/` | Multilingual translation files, supporting Chinese and English UI switching. |
| `licenses/` | License files for third-party open-source components. |

#### Help Directory

The `Help` directory contains the built-in help documentation and related resources:

```text :no-line-numbers
Help/
├── Examples/        # Example files directory, containing software feature demos
├── html/            # Offline help documentation in HTML format
└── VC运行库/        # Visual C++ runtime library dependencies
```

::: note Help Directory
The `Examples/` directory contains example files for various typical scenarios that users can open directly for reference. The `html/` directory contains the web version of the software help manual.
:::

### Launching the Software

Double-click `ATK.exe` to launch the software.

### Software Registration

ATK is free to use, but **registration is required on first launch**. Without registration, the software features will not be available.

::: warning Important
Before registering, make sure you have obtained a Register Id. If you have not yet obtained one, refer to [How to Get a Register Id](../03-ATK注册码获取指南/README.md).
:::

1. Double-click `ATK.exe`. The **ATK License Agreement** dialog will appear automatically.

2. After reading the agreement carefully, check **I have read the agreement**, and click <kbd>Agree</kbd> to enter the **ATK Registration** window.

3. The **Machine Code** in the registration window is generated automatically and does not need to be modified.

4. Enter the obtained Register Id in the input field, and click <kbd>Register</kbd> to activate.

::: tip Note
The portable version requires no installation. Registration information is stored in the software directory. If you change computers, you need to register again.
:::

## Uninstall

The Windows portable version of ATK does not require an uninstaller. Simply delete the extraction directory to remove it.

::: warning Caution
Before deleting, make sure you have backed up any important data files (such as scenario files, reports, etc.). Data files generated during runtime are stored by default in the **ATK folder under the user's Documents directory** (e.g., `C:\Users\<username>\Documents\ATK\`), not in the installation directory.
:::