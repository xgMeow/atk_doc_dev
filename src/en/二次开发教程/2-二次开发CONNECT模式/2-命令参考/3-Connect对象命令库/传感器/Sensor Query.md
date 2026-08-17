---
description: 查询传感器属性，支持指向模式、方向图名称和定义类型的获取。
---

# Sensor Query

## 作用

获得传感器属性。

## 语法

```atk-command
SensorQuery <SensorObjectPath> [{QueryType}]
```

## 补充说明

目前 `{QueryType}` 输入值包括 `Pointing`、`PatternName`、`Definition`。

## 示例

::: details open **查询传感器属性**
```
SensorQuery */Satellite/Satellite1/Sensor/Sensor1 Pointing
```
:::
