# Stopping Conditions

## Description

Set the stopping conditions.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions <List of Stopping Conditions>
```

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition} <Value> [{Unit}]
```

## Additional Notes

- `List of Stopping Condition` currently includes the properties `Duration` and `Epoch`.

## Examples

::: details open **Set the stopping condition to Duration**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions Duration
```
:::
