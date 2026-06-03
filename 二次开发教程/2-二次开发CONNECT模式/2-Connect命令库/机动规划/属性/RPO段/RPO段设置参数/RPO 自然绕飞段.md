# RPO 自然绕飞段

作用： 设置 `RPONMCircumnav` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称                  | 数据类型 | 范围                 |
| ------------------------ | -------- | ------------------- |
| `SemiMinor_Axis`         | m        | `[0.01,1000000]`    |
| `RBar_CrossTrack_Offset` | m        | `[-100000,100000]`  |
| `VBar_CrossTrack_Offset` | m        | `[-100000,100000]`  |
| `Transfer_Duration`      | sec      | `[0.001,1000000]`   |
| `InTrack_Offset`         | m        | `[-100000,100000]`  |
| `Way_MaxDegrees`         | rad      | `[0.001,360]`       |
| `NMC_NumRevs`            |          | `[0.001,1000]`      |
| `SolveMethod`            |          | `[-1,4]`            |
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPONMCircumnav.SemiMinor_Axis 50000
```
:::
