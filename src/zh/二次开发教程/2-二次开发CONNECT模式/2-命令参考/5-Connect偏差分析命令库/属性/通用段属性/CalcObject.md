---
description: 设置 StateCalc 停止条件的计算对象参数。
---

# CalcObject

## 作用

设置计算对象参数。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 停止条件的路径，形如 `MainSequence.SegmentList.<段名>.StoppingConditions.StateCalc` |
| `{Value}` | 计算对象，如 `X` |

## 补充说明

- 该属性用于配置 `Stopping Condition` 属性 `StateCalc` 的计算对象。

## 适用段

保持段、跟随段、预报段

## 示例

::: details open **设置 StateCalc 停止条件的计算对象**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.StateCalc.CalcObject X
```
:::

::: details open **设置 StateCalc 加入条件的计算对象**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.StateCalc.CalcObject X
```
:::
