---
description: 设置对象在二维视图中的轨迹属性。
groups: [二维视图, 导弹, 火箭, 卫星]
---

# Graphics Pass2D

## 作用

设置对象轨迹属性。

## 语法

```atk-command
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `LeadTrailOption` | `GrndTrail` |
| `Parameters` | `Time <Time>`、`PointNumber <PointNumber>`、`All`、`None` |

## 适用对象

卫星、导弹、火箭

## 示例

::: details open **设置对象轨迹属性**
```
Graphics */Satellite/Satellite1 Pass2D GrndTrail PointNumber 5000
```
:::

::: details open **设置卫星轨迹属性**
```
Graphics */Satellite/Satellite1 Pass2D GrndTrail PointNumber 5000
```
:::

::: details open **设置轨迹类型**
```
Graphics */Missile/Missile1 Pass2D GrndTrail PointNumber 5000
```
:::

::: details open **设置对象轨迹属性**
```
Graphics */LaunchVehicle/LaunchVehicle1 Pass2D GrndTrail PointNumber 5000
```
:::
