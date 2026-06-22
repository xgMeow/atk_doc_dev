# OtherSegment

## 作用

设置段约束的**段对象**属性值。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.OtherSegment {Value}
```

## 补充说明

- 设置段约束属性值之前，必须已添加段约束

## 示例

::: details open **设置时长约束的参考段对象**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.Duration.OtherSegment Target_Sequence.Maneuver
```
:::
