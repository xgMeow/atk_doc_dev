# RPOGEO Departure Segment

## Description

Set the attributes of the `RPOExitGEO` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.<Parameters> <List of Results >
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Desired_DriftRate` | Data type: deg/day, range: `[-360,360]` |
| `Propagator_Time` | Range: `[0.001,86400]` |
| `SolveMethod` | Range: `[-1,4]` |

## Examples

::: details open **Set the attributes of the Departure segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.Desired_DriftRate 45
```
:::
