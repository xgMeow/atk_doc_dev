---
description: 设置段的最大外推时间，超过该时间后无论是否满足停止条件段都结束。
---

# MaxPropTime

## 作用

设置最大外推时间，在该时间之后无论是否满足停止条件，段都结束。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>`；机动段还需带上子属性，如 `MainSequence.SegmentList.Maneuver.FiniteMnvr` |
| `<Value> [{Unit}]` | 最大外推时间及其单位，如 `10 day`、`86400 sec` |

::: info 注意
获得此属性值暂不支持。
:::

## 适用段

Lambert 段、保持段、机动段、预报段

## 示例

::: details open **设置最大外推时间为 10 天**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.MaxPropTime 10 day
```
:::

::: details open **设置机动段最大预报时间为 86400 秒**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.FiniteMnvr.MaxPropTime 86400 sec
```
:::
