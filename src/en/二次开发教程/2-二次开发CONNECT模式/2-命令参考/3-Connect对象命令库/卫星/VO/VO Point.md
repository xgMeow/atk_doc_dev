# VO Point

## Description

Sets the 3D model point attributes of the satellite.

## Syntax

```atk-command
VO <ObjectPath> Point {PointOptions}
```

## Parameters

| `Option` | `Value` | Description |
| --- | --- | --- |
| `Show` | `{On \| Off}` | Whether the model points are shown |
| `Size` | `<Value>` | Sets the size of the model points |

## Examples

::: details open **Set the 3D Model Point Attributes of the Satellite**
```
VO */Satellite/Satellite1 Point Show On Size 7
```
:::
