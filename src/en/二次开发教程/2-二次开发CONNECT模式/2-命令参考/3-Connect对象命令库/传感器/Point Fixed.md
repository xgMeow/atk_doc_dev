---
description: Sets the fixed pointing property of the sensor, supporting multiple attitude representations such as azimuth-elevation, quaternion, Euler angle, YPR, and matrix.
---

# Point Fixed

## Description

Sets the fixed pointing property.

## Syntax

```atk-command
Point <SensorObjectPath> Fixed {OrientMethod} <MethodData>
```

## Parameters

| OrientMethod | MethodData                         | Description                                                                                                                                        |
| ------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| AzEl         | `<Azimuth> <Elevation>`            | Azimuth, elevation.                                                                                                                                |
| Quaternion   | `<q1> <q2> <q3> <q4>`              | `<Q1>`, `<Q2>`, and `<Q3>` set `qx`, `qy`, `qz`; `<Q4>` sets `qs`.                                                                                |
| Euler        | `<Sequence> <Rot1> <Rot2> <Rot3>`  | `<Sequence>` accepts the values 121, 123, 131, 132, 212, 213, 231, 232, 312, 313, 321, 323, where 1 is the x-axis of rotation, 2 is the y-axis of rotation, and 3 is the z-axis of rotation. |
| YPR          | `<Sequence> <Yaw> <Pitch> <Roll>`  | Yaw, pitch, and roll angles. The rotation sequence accepts the values RPY, RYP, PRY, PYR, YPR, YRP.                                                |
| matrix       | `<d11> <d21> <d22> <d31> <d32> <d33>` | N/A                                                                                                                                                |

## Examples

::: details open **Set Sensor Fixed Pointing**
```
Point */Satellite/Satellite1/Sensor/Sensor1 Fixed Quaternion 0.0 0.0 0.0 1.0
```
:::
