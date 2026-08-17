# RPO 太阳同步绕飞段

## 作用

设置 `RPOFollowSun` 段属性

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Standoff_Dist` | 数据类型：m，范围：`[0.001, 100000]` |
| `NumPoints` | 范围：`[4,360]` |
| `FS_NumRevs` | 范围：`[0.001, 1000]` |
| `Transfer_Duration` | 数据类型：sec，范围：`[0.06,100000]` |
| `Way_MaxDegrees` | 数据类型：rad，范围：`[0.001,360]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置太阳同步绕飞段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOFollowSun.NumPoints 10
```
:::
