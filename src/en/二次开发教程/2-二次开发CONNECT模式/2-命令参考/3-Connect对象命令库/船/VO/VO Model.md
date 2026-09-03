# VO Model

## Description

Set the **ship 3D model** properties.

## Syntax

```atk-command
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## Parameters

| Parameter | Value | Description |
| -- | -- | -- |
| `Show` | `{On \| Off}` | Whether to show the model |
| `File` | `<ModelFile>` | Model file path |

## Examples

::: details open **Hide the ship 3D model**
```
VO */Ship/Ship1 Model Show Off
```
:::
