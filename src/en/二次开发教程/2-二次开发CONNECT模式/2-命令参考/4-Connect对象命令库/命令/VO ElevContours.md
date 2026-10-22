---
groups: [3D Graphics, Missile, Aircraft, LaunchVehicle, Satellite]
---

# VO ElevContours

## Description

Turns the display of **elevation contour lines** on or off in the 3D view, and sets their styles.

The levels of the contour lines represent the regions on the surface of the central body from which the object can be seen at a specified elevation angle.

## Syntax

```atk-command
VO <ObjectPath> ElevContours {Options}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

`{Options}` may take the following options:

| Option | Description |
|------|------|
| `{On \| Off}` | Turns the display of elevation contour lines in the 3D window on or off |
| `ShowCones {On \| Off}` | When set to `On`, displays the elevation contour lines in space as **filled cones**; when set to `Off`, displays only the projection of the cone surfaces on the surface of the central body |
| `ShowFill {On \| Off}` | When set to `On`, displays the elevation contour lines on the surface of the central body as **filled polygons** |
| `ConeTranslucency <Value>` | Translucency of the cones. `<Value>` is a percentage from `0` to `100`; `0` is fully opaque and `100` is completely invisible |
| `FillTranslucency <Value>` | Translucency of the filled regions; the values are given in the same way as for `ConeTranslucency` |

::: warning Note
Elevation contour lines **do not apply to GroundVehicles**: issuing this command for a `GroundVehicle` or a `Ship` returns **Nack**.
:::

## Applies To

Satellite, Missile, LaunchVehicle, 3D Graphics, Aircraft

## Examples

::: details open **Turn on the elevation contour lines and set their styles**

```
VO */Satellite/ERS1 ElevContours On ShowCones Off ShowFill On FillTranslucency 50.0
```

- `*/Satellite/ERS1`: the full path of the object
- `On`: turns on the display of the elevation contour lines
- `ShowCones Off`: does not display the filled cones; displays only the projection of the cone surfaces on the surface of the central body
- `ShowFill On`: displays them on the surface of the central body as filled polygons
- `FillTranslucency 50.0`: sets the translucency of the filled region to 50%

:::

::: tip Related Documents

- [Graphics ElevContours](./Graphics%20ElevContours.md): displays elevation contour lines in the 2D graphics window

:::
