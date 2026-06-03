# RootFindingAlgorithm

作用：设置瞄准段微分修正属性页求根算法

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

说明： `Attribute` 包括 `Newton-Raphson Method` ，`Secant Method` ，`Sequential Quadratic Prgramming`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.RootFindingAlgorithm "Newton-Raphson Method"
```
