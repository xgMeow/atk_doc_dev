# CalcObject

## 作用

设置 `CalcObject` 属性配置**计算对象**参数。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## 补充说明

- `Stopping Condition` 属性 `StateCalc` 需要使用 `CalcObject` 设置计算对象。

## 示例

::: details open **设置 StateCalc 停止条件的计算对象为 X**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StoppingConditions.StateCalc.CalcObject X
```
:::
