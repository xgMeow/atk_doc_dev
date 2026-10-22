# CentralBody

## Description

Set the **central body** property value of the segment constraint.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.CentralBody {Value}
```

## Additional Notes

- Before setting a segment constraint property value, the segment constraint must already have been added.

## Examples

::: details open **Set the central body of the apogee altitude constraint to Moon**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.AltitudeOfPeriapsis.CentralBody Moon
```
:::
