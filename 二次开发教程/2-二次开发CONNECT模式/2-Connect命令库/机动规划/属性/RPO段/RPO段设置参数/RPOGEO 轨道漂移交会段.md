# RPOGEO 轨道漂移交会段

## 作用

设置 `RPOGEORendezvousDrifting` 段属性

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Desired_Radial` | 数据类型：m，范围：`[-100000, 100000]` |
| `Desired_InTrack` | 数据类型：m，范围：`[-100000,100000]` |
| `Desired_CrossTrack` | 数据类型：m，范围：`[-100000,100000]` |
| `Desired_RadialRate` | 数据类型：m/sec，范围：`[-1000,1000]` |
| `Desired_InTrackRate` | 数据类型：m/sec，范围：`[-1000,1000]` |
| `Desired_CrossTrackRate` | 数据类型：m/sec，范围：`[-1000,1000]` |
| `Wait_Time` | 数据类型：sec，范围：`[0.001,86400]` |
| `Rendezvous_Time` | 数据类型：UTCG |
| `MaxIter` | 范围：`[-1,1000]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置轨道漂移交会段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOGEORendezvousDrifting.Desired_Radial 50000
```
:::
