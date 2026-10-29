---
description: Displays elevation contour lines in the 2D graphics window, and sets their levels, colors, line styles and labels.
groups: [2D Graphics, Missile, Aircraft, LaunchVehicle, Satellite]
---

# Graphics ElevContours

## Description

Displays elevation contour lines in the **2D graphics window**.

The levels of the contour lines represent the regions on the ground from which the vehicle can be seen at a specified elevation angle.

## Syntax

```atk-command
Graphics <ObjectPath> ElevContours {AddMethod} [<Parameters>]
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

`{AddMethod}` determines how the level values are defined; the `<Parameters>` that must be provided differ with the selected `{AddMethod}`. `{AddMethod}` may take the following values:

| `{AddMethod}` | `<Parameters>` | Description |
|------|------|------|
| `Show` | `{On \| Off}` | Displays the elevation contour lines. |
| `Explicit` | `<LevelValue> {Color} {LineStyle} <LineWidth> {ShowDistance} [{ShowText} ["<LabelText>" [<LabelAngle>]]]` | Adds elevation contour levels one by one by specifying `<LevelValue>` and its display attributes. For the valid values of `{Color}` and `{LineStyle}`, see [Color Formats](../../2-参数值格式/颜色格式.md) and [Line Style Formats](../../2-参数值格式/线型格式.md). `<LineWidth>` is a pixel width from `1.0` to `10.0`. `{ShowDistance}` and `{ShowText}` take `On` or `Off`. The unit of `<LabelAngle>` is determined by the current Connect `Angle` unit setting. |
| `Contour` | `<LevelValue> {Keyword} <Value> [{Keyword} <Value>...]` | Modifies the attributes of the specified `<LevelValue>`. For the `{Keyword} <Value>` pairs, see the table below. |
| `StartStop` | `<Start> <Stop> <Step>` | Starting from `Start`, generates contour levels in increments of `Step` until **exceeding** `Stop`. `<Step>` must be greater than `0.0`. |
| `Remove` | `<LevelValue>` | Removes the contour line corresponding to the specified `<LevelValue>`. |
| `RemoveAll` | None | Removes **all** contour lines. |
| `LabelAngle` | `<Angle>` | Sets the label angle for **all** existing contour lines, which determines where the text and/or distance labels are displayed along the contour lines. `<Angle>` ranges from `0` to `359` degrees, clockwise; the default is `180` degrees, that is, the 6 o'clock position. |
| `Fill` | `{On \| Off} [{FillStyle}]` | When set to `On`, **elevation** contour lines are drawn as filled polygons on the surface of the central body. `{FillStyle}` may take `Solid`, `VerticalStripe`, `HorizontalStripe`, `DiagonalStripe1`, `DiagonalStripe2`, `Hatch`, `DiagonalHatch`, `Screen`; `{FillStyle}` can be given only when `On` is also given. |
| `FillTranslucency` | `<Value>` | Sets the translucency of the fill; `<Value>` ranges from `0.0` to `100.0`. |

::: warning Note
- `Remove`: if the specified level does not exist, this command returns **Ack** and **makes no changes**.
- `LabelAngle`: contour lines added **after** this command is called still use the default label angle of `180`.
:::

The units of `<LevelValue>` and `<Start> <Stop> <Step>` are determined by the current Connect `Angle` unit setting, and the valid elevation contour levels range from `0.0` to `90.0` degrees. When levels are entered with the `StartStop` method, **even if an invalid level is given, this command does not return Nack**; it simply **draws only the valid levels**.

The `{Keyword} <Value>` pairs may take the following values:

| `{Keyword} <Value>` | Description |
|------|------|
| `Color {Color}` | Sets the color of the contour line. For the valid values, see [Color Formats](../../2-参数值格式/颜色格式.md). |
| `LineStyle {LineStyle}` | Sets the line style of the contour line. `{LineStyle}` may be a name (such as `Solid`, `Dashed`, `Dotted`, etc.) or a number (`0`, `1`, `2`, etc.). For all valid values, see [Line Style Formats](../../2-参数值格式/线型格式.md). |
| `LineWidth <Width>` | A pixel width from `1.0` to `10.0`. |
| `ShowDistance {On \| Off}` | Shows or hides the distance labels of the contour line. |
| `ShowText {On \| Off}` | Shows or hides the user-defined text of the contour line. |
| `Text "<Text>"` | Sets the user-defined text of the contour line. |
| `LabelAngle <Angle>` | Determines where the text and/or distance labels are displayed along the contour line. `<Angle>` ranges from `0` to `359` degrees, clockwise; the default is `180` degrees, that is, the 6 o'clock position. |

::: tip Related Documents

- [VO ElevContours](./VO%20ElevContours.md): turns the display of elevation contour lines on or off in the 3D view and sets their styles

:::

## Applies To

Satellite, Missile, LaunchVehicle, Aircraft

## Examples

::: details open **Display the elevation contour lines**

```
Graphics */Satellite/Satellite1 ElevContours Show On
```

- `*/Satellite/Satellite1 ElevContours Show On`: displays the elevation contour lines for the satellite `Satellite1`

:::
