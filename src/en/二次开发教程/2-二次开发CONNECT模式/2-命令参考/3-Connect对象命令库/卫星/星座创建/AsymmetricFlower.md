# AsymmetricFlower

## Description

Creates an AsymmetricFlower constellation.

## Syntax

```atk-command
AsymmetricFlower / { AsymmetricFlowerOptions} [{AdditionalOptions}]
```

## Parameters

| `AsymmetricFlowerOptions` | `Options` |
| --- | --- |
| `TotalNumSats` | `<num>` |
| `ReturnCircle` | `<Value>` |
| `ReturnDay` | `<Value>` |
| `RAANIncrement` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## Examples

::: details open **Create an AsymmetricFlower Constellation (Using an Existing Satellite)**
```
AsymmetricFlower */Satellite/Satellite1  TotalNumSats 16 ReturnCircle 16 ReturnDay 1 RAANIncrement 30 ColorByPlane Yes
```
:::

::: details open **Create an AsymmetricFlower Constellation (Create New Satellites Directly)**
```
AsymmetricFlower / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180
TotalNumSats 16 ReturnCircle 16 ReturnDay 1 RAANIncrement 30 ColorByPlane Yes
```
:::
