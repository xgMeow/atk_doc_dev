# VOModelOffset

## Description

Set the **ship 3D model** properties.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Additional Notes

Currently, `{OffsetOption}` includes the attributes `Label` and `Translational`.

## Examples

::: details open **Set the label offset**
```
VO */Ship/Ship1 ModelOffset Label On 10 20 30
```
:::

::: details open **Turn off the Translational offset**
```
VO */Ship/Ship1 ModelOffset Translational off
```
:::
