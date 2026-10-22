---
groups: [3D Graphics, GroundVehicle, Sensor, Ship, Facility, Aircraft, Satellite]
---

# VO SetVectorGeometry

## Description

Sets object vectors.

## Syntax

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## Parameters

::: details Detailed Description (click to expand)

| `{Option}` | `<Parameters>` |
| --- | --- |
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

**Note: ReferenceCrdn must be enclosed in double quotation marks**

- If `{Option}` is Add or Modify, the following parameters apply to all types:

| `{DisplayOption}` | `<DisplayValue>` |
| --- | --- |
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

- If `{Option}` is Add or Modify, the following parameters apply only to Axes and Vector:

| `{DisplayOption}` | `<DisplayValue>` |
| --- | --- |
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

- If `{Option}` is Add or Modify, the following parameters apply only to Vector:

| `{DisplayOption}` | `<DisplayValue>` |
| --- | --- |
| `usetruescale` | `{On \| Off}` |

:::

## Applies To

Sensor, Satellite, Facility, Ship, GroundVehicle, Aircraft

## Examples

::: details open **Add object vectors**
```
VO */Satellite/Satellite1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify object vectors**
```
VO */Satellite/Satellite1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **Add sensor vectors**
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify sensor vectors**
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **Add satellite vectors**
```
VO */Satellite/Satellite1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify satellite vectors**
```
VO */Satellite/Satellite1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **Add vectors**
```
VO */Facility/Facility1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify vectors**
```
VO */Facility/Facility1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **Add vectors**
```
VO */Ship/Ship1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify vectors**
```
VO */Ship/Ship1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **Add vector geometry**
```
VO */GroundVehicle/GroundVehicle1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify vector geometry**
```
VO */GroundVehicle/GroundVehicle1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **Add aircraft vectors**
```
VO */Aircraft/Aircraft1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify aircraft vectors**
```
VO */Aircraft/Aircraft1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
