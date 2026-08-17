# VOModelOffset

## 作用

设置对象 3D 模型属性

## 语法

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `OffsetOption` | 目前包括 `Label` 和 `Translational` |

## 示例

::: details open **设置 3D 模型标签偏移**
```
VO */LaunchVehicle/LaunchVehicle1 ModelOffset Label On 10 20 30
```
:::

::: details open **关闭 3D 模型平移偏移**
```
VO */LaunchVehicle/LaunchVehicle1 ModelOffset Translational off
```
:::
