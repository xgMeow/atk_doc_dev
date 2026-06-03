# TripValue

作用：设置触发值

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

说明： `Stopping Condition` 目前包括属性 `Altitude` , `Argument_of_Latitude`（设置属性使用 `ArgLat` ）, `Duration` , `Epoch` , `Longitude` , `Latitude`, `Mean_Anomaly` , `Periapsis` , `R_Magnitude` , `True_Anomaly` , `StateCalc`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Duration.TripValue 86400 sec
```
