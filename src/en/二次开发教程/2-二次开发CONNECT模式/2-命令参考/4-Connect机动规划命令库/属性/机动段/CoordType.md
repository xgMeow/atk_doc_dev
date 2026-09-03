# CoordType

## Description

Sets the coordinate type.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.CoordType <Value>
```

## Additional Notes

- `Value` includes the attributes `Cartesian` and `Spherical`.

## Examples

::: details open **Set the Coordinate Type to Cartesian**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.CoordType Cartesian
```
:::
