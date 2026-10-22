---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO ModelOffset

## Description

Sets the 3D model offset attributes of an object.

## Syntax

```atk-command
VO <ObjectPath> ModelOffset {OffsetOption} {On | Off} [<X> <Y> <Z>]
```

## Parameters

| Parameter | Description |
| --- | --- |
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `{OffsetOption}` | Offset type; currently includes `Label` and `Translational` |
| `{On \| Off}` | Offset switch |
| `[<X> <Y> <Z>]` | Offset values; optional |

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Set the Label offset of the 3D model**
```
VO */Satellite/Satellite1 ModelOffset Label On 10 20 30
```
:::

::: details open **Set the Translational offset of the 3D model**
```
VO */Satellite/Satellite1 ModelOffset Translational off
```
:::

::: details open **Set the Label offset of the satellite 3D model**
```
VO */Satellite/Satellite1 ModelOffset Label On 10 20 30
```
:::

::: details open **Set the Translational offset of the satellite 3D model**
```
VO */Satellite/Satellite1 ModelOffset Translational off
```
:::

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
