# RPOGEO 轨道撤离段

作用： 设置 `RPOExitGEO` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称          | 数据类型 | 范围          |
| ----------------- | -------- | ------------- |
| `Desired_DriftRate` | deg/day  | `[-360,360]`    |
| `Propagator_Time`   |          | `[0.001,86400]` |
| `SolveMethod`       |          | `[-1,4]`       |

 :::



::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.Desired_DriftRate 45
```
:::
