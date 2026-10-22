---
description: Sets the color attributes of the object trajectory and label.
groups: [2D Graphics, GroundVehicle, Sensor, Ship, Facility, Aircraft, Star, Satellite]
---

# Graphics SetColor

## Description

Sets the object trajectory label color.

## Syntax

```atk-command
Graphics <ObjectPath> SetColor {Color} [{Item}]
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `{Color}` | The color. For available values, see [Color Format](../../2-参数值格式/颜色格式.md) |
| `[{Item}]` | Optional; specifies the item whose color is to be set |

## Applies To

Sensor, Satellite, Facility, Star, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Set the trajectory label color**
```
Graphics */Satellite/Satellite1 SetColor 4
```
:::

::: details open **Set the sensor color**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 SetColor 4
```
:::

::: details open **Set the satellite trajectory label color**
```
Graphics */Satellite/Satellite1 SetColor 4
```
:::

::: details open **Set the color**
```
Graphics */Facility/Facility1 SetColor 4
```
:::

::: details open **Set the star label color**
```
Graphics */Star/Star1 SetColor %255000000
```
:::

::: details open **Set the trajectory label color**
```
Graphics */Ship/Ship1 SetColor 4
```
:::

::: details open **Set the trajectory color**
```
Graphics */GroundVehicle/GroundVehicle1 SetColor 4
```
:::

::: details open **Set the aircraft trajectory color**
```
Graphics */Aircraft/Aircraft1 SetColor 4
```
:::
