# VO ModelOffset

## 作用

设置对象 3D 模型偏移属性。

## 语法

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `{OffsetOption}` | 偏移类型，目前包括 `Label` 和 `Translational` |
| `{On \| Off}` | 偏移开关 |
| `[<X> <Y> <Z>]` | 偏移量，可选 |

## 适用对象

卫星、地面站、导弹、火箭、船、车辆、飞机

## 示例

::: details open **设置 3D 模型 Label 偏移**
```
VO */Satellite/Satellite1 ModelOffset Label On 10 20 30
```
:::

::: details open **设置 3D 模型 Translational 偏移**
```
VO */Satellite/Satellite1 ModelOffset Translational off
```
:::

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

::: details open **设置模型标签偏移**
```
VO */Aircraft/Aircraft1 ModelOffset Label On 10 20 30
```
:::

::: details open **关闭模型平移偏移**
```
VO */Aircraft/Aircraft1 ModelOffset Translational off
```
:::
