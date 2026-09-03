# ComponentName

## Description

Rename the segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

## Additional Notes

- Getting this property value is not supported yet.

## Examples

::: details open **Rename the target sequence segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.ComponentName abc
```
:::
