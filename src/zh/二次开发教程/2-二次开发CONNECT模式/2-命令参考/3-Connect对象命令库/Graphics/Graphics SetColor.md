---
description: 设置对象轨迹和标签的颜色属性。
---

# Graphics SetColor

## 作用

设置对象轨迹标签颜色。

## 语法

```atk-command
Graphics <ObjectPath> SetColor {Color} [{Item}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `{Color}` | 颜色，可用取值请查看[常用颜色格式](../../2-参数值格式/颜色格式.md) |
| `[{Item}]` | 可选，指定要设置颜色的项目 |

## 适用对象

传感器、卫星、地面站、恒星、船、车辆、飞机

## 示例

::: details open **设置轨迹标签颜色**
```
Graphics */Satellite/Satellite1 SetColor 4
```
:::

::: details open **设置传感器颜色**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 SetColor 4
```
:::

::: details open **设置卫星轨迹标签颜色**
```
Graphics */Satellite/Satellite1 SetColor 4
```
:::

::: details open **设置颜色**
```
Graphics */Facility/Facility1 SetColor 4
```
:::

::: details open **设置恒星标签颜色**
```
Graphics */Star/Star1 SetColor %255000000
```
:::

::: details open **设置轨迹标签颜色**
```
Graphics */Ship/Ship1 SetColor 4
```
:::

::: details open **设置轨迹颜色**
```
Graphics */GroundVehicle/GroundVehicle1 SetColor 4
```
:::

::: details open **设置飞机轨迹颜色**
```
Graphics */Aircraft/Aircraft1 SetColor 4
```
:::
