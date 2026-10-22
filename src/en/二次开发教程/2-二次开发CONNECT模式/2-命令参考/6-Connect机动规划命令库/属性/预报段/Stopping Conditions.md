# Stopping Conditions

## Description

Sets the stopping conditions `StoppingConditions`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions <List of Stopping Conditions>

Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition} <Value> [{Unit}]
```

## Additional Notes

- `List of Stopping Condition` currently includes the attributes `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the attribute), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the attribute), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the attribute), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the attribute), `AscToDesc`, `DescToAsc`, `StateCalc`

## Examples

::: details open **Set multiple stopping conditions**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions Duration Apoapsis R_Magnitude Duration Altitude
```
:::
