# Graphics Basic

## Description

Set the visual display.

## Syntax

```atk-command
Graphics <ObjectPath> Basic { AttributeOption } {Action}
```

## Parameters

| Parameter | Description |
| ------------------- | ----------------------------------------- |
| `Show` | `{On \| Off}` |
| `Label` | `{On \| Off}` |
| `groundtrack` | `{On \| Off}` |
| `orbit` | `{On \| Off}` |
| `color` | See [Common Color Formats](../../../2-参数值格式/颜色格式.md). |
| `linestyle` | See [Common Line Style Formats](../../../2-参数值格式/线型格式.md). |
| `linewidth` | The trajectory line width value ranges from 1 to 10. |
| `markerstyle` | Currently, all marker types are set to the default. |

## Examples

::: details open **Set the visual display**
```
Graphics */Missile/Missile1 Basic Show on Label on LineStyle 2 LineWidth 5.0 MarkerStyle Star Orbit on color 15
```
:::
