## Profiles

 

作用： 设置瞄准段的配置页

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles <List of Profiles>
```

注意：设置瞄准段配置属性前，必须添加属性页

说明： `List of Profiles` 包括 `Differential_Corrector` , `SQP_Optimizer` , `Evolution_Optimizer`

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.profiles Differential_Corrector
```
