# CoordinateSystem

作用：设置坐标系

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CoordinateSystem {Value}
```

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateSystem "CentralBody/Moon J2000"
```
