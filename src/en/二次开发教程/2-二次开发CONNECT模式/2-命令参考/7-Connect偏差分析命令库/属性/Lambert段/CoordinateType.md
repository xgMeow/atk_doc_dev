# CoordinateType

## Description

Set the coordinate type.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.CoordinateType {Value}
```

## Additional Notes

- `{Value}` includes `"Cartesian"`, `"ModifiedKeplerian"`, and `"Keplerian"`.

## Examples

::: details open **Set the coordinate type to Cartesian**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateType "Cartesian"
```
:::
