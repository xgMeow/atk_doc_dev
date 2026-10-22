# Enabled

## Description

Sets whether this stop segment stops the mission control sequence

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Stop.Enabled {Value}
```

## Examples

::: details open **Disable the stop segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Stop.Enabled false
```
:::
