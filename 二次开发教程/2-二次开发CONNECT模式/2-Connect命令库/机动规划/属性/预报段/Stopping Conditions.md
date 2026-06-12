# Stopping Conditions

## 作用

设置 `StoppingConditions` 停止条件

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions <List of Stopping Conditions>

Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition} <Value> [{Unit}]
```

## 补充说明

- `List of Stopping Condition` 目前包括属性 `Altitude`，`Apoapsis`，`Argument_of_Latitude`（设置属性使用 `ArgLat`），`AscendingNode`，`DescendingNode`，`Duration`，`Epoch`，`Longitude`，`Latitude`，`Mean_Anomaly`，`Periapsis`，`R_Magnitude`，`True_Anomaly`，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`），`AscToDesc`，`DescToAsc`，`StateCalc`

## 示例

::: details open **设置多个停止条件**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions Duration Apoapsis R_Magnitude Duration Altitude
```
:::
