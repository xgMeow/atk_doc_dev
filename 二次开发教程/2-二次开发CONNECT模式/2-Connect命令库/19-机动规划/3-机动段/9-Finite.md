## Finite

 

作用：设置有限推力类型属性值



用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.<Attributes ><Value>
```

说明：

 

| Attributes                              | Value                         |
| --------------------------------------- | ------------------------------|
| 机动段-ThrustAxes（获得属性值暂不支持）   |  具体属性值设置请查看机动段设置    |
| 机动段-CoordType                        |  具体属性值设置请查看机动段设置    |
| 机动段-Coordinate Values                |  具体属性值设置请查看机动段设置    |
| 预报段-Propagator（获得属性值暂不支持）   |  具体属性值设置请查看预报段设置    |
| 预报段-MaxPropTime                      |  具体属性值设置请查看预报段设置    |
| 预报段-Stopping Conditions              |  具体属性值设置请查看预报段设置    |
| 预报段-Active                           |  具体属性值设置请查看预报段设置    |
| 预报段-TripValue                        |  具体属性值设置请查看预报段设置    |
| 预报段-Tolerance                        |  具体属性值设置请查看预报段设置    |
| 预报段-Repeat Count                     |  具体属性值设置请查看预报段设置    |
| 预报段-Condition                        |  具体属性值设置请查看预报段设置    |
| 预报段-CentralBody                      |  具体属性值设置请查看预报段设置    |
| 预报段-CoordSystem                      |  具体属性值设置请查看预报段设置    |
| 预报段-CalcObject                       |  具体属性值设置请查看预报段设置    |

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.FiniteMnvr.StoppingConditions.Duration.Active false
```
