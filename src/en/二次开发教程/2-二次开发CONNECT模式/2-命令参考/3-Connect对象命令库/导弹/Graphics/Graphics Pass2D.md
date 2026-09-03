# Graphics Pass2D

## Description

Set the trail type.

## Syntax

```atk-command
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## Additional Notes

- `LeadTrailOption`: `GrndTrail`
- `Parameters`: `Time <Time>`, `PointNumber <PointNumber>`, `All`, `None`

## Examples

::: details open **Set the trail type**
```
Graphics */Missile/Missile1 Pass2D GrndTrail PointNumber 5000
```
:::
