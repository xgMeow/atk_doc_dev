---
groups: [Facility]
---

# SetHeightAboveGround

## Description

Sets the height above ground of a facility.

This command applies only to a **Facility**.

## Syntax

```atk-command
SetHeightAboveGround <FacilityPath> <Value>
```

## Parameters

| Parameter | Description |
|------|------|
| `<FacilityPath>` | Path of the facility object. |
| `<Value>` | Height above ground. For the unit of the value, see [Unit Format](../../2-参数值格式/单位格式.md). |

## Examples

::: details open **Set the Facility Height Above Ground**

```
atkConnect(conID,'SetHeightAboveGround','*/Facility/Facility1 17.0')
```

- `'SetHeightAboveGround'`: command name
- `'*/Facility/Facility1 17.0'`: sets the height above ground of the facility `Facility1` in the current scenario to `17.0`

:::

::: tip Related Documents

- [UseTerrain](./UseTerrain.md): Enables or disables the terrain height of a facility

:::
