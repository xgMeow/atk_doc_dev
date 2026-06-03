# CoordinateType

作用：设置坐标类型



用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CoordinateType {Value}
```

说明： `{Value}`包括`"Cartesian"`、`"ModifiedKeplerian"`和`"Keplerian"`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateType "Cartesian"
```
