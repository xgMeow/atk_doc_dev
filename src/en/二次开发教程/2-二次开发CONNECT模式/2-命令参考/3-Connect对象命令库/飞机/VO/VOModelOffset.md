# VOModelOffset

## Description

Set the aircraft **3D model** properties.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Additional Notes

- Currently `{OffsetOption}` includes the attributes `Label` and `Translational`.

## Examples

::: details open **Set the model label offset**
```
VO */Aircraft/Aircraft1 ModelOffset Label On 10 20 30
```
:::

::: details open **Turn off the model translational offset**
```
VO */Aircraft/Aircraft1 ModelOffset Translational off
```
:::
