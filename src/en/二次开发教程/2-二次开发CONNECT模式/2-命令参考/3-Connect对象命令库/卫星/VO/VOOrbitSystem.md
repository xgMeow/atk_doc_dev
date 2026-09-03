# VOOrbitSystem

## Description

Sets the relative trajectory of the satellite.

## Syntax

```atk-command
VO <VehObjectPath> OrbitSystem {Action} {Options}
```

## Parameters

- `{Action}` includes the attributes `Add`, `Remove`, and `Modify`

| `Options` | Description |
| --- | --- |
| `System {SystemDefn}` | `{SystemDefn}` is described below |
| `Color {{Color} \| Default}` | `Default` indicates that no custom color is used |
| `Show {On \| Off}` | Whether the relative trajectory is shown |

| `SystemDefn` | Description |
| --- | --- |
| `FixedByWindow` | Fixed frame of the central body of the window |
| `InertialByWindow` | Inertial frame of the central body of the window |
| `<SystemDef>` | Adds a VGT frame |
| `BBR <PrimaryCBName> <SecondaryCBname>` | Adds a BBR frame |
| `VVLH <ObjTruncPath>` | Adds a VVLH frame |

## Examples

::: details open **Add the Relative Trajectory of a Satellite**
```
VO */Satellite/Satellite1 OrbitSystem Add System "InertialByWindow" Show Off
```
:::

::: details open **Modify the Relative Trajectory of a Satellite**
```
VO */Satellite/Satellite1 OrbitSystem Modify System VVLH "Satellite/Satellite3" Color red
```
:::

::: details open **Remove the Relative Trajectory of a Satellite**
```
VO */Satellite/Satellite1 OrbitSystem Remove System "CentralBody/Mars Inertial"
```
:::
