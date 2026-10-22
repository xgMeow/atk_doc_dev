---
groups: [3D Graphics, Satellite]
---

# VO OrbitSystem

## Description

Sets the relative trajectory of the satellite.

## Syntax

```atk-command
VO <VehObjectPath> OrbitSystem {Action} {Options}
```

## Parameters

| Parameter | Description |
|------|------|
| `<VehObjectPath>` | Full path of the vehicle object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

- `{Action}` includes the attributes `Add`, `Remove`, and `Modify`

| `Options` | Description |
| --- | --- |
| `System {SystemDefn}` | `{SystemDefn}` is described below |
| `Color {{Color} \| Default}` | `Default` indicates that no custom color is used |
| `Show {On \| Off}` | Whether the relative trajectory is shown |

`{SystemDefn}` may take the following values:

| `SystemDefn` | Description |
| --- | --- |
| `FixedByWindow` | Fixed frame of the central body of the window |
| `InertialByWindow` | Inertial frame of the central body of the window |
| `<SystemDef>` | Adds a VGT frame |
| `BBR <PrimaryCBName> <SecondaryCBname>` | Adds a BBR frame |
| `VVLH <ObjTruncPath>` | Adds a VVLH frame |

## Applies To

Satellite

## Examples

::: details open **Add a relative trajectory**
```
VO */Satellite/Satellite1 OrbitSystem Add System "InertialByWindow" Show Off
```
:::

::: details open **Modify a relative trajectory**
```
VO */Satellite/Satellite1 OrbitSystem Modify System VVLH "Satellite/Satellite3" Color red
```
:::

::: details open **Remove a relative trajectory**
```
VO */Satellite/Satellite1 OrbitSystem Remove System "CentralBody/Mars Inertial"
```
:::
