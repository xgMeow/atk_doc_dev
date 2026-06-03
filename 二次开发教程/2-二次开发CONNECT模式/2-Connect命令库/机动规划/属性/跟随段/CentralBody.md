# CentralBody

作用：设置中心天体

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```

说明： Stopping Condition 目前包括属性 Altitude ，Apoapsis ，Latitude，Longitude ，Mean_Anomaly ，Periapsis ，True_Anomaly 。Value 包括属性 Earth，Mars ，Moon

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```
