# CalcObject

## 作用

设置 `CalcObject` 计算对象参数

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## 补充说明

- `Stopping Condition` 属性 `StateCalc`

## 示例

::: details open **设置 StateCalc 停止条件的 CalcObject 为 X**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.StoppingConditions.StateCalc.CalcObject X
```
:::
