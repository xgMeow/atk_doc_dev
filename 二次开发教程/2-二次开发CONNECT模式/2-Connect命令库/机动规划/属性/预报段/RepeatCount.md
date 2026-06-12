# RepeatCount

## 作用

设置 `RepeatCount` 重复次数

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.RepeatCount <Value>
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Altitude`，`Apoapsis`，`Argument_of_Latitude`（设置属性使用 `ArgLat`），`AscendingNode`，`DescendingNode`，`Longitude`，`Latitude`，`Mean_Anomaly`，`Periapsis`，`R_Magnitude`，`True_Anomaly`，`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`），`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`），`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`），`AscToDesc`，`DescToAsc`，`StateCalc`

## 示例

::: details open **设置 Apoapsis 停止条件的重复次数为 3**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Apoapsis.RepeatCount 3
```
:::
