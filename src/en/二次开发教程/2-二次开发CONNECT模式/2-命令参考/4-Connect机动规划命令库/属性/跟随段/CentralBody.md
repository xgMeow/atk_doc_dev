# CentralBody

## Description

Sets the central body.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```

## Parameters

| Parameter | Description |
|------|------|
| `Stopping Condition` | `Altitude`, `Apoapsis`, `Latitude`, `Longitude`, `Mean_Anomaly`, `Periapsis`, and `True_Anomaly` |
| `Value` | `Earth`, `Mars`, and `Moon` |

## Examples

::: details open **Set the central body of the Apoapsis stopping condition to Moon**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```

:::

::: details open **Set the central body of the Apoapsis joining condition to Moon**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```

:::
