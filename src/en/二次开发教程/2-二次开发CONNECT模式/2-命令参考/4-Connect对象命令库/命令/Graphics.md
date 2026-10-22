---
groups: [CoverageDefinition]
---

# Graphics

## Description

Sets the CoverageDefinition display attributes.

## Syntax

```atk-command
Graphics <CovDefnObjectPath> {GfxType} {DisplayOption}
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `Show` | `{On \| Off}` |
| `Static` | `Regions {On \| Off} [{Color}]` |
| `Static` | `Points {On \| Off} [{Color}]` |

## Additional Notes

- See [Common Graphics Formats](../../2-参数值格式/颜色格式.md) for the available `Color` attributes.

## Examples

::: details open **Set the CoverageDefinition display attributes**
```
Graphics */CoverageDefinition/CoverageDefinition1 Static Regions On Red
```
:::
