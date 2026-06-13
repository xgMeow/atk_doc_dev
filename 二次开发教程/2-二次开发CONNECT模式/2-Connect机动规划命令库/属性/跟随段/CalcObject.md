# CalcObject

## 作用

设置计算对象参数

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CalcObject.CalcObject {Value}
```

## 补充说明

- 适用于 `Stopping Condition` 属性 `StateCalc`

## 示例

::: details open **设置 StateCalc 停止条件的计算对象**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.StoppingConditions.StateCalc.CalcObject X
```

:::

::: details open **设置 StateCalc 加入条件的计算对象**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.JoiningConditions.StateCalc.CalcObject X
```

:::
