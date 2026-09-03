# VOModelOffset

## Description

Set the object 3D model properties.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Parameters

| Parameter | Description |
|------|------|
| `OffsetOption` | Currently includes `Label` and `Translational`. |

## Examples

::: details open **Set the 3D model label offset**
```
VO */LaunchVehicle/LaunchVehicle1 ModelOffset Label On 10 20 30
```
:::

::: details open **Turn off the 3D model translational offset**
```
VO */LaunchVehicle/LaunchVehicle1 ModelOffset Translational off
```
:::
