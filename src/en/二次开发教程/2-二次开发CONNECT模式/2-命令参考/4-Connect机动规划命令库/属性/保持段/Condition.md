# Condition

## Description

Sets the **trigger condition** of the **stopping condition**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Condition {Value}
```

## Additional Notes

- `List of Stopping Condition` currently includes `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the property), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the property), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the property), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the property), `AscToDesc`, `DescToAsc`, and `StateCalc`.
- `Value` includes `Cross Increasing`, `Cross Decreasing`, and `Cross Either (Inc.or Dec.)`.

## Examples

::: details open **Set the Trigger Condition of the R_Magnitude Stopping Condition to Cross Either**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```
:::
