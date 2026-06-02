# Point Spinning

作用：设置旋转指向属性

用法： 
```
Point <SensorObjectPath> Spinning <Azimuth> <Elevation> <ConeAngle> {ScanMethod} [<ScanMethodParams>] <Rate> <Offset>
```

说明：

| ScanMethod          | Parameters                       |
| ------------------- | ---------------------------------|
| Continuous          | `N/A`                            | 
| Unidirectional      | `<StartAngle> <StopAngle>`       | 
| Bidirectional       | `<StartAngle> <StopAngle>`       | 

举例： 
```
Point */Satellite/Satellite1/Sensor/Sensor1 Spinning 0 -90 90 Continuous 6 360
```
