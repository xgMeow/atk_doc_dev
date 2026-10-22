# HoldFrame

## Description

Sets the `HoldFrame` reference coordinate system of the **coast segment**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.HoldFrame {Value}
```

## Examples

::: details open **Set the HoldFrame of the Coast Segment to CentralBody/Moon Fixed**
```
Astrogator */Satellite/mysat SetValue MainSequence.SegmentList.Hold.HoldFrame "CentralBody/Moon Fixed"
```
:::
