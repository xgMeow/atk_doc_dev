---
groups: [Scenario]
---

# Window3D

## Description

Create or remove a 3D window.

## Syntax

```atk-command
Window3D <ScenarioPath> {Window3dOptions}
```

## Parameters

| `{Window3dOptions}` | Description |
|------|------|
| `CreateWindow {Normal \| Attitude} [Path <TruncObjectPath>] [Title "<WindowTitle>"]` | Open a 3D window with the default settings |
| `Remove` | Remove a 3D window |

## Examples

::: details open **Create a 3D window**

```
Window3D * CreateWindow Normal
```

:::
