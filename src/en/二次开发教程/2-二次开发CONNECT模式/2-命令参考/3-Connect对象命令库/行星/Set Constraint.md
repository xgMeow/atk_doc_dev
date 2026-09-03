# Set Constraint

## Description

Sets planet constraints.

## Syntax

```atk-command
SetConstraint <ObjectPath> {ConstraintName} {State}
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `LineOfSight` | `{On \| Off}` |
| `TerrainMask` | `{On \| Off}` |

## Examples

::: details open **Set the planet line-of-sight constraint**
```
SetConstraint */Planet/Jupiter LineOfSight On
```
:::
