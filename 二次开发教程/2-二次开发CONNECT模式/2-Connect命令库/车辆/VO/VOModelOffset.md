# VOModelOffset

## 作用

设置车辆 3D 模型属性。

## 语法

```
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `{OffsetOption}` | 目前包括 `Label` 和 `Translational` |

## 示例

::: details open **设置 Label 偏移**
```
VO */GroundVehicle/GroundVehicle1 ModelOffset Label On 10 20 30
```
:::

::: details open **关闭 Translational 偏移**
```
VO */GroundVehicle/GroVeh1 ModelOffset Translational off
```
:::
