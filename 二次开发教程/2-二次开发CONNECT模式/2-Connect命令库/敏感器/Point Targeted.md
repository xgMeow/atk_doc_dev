# Point Targeted

作用：设置目标指向属性

用法： 
```
Point <SensorObjectPath> Targeted {OrientMethod} <MethodData>
```

说明：

| OrientMethod      | MethodData                       |    说明                       |
| ----------------- | ---------------------------------|  ---------------------------------|
| Tracking          | `<TruncObjectPath> [{AboutBoresight} [{TrackMode}]]`                            |   `N/A`                            | 
| Fixed             | `<TruncObjectPath> {OrientMethod} <MethodData>`       |   `<MethodData>`请参考[`Point Fixed`](#point-fixed) 命令       | 

举例： 
```
Point */Satellite/Sat1/Sensor/Sensor1 Targeted Tracking Facility/testFac1 Receive
```
