# UseLineSearch

## 作用

设置瞄准段微分修正属性页**是否使用一维搜索**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## 示例

::: details open **设置瞄准段使用一维搜索**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.UseLineSearch true
```
:::
