# Revolution

## Description

Set the number of revolutions of the transfer orbit.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Revolution <Value>
```

## Additional Notes

- `Value` is a number and specifies the number of revolutions of the transfer orbit

::: warning Note
This value can be set only when the type of [Method](./Method.md) is `AdaptSpecified`
:::

## Examples

::: details open **Set the number of revolutions of the transfer orbit to 0**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Revolution 0
```
:::
