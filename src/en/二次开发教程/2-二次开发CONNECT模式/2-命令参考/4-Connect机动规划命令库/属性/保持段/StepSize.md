# StepSize

## Description

Sets the **coast segment** step size.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StepSize <Value> [{Unit}]
```

## Examples

::: details open **Set the Step Size of the Coast Segment to 10 Seconds**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StepSize 10 sec
```
:::
