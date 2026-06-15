# AddWaypoint

## 作用

设置车辆航线属性。

## 语法

```
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `AddMethod` | `DetTimeAccFromVel`：`[{MapGridSpec}] {PointDef} <Velocity>` / `DetVelFromTime`：`[{MapGridSpec}] {PointDef} <DateTime>` |
| `MapGridSpec` | `LatLon`：`<Latitude> <Longitude> <Altitude>` |

## 示例

::: details open **使用 DetTimeAccFromVel 方式添加航点**
```
AddWaypoint */GroundVehicle/GroundVehicle1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::
