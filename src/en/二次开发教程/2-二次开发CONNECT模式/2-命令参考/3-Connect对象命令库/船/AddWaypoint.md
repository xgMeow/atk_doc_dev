# AddWaypoint

## Description

Set the **ship route** properties.

## Syntax

```atk-command
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## Parameters

### AddMethod Values

| AddMethod | Parameters |
| -- | -- |
| `DetTimeAccFromVel` | `[{MapGridSpec}] {PointDef} <Velocity>` |
| `DetVelFromTime` | `[{MapGridSpec}] {PointDef} <DateTime>` |

### MapGridSpec Values

| MapGridSpec | PointDef |
| -- | -- |
| `LatLon` | `<Latitude> <Longitude> <Altitude>` |

## Examples

::: details open **Set the ship route**
```
AddWaypoint */Ship/Ship1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::
