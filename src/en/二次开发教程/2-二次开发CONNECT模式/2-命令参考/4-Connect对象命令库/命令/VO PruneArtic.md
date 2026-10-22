---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO PruneArtic

## Description

Controls the amount of data that the system retains when articulation data is received through Connect, that is, it prunes and deletes the articulation data already recorded for the object.

The deletion scope is specified by `{PruneOption}`, and all articulation data of the object can be deleted.

## Syntax

```atk-command
VO <ObjectPath> PruneArtic {PruneOption}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object to which the articulation belongs, written from the scenario `*`, for example `*/Satellite/ERS1`; for how to write path parameters, see [Command Syntax Conventions](../../1-命令语法约定.md) |

`{PruneOption}` currently supports only one value:

| Option | Description |
|------|------|
| `All` | Deletes all articulation data of the object |

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Delete all articulation data of the ERS1 satellite**

```
VO */Satellite/ERS1 PruneArtic All
```

- `*/Satellite/ERS1`: the full path of the satellite to which the articulation belongs
- `All`: deletes all articulation data of the object

:::
