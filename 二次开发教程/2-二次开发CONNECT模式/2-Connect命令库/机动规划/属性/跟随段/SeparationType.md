# SeparationType

作用：设置分离类型

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.SeparationType {Type}
```

说明： 包括属性`Separate at End of Leader's Ephemeris`,`Specify Separation Conditions`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.SeparationType "Separate at End of Leader's Ephemeris"
```
