# VO SetVectorGeometry

## Description

Set the facility vector.

## Syntax

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## Parameters

| `{Option}` | `<Parameters>` |
| ----------------- | ---------- |
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

**Note**: `ReferenceCrdn` must be enclosed in double quotes.

- If `{Option}` is set to `Add` or `Modify`, the following parameters apply to all types

| `{DisplayOption}` | `<DisplayValue>` |
| ------------- | ------------------------------- |
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

- If `{Option}` is set to `Add` or `Modify`, the following parameters apply only to `Axes` and `Vector`

| `{DisplayOption}` | `<DisplayValue>` |
| ------------- | ------------------------------- |
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

- If `{Option}` is set to `Add` or `Modify`, the following parameters apply only to `Vector`

| `{DisplayOption}` | `<DisplayValue>` |
| ------------- | ------------------------------- |
| `usetruescale` | `{On \| Off}` |

## Examples

::: details open **Add a vector**
```
VO */Facility/Facility1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify a vector**
```
VO */Facility/Facility1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
