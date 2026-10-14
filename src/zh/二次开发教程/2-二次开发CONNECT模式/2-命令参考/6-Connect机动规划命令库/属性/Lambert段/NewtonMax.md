# NewtonMax

## 作用

设置牛顿迭代次数

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.NewtonMax <Value>
```

::: warning 注意
只有 [Method](./Method.md) 的类型为 `SpecAll` 或 `SpecMin`，才可设置当前值
:::

## 示例

::: details open **设置牛顿迭代次数为 10**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.NewtonMax 10
```
:::
