# Offset

作用：设置偏移量

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.{Offset Attribute} <Value>
```

说明： 包括属性`Xoffset`,`Yoffset`,`Zoffset`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Xoffset 100 m
```
