---
description: 设置传感器轨迹线宽，控制二维图形窗口中传感器轨迹线的显示宽度。
---

# Graphics LineWidth

## 作用

设置轨迹线宽。

## 语法

```atk-command
Graphics <ObjectPath> LineWidth <LineWidth>
```

## 补充说明

`LineWidth` 输入值应介于 `1.0` 至 `10.0`。

## 示例

::: details open **设置轨迹线宽**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 LineWidth 5
```
:::
