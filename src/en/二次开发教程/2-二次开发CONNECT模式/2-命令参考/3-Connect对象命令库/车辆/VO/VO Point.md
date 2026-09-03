# VO Point

## Description

Set the ground vehicle 3D model point properties.

## Syntax

```atk-command
VO <ObjectPath> Point {PointOptions}
```

## Parameters

| Parameter | Description |
| --- | --- |
| `Show` | `{On \| Off}`, whether to show the model point |
| `Size` | `<Value>`, model point size setting |

## Examples

::: details open **Set the model point properties**
```
VO */GroundVehicle/GroVeh1 Point Show On Size 7
```
:::
