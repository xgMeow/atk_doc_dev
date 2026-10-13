---
description: 设置段的停止条件列表，或设置指定停止条件的取值。
---

# Stopping Conditions

## 作用

设置停止条件列表。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions <List of Stopping Conditions>
```

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition} <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `<List of Stopping Conditions>` | 停止条件的名称列表，多个条件以空格分隔 |
| `{Stopping Condition}` | 单个停止条件名称，可取下列取值 |

`<List of Stopping Conditions>` / `{Stopping Condition}` 可取下列取值：

`Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc`

::: info 注意
Lambert 段目前仅支持 `Duration`、`Epoch`。
:::

## 适用段

Lambert 段、保持段、跟随段、预报段

## 示例

::: details open **设置多个停止条件**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions Duration Apoapsis R_Magnitude Duration Altitude
```
:::

::: details open **设置单个停止条件为 Duration**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions Duration
```
:::
