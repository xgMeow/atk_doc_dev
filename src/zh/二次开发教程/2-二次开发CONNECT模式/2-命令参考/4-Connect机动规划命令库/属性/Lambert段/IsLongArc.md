# IsLongArc

## 作用

设置是否沿长弧转移

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.IsLongArc <Value>
```

## 补充说明

- `Value` 可选值为 `on`、`off`

::: warning 注意
只有 [Method](./Method.md) 的类型为 `AdaptSpecified`，才可设置当前值
:::

## 示例

::: details open **设置不沿长弧转移**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.IsLongArc off
```
:::
