# Rename the RPO Segment

## Description

Rename the `RPO` segment.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.ComponentName Rename
```

## Examples

::: details open **Rename the RPO segment**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.ComponentName 111
```
:::
