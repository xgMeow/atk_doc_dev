# Leader

## Description

Sets the reference spacecraft.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.Leader <Value>
```

## Examples

::: details open **Set the reference spacecraft of the follow segment**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Leader Vehicle2
```

:::
