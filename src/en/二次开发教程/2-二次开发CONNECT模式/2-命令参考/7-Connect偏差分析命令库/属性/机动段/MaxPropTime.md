# MaxPropTime

## Description

Sets the maximum propagation time.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

## Examples

::: details open **Set the Maximum Propagation Time to 86400 Seconds**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.FiniteMnvr.MaxPropTime 86400 sec
```
:::
