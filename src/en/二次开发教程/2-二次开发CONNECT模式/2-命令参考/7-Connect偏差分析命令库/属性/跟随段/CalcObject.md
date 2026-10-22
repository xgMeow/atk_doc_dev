# CalcObject

## Description

Sets the calculation object parameter.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## Additional Notes

- Applies to the `StateCalc` stopping condition

## Examples

::: details open **Set the calc object of the StateCalc stopping condition**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.StateCalc.CalcObject X
```

:::

::: details open **Set the calc object of the StateCalc joining condition**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.StateCalc.CalcObject X
```

:::
