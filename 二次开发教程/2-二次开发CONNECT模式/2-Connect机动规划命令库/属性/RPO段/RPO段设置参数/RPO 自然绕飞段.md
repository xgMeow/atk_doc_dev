# RPO 自然绕飞段

## 作用

设置 `RPONMCircumnav` 段属性

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `SemiMinor_Axis` | 数据类型：m，范围：`[0.01,1000000]` |
| `RBar_CrossTrack_Offset` | 数据类型：m，范围：`[-100000,100000]` |
| `VBar_CrossTrack_Offset` | 数据类型：m，范围：`[-100000,100000]` |
| `Transfer_Duration` | 数据类型：sec，范围：`[0.001,1000000]` |
| `InTrack_Offset` | 数据类型：m，范围：`[-100000,100000]` |
| `Way_MaxDegrees` | 数据类型：rad，范围：`[0.001,360]` |
| `NMC_NumRevs` | 范围：`[0.001,1000]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置自然绕飞段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPONMCircumnav.SemiMinor_Axis 50000
```
:::
