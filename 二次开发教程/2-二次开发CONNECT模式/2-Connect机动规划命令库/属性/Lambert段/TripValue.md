# TripValue

## 作用

设置触发值

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.TripValue <Value> [{Unit}]
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Duration`、`Epoch`

## 示例

::: details open **设置 Duration 停止条件的触发值为 86400 秒**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.TripValue 86400 sec
```
:::
