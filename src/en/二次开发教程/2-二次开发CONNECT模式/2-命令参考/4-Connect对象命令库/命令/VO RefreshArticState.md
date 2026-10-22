---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO RefreshArticState

## Description

Forces the articulation state of the object 3D model to be re-evaluated at the current time.

The articulated parts in the object 3D model change with the scenario time; this command causes their articulation state to be recalculated once at the current time.

## Syntax

```atk-command
VO <ObjectPath> RefreshArticState
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object to which the articulation belongs, written from the scenario `*`, for example `*/Satellite/Shuttle`; for the syntax of path parameters, see [Command Syntax Conventions](../../1-命令语法约定.md) |

This command accepts no other parameters.

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Refresh the articulation state of the space shuttle**

```
VO */Satellite/Shuttle RefreshArticState
```

- `*/Satellite/Shuttle`: full path of the space shuttle to which the articulation belongs
- `RefreshArticState`: re-evaluates the articulation state of the object at the current time

:::
