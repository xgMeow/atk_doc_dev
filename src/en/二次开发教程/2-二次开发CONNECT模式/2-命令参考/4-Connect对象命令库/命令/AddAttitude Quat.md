---
description: Adds a set of quaternion attitude data to the object.
groups: [Missile, LaunchVehicle, Satellite, Attitude and Pointing]
---

# AddAttitude Quat

## Description

Adds a set of ECI J2000 quaternion attitude data to the object.

## Syntax

```atk-command
AddAttitude <ObjectPath> Quat {StartTime} <Q1> <Q2> <Q3> <Q4>
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written out from the scenario `*`, for example `*/Satellite/Satellite1` |
| `{StartTime}` | Start time; for format settings, see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md) |
| `<Q1>` `<Q2>` `<Q3>` | Set qx, qy, and qz |
| `<Q4>` | Sets qs |

::: warning Note
- The times entered in the command must be in increasing order.
- A value is set only when the difference between it and the original value exceeds `1e-6`.
:::

## Applies To

Satellite, Missile, LaunchVehicle

## Examples

::: details open **Add ECI J2000 Quaternion Attitude Data**
```
AddAttitude */Satellite/Satellite1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::

::: details open **Add ECI J2000 Quaternion Attitude Data**
```
AddAttitude */Satellite/Satellite1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::

::: details open **Set Attitude Data from Quaternions**
```
AddAttitude */Missile/Missile1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::

::: details open **Add Quaternion Attitude Data**
```
AddAttitude */LaunchVehicle/LaunchVehicle1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::
