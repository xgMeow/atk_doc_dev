# PhysicalProperty

## 作用

为初始段设置航天器参数

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.{PhysicalProperty} <Value> <Unit>
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| Dry Mass | 航天器净质量，单位随当前 Connect 的质量单位设置，可附 kg、mg 等单位，设置属性使用 `DryMass` |
| Drag Coefficient (Cd) | 航天器大气阻力系数，设置属性使用 `Cd` |
| Drag Area | 航天器大气阻力面积，单位为当前 Connect 距离单位的平方，可附 cm² 等单位，设置属性使用 `DragArea` |
| Solar Radiation Pressure (Spherical) Coefficient (Cr) | 航天器太阳光压系数，设置属性使用 `Cr` |
| Solar Radiation Pressure (Spherical) Area | 航天器太阳光压面积，单位为当前 Connect 距离单位的平方，可附 cm² 等单位，设置属性使用 `SRPArea` |
| Fuel Mass | 航天器推进剂质量，单位随当前 Connect 的质量单位设置，可附 kg、mg 等单位，设置属性使用 `FuelMass` |

## 示例

::: details open **设置初始段推进剂质量**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.FuelMass 200 kg
```
:::
