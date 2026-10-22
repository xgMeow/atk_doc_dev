# CalcObject

## Description

Sets the `CalcObject` computation object parameter

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## Additional Notes

- `Stopping Condition`: `StateCalc`

## Examples

::: details open **Set the CalcObject of the StateCalc stopping condition to X**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.StateCalc.CalcObject X
```
:::
