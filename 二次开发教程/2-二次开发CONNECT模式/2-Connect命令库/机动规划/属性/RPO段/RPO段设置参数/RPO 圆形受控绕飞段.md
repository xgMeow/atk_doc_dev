# RPO 圆形受控绕飞段

作用： 设置 `RPOFMCircumnav` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称                      | 数据类型 | 范围                 |
| ---------------------------- | -------- | ------------------- |
| `Circumnav_Radius`           | m        | `[0.01, 1000000]`   |
| `NumPoints`                  |          | `[4,360]`           |
| `FMC_NumRevs`                |          | `[0.001,1000]`      |
| `Transfer_Duration`          | sec      | `[0.06,100000]`     |
| `Initial_Offset_Angle`       | rad      | `[- 180,180]`       |
| `CrossTrack_InTrackRotation` | rad      | `[- 180,180]`       |
| `CrossTrack_RadialRotation`  | rad      | `[- 180,180]`       |
| `Radial_Offset`              | m        | `[- 100000,100000]` |
| `InTrack_Offset`             | m        | `[-100000,100000]`  |
| `CrossTrack_Offset`          | m        | `[-100000,100000]`  |
| `Way_MaxDegrees`             | rad      | `[0.001,360]`       |
| `Time_Compression_Ratio`     |          | `[0.01,100]`        |
| `SolveMethod`                |          | `[-1,4]`            |
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOForcedMotionCircumnav.Circumnav_Radius 50000
```
:::
