# TripValue

## 作用

设置**停止条件**的**触发值**。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Altitude`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`StateCalc`

## 示例

::: details open **设置 Duration 停止条件的触发值为 86400 秒**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Duration.TripValue 86400 sec
```
:::
