# WalkerDelta

## Description

Creates a WalkerDelta constellation.

## Syntax

```atk-command
WalkerDelta / {WalkerDeltaOptions} [{AdditionalOptions}]
```

## Parameters

| `WalkerDeltaOptions` | `Options` |
| --- | --- |
| `NumPlanes` | `<num>` |
| `NumSatsPerPlane` | `<num>` |
| `InterPlanePhaseIncrement` | `<Value>` |
| `RAANSpread` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## Examples

::: details open **Create a WalkerDelta Constellation (Using an Existing Satellite)**
```
WalkerDelta */Satellite/Satellite1 NumPlanes 2 NumSatsPerPlane 11 InterPlanePhaseIncrement 1 RAANSpread 360 ColorByPlane Yes
```
:::

::: details open **Create a WalkerDelta Constellation (Create New Satellites Directly)**
```
WalkerDelta / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 NumPlanes 2 NumSatsPerPlane 8 InterPlanePhaseIncrement 1 RAANSpread 360 ColorByPlane Yes
```
:::
