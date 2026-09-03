# VO Model

## Description

Sets the 3D model attributes of the satellite.

## Syntax

```atk-command
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## Parameters

| `Option` | `Value` | Description |
| --- | --- | --- |
| `Show` | `{On \| Off}` | Whether the model is shown |
| `File` | `<ModelFile>` | The model file path |

## Examples

::: details open **Set the 3D Model Attributes of the Satellite**
```
VO */Satellite/Satellite1 Model Show Off
```
:::
