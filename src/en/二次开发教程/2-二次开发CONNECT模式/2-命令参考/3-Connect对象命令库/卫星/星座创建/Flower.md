# Flower

## Description

Creates a Flower constellation.

## Syntax

```atk-command
Flower / {FlowerOptions} [{AdditionalOptions}]
```

## Parameters

| `FlowerOptions` | `Options` |
| --- | --- |
| `TotalNumSats` | `<num>` |
| `InterPlaneTrueAnomalyIncrement` | `<Value>` |
| `ReturnCircle` | `<Value>` |
| `ReturnDay` | `<Value>` |
| `PhaseDensity` | `<Value>` |
| `RAANSpread` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## Examples

::: details open **Create a Flower Constellation (Using an Existing Satellite)**
```
Flower */Satellite/Satellite1 TotalNumSats 16 InterPlanePhaseIncrement 1 ReturnCircle 16 ReturnDay 1 PhaseDensity 16 RAANSpread 360 ColorByPlane Yes
```
:::

::: details open **Create a Flower Constellation (Create New Satellites Directly)**
```
Flower / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 TotalNumSats 16 InterPlanePhaseIncrement 1 ReturnCircle 16 ReturnDay 1 PhaseDensity 16 RAANSpread 360 ColorByPlane Yes
```
:::
