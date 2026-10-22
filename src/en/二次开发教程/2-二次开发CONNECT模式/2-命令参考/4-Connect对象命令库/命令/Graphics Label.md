---
description: Sets the display attributes of an object label.
groups: [2D Graphics, GroundVehicle, Ship, Facility, Aircraft, Star, Satellite]
---

# Graphics Label

## Description

Sets the object label attributes.

## Syntax

```atk-command
Graphics <ObjectPath> Label {Options}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `Show {on \| off}` | Shows or hides the label |

## Applies To

Satellite, Facility, Star, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Show the label**
```
Graphics */Satellite/Satellite1 Label Show on
```
:::

::: details open **Set the satellite label attributes**
```
Graphics */Satellite/Satellite1 Label Show on
```
:::

::: details open **Show the label**
```
Graphics */Facility/Facility1 Label Show on
```
:::

::: details open **Show the star label**
```
Graphics */Star/Star1 Label Show on
```
:::

::: details open **Show the ship label**
```
Graphics */Ship/Ship1 Label Show on
```
:::

::: details open **Show the GroundVehicle label**
```
Graphics */GroundVehicle/GroundVehicle1 Label Show on
```
:::

::: details open **Show the aircraft label**
```
Graphics */Aircraft/Aircraft1 Label Show on
```
:::
