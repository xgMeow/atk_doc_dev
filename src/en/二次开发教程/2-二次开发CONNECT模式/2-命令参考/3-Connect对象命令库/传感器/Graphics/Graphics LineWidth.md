---
description: Sets the sensor trace line width, controlling the display width of the sensor trace line in the 2D Graphics window.
---

# Graphics LineWidth

## Description

Sets the trace line width.

## Syntax

```atk-command
Graphics <ObjectPath> LineWidth <LineWidth>
```

## Additional Notes

The `LineWidth` input value should be between `1.0` and `10.0`.

## Examples

::: details open **Set Trace Line Width**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 LineWidth 5
```
:::
