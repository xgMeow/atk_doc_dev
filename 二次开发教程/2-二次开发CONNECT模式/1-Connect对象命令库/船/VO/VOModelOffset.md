# VOModelOffset

## 作用

设置**船 3D 模型**属性。

## 语法

```
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## 补充说明

目前 `{OffsetOption}` 包括属性 `Label` 和 `Translational`。

## 示例

::: details open **设置标签偏移**
```
VO */Ship/Ship1 ModelOffset Label On 10 20 30
```
:::

::: details open **关闭 Translational 偏移**
```
VO */Ship/Ship1 ModelOffset Translational off
```
:::
