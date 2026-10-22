# CoordinateType

## Description

Selects the coordinate type for the initial state

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.CoordinateType <Value>
```

## Additional Notes

- `Value` includes the coordinate types `Cartesian` and `Keplerian` (or `Modified Keplerian`)

::: warning Note
When using a coordinate type name of more than two words, replace the spaces with underscores or enclose the name in quotes, for example `Modified_Keplerian` or `"Modified Keplerian"`
:::

## Examples

::: details open **Set the coordinate type of the initial state to Modified Keplerian**
```
AstroUQ */Satellite/Satellite1 SetValue "MainSequence.SegmentList.Initial_State.CoordinateType "Modified Keplerian"
```
:::
