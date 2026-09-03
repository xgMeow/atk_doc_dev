# VOModelOffset

## Description

Set the ground vehicle 3D model properties.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Parameters

| Parameter | Description |
| --- | --- |
| `{OffsetOption}` | Currently includes `Label` and `Translational` |

## Examples

::: details open **Set the Label offset**
```
VO */GroundVehicle/GroundVehicle1 ModelOffset Label On 10 20 30
```
:::

::: details open **Turn off the Translational offset**
```
VO */GroundVehicle/GroVeh1 ModelOffset Translational off
```
:::
