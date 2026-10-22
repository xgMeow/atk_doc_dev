# MnvrType

## Description

Sets the maneuver type.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.MnvrType <Maneuver Type>
```

## Additional Notes

- `Maneuver Type` includes the attributes `Impulsive` and `Finite`.

## Examples

::: details open **Set the Maneuver Type to Impulsive**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.MnvrType Impulsive
```
:::
