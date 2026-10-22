# CoordType

## Description

Sets the coordinate type.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.CoordType <Value>
```

## Additional Notes

- `Value` includes the attributes `Cartesian` and `Spherical`.

## Examples

::: details open **Set the Coordinate Type to Cartesian**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.CoordType Cartesian
```
:::
