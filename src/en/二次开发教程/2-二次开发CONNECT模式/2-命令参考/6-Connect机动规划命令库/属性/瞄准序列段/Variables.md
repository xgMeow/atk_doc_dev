# Variables

## Description

Set the parameters of the target sequence segment's **control variables and constraints**.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetMCSControlValue <AttributePath>.Profiles.Differential_Corrector <ParentObjectName> <ControlName> <Attribute> <Value> [<Unit>]
```

## Parameters

| ControlName | Attribute |
| ------------ | ------------------------ |
| Initial segment | Epoch; for specific parameter settings, see Initial segment settings |
| Initial segment | Cartesian; for specific parameter settings, see Initial segment settings |
| Initial segment | Keplerian; for specific parameter settings, see Initial segment settings |
| Initial segment | PhysicalProperty; for specific parameter settings, see Initial segment settings |
| Propagate segment | MaxPropTime; for specific parameter settings, see Propagate segment settings |
| Propagate segment | TripValue; for specific parameter settings, see Propagate segment settings |
| Maneuver segment | Coordinate Values; for specific parameter settings, see Maneuver segment settings |
| Maneuver segment | TripValue in Finite; for specific parameter settings, see Maneuver segment settings |
| Update segment | Update Value; for specific parameter settings, see Update segment settings |

## Examples

::: details open **Set the control variable of the target sequence segment to the maneuver segment's Cartesian.X Active**
```
Astrogator */Satellite/FastTransfer SetMCSControlValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector Maneuver ImpulsiveMnvr.Cartesian.X Active true
```
:::
