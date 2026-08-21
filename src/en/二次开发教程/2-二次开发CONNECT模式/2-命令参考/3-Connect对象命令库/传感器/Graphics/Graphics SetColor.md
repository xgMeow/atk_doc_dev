---
description: 设置传感器轨迹和标签的颜色属性。
---

# Graphics SetColor

## 作用

设置传感器轨迹标签颜色。

## 语法

```atk-command
Graphics <ObjectPath> SetColor {Color} [{Item}]
```

## 补充说明

`Color` 可用属性请查看[常用图形格式](../../../2-参数值格式/颜色格式.md)。

## 示例

::: details open **设置传感器颜色**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 SetColor 4
```
:::
