# TripValue

作用：设置触发值

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

说明： `Stopping Condition` 目前包括属性 `Duration` , `Epoch`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.TripValue 86400 sec
```
