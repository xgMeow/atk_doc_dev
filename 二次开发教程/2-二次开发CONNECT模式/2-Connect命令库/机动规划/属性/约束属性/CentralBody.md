# CentralBody

## 作用

设置段约束的**中心天体**属性值。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.CentralBody {Value}
```

## 补充说明

- 设置段约束属性值之前，必须已添加段约束

## 示例

::: details open **设置远地点高度约束的中心天体为月球**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.AltitudeOfPeriapsis.CentralBody Moon
```
:::
