# MaxPropTime

## Description

Sets the maximum propagation time `MaxPropTime`. Once this maximum propagation time is reached, the segment ends regardless of whether any stopping condition is satisfied.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

## Additional Notes

- Getting this attribute value is not supported yet

## Examples

::: details open **Set the maximum propagation time to 10 days**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.MaxPropTime 10 day
```
:::
