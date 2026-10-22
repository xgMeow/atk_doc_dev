# MaxPropTime

## Description

Sets the **maximum propagation time**. After this time, the segment ends regardless of whether a stopping condition is satisfied.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value> [{Unit}]
```

## Additional Notes

- After a maximum propagation time is set, the segment ends once that maximum propagation time is reached, regardless of whether a stopping condition is satisfied.

## Examples

::: details open **Set the Maximum Propagation Time of the Coast Segment to 10 Days**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.MaxPropTime 10 day
```
:::
