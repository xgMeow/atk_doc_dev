# Condition

## Description

Sets the trigger condition `Condition` of the stopping condition

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Condition {Value}
```

## Additional Notes

- `Stopping Condition` currently includes the attributes `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the attribute), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis，R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the attribute), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the attribute), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the attribute), `AscToDesc`, `DescToAsc`, `StateCalc`. `Value` includes the attributes `Cross Increasing`, `Cross Decreasing`, `Cross Either (Inc.or Dec.)`

## Examples

::: details open **Set the trigger condition of the R_Magnitude stopping condition**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```
:::
