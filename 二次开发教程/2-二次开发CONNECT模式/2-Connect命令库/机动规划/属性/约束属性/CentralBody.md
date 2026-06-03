# CentralBody

作用： 设置段约束的中心天体属性值

::: note 用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.CentralBody {Value}
```
:::

::: info 说明：
- 设置段约束属性值之前，必须已添加段约束
:::

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.AltitudeOfPeriapsis.CentralBody Moon
```
:::
