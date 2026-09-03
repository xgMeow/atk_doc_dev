# NewtonMax

## Description

Set the number of Newton iterations.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.NewtonMax <Value>
```

## Examples

::: details open **Set the number of Newton iterations to 10**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.NewtonMax 10
```
:::
