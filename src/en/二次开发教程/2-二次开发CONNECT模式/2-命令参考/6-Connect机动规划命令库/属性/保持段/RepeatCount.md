# RepeatCount

## Description

Sets the **repeat count** of the **stopping condition**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.RepeatCount <Value>
```

## Additional Notes

- `List of Stopping Condition` currently includes `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the property), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the property), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the property), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the property), `AscToDesc`, `DescToAsc`, and `StateCalc`.

## Examples

::: details open **Set the Repeat Count of the Apoapsis Stopping Condition to 3**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Apoapsis.RepeatCount 3
```
:::
