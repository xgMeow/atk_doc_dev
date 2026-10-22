# NewtonMax

## Description

Set the number of Newton iterations.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.NewtonMax <Value>
```

## Examples

::: details open **Set the number of Newton iterations to 10**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.NewtonMax 10
```
:::
