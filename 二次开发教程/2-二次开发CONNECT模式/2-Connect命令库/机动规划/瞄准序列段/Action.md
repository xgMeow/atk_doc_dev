# Action

 

作用：设置瞄准段的动作

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Target_Sequence.Action {Value}
```

说明： `Value` 包括 `Run active profiles` ，`Run nominal sequence` ，`Run active profiles ONCE`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Action Run active profiles
```
