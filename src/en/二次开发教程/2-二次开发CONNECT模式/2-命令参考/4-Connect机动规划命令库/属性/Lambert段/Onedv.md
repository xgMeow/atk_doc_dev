# Onedv

## Description

Set whether to use a single impulse.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Onedv <Value>
```

## Examples

::: details open **Set to non-single-impulse mode**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Onedv false
```
:::
