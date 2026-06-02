# AddWaypoint



作用：设置飞机航线属性

用法： 
```
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```
说明：


| AddMethod         | Parameters                             |
| ----------------- | -------------------------------------- |
| DetVelFromTime    | `[{MapGridSpec}] {PointDef}  <DateTime>` |

 
-
| MapGridSpec | PointDef                           |
| ----------- | ---------------------------------- |
| LatLon      | `<Latitude> <Longitude>  <Altitude>` |


举例： 
```
AddWaypoint */Aircraft/Aircraft1 DetVelFromTime LatLon 42.5 15 0.0 "1 Jan 2026 00:00:00.000"
```
