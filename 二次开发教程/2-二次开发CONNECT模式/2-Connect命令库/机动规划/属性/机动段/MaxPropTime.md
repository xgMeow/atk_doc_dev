# MaxPropTime

## 作用

设置最大预报时间

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

## 示例

::: details open **设置最大预报时间为 86400 秒**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.FiniteMnvr.MaxPropTime 86400 sec
```
:::
