---
description: Adds and removes ground range contours in the 2D Graphics window, and defines how contour levels are displayed in the 2D window.
groups: [2D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# Graphics RangeContours

## Description

Adds and removes ground range contours in the **2D Graphics window**, and defines how contour levels are displayed in the 2D window.

This command applies to the **2D window**; the range contours displayed in the **3D window** are set by the [VO RangeContours](./VO%20RangeContours.md) command.

## Syntax

```atk-command
Graphics <ObjectPath> RangeContours {AddMethod} [<Parameters>]
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

`{AddMethod}` determines how the level values are defined. The `<Parameters>` that must be supplied depend on the selected `{AddMethod}`:

| `{AddMethod}` | `<Parameters>` | Description |
|------|------|------|
| `Show` | `{On \| Off}` | Displays or hides the range contour graphics |
| `Explicit` | `<LevelValue> {Color} {LineStyle} <LineWidth> {ShowDistance} [{ShowText} ["<LabelText>" [<LabelAngle>]]]` | Adds range contour levels one by one and specifies their display attributes. For valid values of `{Color}` and `{LineStyle}`, see [Color Format](../../2-参数值格式/颜色格式.md) and [Line Style Format](../../2-参数值格式/线型格式.md); `<LineWidth>` is the pixel width from `1.0` to `10.0`; `{ShowDistance}` and `{ShowText}` take `On` or `Off`; `<LabelAngle>` is in degrees |
| `Contour` | `<LevelValue> {Keyword} <Value> [{Keyword} <Value>...]` | Modifies the attributes of the specified `<LevelValue>` level |
| `StartStop` | `<Start> <Stop> <Step>` | Generates levels starting at `Start` and incrementing by `Step` until `Stop` is exceeded. `<Step>` must be greater than `0` |
| `Remove` | `<LevelValue>` | Removes the level corresponding to the specified `<LevelValue>` |
| `RemoveAll` | None | Removes all levels |
| `LabelAngle` | `<Angle>` | Sets the label angle for all **existing** levels, determining where the text and the distance are displayed along the contour line. `<Angle>` ranges from `0` to `359` degrees, clockwise; the default is `180` degrees, that is, the 6 o'clock direction |
| `Fill` | `{On \| Off} [{FillStyle}]` | When set to `On`, displays the range contours on the central body surface as filled polygons. `{FillStyle}` may be `Solid`, `VerticalStripe`, `HorizontalStripe`, `DiagonalStripe1`, `DiagonalStripe2`, `Hatch`, `DiagonalHatch`, `Screen`; `{FillStyle}` can be specified only when `On` is given as well |
| `FillTranslucency` | `<Value>` | Sets the translucency of the filled area. `<Value>` ranges from `0.0` to `100.0` |

::: warning Note
- When a level is removed with `Remove` and that level **does not exist**, the command still returns **Ack** but performs no operation.
- `LabelAngle` applies only to the levels that **exist when the command is called**; levels added afterwards still use the default `180` degrees.
:::

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, 2D Graphics, GroundVehicle, Aircraft

## Examples

::: details open **Display the range contours**

```
atkConnect(conID,'Graphics','*/Satellite/Satellite1 RangeContours Show On')
```

- `'Graphics'`: the command category
- `'*/Satellite/Satellite1 RangeContours Show On'`: displays the range contours for the satellite `Satellite1`

:::
