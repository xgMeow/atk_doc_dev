# CentralBody

## Description

Sets the central body `CentralBody`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```

## Additional Notes

- `Stopping Condition` currently includes the attributes `Altitude`, `Apoapsis`, `Latitude`, `Longitude`, `Mean_Anomaly`, `Periapsis`, `True_Anomaly`. `Value` includes the attributes `Earth，Mars`, `Moon`

## Examples

::: details open **Set the central body of the Apoapsis stopping condition to Moon**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```
:::
