# RPO 水滴绕飞段

作用： 设置 `RPOTearDrop` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称               | 数据类型 | 范围               |
| --------------------- | -------- | ----------------- |
| `NumCircles`          |          | `[0,1000]`          |
| `TearDrop_TurnAround` | m        | `[-100000,100000]`  |
| `TearDrop_Maneuver`   | m        | `[-100000,100000]`  |
| `Transfer_Duration`   | sec      | `[0.001,86400]`     |
| `Way_MaxDegrees`      | rad      | `[0.001,360]`       |
| `SolveMethod`         |          | `[-1,4]`            |
:::
 
::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOTearDrop.NumCircles 500
```
:::
