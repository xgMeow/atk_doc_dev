# CoordSystem

## Description

Sets the coordinate system.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```

## Parameters

| Parameter | Description |
|------|------|
| `Stopping Condition` | `Argument_of_Latitude`, `AscendingNode`, `DescendingNode`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the property), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the property), and `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the property) |
| `Value` | `CentralBody` includes `Earth`, `Mars`, and `Moon`; the coordinate axes include `J2000` and `Fixed` |

## Examples

::: details open **Set the coordinate system of the AscendingNode stopping condition**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```

:::

::: details open **Set the coordinate system of the AscendingNode joining condition**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```

:::
