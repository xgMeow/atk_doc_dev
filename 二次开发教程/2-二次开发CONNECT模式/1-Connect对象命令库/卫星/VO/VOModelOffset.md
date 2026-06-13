# VOModelOffset

## 作用

设置卫星 3D 模型偏移属性。

## 语法

```
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## 参数说明

- 目前 `{OffsetOption}` 包括属性 `Label` 和 `Translational`

## 示例

::: details open **设置卫星 3D 模型 Label 偏移**
```
VO */Satellite/Satellite1 ModelOffset Label On 10 20 30
```
:::

::: details open **设置卫星 3D 模型 Translational 偏移**
```
VO */Satellite/Satellite1 ModelOffset Translational off
```
:::
