# HomtopMax

## 作用

设置同伦迭代次数

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.HomtopMax <Value>
```

::: warning 注意
只有 [Method](./Method.md) 的类型为 `SpecAll` 或 `SpecMin`，才可设置当前值
:::

## 示例

::: details open **设置同伦迭代次数为 2**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.HomtopMax 2
```
:::
