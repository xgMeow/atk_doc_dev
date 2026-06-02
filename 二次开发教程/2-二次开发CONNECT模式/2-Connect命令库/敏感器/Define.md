# Define

作用：设置传感器类型及其参数

用法： 
```
Define <SensorObjectPath> {Type} <TypeData>
```

说明：

 

| Type        | TypeData                                                                                                                                   |
| ----------- | ---------------------------------------------------------------------------                                                                |
| Rectangular | `<VerticalHalfAngle>  <HorizontalHalfAngle>`                                                                                               |
| SimpleCone  | `<ConeAngle>`                                                                                                                              |
| HalfPower   | `<Frequency> <Diameter>`                                                                                                                   |
| Conical     | `<InnerConeHalfAngle> <OuterConeHalfAngle> <MinClockAngle> <MaxClockAngle>`                                                                |
| SAR	      | `<MinElevationAngle> <MaxElevationAngle> <ForwardExclusionAngle> <AftExclusionAngle> {<ParentAltitude> \| TrackParentAltitude {On \| Off}` |

注意：输入角度值默认单位为度

举例： 
```
Define */Satellite/Satellite1/Sensor/Sensor1 Rectangular 25.1 36.8
```
