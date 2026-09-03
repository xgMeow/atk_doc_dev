# Rosette

## Description

Creates a Rosette constellation.

## Syntax

```atk-command
Rosette / {RosetteOptions} [{AdditionalOptions}]
```

## Parameters

| `WalkerCustomOptions` | `Options` |
| --- | --- |
| `NumPlanes` | `<num>` |
| `TotalNumSats` | `<num>` |
| `Molecule` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## Examples

::: details open **Create a Rosette Constellation (Using an Existing Satellite)**
```
Rosette */Satellite/Satellite1 NumPlanes 20 TotalNumSats 20 Molecule 1 ColorByPlane Yes
```
:::

::: details open **Create a Rosette Constellation (Create New Satellites Directly)**
```
Rosette / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180  
NumPlanes 20 TotalNumSats 20 Molecule 1 ColorByPlane Yes
```
:::
