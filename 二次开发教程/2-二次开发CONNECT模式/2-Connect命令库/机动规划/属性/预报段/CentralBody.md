# CentralBody

作用：设置中心天体

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```
:::

::: info 说明
- `Stopping Condition` 目前包括属性 `Altitude` ，`Apoapsis` ，`Latitude`，`Longitude` ，`Mean_Anomaly` ，`Periapsis` ，`True_Anomaly` 。`Value` 包括属性 `Earth，Mars` ，`Moon`
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```
:::
