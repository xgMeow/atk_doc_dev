# Leader

## Description

Sets the reference spacecraft.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.Leader <Value>
```

## Examples

::: details open **Set the reference spacecraft of the follow segment**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Leader Vehicle2
```

:::
