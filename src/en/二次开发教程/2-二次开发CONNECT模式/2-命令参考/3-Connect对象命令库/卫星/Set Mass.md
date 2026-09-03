# Set Mass

## Description

Sets the satellite mass and the moment of inertia matrix.

## Syntax

```atk-command
SetMass <SatObjectPath> {DefineOption} <Parameters>
```

## Parameters

| `DefineOption` | `Parameters` | Description |
| --- | --- | --- |
| `Value` | `<Mass>` | Sets the mass |
| `Matrix` | `<lxx> <lxy> <lyy> <lxz> <lyz> <lzz>` | Sets the moment of inertia |

## Examples

::: details open **Set the Satellite Mass and Moment of Inertia Matrix**
```
SetMass */Satellite/Satellite1 Matrix 1290.0 1291.0 1292.0 1293.0 1294.0 1295.0
```
:::
