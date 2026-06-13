# CentralBody

## 作用

设置中心天体

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.CalcObjectAttributes.CentralBody {Value}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Stopping Condition` | `Altitude`、`Apoapsis`、`Latitude`、`Longitude`、`Mean_Anomaly`、`Periapsis`、`True_Anomaly` |
| `Value` | `Earth`、`Mars`、`Moon` |

## 示例

::: details open **设置 Apoapsis 停止条件的中心天体为 Moon**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```

:::

::: details open **设置 Apoapsis 加入条件的中心天体为 Moon**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Apoapsis.CalcObjectAttributes.CentralBody Moon
```

:::
