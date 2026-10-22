# Rename the RPO Segment

## Description

Rename the `RPO` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName Rename
```

## Examples

::: details open **Rename the RPO segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.ComponentName 111
```
:::
