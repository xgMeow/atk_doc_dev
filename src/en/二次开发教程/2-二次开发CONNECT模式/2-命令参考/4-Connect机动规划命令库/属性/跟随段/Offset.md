# Offset

## Description

Sets the offset.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.{Offset Attribute} <Value>
```

## Parameters

| Parameter | Description |
|------|------|
| `Offset Attribute` | `Xoffset`, `Yoffset`, and `Zoffset` |

## Examples

::: details open **Set the offset in the X direction**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Xoffset 100 m
```

:::
