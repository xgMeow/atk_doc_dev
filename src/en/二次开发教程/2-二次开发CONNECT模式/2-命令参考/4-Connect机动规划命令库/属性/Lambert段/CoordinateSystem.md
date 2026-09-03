# CoordinateSystem

## Description

Set the coordinate system.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CoordinateSystem {Value}
```

## Examples

::: details open **Set the coordinate system to Moon J2000**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateSystem "CentralBody/Moon J2000"
```
:::
