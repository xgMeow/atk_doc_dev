---
description: Sets the object state using an ephemeris file.
groups: [Missile, LaunchVehicle, Satellite]
---

# SetState FromFile

## Description

Sets the object state using an ephemeris file.

## Syntax

```atk-command
SetState <VehObjectPath> FromFile "<FilePath>"
```

## Parameters

| Parameter | Description |
|------|------|
| `<VehObjectPath>` | Full object path, written in full from the scenario `*`, e.g. `*/Satellite/Satellite1` |
| `<FilePath>` | Ephemeris file path; double quotes are required, e.g. `"C:\atk\User\Data\EphemFile.e"` |

## Applies To

Satellite, Missile, LaunchVehicle

## Examples

::: details open **Set the Object State Using an Ephemeris File**
```
SetState */Satellite/Satellite1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::

::: details open **Set the Satellite Object State Using an Ephemeris File**
```
SetState */Satellite/Satellite1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::

::: details open **Set the Missile Trajectory Using an Ephemeris File**
```
SetState */Missile/Missile1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::

::: details open **Set the LaunchVehicle Trajectory Using an Ephemeris File**
```
SetState */LaunchVehicle/LaunchVehicle1 FromFile "C:\atk\User\Data\EphemFile.e"
```
:::
