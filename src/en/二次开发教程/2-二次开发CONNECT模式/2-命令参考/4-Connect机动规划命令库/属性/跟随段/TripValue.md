# TripValue

## Description

Sets the trip value.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## Parameters

| Parameter | Description |
|------|------|
| `Stopping Condition` | `Altitude`, `Argument_of_Latitude` (use `ArgLat` to set the property), `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, and `StateCalc` |

## Examples

::: details open **Set the trip value of the Duration stopping condition**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Duration.TripValue 86400 sec
```

:::

::: details open **Set the trip value of the Duration joining condition**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.TripValue 86400 sec
```

:::
