# AddWaypoint

## Description

Set the **aircraft route** properties.

## Syntax

```atk-command
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## Parameters

| Parameter | Description |
|------|------|
| `AddMethod` | `DetVelFromTime`: `[{MapGridSpec}] {PointDef} <DateTime>` |
| `MapGridSpec` | `LatLon`: `<Latitude> <Longitude> <Altitude>` |

## Examples

::: details open **Add a waypoint using the DetVelFromTime method**
```
AddWaypoint */Aircraft/Aircraft1 DetVelFromTime LatLon 42.5 15 0.0 "1 Jan 2026 00:00:00.000"
```
:::
