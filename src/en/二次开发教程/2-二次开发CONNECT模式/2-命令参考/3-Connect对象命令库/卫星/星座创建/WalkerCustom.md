# WalkerCustom

## Description

Creates a WalkerCustom constellation.

## Syntax

```atk-command
WalkerCustom / {WalkerCustomOptions} [{AdditionalOptions}]
```

## Parameters

| `WalkerCustomOptions` | `Options` |
| --- | --- |
| `NumPlanes` | `<num>` |
| `TotalNumSats` | `<num>` |
| `InterPlaneTrueAnomalyIncrement` | `<Value>` |
| `RAANIncrement` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## Examples

::: details open **Create a WalkerCustom Constellation (Using an Existing Satellite)**
```
WalkerCustom */Satellite/Satellite1 NumPlanes 2 TotalNumSats 20 InterPlaneTrueAnomalyIncrement 20 RAANIncrement 20 ColorByPlane Yes
```
:::

::: details open **Create a WalkerCustom Constellation (Create New Satellites Directly)**
```
WalkerCustom / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 NumPlanes 2 TotalNumSats 20 InterPlaneTrueAnomalyIncrement 20 RAANIncrement 20 ColorByPlane Yes
```
:::
