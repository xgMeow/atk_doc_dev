# MaxPropTime

## Description

Set the maximum propagation time.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

## Additional Notes

- Set the maximum propagation time. After the maximum propagation time, the segment ends regardless of whether the stopping condition is satisfied.

## Examples

::: details open **Set the maximum propagation time to 10 days**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.MaxPropTime 10 day
```
:::
