# RPO Forced Motion Circumnavigation Segment

## Description

Set the attributes of the `RPOFMCircumnav` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Circumnav_Radius` | Data type: m, range: `[0.01, 1000000]` |
| `NumPoints` | Range: `[4,360]` |
| `FMC_NumRevs` | Range: `[0.001,1000]` |
| `Transfer_Duration` | Data type: sec, range: `[0.06,100000]` |
| `Initial_Offset_Angle` | Data type: rad, range: `[- 180,180]` |
| `CrossTrack_InTrackRotation` | Data type: rad, range: `[- 180,180]` |
| `CrossTrack_RadialRotation` | Data type: rad, range: `[- 180,180]` |
| `Radial_Offset` | Data type: m, range: `[- 100000,100000]` |
| `InTrack_Offset` | Data type: m, range: `[-100000,100000]` |
| `CrossTrack_Offset` | Data type: m, range: `[-100000,100000]` |
| `Way_MaxDegrees` | Data type: rad, range: `[0.001,360]` |
| `Time_Compression_Ratio` | Range: `[0.01,100]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Forced Motion Circumnavigation segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOForcedMotionCircumnav.Circumnav_Radius 50000
```
:::
