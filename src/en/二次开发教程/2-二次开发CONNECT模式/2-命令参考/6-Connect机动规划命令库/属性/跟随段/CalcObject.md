# CalcObject

## Description

Sets the calculation object parameter.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## Additional Notes

- Applies to the `StateCalc` stopping condition

## Examples

::: details open **Set the calc object of the StateCalc stopping condition**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.StateCalc.CalcObject X
```

:::

::: details open **Set the calc object of the StateCalc joining condition**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.StateCalc.CalcObject X
```

:::
