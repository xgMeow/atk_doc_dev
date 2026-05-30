## CalcObject

作用：设置计算对象参数

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```
:::

::: info 说明
- `Stopping Condition` 属性 `StateCalc`
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.StateCalc.CalcObject X
```
:::
