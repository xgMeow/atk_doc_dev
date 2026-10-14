# NumHomotopySteps

## 作用

设置瞄准段属性页**同伦步数**。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## 示例

::: details open **设置瞄准段同伦步数为 2**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.NumHomotopySteps 2
```
:::
