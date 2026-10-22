---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO RangeContours

## Description

Sets the display of **range contours** in the 3D Graphics window.

This command applies to the **3D window**; the range contours displayed in the **2D window** are set by the [Graphics RangeContours](./Graphics%20RangeContours.md) command.

## Syntax

```atk-command
VO <ObjectPath> RangeContours {AddMethod} <Parameters>
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

`{AddMethod} <Parameters>` accepts the following options:

| Option | Description |
|------|------|
| `Show {On \| Off}` | Displays or hides the range contours |
| `TranslucentLines {On \| Off}` | Displays or hides the translucent lines |
| `Translucency <Value>` | Sets the translucency; `<Value>` ranges from `0.0` to `100.0` |
| `LabelSwapDist {<Value> \| All \| ModelLabel \| MarkerLabel \| Marker \| Point}` | Sets the visible distance of the range contour labels. `<Value>` must be greater than or equal to `0.0`; a component name may also be given, in which case the labels use the swap distance of that component |

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, 3D Graphics, GroundVehicle, Aircraft

## Examples

::: details open **Display and hide the range contours**

```
VO */Facility/Facility1 RangeContours Show On
VO */Satellite/Satellite1 RangeContours Show Off
```

- The first command: **displays** the range contours for the facility `Facility1`
- The second command: **hides** the range contours for the satellite `Satellite1`

:::
