---
description: 设置停止条件（或加入条件）的触发值。
---

# TripValue

## 作用

设置停止条件的触发值。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `{Stopping Condition}` | 停止条件名称，取值见下 |
| `<Value> [{Unit}]` | 触发值及其单位，如 `86400 sec` |

`{Stopping Condition}` 可取下列取值：

`Altitude`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`StateCalc`

（保持段、跟随段另支持 `Apoapsis`、`AscendingNode`、`DescendingNode`、`X-Y_Plane_Cross`、`Y-Z_Plane_Cross`、`Z-X_Plane_Cross`、`AscToDesc`、`DescToAsc`。）

::: info 注意
Lambert 段目前仅支持 `Duration`、`Epoch`。
:::

## 适用段

Lambert 段、保持段、跟随段、预报段

## 示例

::: details open **设置 Duration 停止条件的触发值**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.TripValue 86400 sec
```
:::

::: details open **设置 Duration 加入条件的触发值**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.TripValue 86400 sec
```
:::
