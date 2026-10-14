# Condition

## 作用

设置停止条件 `Condition` 触发条件

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Condition {Value}
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Altitude`，`Apoapsis`，`Argument_of_Latitude`（设置属性使用 `ArgLat`），`AscendingNode`，`DescendingNode`，`Duration`，`Epoch`，`Longitude`，`Latitude`，`Mean_Anomaly`，`Periapsis，R_Magnitude`，`True_Anomaly`，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`），`AscToDesc`，`DescToAsc`，`StateCalc`。`Value` 包括属性 `Cross Increasing`，`Cross Decreasing`，`Cross Either (Inc.or Dec.)`

## 示例

::: details open **设置 R_Magnitude 停止条件的触发条件**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```
:::
