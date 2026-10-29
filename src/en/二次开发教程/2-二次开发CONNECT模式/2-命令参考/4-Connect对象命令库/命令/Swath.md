---
description: Displays the vehicle swath in the 2D Graphics window, and sets the swath type and drawing method.
groups: [2D Graphics, Missile, Aircraft, LaunchVehicle, Satellite]
---

# Swath

## Description

Displays the vehicle swath in the 2D Graphics window.

## Syntax

```atk-command
Swath <ObjectPath> {Type} <Value> [{DisplayOption}]
```

## Parameters

`{Type}` determines the swath type and takes the following values:

| `{Type}` | Meaning | `<Value>` |
|------|------|------|
| `Elevation` | Ground elevation angle | In **degrees**, ranging from `0.0` to `90.0` |
| `HalfAngle` | Vehicle half-cone angle | In **degrees**, ranging from `0.0` to `90.0` |
| `HalfWidth` | Swath half-width | In Connect distance units, see [Unit Format](../../2-参数值格式/单位格式.md); must be greater than or equal to `0.0` meters |
| `ElevationEnvelope` | Ground elevation angle envelope | In **degrees**, ranging from `0.0` to `90.0` |
| `HalfAngleEnvelope` | Vehicle half-cone angle envelope | In **degrees**, ranging from `0.0` to `90.0` |

`{DisplayOption}` is optional and determines how the swath is drawn; it takes the following values:

| `{DisplayOption}` | Meaning |
|------|------|
| `Edge` | Displays the edge |
| `Filled` | Displays the fill |
| `None` | Not displayed |

::: warning Note
If `{DisplayOption}` is omitted, the swath is set to **Off** (not displayed).
:::

## Applies To

Satellite, Missile, LaunchVehicle, Aircraft

## Examples

::: details open **Display the swath in filled form**

```
atkConnect(conID,'Swath','*/Satellite/Satellite1 Elevation 10.0 Filled')
```

- `'Swath'`: the command category
- `'*/Satellite/Satellite1 Elevation 10.0 Filled'`: displays the swath with a **ground elevation angle** of `10.0` degrees for the satellite `Satellite1`, drawn in **filled** form

:::
