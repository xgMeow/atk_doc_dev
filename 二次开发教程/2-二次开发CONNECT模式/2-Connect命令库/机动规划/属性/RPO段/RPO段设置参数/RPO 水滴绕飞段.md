# RPO 水滴绕飞段

## 作用

设置 `RPOTearDrop` 段属性

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `NumCircles` | 范围：`[0,1000]` |
| `TearDrop_TurnAround` | 数据类型：m，范围：`[-100000,100000]` |
| `TearDrop_Maneuver` | 数据类型：m，范围：`[-100000,100000]` |
| `Transfer_Duration` | 数据类型：sec，范围：`[0.001,86400]` |
| `Way_MaxDegrees` | 数据类型：rad，范围：`[0.001,360]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置水滴绕飞段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOTearDrop.NumCircles 500
```
:::
