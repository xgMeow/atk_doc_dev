# Finite

## 作用

设置有限推力类型属性值

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.<Attributes ><Value>
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| 机动段-`ThrustAxes`（获得属性值暂不支持） | 属性值设置参见 [ThrustAxes](ThrustAxes.md) |
| 机动段-`CoordType` | 属性值设置参见 [CoordType](CoordType.md) |
| 机动段-`Coordinate Values` | 属性值设置参见 [Coordinate Values](Coordinate%20Values.md) |
| 预报段-`Propagator`（获得属性值暂不支持） | 属性值设置参见 [Propagator](../通用段属性/Propagator.md) |
| 预报段-`MaxPropTime` | 属性值设置参见 [MaxPropTime](../通用段属性/MaxPropTime.md) |
| 预报段-`Stopping Conditions` | 属性值设置参见 [Stopping Conditions](../通用段属性/Stopping%20Conditions.md) |
| 预报段-`Active` | 属性值设置参见 [Active](../通用段属性/Active.md) |
| 预报段-`TripValue` | 属性值设置参见 [TripValue](../通用段属性/TripValue.md) |
| 预报段-`Tolerance` | 属性值设置参见 [Tolerance](../通用段属性/Tolerance.md) |
| 预报段-`Repeat Count` | 属性值设置参见 [RepeatCount](../通用段属性/RepeatCount.md) |
| 预报段-`Condition` | 属性值设置参见 [Condition](../通用段属性/Condition.md) |
| 预报段-`CentralBody` | 属性值设置参见 [CentralBody](../通用段属性/CentralBody.md) |
| 预报段-`CoordSystem` | 属性值设置参见 [CoordSystem](../通用段属性/CoordSystem.md) |
| 预报段-`CalcObject` | 属性值设置参见 [CalcObject](../通用段属性/CalcObject.md) |

## 示例

::: details open **禁用有限推力机动段的 Duration Active 停止条件**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.FiniteMnvr.StoppingConditions.Duration.Active false
```
:::
