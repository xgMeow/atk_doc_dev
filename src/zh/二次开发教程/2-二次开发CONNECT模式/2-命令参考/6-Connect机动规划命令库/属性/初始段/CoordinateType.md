# CoordinateType

## 作用

为初始段选择坐标类型

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.CoordinateType <Value>
```

## 补充说明

- `Value` 包括坐标原点 `Cartesian` 和 `Keplerian` (或者 `Modified Keplerian`)

::: warning 注意
使用坐标类型名字时，若超过两个单词，请将空格替换为下划线或者使用引号将名字引起来，例如 `Modified_Keplerian` 或者`"Modified Keplerian"`
:::

## 示例

::: details open **设置初始段坐标类型为 Modified Keplerian**
```
Astrogator */Satellite/Satellite1 SetValue "MainSequence.SegmentList.Initial_State.CoordinateType "Modified Keplerian"
```
:::
