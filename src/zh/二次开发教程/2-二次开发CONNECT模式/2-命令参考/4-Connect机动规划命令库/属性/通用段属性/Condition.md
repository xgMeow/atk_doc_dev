---
description: 设置停止条件（或加入条件）的触发条件。
---

# Condition

## 作用

设置停止条件的触发条件。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Condition {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `{Stopping Condition}` | 停止条件名称，取值见下 |
| `{Value}` | 触发条件，可取 `Cross Increasing`、`Cross Decreasing`、`Cross Either (Inc.or Dec.)` |

`{Stopping Condition}` 可取下列取值：

`Altitude`、`Apoapsis`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`AscendingNode`、`DescendingNode`、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`X-Y_Plane_Cross`（设置属性使用 `XYPlaneCross`）、`Y-Z_Plane_Cross`（设置属性使用 `YZPlaneCross`）、`Z-X_Plane_Cross`（设置属性使用 `ZXPlaneCross`）、`AscToDesc`、`DescToAsc`、`StateCalc`

::: warning 注意
`{Value}` 中含空格时须使用双引号，如 `"Cross Either (Inc.or Dec.)"`。
:::

## 适用段

保持段、跟随段、预报段

## 示例

::: details open **设置 R_Magnitude 停止条件的触发方式**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```
:::

::: details open **设置 R_Magnitude 加入条件的触发方式**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.R_Magnitude.Condition "Cross Either (Inc.or Dec.)"
```
:::
