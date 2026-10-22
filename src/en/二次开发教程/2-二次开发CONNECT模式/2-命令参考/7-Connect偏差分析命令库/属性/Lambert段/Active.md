# Active

## Description

Set whether the stopping condition is selected.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```

## Additional Notes

- `Stopping Condition` currently includes the properties `Duration` and `Epoch`.

## Examples

::: details open **Set the Duration stopping condition to unselected**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.Active false
```
:::
