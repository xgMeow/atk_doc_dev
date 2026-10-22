---
groups: [Scenario]
---

# Window2D

## Description

Create or remove a 2D window.

## Syntax

```atk-command
Window2D <ScenarioPath> {2DGfxWinOption} <Value> [WindowID <WinNumber>]
```

## Parameters

| `{2DGfxWinOption}` | Description |
|------|------|
| `Create` | Open a 2D window with the default settings |
| `Remove` | Remove a 2D window |

## Examples

::: details open **Create a 2D window**

```
Window2D * Create
```

:::
