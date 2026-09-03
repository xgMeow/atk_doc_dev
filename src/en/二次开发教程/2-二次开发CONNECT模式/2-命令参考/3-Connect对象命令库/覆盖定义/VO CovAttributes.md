# VO CovAttributes

## Description

Sets the size of the coverage definition display points.

## Syntax

```atk-command
VO <CovDefnObjectPath> CovAttributes {DisplayOption} <Value> [{DisplayOption} <Value>...]
```

## Additional Notes

- Currently, `{DisplayOption}` includes `StaticSize`.

## Examples

::: details open **Set the size of the coverage definition display points**
```
VO */CoverageDefinition/CoverageDefinition1 CovAttributes StaticSize 2
```
:::
