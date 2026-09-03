# TripValue

## Description

Sets the trip value `TripValue`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## Additional Notes

- `Stopping Condition` currently includes the attributes `Altitude`, `Argument_of_Latitude` (use `ArgLat` to set the attribute), `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `StateCalc`

## Examples

::: details open **Set the trip value of the Duration stopping condition to 86400 seconds**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.TripValue 86400 sec
```
:::
