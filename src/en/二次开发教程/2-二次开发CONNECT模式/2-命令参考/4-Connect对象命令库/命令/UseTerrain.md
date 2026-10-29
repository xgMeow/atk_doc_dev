---
groups: [Facility]
---

# UseTerrain

## Description

Enables or disables the terrain height of a facility.

This command applies only to **Facility**.

## Syntax

```atk-command
UseTerrain <FacilityPath> {On|Off}
```

## Parameters

| Parameter | Description |
|------|------|
| `<FacilityPath>` | Path of the facility object. |
| `{On\|Off}` | `On`: enables terrain height; `Off`: disables terrain height. |

## Examples

::: details open **Enable the terrain height of a facility**

```
UseTerrain */Facility/Facility1 On
```

- `*/Facility/Facility1 On`: **enables** terrain height for the facility `Facility1` in the current scenario

:::
