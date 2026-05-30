## RepeatCount

作用：设置重复次数

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.RepeatCount <Value>
```
:::

::: info 说明
- `Stopping Condition` 目前包括属性 `Altitude` ，`Apoapsis` ，`Argument_of_Latitude`（设置属性使用 `ArgLat`），`AscendingNode` ，`DescendingNode`，`Longitude` ，`Latitude` ，`Mean_Anomaly` ，`Periapsis` ，`R_Magnitude`，`True_Anomaly` ，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`），`AscToDesc` ，`DescToAs`c ，`StateCalc`
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Apoapsis.RepeatCount 3
```
:::
