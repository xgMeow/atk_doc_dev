# RPOGEO 轨道漂移交会段

作用： 设置 `RPOGEORendezvousDrifting` 段属性

用法： 

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称                  | 数据类型  | 范围               |
| ------------------------ | -------- | ------------------ |
| `Desired_Radial`         | m        | `[-100000, 100000]` |
| `Desired_InTrack`        | m        | `[-100000,100000]`  |
| `Desired_CrossTrack`     | m        | `[-100000,100000]`  |
| `Desired_RadialRate`     | m/sec    | `[-1000,1000]`      |
| `Desired_InTrackRate`    | m/sec    | `[-1000,1000]`      |
| `Desired_CrossTrackRate` | m/sec    | `[-1000,1000]`      |
| `Wait_Time`              | sec      | `[0.001,86400]`     |
| `Rendezvous_Time`        | UTCG     |                     |
| `MaxIter`                |          | `[-1,1000]`         |
| `SolveMethod`            |          | `[-1,4]`            |
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOGEORendezvousDrifting.Desired_Radial 50000
```
:::
