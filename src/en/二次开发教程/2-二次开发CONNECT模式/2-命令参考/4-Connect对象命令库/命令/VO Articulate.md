---
groups: [3D Graphics, GroundVehicle, Ship, Missile, Facility, Aircraft, LaunchVehicle, Satellite]
---

# VO Articulate

## Description

Drives a joint on the object's 3D model through a single motion, with the start and end values of the joint given directly in the command.

The model of the object referenced by `<ObjectPath>` must **contain joint parts**.

The command can be issued at any time as long as the scenario and the required model are loaded; the joint motion actually takes place within the period described by `"<StartTime>"` and `<Duration>`.

Compared with `VO AddArticulation`: the latter is used to **define** a joint action (with a configurable period, acceleration/deceleration curves, and so on), whereas this command has fewer parameters and is used to **directly drive** a single joint motion with known start and end values.

## Syntax

```atk-command
VO <ObjectPath> Articulate "<StartTime>" <Duration> <ArticName> <TransformationName> <BeginningArticValue> <EndArticValue>
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full object path; the model it belongs to must contain joint parts, e.g. `*/Satellite/Satellite1` |
| `"<StartTime>"` | Start time of the joint motion, **entered in the current Connect date format**, UTCG by default; for the format, see [Date/Time Format](../../2-参数值格式/日期时间格式.md); the string contains spaces and must be enclosed in double quotes |
| `<Duration>` | Duration of the joint motion in seconds, **always interpreted in seconds** |
| `<ArticName>` | Name of the specific joint part being moved |
| `<TransformationName>` | Name of the rotation axis of that joint |
| `<BeginningArticValue>` | Start value of the joint motion range |
| `<EndArticValue>` | End value of the joint motion range |

::: warning Note
- The values of `<ArticName>`, `<TransformationName>`, `<BeginningArticValue>`, and `<EndArticValue>` **depend on the specific model** and must match the joint name, rotation axis name, and value range actually defined in the model file.
- The **default model files** provided by ATK **do not support joint settings**; to set joints, supply a model file that contains joint definitions.
:::

## Applies To

Satellite, Facility, Missile, LaunchVehicle, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Drive a Joint Motion on the Object Model**

```
VO */Satellite/Satellite1 Articulate "1 Nov 2000 22:00:00.00" 30 Cargo Rotate 0 -160
```

- `"1 Nov 2000 22:00:00.00"`: the start time of the joint motion, entered in the current Connect date format, UTCG by default; the string contains spaces and must be enclosed in double quotes
- `30`: the joint motion lasts 30 seconds
- `Cargo`: the name of the joint part being moved
- `Rotate`: the name of the rotation axis of that joint
- `0 -160`: the start and end values of the joint motion range, corresponding to `BeginningArticValue` and `EndArticValue` respectively; the example above rotates the joint from `0` to `-160`

:::
