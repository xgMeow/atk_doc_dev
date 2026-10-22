# NumHomotopySteps

## Description

Set the **number of homotopy steps** of the target sequence segment.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Profiles.Differential_Corrector.{Attribute} <Value> 
```

## Examples

::: details open **Set the number of homotopy steps of the target sequence segment to 2**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.Profiles.Differential_Corrector.NumHomotopySteps 2
```
:::
