---
description: Sets the external pointing property of the sensor, defining the pointing changes of the sensor through an external file.
---

# Point External

## Description

Sets the external pointing property.

## Syntax

```atk-command
Point <SensorObjectPath> External "<FilePath.sp>"
```

## Examples

::: details open **Set External Pointing**
```
Point */Satellite/Shuttle/Sensor/Horizon External "c:\MyScTemp\MyScenPositionData.sp"
```
:::
