# RepeatCount

## Description

Sets the repeat count `RepeatCount`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.RepeatCount <Value>
```

## Additional Notes

- `Stopping Condition` currently includes the attributes `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the attribute), `AscendingNode`, `DescendingNode`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the attribute), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the attribute), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the attribute), `AscToDesc`, `DescToAsc`, `StateCalc`

## Examples

::: details open **Set the repeat count of the Apoapsis stopping condition to 3**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Apoapsis.RepeatCount 3
```
:::
