# Variables

## 作用

设置瞄准段**控制变量与约束**的参数。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetMCSControlValue <AttributePath>.Profiles.Differential_Corrector <ParentObjectName> <ControlName> <Attribute> <Value> [<Unit>]
```

## 参数说明

| ControlName | Attribute |
| --- | --- |
| 初始段 | Epoch，参数设置参见 [Epoch](../初始段/Epoch.md) |
| 初始段 | Cartesian，参数设置参见 [Cartesian](../初始段/Cartesian.md) |
| 初始段 | Keplerian，参数设置参见 [Keplerian](../初始段/Keplerian.md) |
| 初始段 | PhysicalProperty，参数设置参见 [PhysicalProperty](../通用段属性/PhysicalProperty.md) |
| 预报段 | MaxPropTime，参数设置参见 [MaxPropTime](../通用段属性/MaxPropTime.md) |
| 预报段 | TripValue，参数设置参见 [TripValue](../通用段属性/TripValue.md) |
| 机动段 | Coordinate Values，参数设置参见 [Coordinate Values](../机动段/Coordinate%20Values.md) |
| 机动段 | Finite 中 TripValue，参数设置参见 [Finite](../机动段/Finite.md) |
| 更新段 | Update Value，参数设置参见 [Update Value](../更新段/Update%20Value.md) |

## 示例

::: details open **设置瞄准段控制变量为机动段 Cartesian.X Active**
```
Astrogator */Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Active true
```
:::
