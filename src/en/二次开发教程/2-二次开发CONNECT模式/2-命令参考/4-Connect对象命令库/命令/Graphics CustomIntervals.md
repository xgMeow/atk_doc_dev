---
description: Customizes the segmented trajectory style, and is used to add, edit, replace and remove display intervals.
groups: [2D Graphics, Missile, LaunchVehicle, Satellite]
---

# Graphics CustomIntervals

## Description

Customizes the segmented trajectory style, and is used to add, edit, replace and remove display intervals.

Controls the graphical display of an object over specific time intervals during animation.

## Syntax

```atk-command
Graphics <ObjectPath> CustomIntervals {Action} [<Parameters>]
```

## Parameters

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the object, written from the scenario `*`, for example `*/Satellite/Satellite1` |

`{Action}` may take the following values:

| `{Action}` | `<Parameters>` | Description |
|------|------|------|
| `Clear` | None | Removes **all** display intervals from the custom interval list. |
| `Add` | `<NumIntervalPairs> "<StartTime1>" "<StopTime1>" ["<StartTime2>" "<StopTime2>"...] [{AttributeOption} {Action}]` | Adds intervals to the display time list: when `Graphics SetAttrType` is set to `CustomIntervals`, the object graphic appears only within the intervals set by this command. The number of `"<StartTime>"`/`"<StopTime>"` value pairs to enter is determined by `<NumIntervalPairs>`. |
| `Replace` | `<NumIntervalPairs> "<StartTime1>" "<StopTime1>" ["<StartTime2>" "<StopTime2>"...] [{AttributeOption} {Action}]` | **Replaces** the current interval list with the interval list specified by this command. The number of `"<StartTime>"`/`"<StopTime>"` value pairs to enter is determined by `<NumIntervalPairs>`. |
| `Edit` | `[{EditAction} \| "<StartTime>" "<StopTime>"] {AttributesOption} {Action}` | Modifies intervals. `{EditAction}` may take `All`, `Default` or `AllIntervals`; if `{EditAction}` is not specified, `"<StartTime>"` and `"<StopTime>"` must be given.<br>With `All`, **all** intervals are modified, including the default interval; with `AllIntervals`, all intervals except the default interval are modified; with `Default`, the baseline graphic attributes are modified.<br>Whichever value is taken, **at least** one `{AttributeOption}`/`{Action}` pair must be given. |
| `Remove` | `"<StartTime>" "<StopTime>"` | Removes the interval that matches the given `"<StartTime>"` and `"<StopTime>"`. |

::: warning Note
- The changes made by this command **take effect only after** the [Graphics SetAttrType](./Graphics%20SetAttrType.md) command has been issued and the attribute type has been set to `CustomIntervals`.
:::

## Applies To

Satellite, Missile, LaunchVehicle, 2D Graphics

## Examples

::: details open **Clear all display intervals**

```
atkConnect(conID,'Graphics','*/Satellite/Satellite1 CustomIntervals clear')
```

- `'Graphics'`: the command category
- `'*/Satellite/Satellite1 CustomIntervals clear'`: clears all custom display intervals of the satellite `Satellite1`

:::
