# StepSize

作用： 设置保持段步长

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StepSize <Value> [{Unit}]
```

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StepSize 10 sec
```
