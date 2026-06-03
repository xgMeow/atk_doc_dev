# FiniteDifferenceMethod  

作用：设置瞄准段微分修正属性页差分方法

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

说明： `Attribute` 包括 `Forward Difference` ，`Central Difference` ，`Signed Difference`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.FiniteDifferenceMethod Signed Difference
```
