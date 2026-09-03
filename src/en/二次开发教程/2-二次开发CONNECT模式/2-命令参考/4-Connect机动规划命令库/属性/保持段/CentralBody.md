# CentralBody

## Description

Sets the **central body**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```

## Additional Notes

- `Stopping Condition` currently includes `Altitude`, `Apoapsis`, `Latitude`, `Longitude`, `Mean_Anomaly`, `Periapsis`, and `True_Anomaly`.
- `Value` includes `Earth`, `Mars`, and `Moon`.

## Examples

::: details open **Set the Central Body of the Apoapsis Stopping Condition to Moon**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```
:::
