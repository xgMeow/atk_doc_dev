# LineSearchMaxNumCalls

## Description

Set the **maximum number of line search iterations** of the target sequence segment's Differential Corrector.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## Examples

::: details open **Set the maximum number of line search iterations to 15**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.LineSearchMaxNumCalls 15
```
:::
