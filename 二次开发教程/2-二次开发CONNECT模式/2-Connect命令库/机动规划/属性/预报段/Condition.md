# Condition

作用：设置触发条件

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Condition {Value}
```
:::

::: info 说明
- `Stopping Condition` 目前包括属性 `Altitude` ，`Apoapsis` ，`Argument_of_Latitude`（设置属性使用 `ArgLat`），`AscendingNode` ，`DescendingNode`，`Duration` ，`Epoch` ，`Longitude` ，`Latitude` ，`Mean_Anomaly` ，`Periapsis，R_Magnitude` ，`True_Anomaly` ，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`），`AscToDesc` ，`DescToAsc` ，`StateCalc` 。`Value` 包括属性 `Cross Increasing` ，`Cross Decreasing` ，`Cross Either (Inc.or Dec.)`
:::

::: tip 举例

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```
:::
