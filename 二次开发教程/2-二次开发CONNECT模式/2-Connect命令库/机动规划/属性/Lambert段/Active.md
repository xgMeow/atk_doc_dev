# Active

作用：设置停止条件是否选中

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```


说明： `Stopping Condition` 目前包括属性 `Duration` , `Epoch`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.Active false
```
