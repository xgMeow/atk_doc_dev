---
description: Add route waypoints to a ground-moving object by velocity or time, with an optional turn radius.
groups: [GroundVehicle, Ship, Aircraft]
---

# AddWaypoint

## Description

Set the route properties of the object.

## Syntax

```atk-command
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## Parameters

`<VehObjectPath>` is the full path of the object, written out from the scenario `*`, for example `*/GroundVehicle/GroundVehicle1`.

`{AddMethod}` values:

| `{AddMethod}` | `<Parameters>` |
| --- | --- |
| `DetTimeAccFromVel` | `[{MapGridSpec}] {PointDef} <Velocity>` |
| `DetVelFromTime` | `[{MapGridSpec}] {PointDef} <DateTime>` |

`{MapGridSpec}` and `{PointDef}` values:

| `{MapGridSpec}` | `{PointDef}` |
| --- | --- |
| `LatLon` | `<Latitude> <Longitude> <Altitude>` |

## Applies To

Ship, GroundVehicle, Aircraft

## Examples

::: details open **Add a waypoint by velocity**
```
AddWaypoint */GroundVehicle/GroundVehicle1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::

::: details open **Add a waypoint by time**
```
AddWaypoint */Aircraft/Aircraft1 DetVelFromTime LatLon 42.5 15 0.0 "1 Jan 2026 00:00:00.000"
```
:::

::: details open **Set the ship route**
```
AddWaypoint */Ship/Ship1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::

::: details open **Add a waypoint using the DetTimeAccFromVel method**
```
AddWaypoint */GroundVehicle/GroundVehicle1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::

::: details open **Add a waypoint using the DetVelFromTime method**
```
AddWaypoint */Aircraft/Aircraft1 DetVelFromTime LatLon 42.5 15 0.0 "1 Jan 2026 00:00:00.000"
```
:::
