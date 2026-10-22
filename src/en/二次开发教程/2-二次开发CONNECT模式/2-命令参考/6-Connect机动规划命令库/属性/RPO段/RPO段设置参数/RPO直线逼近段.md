# RPO Straight-Line Approach Segment

## Description

Set the attributes of the `RPOFMW` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Waypoint_Radial` | Data type: m, range: `[-100000,100000]` |
| `Waypoint_InTrack` | Data type: m, range: `[-100000,100000]` |
| `Waypoint_CrossTrack` | Data type: m, range: `[0.06,100000]` |
| `Waypoint_Duration` | Data type: sec, range: `[-100000,100000]` |
| `Waypoint_MaxDegrees` | Data type: rad, range: `[0.001,360]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Straight-Line Approach segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOFMW.Waypoint_Radial 50000
```
:::
