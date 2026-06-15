---
description: 设置传感器的外部指向属性，通过外部文件定义传感器的指向变化。
---

# Point External

## 作用

设置外部指向属性。

## 语法

```
Point <SensorObjectPath> External "<FilePath.sp>"
```

## 示例

::: details open **设置外部指向**
```
Point */Satellite/Shuttle/Sensor/Horizon External "c:\MyScTemp\MyScenPositionData.sp"
```
:::
