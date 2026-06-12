# RPO 单次跳跃段

## 作用

设置 `RPOHop` 段属性

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## 参数说明

| 参数 | 说明 |
| ---- | ---- |
| `Desired_Radial` | 数据类型：m，范围：`[-100000,100000]` |
| `Desired_InTrack` | 数据类型：m，范围：`[-100000,100000]` |
| `Desired_CrossTrack` | 数据类型：m，范围：`[-100000,100000]` |
| `Hop_Duration` | 数据类型：sec，范围：`[0.001,86400]` |
| `SolveMethod` | 范围：`[-1,4]` |

## 示例

::: details open **设置单次跳跃段属性**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOHop.Desired_Radial 50000
```
:::
