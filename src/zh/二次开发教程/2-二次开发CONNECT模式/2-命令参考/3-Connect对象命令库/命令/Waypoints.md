---
description: 清空对象的航线航点。
groups: [对象通用命令, 车辆, 船, 飞机]
---

# Waypoints

## 作用

清空对象航线。

## 语法

```atk-command
Waypoints <VehObjectPath> Clear
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<VehObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/GroundVehicle/GroundVehicle1` |
| `Clear` | 清空该对象的全部航线航点 |

## 适用对象

船、车辆、飞机

## 示例

::: details open **清空航线**
```
Waypoints */GroundVehicle/GroundVehicle1 Clear
```
:::

::: details open **清空船航线**
```
Waypoints */Ship/Ship1 Clear
```
:::

::: details open **清空车辆航线**
```
Waypoints */GroundVehicle/GroundVehicle1 Clear
```
:::

::: details open **清空飞机航线**
```
Waypoints */Aircraft/Aircraft1 Clear
```
:::
