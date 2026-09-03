# AddWaypoint

## Description

Set the ground vehicle route properties.

## Syntax

```atk-command
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## Parameters

| Parameter | Description |
| --- | --- |
| `AddMethod` | `DetTimeAccFromVel`: `[{MapGridSpec}] {PointDef} <Velocity>` / `DetVelFromTime`: `[{MapGridSpec}] {PointDef} <DateTime>` |
| `MapGridSpec` | `LatLon`: `<Latitude> <Longitude> <Altitude>` |

## Examples

::: details open **Add a waypoint using the DetTimeAccFromVel method**
```
AddWaypoint */GroundVehicle/GroundVehicle1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::
