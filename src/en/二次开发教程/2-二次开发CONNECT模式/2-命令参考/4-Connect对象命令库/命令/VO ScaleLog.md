---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO ScaleLog

## Description

Sets the log scale of the object 3D model.

## Syntax

```atk-command
VO <ObjectPath> ScaleLog <Value>
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `<Value>` | Logarithmic scale value of the model |

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Set the 3D model log scale**
```
VO */Satellite/Shuttle ScaleLog 3
```
:::

::: details open **Set the satellite 3D model log scale**
```
VO */Satellite/Shuttle ScaleLog 3
```
:::

::: details open **Set the scale**
```
VO */Facility/Facility1 ScaleLog 3
```
:::

::: details open **Set the model scale**
```
VO */Missile/Missile1 ScaleLog 3
```
:::

::: details open **Set the LaunchVehicle 3D model log scale**
```
VO */LaunchVehicle/LaunchVehicle1 ScaleLog 3
```
:::

::: details open **Set the model log scale**
```
VO */Ship/Ship1 ScaleLog 3
```
:::

::: details open **Set the model log scale**
```
VO */GroundVehicle/GroVeh1 ScaleLog 3
```
:::

::: details open **Set the model log scale to 3**
```
VO */Aircraft/Aircraft1 ScaleLog 3
```
:::
