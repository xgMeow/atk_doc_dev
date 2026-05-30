## ThrustAxes

 

作用：设置推力坐标轴

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.ThrustAxes <Value>
```
说明： 

注意：获得此属性值暂不支持

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.ThrustAxes "Satellite/Satellite1 VNC(Earth)"
```
