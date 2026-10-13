---
description: 按速度或时刻为地面运动对象添加航线航点，可选设置转弯半径。
---

# AddWaypoint

## 作用

设置对象航线属性。

## 语法

```atk-command
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## 参数说明

`<VehObjectPath>` 为对象完整路径，自场景 `*` 起写全，如 `*/GroundVehicle/GroundVehicle1`。

`{AddMethod}` 取值：

| `{AddMethod}` | `<Parameters>` |
| --- | --- |
| `DetTimeAccFromVel` | `[{MapGridSpec}] {PointDef} <Velocity>` |
| `DetVelFromTime` | `[{MapGridSpec}] {PointDef} <DateTime>` |

`{MapGridSpec}` 与 `{PointDef}` 取值：

| `{MapGridSpec}` | `{PointDef}` |
| --- | --- |
| `LatLon` | `<Latitude> <Longitude> <Altitude>` |

## 适用对象

船、车辆、飞机

## 示例

::: details open **按速度添加航点**
```
AddWaypoint */GroundVehicle/GroundVehicle1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::

::: details open **按时刻添加航点**
```
AddWaypoint */Aircraft/Aircraft1 DetVelFromTime LatLon 42.5 15 0.0 "1 Jan 2026 00:00:00.000"
```
:::
