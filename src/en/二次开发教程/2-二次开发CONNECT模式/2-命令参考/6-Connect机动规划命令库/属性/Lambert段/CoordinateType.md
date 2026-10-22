# CoordinateType

## Description

Set the coordinate type.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CoordinateType {Value}
```

## Additional Notes

- `{Value}` includes `"Cartesian"`, `"ModifiedKeplerian"`, and `"Keplerian"`.

## Examples

::: details open **Set the coordinate type to Cartesian**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateType "Cartesian"
```
:::
