# PhysicalProperty

作用：设置航天器参数

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.InitialState.{Attribute}.[{Attribute}.] <Value> <Unit>
```

说明： 包括属性`Cd`,`DragArea`,`Cr`,`SRPArea`,`DryMass`,`FuelMass`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.InitialState.FuelMass 200 kg
```
