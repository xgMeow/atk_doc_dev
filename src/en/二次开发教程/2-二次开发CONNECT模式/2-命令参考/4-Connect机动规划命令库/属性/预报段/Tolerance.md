# Tolerance

## Description

Sets the tolerance `Tolerance`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{StoppingCondition}.Tolerance <Value> [{Unit}]
```

## Additional Notes

- `Stopping Condition` currently includes the attributes `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the attribute), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the attribute), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the attribute), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the attribute), `AscToDesc`, `DescToAsc`, `StateCalc`

## Examples

::: details open **Set the tolerance of the Duration stopping condition to 0.0000001 seconds**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.Tolerance 0.0000001 sec
```
:::
