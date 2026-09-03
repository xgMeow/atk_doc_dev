# Set the RPO Segment Reference Spacecraft

## Description

Set the reference spacecraft of the `RPO` segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Reference <ObjectPath>
```

## Examples

::: details open **Set the reference spacecraft of the RPO segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.Reference "Satellite/Satellite3"
```
:::
