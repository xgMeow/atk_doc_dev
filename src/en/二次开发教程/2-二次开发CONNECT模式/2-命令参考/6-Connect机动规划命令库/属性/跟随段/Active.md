# Active

## Description

Sets whether the stopping condition is selected.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```

## Parameters

| Parameter | Description |
|------|------|
| `Stopping Condition` | `Altitude`, `Apoapsis`, `Argument_of_Latitude` (use `ArgLat` to set the property), `AscendingNode`, `DescendingNode`, `Duration`, `Epoch`, `Longitude`, `Latitude`, `Mean_Anomaly`, `Periapsis`, `R_Magnitude`, `True_Anomaly`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the property), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the property), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the property), `AscToDesc`, `DescToAsc`, and `StateCalc` |

## Examples

::: details open **Set the stopping condition to the unselected state**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Duration.Active false
```

:::

::: details open **Set the joining condition to the unselected state**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.Active false
```

:::
