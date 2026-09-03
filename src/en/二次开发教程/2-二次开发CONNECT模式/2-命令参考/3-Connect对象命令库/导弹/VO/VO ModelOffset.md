# VO ModelOffset

## Description

Set the missile 3D model label offset.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Additional Notes

- Currently `{OffsetOption}` includes the attributes `Label` and `Translational`.

## Examples

::: details open **Set the label offset**
```
VO */Missile/Missile1 ModelOffset Label On 10 20 30
```
:::

::: details open **Turn off the translational offset**
```
VO */Missile/Missile1 ModelOffset Translational off
```
:::
