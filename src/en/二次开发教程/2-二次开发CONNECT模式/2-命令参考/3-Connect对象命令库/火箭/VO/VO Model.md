# VO Model

## Description

Set the launch vehicle 3D model properties.

## Syntax

```atk-command
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## Parameters

| Parameter | Value | Description |
|------|------|------|
| `Show` | `{On \| Off}` | Specifies whether the model is displayed. |
| `File` | `<ModelFile>` | The model file path. |

## Examples

::: details open **Set the launch vehicle 3D model properties**
```
VO */LaunchVehicle/LaunchVehicle1 Model Show Off
```
:::
