# Active

## 作用

设置**停止条件**是否选中。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```

## 补充说明

- `List of Stopping Condition` 目前包括属性 `Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc`

## 示例

::: details open **设置 Duration 停止条件的 Active 属性为 false**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Duration.Active false
```
:::
