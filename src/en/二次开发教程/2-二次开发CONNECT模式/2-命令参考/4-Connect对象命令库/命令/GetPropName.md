---
groups: [Satellite]
---

# GetPropName

## Description

Gets the orbit propagator type of the satellite.

## Syntax

```atk-command
GetPropName <ObjectPath> {DataOption}
```

## Parameters

| Parameter | Description |
|------|------|
| `DataOption` | Includes the attribute `Active` |

## Examples

::: details open **Get the orbit propagator type of the satellite**
```
GetPropName */Satellite/Satellite1 Active
```
:::
