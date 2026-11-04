# Coordinate Values

## Description

Sets the coordinate attribute values.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.<Coordinate Type>.<Attribute> <Value> <Unit>
```

## Additional Notes

- `Coordinate Type` includes the attributes `Cartesian` and `Spherical`. When the `Coordinate Type` input value is `Cartesian`, `Attribute` includes the attributes `X`, `Y`, and `Z`; when the `Coordinate Type` input value is `Spherical`, `Attribute` includes the attributes `Azimuth`, `Elevation`, and `Magnitude`.

::: info Note
1. The unit of `Cartesian` is the ratio of the current Connect distance unit to the time unit. For `Spherical`, `Azimuth` and `Elevation` are in the current Connect angle unit, and `Magnitude` is the ratio of the distance unit to the time unit.
2. When the `MnvrType` is `Finite`, `Cartesian` has no unit, and `Spherical` only includes the attributes `Azimuth` and `Elevation`.
:::

## Examples

::: details open **Set the Spherical Azimuth to 30 Degrees**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Spherical.Azimuth 30 deg
```
:::
