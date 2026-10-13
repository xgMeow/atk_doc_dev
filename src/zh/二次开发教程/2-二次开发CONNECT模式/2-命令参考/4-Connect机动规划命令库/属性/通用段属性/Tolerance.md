---
description: 设置停止条件（或加入条件）的误差容限。
---

# Tolerance

## 作用

设置停止条件的误差容限。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{StoppingCondition}.Tolerance <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `{StoppingCondition}` | 停止条件名称，取值见下 |
| `<Value> [{Unit}]` | 误差容限值及其单位，如 `0.0000001 sec` |

`{StoppingCondition}` 可取下列取值：

`Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc`

::: info 注意
Lambert 段目前仅支持 `Duration`、`Epoch`。
:::

## 适用段

Lambert 段、保持段、跟随段、预报段

## 示例

::: details open **设置 Duration 停止条件的误差**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.Tolerance 0.0000001 sec
```
:::

::: details open **设置 Duration 加入条件的误差**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.Tolerance 0.0000001 sec
```
:::
