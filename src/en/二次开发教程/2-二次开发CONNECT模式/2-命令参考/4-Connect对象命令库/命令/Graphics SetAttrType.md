---
description: Controls the attribute type used to display an object, either the basic attributes or graphics attributes customized by time interval.
groups: [2D Graphics, Missile, LaunchVehicle, Satellite]
---

# Graphics SetAttrType

## Description

Controls the **attribute type** used to display an object.

## Syntax

```atk-command
Graphics <ObjectPath> SetAttrType {AttributeType}
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

`{AttributeType}` may take the following values:

| `{AttributeType}` | Description |
|------|------|
| `Basic` | Sets basic attributes such as color, line graphics and markers, as well as the standard options. This option is sufficient for most users. |
| `CustomIntervals` | Displays different graphics attributes within specific time intervals during animation. |

::: tip Related Documents

- [Graphics CustomIntervals](./Graphics%20CustomIntervals.md): Customize the graphics display by time interval

:::

## Applies To

Satellite, Missile, LaunchVehicle, 2D Graphics

## Examples

::: details open **Display by time interval**

```
atkConnect(conID,'Graphics','*/Satellite/Satellite1 SetAttrType CustomIntervals')
```

- `'Graphics'`: the command category
- `'*/Satellite/Satellite1 SetAttrType CustomIntervals'`: sets the display attribute type of the satellite `Satellite1` to `CustomIntervals`, that is, to display different graphics attributes by time interval

:::
