# VO SetVectorGeometry

## Description

Set the ground vehicle vector.

## Syntax

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## Parameters

`{Option}` values:

| Value | Description |
| --- | --- |
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

> Note: `ReferenceCrdn` must be enclosed in double quotes.

If `{Option}` is `Add` or `Modify`, the following parameters apply to all types:

| Parameter | Description |
| --- | --- |
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

If `{Option}` is `Add` or `Modify`, the following parameters apply only to `Axes` and `Vector`:

| Parameter | Description |
| --- | --- |
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

If `{Option}` is `Add` or `Modify`, the following parameters apply only to `Vector`:

| Parameter | Description |
| --- | --- |
| `usetruescale` | `{On \| Off}` |

## Examples

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
