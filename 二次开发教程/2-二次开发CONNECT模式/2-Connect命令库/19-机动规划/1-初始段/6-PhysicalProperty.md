## PhysicalProperty



作用：为初始段设置航天器参数

用法： 
```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.{PhysicalProperty} <Value> <Unit>
```

说明：

 

| Field                                                   | 说明                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| Dry Mass                                                | 航天器净质量默认单位为 kg, 包括单位 kg， g ，mg，设置属性使用 DryMass |
| Drag  Coefficient (Cd)                                  | 航天器大气阻力系数，设置属性使用 Cd                          |
| Drag Area                                               | 航天器大气阻力面积默认单位为 $m^2$，包括单位 $m^2$, $cm^2$，设置属性使用 DragArea |
| Solar Radiation Pressure (Spherical)  Coefficient  (Cr) | 航天器太阳光压系数，设置属性使用 Cr                          |
| Solar Radiation Pressure (Spherical)  Area              | 航天器太阳光压面积默认单位为 $m^2$，包括单位 $m^2$, $cm^2$，设置属性使用 SRPArea |
| Fuel Mass                                               | 航天器推进剂质量默认单位为 kg，包括单位 kg ，g ，mg，设置属性使用 FuelMass |

举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.FuelMass 200 kg
```
