---
description: Adds a set of Euler angle attitude data to the object.
groups: [Missile, LaunchVehicle, Satellite, Attitude and Pointing]
---

# AddAttitude Euler

## Description

Adds a set of Euler angle attitude data to the object.

## Syntax

```atk-command
AddAttitude <ObjectPath> Euler {StartTime} {Sequence} <Angle1> <Angle2> <Angle3>
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written out from the scenario `*`, for example `*/Satellite/Satellite1` |
| `{StartTime}` | Start time; for format settings, see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md) |
| `{Sequence}` | Euler angle rotation sequence, for example `321` |
| `<Angle1> <Angle2> <Angle3>` | Three angle values; the unit is determined by the current Connect `Angle` unit setting, and the default is deg |

::: warning Note
The times entered in the command must be in increasing order.
:::

## Applies To

Satellite, Missile, LaunchVehicle

## Examples

::: details open **Add Euler Angle Attitude Data**
```
AddAttitude */Satellite/Satellite1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::

::: details open **Add Euler Angle Attitude Data**
```
AddAttitude */Satellite/Satellite1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::

::: details open **Set Attitude Data from Euler Angles**
```
AddAttitude */Missile/Missile1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::

::: details open **Add Euler Angle Attitude Data**
```
AddAttitude */LaunchVehicle/LaunchVehicle1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::
