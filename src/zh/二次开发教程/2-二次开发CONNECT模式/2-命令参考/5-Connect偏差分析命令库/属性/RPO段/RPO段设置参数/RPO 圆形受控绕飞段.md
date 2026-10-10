# RPO 圆形受控绕飞段

## 作用

设置 `RPOFMCircumnav` 段属性

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Circumnav_Radius` | 数据类型：m，范围：`[0.01, 1000000]` |
| `NumPoints` | 范围：`[4,360]` |
| `FMC_NumRevs` | 范围：`[0.001,1000]` |
| `Transfer_Duration` | 数据类型：sec，范围：`[0.06,100000]` |
| `Initial_Offset_Angle` | 数据类型：rad，范围：`[- 180,180]` |
| `CrossTrack_InTrackRotation` | 数据类型：rad，范围：`[- 180,180]` |
| `CrossTrack_RadialRotation` | 数据类型：rad，范围：`[- 180,180]` |
| `Radial_Offset` | 数据类型：m，范围：`[- 100000,100000]` |
| `InTrack_Offset` | 数据类型：m，范围：`[-100000,100000]` |
| `CrossTrack_Offset` | 数据类型：m，范围：`[-100000,100000]` |
| `Way_MaxDegrees` | 数据类型：rad，范围：`[0.001,360]` |
| `Time_Compression_Ratio` | 范围：`[0.01,100]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置圆形受控绕飞段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOForcedMotionCircumnav.Circumnav_Radius 50000
```
:::
