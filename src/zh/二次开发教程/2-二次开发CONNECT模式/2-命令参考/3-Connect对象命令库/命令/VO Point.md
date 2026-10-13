---
groups: [三维视图显示, 车辆, 船, 导弹, 地面站, 飞机, 火箭, 卫星]
---

# VO Point

## 作用

设置对象 3D 模型点属性。

## 语法

```atk-command
VO <ObjectPath> Point {PointOptions}
```

## 参数说明

| 参数 | 取值 | 说明 |
| --- | --- | --- |
| `<ObjectPath>` | | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `Show` | `{On \| Off}` | 是否显示模型点 |
| `Size` | `<Value>` | 模型点大小设置 |

## 适用对象

卫星、地面站、导弹、火箭、船、车辆、飞机

## 示例

::: details open **设置 3D 模型点属性**
```
VO */Satellite/Satellite1 Point Show On Size 7
```
:::

::: details open **设置卫星 3D 模型点属性**
```
VO */Satellite/Satellite1 Point Show On Size 7
```
:::

::: details open **显示模型点**
```
VO */Facility/Facility1 Point Show On Size 7
```
:::

::: details open **显示3D模型点**
```
VO */Missile/Missile1 Point show on
```
:::

::: details open **设置点大小**
```
VO */Missile/Missile1 Point size 3
```
:::

::: details open **设置火箭 3D 模型点属性**
```
VO */SLaunchVehicle/LaunchVehicle1 Point Show On Size 7
```
:::

::: details open **设置模型点显示和大小**
```
VO */Ship/Ship1 Point Show On Size 7
```
:::

::: details open **设置模型点属性**
```
VO */GroundVehicle/GroVeh1 Point Show On Size 7
```
:::

::: details open **显示模型点并设置大小**
```
VO */Aircraft/Aircraft Point Show On Size 7
```
:::
