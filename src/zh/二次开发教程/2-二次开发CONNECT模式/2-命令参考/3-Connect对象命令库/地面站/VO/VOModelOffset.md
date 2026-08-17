# VOModelOffset

## 作用

设置地面站 3D 模型属性。

## 语法

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## 补充说明

- 目前 `{OffsetOption}` 包括属性 `Label` 和 `Translational`

## 示例

::: details open **开启标签偏移**
```
VO */Facility/Facility1 ModelOffset Label On 10 20 30
```
:::

::: details open **关闭平移偏移**
```
VO */Facility/Facility1 ModelOffset Translational off
```
:::
