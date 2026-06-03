# SpacecraftConfigurationType

作用：设置航天器参数设置方式

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.SpacecraftConfigurationType <Value>
```

说明： 包括属性`Inherit Spacecraft Configuration From Previous Segment`,`Specify Configuration`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.SpacecraftConfigurationType "Specify Configuration"
```
