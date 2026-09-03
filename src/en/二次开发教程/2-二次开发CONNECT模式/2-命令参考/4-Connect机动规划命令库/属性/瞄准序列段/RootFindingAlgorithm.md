# RootFindingAlgorithm

## Description

Set the **root-finding algorithm** of the target sequence segment's Differential Corrector.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## Parameters

| Parameter | Description |
|------|------|
| `Attribute` | Optional values: `Newton-Raphson Method`, `Secant Method`, `Sequential Quadratic Prgramming` |

## Examples

::: details open **Set the root-finding algorithm of the target sequence segment to Newton-Raphson Method**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.RootFindingAlgorithm "Newton-Raphson Method"
```
:::
