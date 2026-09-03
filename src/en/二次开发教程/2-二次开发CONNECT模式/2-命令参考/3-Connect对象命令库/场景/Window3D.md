# Window3D

## Description

Creates or removes a 3D window.

## Syntax

```atk-command
Window3D <ScenarioPath> {Window3dOptions}
```

## Parameters

| `{Window3dOptions}` | Description |
|------|------|
| `CreateWindow {Normal \| Attitude} [Path <TruncObjectPath>] [Title "<WindowTitle>"]` | Opens a 3D window with default settings |
| `Remove` | Removes a 3D window |

## Examples

::: details open **Create a 3D window**

```
Window3D / CreateWindow Normal
```

:::
