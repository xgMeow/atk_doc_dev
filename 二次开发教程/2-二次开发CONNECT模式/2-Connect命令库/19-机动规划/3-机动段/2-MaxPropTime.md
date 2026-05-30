## MaxPropTime


作用：设置最大预报时间

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.FiniteMnvr.MaxPropTime 86400 sec
```
