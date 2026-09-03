# Window3D_R

## Description

Returns 3D window information.

## Syntax

```atk-command
Window3D_R <ScenarioPath> {WindowOption} [WindowID <WinNumber>]
```

## Parameters

| `{WindowOption}` | Description |
|------|------|
| `Size` | Returns the size of the 3D window (including the border) |
| `InnerSize` | Returns the size of the 3D window (excluding the border) |

## Examples

::: details open **Get the inner size of the 3D window**

```
Window3d_R * InnerSize
```

:::
