# RPO Single Hop Segment

## Description

Set the attributes of the `RPOHop` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Desired_Radial` | Data type: m, range: `[-100000,100000]` |
| `Desired_InTrack` | Data type: m, range: `[-100000,100000]` |
| `Desired_CrossTrack` | Data type: m, range: `[-100000,100000]` |
| `Hop_Duration` | Data type: sec, range: `[0.001,86400]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Single Hop segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOHop.Desired_Radial 50000
```
:::
