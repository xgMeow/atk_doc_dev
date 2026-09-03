---
description: Sets the spinning pointing property of the sensor, supporting continuous, unidirectional, and bidirectional scan modes.
---

# Point Spinning

## Description

Sets the spinning pointing property.

## Syntax

```atk-command
Point <SensorObjectPath> Spinning <Azimuth> <Elevation> <ConeAngle> {ScanMethod} [<ScanMethodParams>] <Rate> <Offset>
```

## Parameters

| ScanMethod     | Parameters                   |
| -------------- | ---------------------------- |
| Continuous     | N/A                          |
| Unidirectional | `<StartAngle> <StopAngle>`   |
| Bidirectional  | `<StartAngle> <StopAngle>`   |

## Examples

::: details open **Set Spinning Pointing**
```
Point */Satellite/Satellite1/Sensor/Sensor1 Spinning 0 -90 90 Continuous 6 360
```
:::
