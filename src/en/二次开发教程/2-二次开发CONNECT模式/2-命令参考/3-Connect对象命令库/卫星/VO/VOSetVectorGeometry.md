# VOSetVectorGeometry

## Description

Sets the vectors of the satellite.

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

## Examples

::: details open **Add Satellite Vectors**
```
VO */Satellite/Satellite1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify Satellite Vectors**
```
VO */Satellite/Satellite1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
