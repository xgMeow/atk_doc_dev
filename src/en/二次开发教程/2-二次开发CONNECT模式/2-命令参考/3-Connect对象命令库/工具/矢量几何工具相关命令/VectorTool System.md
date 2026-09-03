# VectorTool System

## Description

Define and modify `System` components.

## Syntax

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} System <SystemName> [{SystemType} <SystemTypeParams>]
```

## Parameters

| `{Action}` | Parameters | Description |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{SystemType} [<SystemTypeParams>]` | `<SystemTypeParams>` is optional; see the table below for detailed parameters. If `<SystemTypeParams>` is not specified, default values are used. |
| Modify | `{SystemType} [<SystemTypeParams>]` | `<SystemName> {SystemType}` must define an existing system component. `{SystemType}` cannot be modified. `<SystemTypeParams>` is required. |
| Delete | | Delete the system component defined by `<SystemName>`. |

| `{SystemType}` | `<SystemTypeParams>` |
| ------------------------------------- | ------------------  |
| "Assembled" | |
| "Launch" | `"<ReferencePoint>" <CentralBodyName> <AngleValue>` |
| "LaunchInertial" | `"<ReferencePoint>" <CentralBodyName> <AngleValue> <Epoch>` |
| "Topocentric" | `"<ReferencePoint>" <CentralBodyName>` |

## Examples

::: details open **Create a System component**
```
VectorTool * Satellite/Satellite1 Create System SatSystem1 "LaunchInertial"
```
:::

::: details open **Modify a System component**
```
VectorTool * Satellite/Satellite1 Modify System SatSystem1 "LaunchInertial" "CentralBody/Earth ICRF.Origin" Moon 30 "26 Mar 2026 00:00:00.000"
```
:::

::: details open **Delete a System component**
```
VectorTool * Satellite/Satellite1 Delete System SatSystem1 
```
:::

::: details open **Create an Assembled System**
```
VectorTool * Satellite/Satellite1 Create System SatSystemAssembled "Assembled" "CentralBody/Earth ICRF.Origin" "Satellite/Satellite2 VVLH.Axes"
```
:::

::: details open **Create a Launch System**
```
VectorTool * Satellite/Satellite1 Create System SatSystemLaunch "Launch" "CentralBody/Earth ICRF.Origin" Moon 12
```
:::

::: details open **Create a LaunchInertial System**
```
VectorTool * Satellite/Satellite1 Create System SatSystemLaunchInertial "LaunchInertial" "CentralBody/Earth ICRF.Origin" Moon 12 "13 Mar 2026 01:00:00.000"
```
:::

::: details open **Create a Topocentric System**
```
VectorTool * Satellite/Satellite1 Create System SatSystemTopocentric "Topocentric" "CentralBody/Earth ICRF.Origin" Moon
```
:::
