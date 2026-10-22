# DecrementMass

## Description

Sets whether to update the mass based on propellant consumption.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.DecrementMass {Value}
```

## Additional Notes

- `Value` includes `true` and `false`.

## Examples

::: details open **Enable Mass Update Based on Propellant Consumption**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.DecrementMass true
```
:::
