## CoordType

 

作用：设置坐标方式

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.CoordType <Value>
```

说明： Value 包括属性 Cartesian 和 Spherical

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.CoordType Cartesian
```
