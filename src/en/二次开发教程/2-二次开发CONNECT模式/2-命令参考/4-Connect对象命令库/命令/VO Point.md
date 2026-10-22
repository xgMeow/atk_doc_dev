---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO Point

## Description

Sets the 3D model point attributes of an object.

## Syntax

```atk-command
VO <ObjectPath> Point {PointOptions}
```

## Parameters

| Parameter | Value | Description |
| --- | --- | --- |
| `<ObjectPath>` | | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `Show` | `{On \| Off}` | Whether the model points are shown |
| `Size` | `<Value>` | Sets the size of the model points |

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Set the 3D model point attributes**
```
VO */Satellite/Satellite1 Point Show On Size 7
```
:::

::: details open **Set the satellite 3D model point attributes**
```
VO */Satellite/Satellite1 Point Show On Size 7
```
:::

::: details open **Show the model points**
```
VO */Facility/Facility1 Point Show On Size 7
```
:::

::: details open **Show the 3D model point**
```
VO */Missile/Missile1 Point show on
```
:::

::: details open **Set the point size**
```
VO */Missile/Missile1 Point size 3
```
:::

::: details open **Set the LaunchVehicle 3D model point attributes**
```
VO */SLaunchVehicle/LaunchVehicle1 Point Show On Size 7
```
:::

::: details open **Set the display and size of the model point**
```
VO */Ship/Ship1 Point Show On Size 7
```
:::

::: details open **Set the model point attributes**
```
VO */GroundVehicle/GroVeh1 Point Show On Size 7
```
:::

::: details open **Show the model point and set the size**
```
VO */Aircraft/Aircraft Point Show On Size 7
```
:::
