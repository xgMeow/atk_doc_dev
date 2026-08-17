# RPOGEO 轨道撤离段

## 作用

设置 `RPOExitGEO` 段属性

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Desired_DriftRate` | 数据类型：deg/day，范围：`[-360,360]` |
| `Propagator_Time` | 范围：`[0.001,86400]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置轨道撤离段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.Desired_DriftRate 45
```
:::
