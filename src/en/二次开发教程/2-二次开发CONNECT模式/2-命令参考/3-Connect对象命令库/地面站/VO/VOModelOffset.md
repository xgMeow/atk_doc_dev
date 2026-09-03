# VOModelOffset

## Description

Set the facility 3D model properties.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Additional Notes

- Currently, `{OffsetOption}` includes the attributes `Label` and `Translational`

## Examples

::: details open **Turn on the label offset**
```
VO */Facility/Facility1 ModelOffset Label On 10 20 30
```
:::

::: details open **Turn off the translational offset**
```
VO */Facility/Facility1 ModelOffset Translational off
```
:::
