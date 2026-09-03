# RPO Tear Drop Circumnavigation Segment

## Description

Set the attributes of the `RPOTearDrop` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `NumCircles` | Range: `[0,1000]` |
| `TearDrop_TurnAround` | Data type: m, range: `[-100000,100000]` |
| `TearDrop_Maneuver` | Data type: m, range: `[-100000,100000]` |
| `Transfer_Duration` | Data type: sec, range: `[0.001,86400]` |
| `Way_MaxDegrees` | Data type: rad, range: `[0.001,360]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Tear Drop Circumnavigation segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOTearDrop.NumCircles 500
```
:::
