# VO Model

## Description

Set the aircraft **3D model** properties.

## Syntax

```atk-command
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## Parameters

| Parameter | Description |
|------|------|
| `Show` | `{On \| Off}`: whether to show the model |
| `File` | `<ModelFile>`: model file path |

## Examples

::: details open **Hide the aircraft 3D model**
```
VO */Aircraft/Aircraft1 Model Show Off
```
:::
