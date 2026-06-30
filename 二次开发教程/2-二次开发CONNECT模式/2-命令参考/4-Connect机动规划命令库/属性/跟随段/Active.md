# Active

## 作用

设置停止条件是否选中

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Stopping Condition` | `Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc` |

## 示例

::: details open **设置停止条件为非选中状态**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Duration.Active false
```

:::

::: details open **设置加入条件为非选中状态**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.Active false
```

:::
