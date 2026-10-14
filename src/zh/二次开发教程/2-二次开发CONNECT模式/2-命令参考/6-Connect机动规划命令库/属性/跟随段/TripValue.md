# TripValue

## 作用

设置触发值

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `Stopping Condition` | `Altitude`、`Argument_of_Latitude`（设置属性使用 `ArgLat`）、`Duration`、`Epoch`、`Longitude`、`Latitude`、`Mean_Anomaly`、`Periapsis`、`R_Magnitude`、`True_Anomaly`、`StateCalc` |

## 示例

::: details open **设置 Duration 停止条件的触发值**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.Duration.TripValue 86400 sec
```

:::

::: details open **设置 Duration 加入条件的触发值**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.Duration.TripValue 86400 sec
```

:::
