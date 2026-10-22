---
description: Clear the route waypoints of an object.
groups: [GroundVehicle, Ship, Aircraft]
---

# Waypoints

## Description

Clear an object's route.

## Syntax

```atk-command
Waypoints <VehObjectPath> Clear
```

## Parameters

| Parameter | Description |
|------|------|
| `<VehObjectPath>` | Full object path, written out from the scenario `*`, for example `*/GroundVehicle/GroundVehicle1` |
| `Clear` | Clear all route waypoints of the object |

## Applies To

Ship, GroundVehicle, Aircraft

## Examples

::: details open **Clear the route**
```
Waypoints */GroundVehicle/GroundVehicle1 Clear
```
:::

::: details open **Clear the ship route**
```
Waypoints */Ship/Ship1 Clear
```
:::

::: details open **Clear the GroundVehicle route**
```
Waypoints */GroundVehicle/GroundVehicle1 Clear
```
:::

::: details open **Clear the aircraft route**
```
Waypoints */Aircraft/Aircraft1 Clear
```
:::
