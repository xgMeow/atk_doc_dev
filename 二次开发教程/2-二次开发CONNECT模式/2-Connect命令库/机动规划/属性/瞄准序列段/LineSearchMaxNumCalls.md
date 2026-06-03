# LineSearchMaxNumCalls   

作用：设置瞄准段微分修正属性页一维搜索最大迭代次数

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.LineSearchMaxNumCalls 15
```
