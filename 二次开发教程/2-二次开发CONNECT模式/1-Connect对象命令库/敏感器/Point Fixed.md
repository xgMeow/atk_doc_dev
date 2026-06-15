---
description: 设置传感器的固定指向属性，支持方位角-高度角、四元数、欧拉角、YPR 和矩阵等多种姿态表达方式。
---

# Point Fixed

## 作用

设置固定指向属性。

## 语法

```
Point <SensorObjectPath> Fixed {OrientMethod} <MethodData>
```

## 参数说明

| OrientMethod | MethodData                         | 说明                                                                                                                              |
| ------------ | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| AzEl         | `<Azimuth> <Elevation>`            | 方位角，高度角                                                                                                                     |
| Quaternion   | `<q1> <q2> <q3> <q4>`              | `<Q1>` `<Q2>` `<Q3>` 设置 `qx`、`qy`、`qz`，`<Q4>` 设置 `qs`                                                                       |
| Euler        | `<Sequence> <Rot1> <Rot2> <Rot3>`  | `<Sequence>` 可输入值包括 121、123、131、132、212、213、231、232、312、313、321、323，其中 1 是旋转轴 x 轴，2 是旋转轴 y 轴，3 是旋转轴 z 轴 |
| YPR          | `<Sequence> <Yaw> <Pitch> <Roll>`  | 偏航角，俯仰角，滚转角，转序序列包括值 RPY、RYP、PRY、PYR、YPR、YRP                                                               |
| matrix       | `<d11> <d21> <d22> <d31> <d32> <d33>` | N/A                                                                                                                               |

## 示例

::: details open **设置传感器固定指向**
```
Point */Satellite/Satellite1/Sensor/Sensor1 Fixed Quaternion 0.0 0.0 0.0 1.0
```
:::
