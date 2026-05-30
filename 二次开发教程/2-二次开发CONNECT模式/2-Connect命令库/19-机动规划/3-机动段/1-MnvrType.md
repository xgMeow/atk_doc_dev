## MnvrType


作用：设置机动类型

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.MnvrType <Maneuver Type>
```

说明： Maneuver Type 包括属性 Impulsive 和 Finite

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.MnvrType Impulsive
```
