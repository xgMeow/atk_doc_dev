---
description: 设置停止条件（或加入条件）是否处于选中状态。
---

# Active

## 作用

设置停止条件是否选中。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `{Stopping Condition}` | 停止条件名称，取值见下 |
| `{Value}` | `{true \| false}`，是否选中 |

`{Stopping Condition}` 可取下列取值：

`Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc`

::: info 注意
Lambert 段目前仅支持 `Duration`、`Epoch`。
:::

## 适用段

Lambert 段、保持段、跟随段、预报段

## 示例

::: details open **设置停止条件为非选中状态**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.Active false
```
:::

::: details open **设置加入条件为非选中状态**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.Active false
```
:::
