# RPO Sun-Synchronous Circumnavigation Segment

## Description

Set the attributes of the `RPOFollowSun` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Standoff_Dist` | Data type: m, range: `[0.001, 100000]` |
| `NumPoints` | Range: `[4,360]` |
| `FS_NumRevs` | Range: `[0.001, 1000]` |
| `Transfer_Duration` | Data type: sec, range: `[0.06,100000]` |
| `Way_MaxDegrees` | Data type: rad, range: `[0.001,360]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Sun-Synchronous Circumnavigation segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOFollowSun.NumPoints 10
```
:::
