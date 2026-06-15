# Isp

## 作用

设置比冲

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Isp {Value}
```

## 示例

::: details open **设置比冲为 3000**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Isp 3000
```
:::
