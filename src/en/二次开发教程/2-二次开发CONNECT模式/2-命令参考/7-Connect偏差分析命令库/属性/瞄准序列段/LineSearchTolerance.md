# LineSearchTolerance

## Description

Set the **line search convergence tolerance** of the target sequence segment.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## Examples

::: details open **Set the line search convergence tolerance to 0.0001**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.LineSearchTolerance 0.0001
```
:::
