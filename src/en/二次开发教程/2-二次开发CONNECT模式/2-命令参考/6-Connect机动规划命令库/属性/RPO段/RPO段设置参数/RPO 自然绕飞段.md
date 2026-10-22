# RPO Natural Motion Circumnavigation Segment

## Description

Set the attributes of the `RPONMCircumnav` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `SemiMinor_Axis` | Data type: m, range: `[0.01,1000000]` |
| `RBar_CrossTrack_Offset` | Data type: m, range: `[-100000,100000]` |
| `VBar_CrossTrack_Offset` | Data type: m, range: `[-100000,100000]` |
| `Transfer_Duration` | Data type: sec, range: `[0.001,1000000]` |
| `InTrack_Offset` | Data type: m, range: `[-100000,100000]` |
| `Way_MaxDegrees` | Data type: rad, range: `[0.001,360]` |
| `NMC_NumRevs` | Range: `[0.001,1000]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Natural Motion Circumnavigation segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPONMCircumnav.SemiMinor_Axis 50000
```
:::
