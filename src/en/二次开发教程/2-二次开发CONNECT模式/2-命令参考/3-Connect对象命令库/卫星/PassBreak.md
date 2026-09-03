# PassBreak

## Description

Sets the number of orbital revolutions.

## Syntax

```atk-command
PassBreak <SatObjectPath> {PassOption} [<Parameters>]
```

## Parameters

| `PassOption` | Description |
| --- | --- |
| `Ascending` | Sets the direction to ascending |
| `Descending` | Sets the direction to descending |
| `Latitude <Value> [{Ascending \| Descending}]` | Sets the latitude value and the direction |
| `Longitude <Value>` | Sets the longitude value |
| `CoordSys {Inertial \| Fixed}` | Sets the coordinate system |

## Examples

::: details open **Set the Number of Orbital Revolutions**
```
PassBreak */Satellite/Satellite1 Latitude 90.0
```
:::
