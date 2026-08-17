# Condition

## 作用

设置触发条件

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Condition {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Stopping Condition` | `Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc` |
| `Value` | `Cross Increasing`、`Cross Decreasing`、`Cross Either (Inc.or Dec.)` |

## 示例

::: details open **设置 R_Magnitude 停止条件的触发方式**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```

:::

::: details open **设置 R_Magnitude 加入条件的触发方式**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```

:::
