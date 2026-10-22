# Isp

## Description

Sets the specific impulse.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Isp {Value}
```

## Examples

::: details open **Set the Specific Impulse to 3000**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Isp 3000
```
:::
