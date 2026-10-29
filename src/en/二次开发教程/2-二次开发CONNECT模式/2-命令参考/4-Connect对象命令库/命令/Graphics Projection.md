---
description: Sets the projection properties of the sensor, supporting the fixed-altitude projection mode.
groups: [2D Graphics, Sensor]
---

# Graphics Projection

## Description

Sets the projection properties.

## Syntax

```atk-command
Graphics <SensorObjectPath> Projection {Option}
```

## Parameters

| Option             | Description                      |
| ------------------ | -------------------------------- |
| `Altitudes <Alt>`  | The fixed radius; the unit is determined by the current Connect `Distance` unit setting |

## Examples

::: details open **Set the projection properties**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 Projection Altitudes 500000
```
:::
