# PeriHeight

## Description

Set the periapsis altitude.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.PeriHeight <Value>
```

## Examples

::: details open **Set the periapsis altitude to 0.1**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.PeriHeight 0.1
```
:::
