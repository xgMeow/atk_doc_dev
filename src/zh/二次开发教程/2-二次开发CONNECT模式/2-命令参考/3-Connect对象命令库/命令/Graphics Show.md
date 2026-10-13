---
description: 设置对象是否在二维图形窗口中显示。
groups: [二维视图显示, 车辆, 传感器, 船, 飞机, 卫星]
---

# Graphics Show

## 作用

设置对象是否在窗口显示。

## 语法

```atk-command
Graphics <ObjectPath> Show {On | Off}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `{On \| Off}` | 取 `On` 时在窗口中显示该对象，取 `Off` 时隐藏 |

## 适用对象

传感器、卫星、船、车辆、飞机

## 示例

::: details open **隐藏对象显示**
```
Graphics */Satellite/Satellite1 Show Off
```
:::

::: details open **设置传感器显示**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 Show Off
```
:::

::: details open **设置卫星是否在窗口显示**
```
Graphics */Satellite/Satellite1 Show Off
```
:::

::: details open **隐藏船模型**
```
Graphics */Ship/Ship1 Show Off
```
:::

::: details open **隐藏车辆显示**
```
Graphics */GroundVehicle/GroundVehicle1 Show Off
```
:::

::: details open **隐藏飞机显示**
```
Graphics */Aircraft/Aircraft1 Show Off
```
:::
