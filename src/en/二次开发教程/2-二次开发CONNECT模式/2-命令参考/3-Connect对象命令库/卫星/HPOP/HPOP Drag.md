# HPOP Drag

## Description

Sets the atmospheric drag perturbation of the force model.

## Syntax

```atk-command
HPOP <ObjectPath> Drag {DragState} <Coeff> <AreaMassRatio> {"AtmDensModel"}
```

## Parameters

| `AtmDensModel` | Parameters |
| :--- | :--- |
| `"1976 Standard"` | `N/A` |
| `"NRLMSISE 2000"`, `"MSISE 1990"`, `"MSIS 1986"` | `Manual <DailyF10.7> <AverageF10.7> <GeoMagIndex>` |

::: tip
When using this command, make sure the orbit propagator type is HPOP
:::

## Examples

::: details open **Set the Atmospheric Drag Perturbation**
```
HPOP */Satellite/Satellite1 Drag on 30.01 132.0 "MSISE 1990" Manual 120 105 3.5
```
:::
