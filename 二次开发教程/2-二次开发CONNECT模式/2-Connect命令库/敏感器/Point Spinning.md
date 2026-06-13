---
description: 设置传感器的旋转指向属性，支持连续、单向和双向扫描模式。
---

# Point Spinning

## 作用

设置旋转指向属性。

## 语法

```
Point <SensorObjectPath> Spinning <Azimuth> <Elevation> <ConeAngle> {ScanMethod} [<ScanMethodParams>] <Rate> <Offset>
```

## 参数说明

| ScanMethod     | Parameters                   |
| -------------- | ---------------------------- |
| Continuous     | N/A                          |
| Unidirectional | `<StartAngle> <StopAngle>`   |
| Bidirectional  | `<StartAngle> <StopAngle>`   |

## 示例

::: details open **设置旋转指向**
```
Point */Satellite/Satellite1/Sensor/Sensor1 Spinning 0 -90 90 Continuous 6 360
```
:::
