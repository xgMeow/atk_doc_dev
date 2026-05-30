## Mode

 

作用： 设置瞄准段的配置页模式

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> [{Unit}]
```

说明：包括 `Iterate` 、`Not Active` 、`Run Once`三种属性

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.TargetSequence.Profiles.ShooterProfile.Mode Iterate
```
