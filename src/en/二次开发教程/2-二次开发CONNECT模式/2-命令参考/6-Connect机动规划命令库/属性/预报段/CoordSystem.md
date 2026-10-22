# CoordSystem

## Description

Sets the coordinate system `CoordSystem`

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```

## Additional Notes

- `Stopping Condition` currently includes the attributes `Argument_of_Latitude`, `Ascending- Node`, `DescendingNode`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the attribute), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the attribute), `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the attribute). The `Value` attribute `CentralBod` includes `Earth`, `Mars`, `Moon`, and the axes include `J2000`, `Fixed`

## Examples

::: details open **Set the coordinate system of the Ascending_Node stopping condition**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```
:::
