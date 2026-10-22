# Tolerance

## Description

Set the tolerance.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{StoppingCondition}.Tolerance <Value> [{Unit}]
```

## Additional Notes

- `Stopping Condition` currently includes the properties `Duration` and `Epoch`.

## Examples

::: details open **Set the tolerance of the Duration stopping condition to 0.0000001 seconds**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.Tolerance 0.0000001 sec
```
:::
