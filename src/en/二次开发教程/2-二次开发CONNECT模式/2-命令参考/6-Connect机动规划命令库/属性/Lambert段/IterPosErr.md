# IterPosErr

## Description

Set the targeting position error.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.IterPosErr <Value>
```

## Examples

::: details open **Set the targeting position error to 0.1**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.IterPosErr 0.1
```
:::
