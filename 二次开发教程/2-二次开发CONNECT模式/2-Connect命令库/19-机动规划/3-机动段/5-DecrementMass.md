## DecrementMass

 

作用：设置是否根据推进剂消耗更新质量

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.DecrementMass {Value}
```

说明： Value 包括属性 true 和 false

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.DecrementMass true
```
