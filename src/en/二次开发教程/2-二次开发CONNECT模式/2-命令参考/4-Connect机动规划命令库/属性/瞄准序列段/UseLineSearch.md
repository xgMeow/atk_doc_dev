# UseLineSearch

## Description

Set whether to **use line search** on the target sequence segment's Differential Corrector.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## Examples

::: details open **Set the target sequence segment to use line search**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.UseLineSearch true
```
:::
