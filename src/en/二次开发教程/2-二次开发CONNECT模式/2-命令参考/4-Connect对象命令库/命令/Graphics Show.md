---
description: Sets whether the object is displayed in the 2D Graphics window.
groups: [2D Graphics, GroundVehicle, Sensor, Ship, Aircraft, Satellite]
---

# Graphics Show

## Description

Sets whether the object is displayed in the window.

## Syntax

```atk-command
Graphics <ObjectPath> Show {On | Off}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario root `*`, for example `*/Satellite/Satellite1` |
| `{On \| Off}` | `On` displays the object in the window; `Off` hides it |

## Applies To

Sensor, Satellite, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Hide the object display**
```
Graphics */Satellite/Satellite1 Show Off
```
:::

::: details open **Set the sensor display**
```
Graphics */Satellite/Satellite1/Sensor/Sensor1 Show Off
```
:::

::: details open **Set whether the satellite is displayed in the window**
```
Graphics */Satellite/Satellite1 Show Off
```
:::

::: details open **Hide the ship model**
```
Graphics */Ship/Ship1 Show Off
```
:::

::: details open **Hide the GroundVehicle display**
```
Graphics */GroundVehicle/GroundVehicle1 Show Off
```
:::

::: details open **Hide the aircraft display**
```
Graphics */Aircraft/Aircraft1 Show Off
```
:::
