# Elliptical

## Description

Set whether to restrict to an elliptical orbit.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Elliptical <Value>
```

## Examples

::: details open **Set not to restrict to an elliptical orbit**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Elliptical false
```
:::
