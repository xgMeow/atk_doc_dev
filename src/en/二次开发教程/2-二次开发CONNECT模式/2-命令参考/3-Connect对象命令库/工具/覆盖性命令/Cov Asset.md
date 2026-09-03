# Cov Asset

## Description

Configure coverage assets.

## Syntax

```atk-command
Cov <CovDefnObjectPath> Asset <AssetObjectPath> {Action}
```

## Parameters

| {Action} | Description |
|-----|------|
| `Assign` | Marks the object as available for coverage computation |
| `Deassign` | Unmarks the object; the object is not included in the coverage computation |

## Examples

::: details open **Assign the coverage definition of Satellite1 to Satellite2 so that Satellite2 participates in the coverage computation.**

```
Cov */Satellite/Satellite1 Asset */Satellite/Satellite2 Assign
```

:::
