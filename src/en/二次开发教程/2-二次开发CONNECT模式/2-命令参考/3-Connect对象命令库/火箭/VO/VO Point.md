# VO Point

## Description

Set the launch vehicle 3D model point properties.

## Syntax

```atk-command
VO <ObjectPath> Point {PointOptions}
```

## Parameters

| Parameter | Value | Description |
|------|------|------|
| `Show` | `{On \| Off}` | Specifies whether the model points are displayed. |
| `Size` | `<Value>` | Sets the model point size. |

## Examples

::: details open **Set the launch vehicle 3D model point properties**
```
VO */SLaunchVehicle/LaunchVehicle1 Point Show On Size 7
```
:::
