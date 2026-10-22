---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO Realtimeartic

## Description

Sets the properties of an articulated part in real time.

## Syntax

```atk-command
VO <ObjectPath> Realtimeartic <ArticName> <TransformationName> <Value>
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object to which the articulation belongs, written from the scenario `*`, for example `*/Satellite/Sat1`; for the syntax of path parameters, see [Command Syntax Conventions](../../1-命令语法约定.md) |
| `<ArticName>` | Name of the articulated part, as defined in the model file |
| `<TransformationName>` | Name of the rotation axis of the articulation, as defined in the model file |
| `<Value>` | Value set for the rotation axis of the articulation |

::: warning Note
- `<ArticName>` and `<TransformationName>` are both defined in the model file and must match the spelling used there.
- The **default model files provided with ATK do not support articulation settings**. To set articulations, supply model files that contain articulation definitions.
:::

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Set the properties of an articulated part in real time**

```
VO */Satellite/Sat1 Realtimeartic ArmJoint RotationX 45.0
```

- `*/Satellite/Sat1`: full path of the satellite to which the articulation belongs
- `ArmJoint`: name of the articulated part being set, as defined in the model file
- `RotationX`: name of the rotation axis of the articulation, as defined in the model file
- `45.0`: value set for the rotation axis

:::
