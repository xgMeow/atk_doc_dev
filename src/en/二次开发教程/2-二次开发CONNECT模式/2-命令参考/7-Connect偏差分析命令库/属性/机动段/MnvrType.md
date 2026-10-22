# MnvrType

## Description

Sets the maneuver type.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.MnvrType <Maneuver Type>
```

## Additional Notes

- `Maneuver Type` includes the attributes `Impulsive` and `Finite`.

## Examples

::: details open **Set the Maneuver Type to Impulsive**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.MnvrType Impulsive
```
:::
