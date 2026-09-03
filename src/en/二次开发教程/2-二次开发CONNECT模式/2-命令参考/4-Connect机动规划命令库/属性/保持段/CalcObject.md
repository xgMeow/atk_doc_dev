# CalcObject

## Description

Sets the `CalcObject` attribute to configure the **calculation object**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## Additional Notes

- The `StateCalc` stopping condition requires using `CalcObject` to set the calculation object.

## Examples

::: details open **Set the Calculation Object of the StateCalc Stopping Condition to X**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.StateCalc.CalcObject X
```
:::
