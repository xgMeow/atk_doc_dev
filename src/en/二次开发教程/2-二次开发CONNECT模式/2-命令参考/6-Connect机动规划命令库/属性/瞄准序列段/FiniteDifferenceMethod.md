# FiniteDifferenceMethod

## Description

Set the **finite difference method** of the target sequence segment's Differential Corrector.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## Parameters

| Parameter | Description |
|------|------|
| `Attribute` | Optional values: `Forward Difference`, `Central Difference`, `Signed Difference` |

## Examples

::: details open **Set the finite difference method of the target sequence segment to Signed Difference**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.FiniteDifferenceMethod Signed Difference
```
:::
