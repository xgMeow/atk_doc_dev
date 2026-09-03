---
description: Sets the projection property of the sensor, supporting a fixed-altitude projection mode.
---

# Graphics Projection

## Description

Sets the projection property.

## Syntax

```atk-command
Graphics <SensorObjectPath> Projection {Option}
```

## Parameters

| Option             | Description                      |
| ------------------ | -------------------------------- |
| `Altitudes <Alt>`  | The default unit for the input fixed radius is m. |

## Examples

::: details open **Set Projection Property**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 Projection Altitudes 500000
```
:::
