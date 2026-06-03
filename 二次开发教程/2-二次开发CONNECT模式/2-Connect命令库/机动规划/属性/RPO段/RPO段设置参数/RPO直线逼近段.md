# RPO直线逼近段

作用： 设置 `RPOFMW` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称               | 数据类型 | 范围                |
| --------------------- | -------- | ------------------ |
| `Waypoint_Radial`     | m        | `[-100000,100000]` |
| `Waypoint_InTrack`    | m        | `[-100000,100000]` |
| `Waypoint_CrossTrack` | m        | `[0.06,100000]`    |
| `Waypoint_Duration`   | sec      | `[-100000,100000]` |
| `Waypoint_MaxDegrees` | rad      | `[0.001,360]`      |
| `SolveMethod`         |          | `[-1,4]`           |
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOFMW.Waypoint_Radial 50000
```
:::
