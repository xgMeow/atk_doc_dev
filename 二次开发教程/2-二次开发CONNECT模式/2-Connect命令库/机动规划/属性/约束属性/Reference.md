# Reference

## 作用

设置段约束的**参考航天器**属性值。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.Reference {Value}
```

## 补充说明

- 设置段约束属性值之前，必须已添加段约束

## 示例

::: details open **设置角度约束的参考航天器**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.Angle.Reference Satellite/Satellite2
```
:::
