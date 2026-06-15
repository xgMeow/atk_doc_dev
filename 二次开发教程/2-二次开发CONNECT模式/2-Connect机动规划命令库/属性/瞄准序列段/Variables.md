# Variables

## 作用

设置瞄准段**控制变量与约束**的参数。

## 语法

```
Astrogator <Satellite Object Path> SetMCSControlValue <AttributePath>.Profiles.Differential_Corrector <ParentObjectName> <ControlName> <Attribute> <Value> [<Unit>]
```

## 参数说明

| ControlName | Attribute |
| ------------ | ------------------------ |
| 初始段 | Epoch，具体参数设置请查看初始段设置 |
| 初始段 | Cartesian，具体参数设置请查看初始段设置 |
| 初始段 | Keplerian，具体参数设置请查看初始段设置 |
| 初始段 | PhysicalProperty，具体参数设置请查看初始段设置 |
| 预报段 | MaxPropTime，具体参数设置请查看预报段设置 |
| 预报段 | TripValue，具体参数设置请查看预报段设置 |
| 机动段 | Coordinate Values，具体参数设置请查看机动段设置 |
| 机动段 | Finite 中 TripValue，具体参数设置请查看机动段设置 |
| 更新段 | Update Value，具体参数设置请查看更新段设置 |

## 示例

::: details open **设置瞄准段控制变量为机动段 Cartesian.X Active**
```
Astrogator */Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Active true
```
:::
