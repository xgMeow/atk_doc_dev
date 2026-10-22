# RPO Perch (Station Keeping) Segment

## Description

Set the attributes of the `RPOPerchEqualSpacing` segment.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Perch_Duration` | Data type: sec, range: `[0.001,8640000]` |
| `Perch_MaxDegrees` | Data type: rad, range: `[0.001,360]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Perch (Station Keeping) segment**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOPerchEqualSpacing.Perch_Duration 7200
```
:::
