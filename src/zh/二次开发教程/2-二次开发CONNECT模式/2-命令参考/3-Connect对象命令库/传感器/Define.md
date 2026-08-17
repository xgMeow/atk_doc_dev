---
description: 定义传感器类型及其参数，支持矩形、简单锥形、半功率等多种传感器模式配置。
---

# Define

## 作用

设置传感器类型及其参数。

## 语法

```atk-command
Define <SensorObjectPath> {Type} <TypeData>
```

## 参数说明

| Type        | TypeData                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Rectangular | `<VerticalHalfAngle> <HorizontalHalfAngle>`                                                                                                 |
| SimpleCone  | `<ConeAngle>`                                                                                                                               |
| HalfPower   | `<Frequency> <Diameter>`                                                                                                                    |
| Conical     | `<InnerConeHalfAngle> <OuterConeHalfAngle> <MinClockAngle> <MaxClockAngle>`                                                                 |
| SAR         | `<MinElevationAngle> <MaxElevationAngle> <ForwardExclusionAngle> <AftExclusionAngle> {<ParentAltitude> \| TrackParentAltitude {On \| Off}}` |

::: warning 注意
输入角度值默认单位为度。
:::

## 示例

::: details open **定义传感器**
```
Define */Satellite/Satellite1/Sensor/Sensor1 Rectangular 25.1 36.8
```
:::
