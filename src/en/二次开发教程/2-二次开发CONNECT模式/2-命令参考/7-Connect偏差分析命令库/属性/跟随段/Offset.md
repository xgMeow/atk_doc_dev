# Offset

## Description

Sets the offset.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.{Offset Attribute} <Value>
```

## Parameters

| Parameter | Description |
|------|------|
| `Offset Attribute` | `Xoffset`, `Yoffset`, and `Zoffset` |

## Examples

::: details open **Set the offset in the X direction**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Xoffset 100 m
```

:::
