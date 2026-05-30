## AddWaypoint
 

作用：设置车辆航线属性

用法： 

```
AddWaypoint <VehObjectPath> {AddMethod} <Parameters> [<TurnRadius>]
```

说明：

| AddMethod         | Parameters                             |
| ----------------- | -------------------------------------- |
| DetTimeAccFromVel | `[{MapGridSpec}] {PointDef}  <Velocity>` |
| DetVelFromTime    | `[{MapGridSpec}] {PointDef}  <DateTime>` |

 -
| MapGridSpec | PointDef                           |
| ----------- | ---------------------------------- |
| LatLon      | `<Latitude> <Longitude>  <Altitude>` |

举例： 

```
AddWaypoint */GroundVehicle/GroundVehicle1 DetTimeAccFromVel LatLon 42.5 15 0.0 1.0
```
