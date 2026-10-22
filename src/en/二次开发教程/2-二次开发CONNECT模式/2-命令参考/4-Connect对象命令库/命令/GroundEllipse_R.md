---
description: Obtains the ground ellipse attributes in the 2D Graphics view, that is, the ellipse set data of the object.
groups: [2D Graphics, GroundVehicle, Ship, Missile, Aircraft, LaunchVehicle, Satellite]
---

# GroundEllipse_R

## Description

Obtains the ground ellipse attributes in the 2D Graphics view, that is, the ellipse set data of the object.

## Syntax

```atk-command
GroundEllipse_R <VehObjectPath> {GetAllSets [IncludeEmptySets] | GetSetEllipses <SetName>}
```

## Parameters

`{GetAllSets [IncludeEmptySets] | GetSetEllipses <SetName>}` determines which part of the data is obtained, and must be one of the following values:

| Value | Description |
|------|------|
| `GetAllSets [IncludeEmptySets]` | Obtains the data of **all** ellipse sets of the object. Empty ellipse sets are **not** returned by default; to return them as well, add the keyword `IncludeEmptySets`. |
| `GetSetEllipses <SetName>` | Returns the information of the specified ellipse set. |

## Applies To

Satellite, Missile, LaunchVehicle, Ship, 2D Graphics, GroundVehicle, Aircraft

## Examples

::: details open **Obtain all ellipse sets (including empty sets)**

```
atkConnect(conID,'GroundEllipse_R','*/GroundVehicle/GroundVehicle1 GetAllSets IncludeEmptySets')
```

- `'GroundEllipse_R'`: the command name
- `'*/GroundVehicle/GroundVehicle1 GetAllSets IncludeEmptySets'`: obtains all ellipse sets of the GroundVehicle `GroundVehicle1` in the current scenario, **including empty ellipse sets**

:::

::: tip Related Documents

- [GroundEllipse](./GroundEllipse.md): sets the ground ellipse attributes in the 2D Graphics view

:::
