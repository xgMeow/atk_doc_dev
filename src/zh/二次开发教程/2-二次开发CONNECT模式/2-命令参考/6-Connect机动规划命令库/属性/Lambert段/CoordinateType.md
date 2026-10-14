# CoordinateType

## 作用

设置坐标类型

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CoordinateType {Value}
```

## 补充说明

- `{Value}` 包括 `"Cartesian"`、`"ModifiedKeplerian"` 和 `"Keplerian"`

## 示例

::: details open **设置坐标类型为 Cartesian**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateType "Cartesian"
```
:::
