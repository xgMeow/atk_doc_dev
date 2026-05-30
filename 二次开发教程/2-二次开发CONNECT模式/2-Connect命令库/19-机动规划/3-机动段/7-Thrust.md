## Thrust

 

作用：设置推力大小

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Thrust {Value}
```

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Thrust 100
```
