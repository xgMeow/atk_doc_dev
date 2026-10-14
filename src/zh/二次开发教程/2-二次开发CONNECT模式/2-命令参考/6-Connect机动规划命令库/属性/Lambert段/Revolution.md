# Revolution

## 作用

设置转移轨道圈数

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Revolution <Value>
```

## 补充说明

- `Value` 为数字类型，表示转移轨道圈数

::: warning 注意
只有 [Method](./Method.md) 的类型为 `AdaptSpecified`，才可设置当前值
:::

## 示例

::: details open **设置转移轨道圈数为 0**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Revolution 0
```
:::
