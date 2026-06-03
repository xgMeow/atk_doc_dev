# Stopping Conditions

作用：设置停止条件

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions <List of Stopping Conditions>
```
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition} <Value> [{Unit}]
```

说明： `List of Stopping Condition` 目前包括属性 `Duration` ,  `Epoch` 。

举例： 

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions Duration
```
