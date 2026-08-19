---
description: Complete guide to installing ATK on Kylin OS using the deb package, including both graphical and command-line installation methods.
---

# deb Package

## Installation

::: info Package Format
Package extension: `.deb`
:::

### Prerequisites

- Operating system: Kylin OS V10 or later
- CPU architecture: x86_64 or arm64
- The `dpkg` package manager must be installed (installed by default on Kylin OS)

::: warning Important
An architecture mismatch will prevent the software from starting. Confirm your system architecture with the `uname -m` command before downloading the installation package.
:::

### Installing the deb Package

#### Method 1: Graphical Installation (Recommended)

Double-click the deb package to start the installation process automatically.

#### Method 2: Command-Line Installation

If the desktop environment cannot recognize the package, open a terminal and run:

```bash :no-line-numbers
sudo dpkg -i <deb-file-path>
```

::: info Installation Example
Example: `sudo dpkg -i ./ATK_3.0.0_x86_64.deb`
:::

If you encounter dependency errors during installation, run the following command to fix dependencies and then reinstall:

```bash :no-line-numbers
sudo apt -f install
```

After installation, the software is deployed to `/opt/ATK` by default, and a shortcut is automatically created in the application menu.

### Launching the Software

Launch ATK from the application menu shortcut.

If the shortcut does not work, navigate to `/opt/ATK` and run the following command:

```bash :no-line-numbers
cd /opt/ATK
 ./ATK.sh
```

### Software Registration

ATK is free to use, but **registration is required on first launch**. Without registration, the software features will not be available.

::: warning Important
Before registering, make sure you have obtained a Register Id. If you have not yet obtained one, refer to [How to Get a Register Id](../../03-ATK注册码获取指南/README.md).
:::

1. Launch the software. The **ATK License Agreement** dialog will appear automatically.
2. After reading the agreement carefully, check **I have read the agreement**, and click <kbd>Agree</kbd> to enter the **ATK Registration** window.
3. The **Machine Code** in the registration window is generated automatically and does not need to be modified.
4. Enter the obtained Register Id in the input field, and click <kbd>Register</kbd> to activate.

## Uninstall

To uninstall ATK installed via the deb package, run one of the following commands:

```bash :no-line-numbers
sudo apt remove ATK
```

or

```bash :no-line-numbers
sudo dpkg -r ATK
```

::: warning Caution
Before uninstalling, make sure you have backed up any important data files (such as scenario files, reports, etc.). Data files generated during runtime are stored by default in the **ATK folder under the user's documents directory** (e.g., `~/Documents/ATK/`, depending on system locale settings), not in the installation directory.
:::