# AddWaypoint

## 作用

设置**船航线**属性。

## 语法

```
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

## 参数说明

### AddMethod 取值

| AddMethod | Parameters |
| -- | -- |
| `DetTimeAccFromVel` | `[{MapGridSpec}] {PointDef} <Velocity>` |
| `DetVelFromTime` | `[{MapGridSpec}] {PointDef} <DateTime>` |

### MapGridSpec 取值

| MapGridSpec | PointDef |
| -- | -- |
| `LatLon` | `<Latitude> <Longitude> <Altitude>` |

## 示例

::: details open **设置船航线**
```
AddWaypoint */Ship/Ship1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
:::
