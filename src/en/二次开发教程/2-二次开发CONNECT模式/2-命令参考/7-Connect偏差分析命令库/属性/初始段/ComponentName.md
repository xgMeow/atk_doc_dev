# ComponentName

## Description

Renames the segment

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

::: info Note
Getting this attribute value is not supported yet
:::

## Examples

::: details open **Rename the initial state segment**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.ComponentName abc
```
:::
