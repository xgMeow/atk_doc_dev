# SeparationType

## Description

Sets the separation type.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.SeparationType {Type}
```

## Parameters

| Parameter | Description |
|------|------|
| `Type` | `Separate at End of Leader's Ephemeris` and `Specify Separation Conditions` |

## Examples

::: details open **Set the separation type to Separate at End of Leader's Ephemeris**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.SeparationType "Separate at End of Leader's Ephemeris"
```

:::
