# Joining Conditions

## Description

Sets the joining conditions of the follow segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.JoiningConditions <List of Joining Conditions>
```

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.JoiningConditions.{Joining Condition} <Value> [{Unit}]
```

## Parameters

| Parameter | Description |
|------|------|
| `Joining Condition` | `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the property), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the property), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the property), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the property), `AscToDesc`, `DescToAsc`, and `StateCalc` |

## Examples

::: details open **Set multiple joining conditions**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions Duration Apoapsis R_Magnitude Duration Altitude
```

:::
