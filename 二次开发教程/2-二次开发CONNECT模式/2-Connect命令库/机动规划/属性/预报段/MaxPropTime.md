# MaxPropTime

作用：设置最大外推时间

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```
:::

::: info 说明
- 设置最大外推时间，在该最大外推时间之后，无论是否满足停止条件，段都结束。
:::

::: warning 注意
- 获得此属性值暂不支持
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.MaxPropTime 10 day
```
:::
