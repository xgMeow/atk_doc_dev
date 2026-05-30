## NumHomotopySteps       

作用：设置瞄准段属性页同伦步数

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.NumHomotopySteps 2
```
