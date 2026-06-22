# LineSearchLowerBound

## 作用

设置瞄准段属性页**一维搜索下限**。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## 示例

::: details open **设置一维搜索下限为 0.1**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.LineSearchLowerBound 0.1
```
:::
