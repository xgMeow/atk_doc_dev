# CentralBody

## 作用

设置**中心天体**。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Altitude`、`Apoapsis`、`Latitude`、`Longitude`、`Mean_Anomaly`、`Periapsis`、`True_Anomaly`。
- `Value` 包括属性 `Earth`、`Mars`、`Moon`。

## 示例

::: details open **设置 Apoapsis 停止条件的中心天体为 Moon**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```
:::
