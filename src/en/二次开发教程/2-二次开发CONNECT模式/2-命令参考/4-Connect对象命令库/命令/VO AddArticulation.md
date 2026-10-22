---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO AddArticulation

## Description

Adds a joint action definition to a movable part of the object's 3D model. A joint action applies a dynamic transformation to the parts of the model.

The command can be issued at any time as long as the scenario and the required model are loaded; the joint action actually takes place within the period described by `StartTime` and `Duration`.

## Syntax

```atk-command
VO <ObjectPath> AddArticulation {ArticulateOptions}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full object path, written in full from the scenario `*`, e.g. `*/Satellite/Satellite1` |

`{ArticulateOptions}` consists of the following options and their values, which can be combined as needed:

| Option | Value | Description |
|------|------|------|
| `ArticulationName` | `<Value>` | Name of the model joint to which this joint action is attached; a string of at most 31 characters |
| `TransformationName` | `<Value>` | Name of the rotation axis of that joint; a string of at most 31 characters |
| `StartTime` | `<Value>` | Start time of the joint action, in **epoch seconds** (EpSec, the cumulative number of seconds since the scenario reference epoch) |
| `Duration` | `<Value>` | Duration of the joint action in seconds; must be greater than `0.0` |
| `DeadBandDuration` | `<Value>` | Duration during which the joint does not move; must be ≥ `0.0` and ≤ `Period` |
| `AccelDuration` | `<Value>` | Coefficient of non-linear acceleration; must be ≥ `0.0` |
| `DecelDuration` | `<Value>` | Coefficient of non-linear deceleration; must be ≥ `0.0` |
| `DutyCycleDelta` | `<Value>` | Percentage offset of the start of the joint action period relative to the start-end interval; must be ≥ `0.0` and ≤ `Duration` |
| `Period` | `<Value>` | Number of seconds required to complete one full period; must be ≥ `0.0` and ≤ `Duration` |
| `StartValue` | `<Value>` | Start value of the joint action; must be greater than the minimum value of the joint and less than its maximum value |
| `EndValue` | `<Value>` | End value of the joint action; must be greater than the minimum value of the joint and less than its maximum value |

::: warning Note
- `ArticulationName`, `TransformationName`, and `Duration` are **required**; if any of them is missing or invalid, the command fails (returns Nack).
- All options other than these three default to `0.0` when unspecified.
- `ArticulationName` and `TransformationName` take the joint name and rotation axis name **already defined in the model file**, and must match the actual content of the model.
- The **default model files** provided by ATK **do not support joint settings**; to set joints, supply a model file that contains joint definitions.
:::

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Add Two Joint Actions to an Object**

```
VO */Satellite/Satellite1 AddArticulation ArticulationName SlrPnl-1 TransformationName xrot StartTime 0 Duration 300 DeadBandDuration 0.0 AccelDuration 0 DecelDuration 0 DutyCycleDelta 0 Period 10 StartValue 10 EndValue 60
VO */Satellite/Satellite1 AddArticulation ArticulationName SlrPnl-1 TransformationName xrot StartTime 330 Duration 20 DeadBandDuration 11 StartValue 60 EndValue -30
```

- `ArticulationName SlrPnl-1`, `TransformationName xrot`: specify a joint already present in the model and its rotation axis
- `StartTime 0`, `StartTime 330`: the start time, given in epoch seconds, 0 seconds and 330 seconds respectively
- `Duration 300`, `Duration 20`: the duration of the joint action in seconds
- `Period 10`: one full period is completed every 10 seconds
- `StartValue 10`, `EndValue 60` (for the second command, `StartValue 60`, `EndValue -30`): the start and end values of the joint action
- `DeadBandDuration 11`: the joint does not move for 11 seconds, that is, the end value is reached 11 seconds before the end time
- The options not written in the second command (`AccelDuration`, `DecelDuration`, `DutyCycleDelta`, `Period`) all default to `0.0`

:::
