# Coordinate Values 

作用：设置坐标属性值

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.<Coordinate Type>.<Attribute> <Value> <Unit>
```

说明： Coordinate Type 包括属性 Cartesian 和 Spherical。当 Coordinate Type  输入值为 Cartesian 时， Attribute 包括属性 X ，Y ，Z，当 Coordinate Type 输入值为 Spherical 时， Attribute 包括属性 Azimuth ，Elevation, Magnitude

::: info 注意
1. Cartesian 默认单位是 m/sec ，Spherical 中 Azimuth ，Elevation 默认单位为 Rad ，Magnitude 默认单位为 m/sec
2. 当 MnvrType 类型为 Finite 时， Cartesian 没有单位， Spherical 只包括属性 Azimuth ，Elevation
:::

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Spherical.Azimuth 30 deg
```
