---
description: Sets the trajectory attributes of an object in the 2D Graphics window.
groups: [2D Graphics, Missile, LaunchVehicle, Satellite]
---

# Graphics Pass2D

## Description

Sets the object trajectory attributes.

## Syntax

```atk-command
Graphics <ObjectPath> Pass2D ({LeadTrailOption} <Parameters>)
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |
| `LeadTrailOption` | `GrndTrail` |
| `Parameters` | `Time <Time>`, `PointNumber <PointNumber>`, `All`, `None` |

## Applies To

Satellite, Missile, LaunchVehicle

## Examples

::: details open **Set the object trajectory attributes**
```
Graphics */Satellite/Satellite1 Pass2D GrndTrail PointNumber 5000
```
:::

::: details open **Set the satellite trajectory attributes**
```
Graphics */Satellite/Satellite1 Pass2D GrndTrail PointNumber 5000
```
:::

::: details open **Set the trajectory type**
```
Graphics */Missile/Missile1 Pass2D GrndTrail PointNumber 5000
```
:::

::: details open **Set the object trajectory attributes**
```
Graphics */LaunchVehicle/LaunchVehicle1 Pass2D GrndTrail PointNumber 5000
```
:::
