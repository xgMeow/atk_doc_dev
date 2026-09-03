# RPOGEO Drifting Rendezvous Segment

## Description

Set the attributes of the `RPOGEORendezvousDrifting` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Desired_Radial` | Data type: m, range: `[-100000, 100000]` |
| `Desired_InTrack` | Data type: m, range: `[-100000,100000]` |
| `Desired_CrossTrack` | Data type: m, range: `[-100000,100000]` |
| `Desired_RadialRate` | Data type: m/sec, range: `[-1000,1000]` |
| `Desired_InTrackRate` | Data type: m/sec, range: `[-1000,1000]` |
| `Desired_CrossTrackRate` | Data type: m/sec, range: `[-1000,1000]` |
| `Wait_Time` | Data type: sec, range: `[0.001,86400]` |
| `Rendezvous_Time` | Data type: UTCG |
| `MaxIter` | Range: `[-1,1000]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Drifting Rendezvous segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOGEORendezvousDrifting.Desired_Radial 50000
```
:::
