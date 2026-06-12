# Tolerance

## 作用

设置 `Tolerance` 误差

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{StoppingCondition}.Tolerance <Value> [{Unit}]
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Altitude`，`Apoapsis`，`Argument_of_Latitude`（设置属性使用 `ArgLat`），`AscendingNode`，`DescendingNode`，`Duration`，`Epoch`，`Longitude`，`Latitude`，`Mean_Anomaly`，`Periapsis`，`R_Magnitude`，`True_Anomaly`，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`），`AscToDesc`，`DescToAsc`，`StateCalc`

## 示例

::: details open **设置 Duration 停止条件的误差为 0.0000001 秒**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.Tolerance 0.0000001 sec
```
:::
