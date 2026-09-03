# TripValue

## Description

Set the trip value.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## Additional Notes

- `Stopping Condition` currently includes the properties `Duration` and `Epoch`.

## Examples

::: details open **Set the trip value of the Duration stopping condition to 86400 seconds**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.TripValue 86400 sec
```
:::
