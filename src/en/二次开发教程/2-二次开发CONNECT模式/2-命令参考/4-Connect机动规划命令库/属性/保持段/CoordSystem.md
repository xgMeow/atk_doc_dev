# CoordSystem

## Description

Sets the **coordinate system** of the **stopping condition**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```

## Additional Notes

- `Stopping Condition` currently includes `Argument_of_Latitude`, `AscendingNode`, `DescendingNode`, `X-Y_Plane_Cross` (use `XYPlaneCross` to set the property), `Y-Z_Plane_Cross` (use `YZPlaneCross` to set the property), and `Z-X_Plane_Cross` (use `ZXPlaneCross` to set the property).
- The `CentralBody` attribute of `Value` includes `Earth`, `Mars`, and `Moon`, and the coordinate axes include `J2000` and `Fixed`.

## Examples

::: details open **Set the Coordinate System of the AscendingNode Stopping Condition to CentralBody/Mars Fixed**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```
:::
