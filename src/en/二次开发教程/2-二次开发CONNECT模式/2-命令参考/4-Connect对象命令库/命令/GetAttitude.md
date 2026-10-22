---
description: Obtains the attitude type of an object.
groups: [Missile, LaunchVehicle, Satellite, Attitude and Pointing]
---

# GetAttitude

## Description

Obtains the attitude type of an object.

## Syntax

```atk-command
GetAttitude <ObjectPath> {AttOption}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written out from the scenario `*`, for example `*/Satellite/Satellite1` |
| `{AttOption}` | Includes the attributes `Profile ConnectName` and `Profile LongName` |

## Applies To

Satellite, Missile, LaunchVehicle

## Examples

::: details open **Obtain the attitude type of an object**
```
GetAttitude */Satellite/Satellite1 Profile LongName
```
:::

::: details open **Obtain the attitude type of a satellite**
```
GetAttitude */Satellite/Satellite1 Profile LongName
```
:::

::: details open **Obtain the attitude type**
```
GetAttitude *//Missile/Missile1 Profile LongName
```
:::

::: details open **Obtain the LaunchVehicle attitude type**
```
GetAttitude */LaunchVehicle/LaunchVehicle1 Profile LongName
```
:::
