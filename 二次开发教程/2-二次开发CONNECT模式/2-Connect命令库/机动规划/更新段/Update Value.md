# Update Value 

作用：设置更新段的值

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Update.{Val Attribute} <Value> [{Unit}]
```
:::

::: info 说明
- `Val Attribute` 包括属性 `DryMassVal` ，`FuelMassVal`，`SRPAreaVal`，`DragAreaVal` ，`CrVal` ，`CdVal`
- `DryMassVal`默认单位为 $kg$
- `FuelMassVal`默认单位为 $kg$
- `SRPAreaVal`默认单位为 $m^2$
- `DragAreaVal`默认单位为 $m^2$ 
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Update.DragAreaVal 10 m^2
```
:::
