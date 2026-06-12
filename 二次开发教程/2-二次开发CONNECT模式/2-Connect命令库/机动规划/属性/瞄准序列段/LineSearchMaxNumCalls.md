# LineSearchMaxNumCalls

## 作用

设置瞄准段微分修正属性页**一维搜索最大迭代次数**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## 示例

::: details open **设置一维搜索最大迭代次数为 15**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.LineSearchMaxNumCalls 15
```
:::
