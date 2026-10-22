# LineSearchUpperBound

## Description

Set the **line search upper bound** of the target sequence segment.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## Examples

::: details open **Set the line search upper bound to 10**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.LineSearchUpperBound 10
```
:::
