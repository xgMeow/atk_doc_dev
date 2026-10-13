---
description: 通过段属性路径重命名机动规划段。
---

# ComponentName

## 作用

段重命名。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>`；嵌套段继续追加 `.SegmentList.<段名>`，如 `MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate` |
| `<Value>` | 新的段名称 |

::: info 注意
此属性值暂不支持获取。
:::

## 适用段

Lambert 段、保持段、停止段、初始段、机动段、偏差分析段、瞄准序列段、跟随段、返回段

## 示例

::: details open **重命名段**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.ComponentName abc
```
:::

::: details open **重命名 Lambert 段**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.ComponentName abc
```
:::

::: details open **重命名瞄准序列段内的预报段**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.ComponentName abc
```
:::

::: details open **重命名偏差分析段**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.UncertQuantify.ComponentName abc
```
:::
