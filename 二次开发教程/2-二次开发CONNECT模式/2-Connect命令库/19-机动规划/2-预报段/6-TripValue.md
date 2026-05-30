## TripValue

作用：设置触发值

::: note 用法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```
:::

::: info 说明
- `Stopping Condition` 目前包括属性 `Altitude` ，`Argument_of_Latitude`（设置属性使用 `ArgLat`），`Duration` ，`Epoch` ，`Longitude` ，`Latitude`，`Mean_Anomaly` ，`Periapsis` ，`R_Magnitude` ，`True_Anomaly` ，`StateCalc`
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Duration.TripValue 86400 sec
```
:::
