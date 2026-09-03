---
description: Sets the vector geometry properties of the sensor, supporting adding, modifying, and deleting reference-coordinate-system vectors, with configurable display, color, and line-width options.
---

# VO SetVectorGeometry

## Description

Sets sensor vectors.

## Syntax

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## Parameters

| {Option} | `<Parameters>`                                              |
| -------- | ----------------------------------------------------------- |
| Add      | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]`     |
| Modify   | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]`     |
| Delete   | `"<ReferenceCrdn>"`                                         |

::: warning Note
ReferenceCrdn must be enclosed in double quotes.
:::

- If `{Option}` is set to Add or Modify, the following parameters apply to all types:

| {DisplayOption} | `<DisplayValue>`       |
| --------------- | ---------------------- |
| Show            | `{On \| Off}`          |
| ShowLabel       | `{On \| Off}`          |
| Color           | `{Color}`              |

- If `{Option}` is set to Add or Modify, the following parameters apply only to Axes and Vector:

| {DisplayOption}  | `<DisplayValue>`          |
| ---------------- | ------------------------- |
| Thickness        | `<Value>`                 |
| RefCrdn          | `"<ReferenceCrdn>"`       |
| DrawAtCB         | `{On \| Off}`             |
| OriginPointDef   | `"<ReferenceCrdn>"`       |
| usetruescale     | `{On \| Off}`             |

- If `{Option}` is set to Add or Modify, the following parameters apply only to Vector:

| {DisplayOption}  | `<DisplayValue>`          |
| ---------------- | ------------------------- |
| usetruescale     | `{On \| Off}`             |

## Examples

::: details open **Add Sensor Vector**
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify Sensor Vector**
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
