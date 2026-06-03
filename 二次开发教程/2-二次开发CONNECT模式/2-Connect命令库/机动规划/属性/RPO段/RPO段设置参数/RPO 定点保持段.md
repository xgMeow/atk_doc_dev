# RPO 定点保持段

作用： 设置 `RPOPerchEqualSpacing` 段属性

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

::: info 说明：

 

| 参数名称            | 数据类型 | 范围               |
| ------------------ | -------- | ----------------- |
| `Perch_Duration`   | sec      | `[0.001,8640000]` |
| `Perch_MaxDegrees` | rad      | `[0.001,360]`     |
| `SolveMethod`      |          | `[-1,4]`          |
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOPerchEqualSpacing.Perch_Duration 7200
```
:::
