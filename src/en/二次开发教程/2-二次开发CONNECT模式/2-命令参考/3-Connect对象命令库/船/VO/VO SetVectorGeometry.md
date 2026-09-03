# VO SetVectorGeometry

## Description

Set the **ship vector**.

## Syntax

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## Parameters

### {Option} Values

| {Option} | `<Parameters>` |
| -- | -- |
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

### DisplayOption Common Values (Applies to all types for Add / Modify)

| {DisplayOption} | `<DisplayValue>` |
| -- | -- |
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

### DisplayOption Values (Add / Modify, applies only to Axes and Vector)

| {DisplayOption} | `<DisplayValue>` |
| -- | -- |
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

### DisplayOption Values (Add / Modify, applies only to Vector)

| {DisplayOption} | `<DisplayValue>` |
| -- | -- |
| `usetruescale` | `{On \| Off}` |

## Additional Notes

- `ReferenceCrdn` must be enclosed in double quotes.

## Examples

::: details open **Add a vector**
```
VO */Ship/Ship1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **Modify a vector**
```
VO */Ship/Ship1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
