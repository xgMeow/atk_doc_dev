# RPO 单次跳跃段

作用： 设置 `RPOHop` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称              | 数据类型 | 范围                |
| -------------------- | -------- | ------------------ |
| `Desired_Radial`     | m        | `[-100000,100000]` |
| `Desired_InTrack`    | m        | `[-100000,100000]` |
| `Desired_CrossTrack` | m        | `[-100000,100000]` |
| `Hop_Duration`       | sec      | `[0.001,86400]`    |
| `SolveMethod`        |          | `[-1,4]`           |
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOHop.Desired_Radial 50000
```
:::
