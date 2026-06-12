# Tolerance

## 作用

设置误差

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{StoppingCondition}.Tolerance <Value> [{Unit}]
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Duration`、`Epoch`

## 示例

::: details open **设置 Duration 停止条件的误差为 0.0000001 秒**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.Tolerance 0.0000001 sec
```
:::
