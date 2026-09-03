---
description: Sets the color properties of the sensor trace and label.
---

# Graphics SetColor

## Description

Sets the color of the sensor trace label.

## Syntax

```atk-command
Graphics <ObjectPath> SetColor {Color} [{Item}]
```

## Additional Notes

For the available `Color` attributes, see [Common Graphic Formats](../../../2-参数值格式/颜色格式.md).

## Examples

::: details open **Set Sensor Color**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 SetColor 4
```
:::
