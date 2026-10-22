# ComponentName

## Description

Sets the segment name.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

::: info Note
Getting this attribute value is not supported yet.
:::

## Examples

::: details open **Set the Maneuver Segment Name**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ComponentName abc
```
:::
