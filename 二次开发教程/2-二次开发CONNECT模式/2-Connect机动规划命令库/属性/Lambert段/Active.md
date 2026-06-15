# Active

## 作用

设置停止条件是否选中

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StoppingConditions.{Stopping Condition}.Active {Value}
```

## 补充说明

- `Stopping Condition` 目前包括属性 `Duration`、`Epoch`

## 示例

::: details open **设置 Duration 停止条件为未选中**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.StoppingConditions.Duration.Active false
```
:::
