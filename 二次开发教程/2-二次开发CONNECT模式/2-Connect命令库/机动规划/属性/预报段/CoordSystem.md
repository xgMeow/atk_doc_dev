# CoordSystem

作用：设置坐标系

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CoordSystem {Value}
```
:::

::: info 说明
- `Stopping Condition` 目前包括属性 `Argument_of_Latitude` ，`Ascending- Node` ，`DescendingNode` ，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）。`Value` 属性 `CentralBod` 包括 `Earth` ，`Mars` ，`Moon`，坐标轴包括 `J2000` ，`Fixed`
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Ascending_Node.CalcObjectAttributes.CoordSystem "CentralBody/Mars Fixed"
```
:::
