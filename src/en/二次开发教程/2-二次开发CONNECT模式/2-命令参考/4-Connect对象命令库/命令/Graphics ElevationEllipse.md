---
description: Sets the elevation ellipse properties of an object in the 2D view, and is used to add, modify, remove or clear elevation ellipses.
groups: [2D Graphics, Missile, Aircraft, LaunchVehicle, Satellite]
---

# Graphics ElevationEllipse

## Description

Sets the properties of the **elevation ellipse** of an object in the 2D contours.

The elevation ellipse marks, at a specific time, the boundary of the region on the ground from which the object can be observed at a specified elevation angle.

## Syntax

```atk-command
Graphics <ObjectPath> ElevationEllipse {EllipseSetType} <Options>
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

`{EllipseSetType}` and its `<Options>` are as follows:

| `{EllipseSetType}` | `<Options>` | Description |
|------|------|------|
| `Show` | `{on \| off}` | Whether to use elevation ellipses |
| `Add` | `<TimeValue> <Level> <Color> <LineStyle> <LineWidth>` | Adds or modifies an elevation ellipse |
| `Edit` | `<TimeValue> <Level> <Color> <LineStyle> <LineWidth>` | Adds or modifies an elevation ellipse |
| `Remove` | `<TimeValue>` | Removes the elevation ellipse for the corresponding time |
| `Clear` | None | Removes all elevation ellipses |

- For the valid values of `<TimeValue>`, see [Date and Time Formats](../../2-参数值格式/日期时间格式.md).
- For the valid values of `<Color>` and `<LineStyle>`, see [Color Formats](../../2-参数值格式/颜色格式.md) and [Line Style Formats](../../2-参数值格式/线型格式.md).

## Applies To

Satellite, Missile, LaunchVehicle, Aircraft

## Examples

::: details open **Enable the elevation ellipse**

```
Graphics */Satellite/Satellite1 ElevationEllipse Show on
```

- `*/Satellite/Satellite1 ElevationEllipse Show on`: enables the elevation ellipse for the satellite `Satellite1`

:::
