# Reference

## Description

Set the **reference spacecraft** property value of the segment constraint.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.Reference {Value}
```

## Additional Notes

- Before setting a segment constraint property value, the segment constraint must already have been added.

## Examples

::: details open **Set the reference spacecraft of the angle constraint**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.Angle.Reference Satellite/Satellite2
```
:::
