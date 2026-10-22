# CoordinateSystem

## Description

Set the coordinate system.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.CoordinateSystem {Value}
```

## Examples

::: details open **Set the coordinate system to Moon J2000**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateSystem "CentralBody/Moon J2000"
```
:::
