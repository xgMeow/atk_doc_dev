# Tolerance

作用：设置误差

用法： 

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{StoppingCondition}.Tolerance <Value> [{Unit}]
```

说明： `Stopping Condition` 目前包括属性 `Duration` , `Epoch`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.Tolerance 0.0000001 sec
```
