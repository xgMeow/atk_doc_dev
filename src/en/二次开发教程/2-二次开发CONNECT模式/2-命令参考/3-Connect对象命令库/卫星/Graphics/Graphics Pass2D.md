# Graphics Pass2D

## Description

Sets the satellite track attributes.

## Syntax

```atk-command
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## Parameters

- `LeadTrailOption`: `GrndTrail`
- `Parameters`: `Time <Time>`, `PointNumber <PointNumber>`, `All`, `None`

## Examples

::: details open **Set Satellite Track Attributes**
```
Graphics */Satellite/Satellite1 Pass2D GrndTrail PointNumber 5000
```
:::
