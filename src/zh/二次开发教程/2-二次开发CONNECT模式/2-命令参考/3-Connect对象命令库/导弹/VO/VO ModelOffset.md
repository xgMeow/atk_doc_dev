# VO ModelOffset

## 作用

设置导弹 3D 模型标签偏移量

## 语法

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## 补充说明

- 目前 `{OffsetOption}` 包括属性 `Label` 和 `Translational`

## 示例

::: details open **设置标签偏移**
```
VO */Missile/Missile1 ModelOffset Label On 10 20 30
```
:::

::: details open **关闭平移偏移**
```
VO */Missile/Missile1 ModelOffset Translational off
```
:::
