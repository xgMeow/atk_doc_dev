# Graphics Basic

## Description

Sets the satellite visualization display attributes.

## Syntax

```atk-command
Graphics <ObjectPath> Basic { AttributeOption } {Action}
```

## Parameters

- `Show`: `{On | Off}`
- `Label`: `{On | Off}`
- `groundtrack`: `{On | Off}`
- `orbit`: `{On | Off}`
- `color`: see [Common Color Formats](../../../2-参数值格式/颜色格式.md)
- `linestyle`: see [Common Line Style Formats](../../../2-参数值格式/线型格式.md)
- `linewidth`: the line width value ranges from 1 to 10
- `markerstyle`: the marker types are currently all default

## Examples

::: details open **Set Satellite Visualization Display Attributes**
```
Graphics */Satellite/Satellite1 Basic Show on Label on LineStyle 2 LineWidth 5.0 Orbit on color 15
```
:::
