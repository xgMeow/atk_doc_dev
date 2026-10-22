# Thrust

## Description

Sets the thrust magnitude.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Thrust {Value}
```

## Examples

::: details open **Set the Thrust Magnitude to 100**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Thrust 100
```
:::
