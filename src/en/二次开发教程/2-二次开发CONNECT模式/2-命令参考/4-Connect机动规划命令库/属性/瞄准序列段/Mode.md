# Mode

## Description

Set the **mode** of the target sequence segment's profile.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> [{Unit}]
```

## Parameters

| Parameter | Description |
|------|------|
| `Value` | Optional values: `Iterate`, `Not Active`, `Run Once` |

## Examples

::: details open **Set the profile mode of the target sequence segment to Iterate**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.TargetSequence.Profiles.ShooterProfile.Mode Iterate
```
:::
