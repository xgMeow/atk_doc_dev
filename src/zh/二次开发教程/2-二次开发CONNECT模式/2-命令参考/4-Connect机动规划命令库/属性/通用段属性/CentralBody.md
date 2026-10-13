---
description: 设置停止条件计算对象的中心天体。
---

# CentralBody

## 作用

设置停止条件计算对象的中心天体。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `{Stopping Condition}` | 停止条件名称，可取 `Altitude`、`Apoapsis`、`Latitude`、`Longitude`、`Mean_Anomaly`、`Periapsis`、`True_Anomaly` |
| `{Value}` | 中心天体，可取 `Earth`、`Mars`、`Moon` |

::: tip 相关参考

- [CentralBody（段约束属性）](../约束属性/CentralBody.md)：设置段约束的中心天体

:::

## 适用段

保持段、跟随段、预报段

## 示例

::: details open **设置 Apoapsis 停止条件的中心天体为 Moon**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```
:::

::: details open **设置 Apoapsis 加入条件的中心天体为 Moon**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```
:::
