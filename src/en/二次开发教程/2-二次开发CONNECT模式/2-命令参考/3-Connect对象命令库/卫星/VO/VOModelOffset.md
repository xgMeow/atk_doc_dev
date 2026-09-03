# VOModelOffset

## Description

Sets the 3D model offset attributes of the satellite.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Parameters

- Currently, `{OffsetOption}` includes the attributes `Label` and `Translational`

## Examples

::: details open **Set the Label Offset of the Satellite 3D Model**
```
VO */Satellite/Satellite1 ModelOffset Label On 10 20 30
```
:::

::: details open **Set the Translational Offset of the Satellite 3D Model**
```
VO */Satellite/Satellite1 ModelOffset Translational off
```
:::
