---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO Model

## Description

Sets the 3D model attributes of an object.

## Syntax

```atk-command
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## Parameters

| Parameter | Value | Description |
| --- | --- | --- |
| `<ObjectPath>` | | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `Show` | `{On \| Off}` | Whether the model is shown |
| `File` | `<ModelFile>` | The model file path, supports the flt and ive formats |

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Set the 3D model attributes**
```
VO */Satellite/Satellite1 Model Show Off
```
:::

::: details open **Set the satellite 3D model attributes**
```
VO */Satellite/Satellite1 Model Show Off
```
:::

::: details open **Hide the model**
```
VO */Facility/Facility1 Model Show Off
```
:::

::: details open **Show the 3D model**
```
VO */Missile/Missile1 Model Show on
```
:::

::: details open **Set the LaunchVehicle 3D model attributes**
```
VO */LaunchVehicle/LaunchVehicle1 Model Show Off
```
:::

::: details open **Hide the ship 3D model**
```
VO */Ship/Ship1 Model Show Off
```
:::

::: details open **Hide the GroundVehicle 3D model**
```
VO */GroundVehicle/GroVeh1 Model Show Off
```
:::

::: details open **Hide the aircraft 3D model**
```
VO */Aircraft/Aircraft1 Model Show Off
```
:::
