# Update Action

 

作用：设置更新段的功能

::: note 用法
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Update.{Action Attribute} {Value}
```
:::

::: info 说明
- `Action Attribute` 包括属性 `DryMassAction` ，`FuelMassAction` ，`SRPAreaAction` ，`DragAreaAction` ，`CrAction` ，`CdAction` `，Value` 包括属性 `Add value`，`Subtract value` ，`Set to new value` ，`No change in value`
:::

::: tip 举例
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Update.DragAreaAction No change in value
```
:::
