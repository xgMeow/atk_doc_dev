# MaxPropTime

## 作用

设置 `MaxPropTime` 最大外推时间，在该最大外推时间之后，无论是否满足停止条件，段都结束

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

## 补充说明

- 获得此属性值暂不支持

## 示例

::: details open **设置最大外推时间为 10 天**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.MaxPropTime 10 day
```
:::
