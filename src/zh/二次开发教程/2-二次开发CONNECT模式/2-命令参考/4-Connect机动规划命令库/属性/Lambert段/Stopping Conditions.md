# Stopping Conditions

## 作用

设置停止条件

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions <List of Stopping Conditions>
```

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition} <Value> [{Unit}]
```

## 补充说明

- `List of Stopping Condition` 目前包括属性 `Duration`、`Epoch`

## 示例

::: details open **设置停止条件为 Duration**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions Duration
```
:::
