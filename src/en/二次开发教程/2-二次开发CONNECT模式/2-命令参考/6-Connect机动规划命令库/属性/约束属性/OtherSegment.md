# OtherSegment

## Description

Set the **other segment** property value of the segment constraint.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.OtherSegment {Value}
```

## Additional Notes

- Before setting a segment constraint property value, the segment constraint must already have been added.

## Examples

::: details open **Set the reference segment object of the duration constraint**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.Duration.OtherSegment Target_Sequence.Maneuver
```
:::
