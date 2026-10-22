# ComponentName

## Description

Sets the `ComponentName` attribute to rename the **segment**.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

::: info Note
Getting this attribute value is not supported yet.
:::

## Examples

::: details open **Rename the Coast Segment to abc**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.ComponentName abc
```
:::
