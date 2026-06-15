# LineSearchUpperBound

## 作用

设置瞄准段属性页**一维搜索上限**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## 示例

::: details open **设置一维搜索上限为 10**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.LineSearchUpperBound 10
```
:::
