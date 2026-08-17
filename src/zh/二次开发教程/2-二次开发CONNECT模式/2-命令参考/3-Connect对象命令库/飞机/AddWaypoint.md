# AddWaypoint

## 作用

设置**飞机航线**属性。

## 语法

```atk-command
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `AddMethod` | `DetVelFromTime`：`[{MapGridSpec}] {PointDef} <DateTime>` |
| `MapGridSpec` | `LatLon`：`<Latitude> <Longitude> <Altitude>` |

## 示例

::: details open **使用 DetVelFromTime 方法添加航点**
```
AddWaypoint */Aircraft/Aircraft1 DetVelFromTime LatLon 42.5 15 0.0 "1 Jan 2026 00:00:00.000"
```
:::
