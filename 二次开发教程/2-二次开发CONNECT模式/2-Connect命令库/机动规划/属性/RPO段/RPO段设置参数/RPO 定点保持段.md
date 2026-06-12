# RPO 定点保持段

## 作用

设置 `RPOPerchEqualSpacing` 段属性

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Perch_Duration` | 数据类型：sec，范围：`[0.001,8640000]` |
| `Perch_MaxDegrees` | 数据类型：rad，范围：`[0.001,360]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置定点保持段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOPerchEqualSpacing.Perch_Duration 7200
```
:::
