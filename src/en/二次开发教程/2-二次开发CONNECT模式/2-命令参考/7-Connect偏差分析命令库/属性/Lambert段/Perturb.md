# Perturb

## Description

Set whether to use perturbation iteration.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Perturb <Value>
```

## Examples

::: details open **Set to disable perturbation iteration**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Perturb false
```
:::
