# Update Action

## 作用

设置更新段的功能。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Update.{Action Attribute} {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Action Attribute` | 包括 `DryMassAction`、`FuelMassAction`、`SRPAreaAction`、`DragAreaAction`、`CrAction`、`CdAction` |
| `Value` | 包括 `Add value`、`Subtract value`、`Set to new value`、`No change in value` |

## 示例

::: details open **设置拖拽面积动作为不改变**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Update.DragAreaAction No change in value
```
:::
