# Graphics Pass2D

## Description

Set the object trail properties.

## Syntax

```atk-command
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## Parameters

| Parameter | Description |
|------|------|
| `LeadTrailOption` | `GrndTrail` |
| `Parameters` | `Time <Time>`, `PointNumber <PointNumber>`, `All`, `None` |

## Examples

::: details open **Set the object trail properties**
```
Graphics */LaunchVehicle/LaunchVehicle1 Pass2D GrndTrail PointNumber 5000
```
:::
