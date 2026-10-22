---
description: Sets the ground ellipse attributes in the 2D Graphics view, used to add, delete, and modify vehicle ground ellipse data.
groups: [2D Graphics, GroundVehicle, Ship, Missile, Aircraft, LaunchVehicle, Satellite]
---

# GroundEllipse

## Description

Sets the ground ellipse attributes in the 2D Graphics view, used to add, delete, and modify vehicle ground ellipse data.

## Syntax

```atk-command
GroundEllipse <VehObjectPath> {EllipseSetOptions}
```

## Parameters

`{EllipseSetOptions}` determines the operation performed on an ellipse set or an ellipse, and must be one of the following values:

| `{EllipseSetOptions}` | Description |
|------|------|
| `AddSet <SetName>` | Adds an ellipse set with the specified name. |
| `DeleteSet <SetName>` | Deletes the ellipse set with the specified name. |
| `ClearSet <SetName>` | Removes all ellipses from the specified ellipse set. |
| `RenameSet <SetName> <NewSetName>` | Renames the ellipse set to the new name. |
| `AddSetEllipse <SetName> {EllipseOptions}` | Adds an ellipse to the specified ellipse set; see `{EllipseOptions}` below for the ellipse options. |
| `DeleteSetEllipse <SetName> {EllipseAtTime <TimeVal> \| EllipseAtLatLon <Latitude> <Longitude>}` | Deletes from the specified ellipse set the ellipse identified by the specified time or position. Enter `<TimeVal>` in Connect date units; enter `<Latitude>` and `<Longitude>` in **degrees**. |
| `ModifySetEllipse <SetName> {EllipseAtTime "<TimeVal>" \| EllipseAtLatLon <Latitude> <Longitude>} {EllipseOptions}` | Modifies, with the given `{EllipseOptions}`, the ellipse in the specified ellipse set identified by the specified time or position. Enter `<TimeVal>` in Connect date units; enter `<Latitude>` and `<Longitude>` in **degrees**. |

::: warning Note
In `AddSetEllipse` and `ModifySetEllipse`, **at least one** of the following `{EllipseOptions}` must be given.
:::

`{EllipseOptions}` accepts the following values:

| `{EllipseOptions}` | Description |
|------|------|
| `Time {TimeValue}` | The time of the ellipse; see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md) for valid values. |
| `SemiMajorAxis <Value>` | Semi-major axis, in **meters**; the value must be greater than or equal to `0.0`. |
| `SemiMinorAxis <Value>` | Semi-minor axis, in **meters**; the value must be greater than or equal to `0.0`. |
| `Bearing <Value>` | Bearing, in **degrees**. |
| `UseObjPos {On \| Off}` | When `On`, the ground ellipse is centered on the vehicle position at the time specified for that ellipse; when `Off`, the center is specified by the `Lat` and `Lon` options instead. |
| `Lat <Value>` | Latitude, in **degrees**. |
| `Lon <Value>` | Longitude, in **degrees**. |

## Applies To

Satellite, Missile, LaunchVehicle, Ship, 2D Graphics, GroundVehicle, Aircraft

## Examples

::: details open **Add an ellipse set**

```
atkConnect(conID,'GroundEllipse','*/GroundVehicle/GroundVehicle1 AddSet Testset')
```

- `'GroundEllipse'`: the command name
- `'*/GroundVehicle/GroundVehicle1 AddSet Testset'`: adds an ellipse set named `Testset` to the GroundVehicle `GroundVehicle1` in the current scenario

:::

::: tip Related Documents

- [GroundEllipse_R](./GroundEllipse_R.md): obtains the ground ellipse attributes in the 2D Graphics view

:::
