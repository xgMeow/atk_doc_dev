# RPO直线逼近段

## 作用

设置 `RPOFMW` 段属性

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Waypoint_Radial` | 数据类型：m，范围：`[-100000,100000]` |
| `Waypoint_InTrack` | 数据类型：m，范围：`[-100000,100000]` |
| `Waypoint_CrossTrack` | 数据类型：m，范围：`[0.06,100000]` |
| `Waypoint_Duration` | 数据类型：sec，范围：`[-100000,100000]` |
| `Waypoint_MaxDegrees` | 数据类型：rad，范围：`[0.001,360]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置直线逼近段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOFMW.Waypoint_Radial 50000
```
:::
