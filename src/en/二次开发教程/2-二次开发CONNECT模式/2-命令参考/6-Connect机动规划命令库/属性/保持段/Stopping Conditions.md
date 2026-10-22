# Stopping Conditions

## Description

Sets the list of **stopping conditions**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions <List of Stopping Conditions>
```

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition} <Value> [{Unit}]
```

## Additional Notes

- `List of Stopping Condition` currently includes `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the property), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the property), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the property), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the property), `AscToDesc`, `DescToAsc`, and `StateCalc`.

## Examples

::: details open **Set the Stopping Condition List to Include Conditions Such as Duration and Apoapsis**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions Duration Apoapsis R_Magnitude Duration Altitude
```
:::
