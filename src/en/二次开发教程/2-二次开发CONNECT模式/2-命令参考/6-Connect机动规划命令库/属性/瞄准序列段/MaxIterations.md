# MaxIterations

## Description

Set the **maximum number of iterations** of the target sequence segment's profile.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> [{Unit}]
```

## Examples

::: details open **Set the maximum number of iterations of the target sequence segment to 300**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.TargetSequence.Profiles.ShooterProfile.MaxIterations 300
```
:::
