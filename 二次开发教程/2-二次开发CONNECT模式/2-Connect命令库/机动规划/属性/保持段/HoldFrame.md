# HoldFrame

作用：设置保持段 HoldFrame



用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.HoldFrame {Value}
```

举例： 
```
Astrogator */Satellite/mysat SetValue MainSequence.SegmentList.Hold.HoldFrame "CentralBody/Moon Fixed"
```
