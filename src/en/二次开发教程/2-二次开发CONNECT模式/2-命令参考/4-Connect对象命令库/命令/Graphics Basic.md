---
description: Sets the object visualization display attributes, including the trajectory, label, ground track, color, line style, marker and other basic display options.
groups: [2D Graphics, Missile, LaunchVehicle, Satellite]
---

# Graphics Basic

## Description

Sets the object visualization display attributes.

## Syntax

```atk-command
Graphics <ObjectPath> Basic { AttributeOption } {Action}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `Show` | `{On \| Off}`: whether to display the object in the window |
| `Label` | `{On \| Off}`: whether to display the label |
| `groundtrack` | `{On \| Off}`: whether to display the ground track |
| `orbit` | `{On \| Off}`: whether to display the orbit |
| `color` | See [Common Color Formats](../../2-参数值格式/颜色格式.md) |
| `linestyle` | See [Common Line Style Formats](../../2-参数值格式/线型格式.md) |
| `linewidth` | The trajectory line width value ranges from 1 to 10 |
| `markerstyle` | Currently, all marker types are the default |

## Applies To

Satellite, Missile, LaunchVehicle

## Examples

::: details open **Set the visualization display attributes**
```
Graphics */Satellite/Satellite1 Basic Show on Label on LineStyle 2 LineWidth 5.0 Orbit on color 15
```
:::

::: details open **Set the satellite visualization display attributes**
```
Graphics */Satellite/Satellite1 Basic Show on Label on LineStyle 2 LineWidth 5.0 Orbit on color 15
```
:::

::: details open **Set the visualization display**
```
Graphics */Missile/Missile1 Basic Show on Label on LineStyle 2 LineWidth 5.0 MarkerStyle Star Orbit on color 15
```
:::

::: details open **Set the LaunchVehicle visualization display attributes**
```
Graphics */LaunchVehicle/LaunchVehicle1 Basic Show on Label on LineStyle 2 LineWidth 5.0 MarkerStyle Star Orbit on color 15
```
:::
