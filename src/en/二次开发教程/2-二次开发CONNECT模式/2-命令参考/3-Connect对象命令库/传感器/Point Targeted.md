---
description: Sets the targeted pointing property of the sensor, supporting both tracking and fixed modes, and allows specifying the target object and the tracking method.
---

# Point Targeted

## Description

Sets the targeted pointing property.

## Syntax

```atk-command
Point <SensorObjectPath> Targeted {OrientMethod} <MethodData>
```

## Parameters

| OrientMethod | MethodData                                                     | Description                                                                |
| ------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Tracking     | `<TruncObjectPath> [{AboutBoresight} [{TrackMode}]]`           | `{TrackMode}` values: Transpond, Transmit, and Receive.                     |
| Fixed        | `<TruncObjectPath> {OrientMethod} <MethodData>`                | For `<MethodData>`, refer to the [Point Fixed](./Point%20Fixed.md) command. |

## Examples

::: details open **Set Target Tracking Pointing**
```
Point */Satellite/Sat1/Sensor/Sensor1 Targeted Tracking Facility/testFac1 Receive
```
:::
