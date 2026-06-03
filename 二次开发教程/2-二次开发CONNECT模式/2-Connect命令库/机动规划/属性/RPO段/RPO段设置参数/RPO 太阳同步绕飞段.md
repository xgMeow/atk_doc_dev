# RPO 太阳同步绕飞段

作用： 设置 `RPOFollowSun` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：
| 参数名称             | 数据类型 | 范围               |
| ------------------- | -------- | ----------------- |
| `Standoff_Dist`     | m        | `[0.001, 100000]` |
| `NumPoints`         |          | `[4,360]`         |
| `FS_NumRevs`        |          | `[0.001, 1000]`   |
| `Transfer_Duration` | sec      | `[0.06,100000]`   |
| `Way_MaxDegrees`    | rad      | `[0.001,360]`     |
| `SolveMethod`       |          | `[-1,4]`          |
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOFollowSun.NumPoints 10
```
:::
