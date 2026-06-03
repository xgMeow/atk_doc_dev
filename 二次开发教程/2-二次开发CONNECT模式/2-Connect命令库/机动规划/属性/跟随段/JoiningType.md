# JoiningType

作用：设置跟随类型

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.JoiningType {Type}
```

说明： 包括属性`Join at Beginning of Leader's Ephemeris`,`Join at End of Leader's Ephemeris`,`Join at Final Epoch of Previous Segment`,`Specify Joining Conditions`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningType "Join at End of Leader's Ephemeris"
```
