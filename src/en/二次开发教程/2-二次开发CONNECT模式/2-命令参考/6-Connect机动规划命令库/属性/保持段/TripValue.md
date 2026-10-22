# TripValue

## Description

Sets the **trip value** of the **stopping condition**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## Additional Notes

- `Stopping Condition` currently includes `Altitude`, `Argument_of_Latitude` (use `ArgLat` to set the property), `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, and `StateCalc`.

## Examples

::: details open **Set the Trip Value of the Duration Stopping Condition to 86400 Seconds**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Duration.TripValue 86400 sec
```
:::
