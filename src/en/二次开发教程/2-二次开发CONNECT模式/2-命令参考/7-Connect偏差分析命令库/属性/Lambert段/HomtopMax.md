# HomtopMax

## Description

Set the number of homotopy iterations.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.HomtopMax <Value>
```

## Examples

::: details open **Set the number of homotopy iterations to 2**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.HomtopMax 2
```
:::
