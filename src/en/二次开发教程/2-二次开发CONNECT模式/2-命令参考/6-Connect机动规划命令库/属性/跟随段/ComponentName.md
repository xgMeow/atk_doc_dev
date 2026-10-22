# ComponentName

## Description

Renames the segment.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

::: info Note
Getting this attribute value is not supported yet.
:::

## Examples

::: details open **Rename the follow segment**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.ComponentName abc
```

:::
