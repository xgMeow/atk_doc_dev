# MaxIterations

## 作用

设置瞄准段的配置页**最大迭代次数**。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> [{Unit}]
```

## 示例

::: details open **设置瞄准段最大迭代次数为 300**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.TargetSequence.Profiles.ShooterProfile.MaxIterations 300
```
:::
