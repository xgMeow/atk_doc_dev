# VectorTool Angle

## Description

Define and modify `Angle` components.

## Syntax

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Angle <AngleName> [{AngleType} <AngleTypeParams>]
```

## Parameters

| `{Action}` | Parameters | Description |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{AngleType} [<AngleTypeParams>]` | `<AngleTypeParams>` is optional; see the table below for detailed parameters. If `<AngleTypeParams>` is not specified, default values are used. |
| Modify | `{AngleType} [<AngleTypeParams>]` | `<AngleName> {AngleType}` must define an existing angle component. `{AngleType}` cannot be modified. `<AngleTypeParams>` is required. |
| Delete | | Delete the angle component defined by `<AngleName>`. |

| `{AngleType}` | `<AngleTypeParams>` |
| ------------------------------------- | ------------------  |
| "Between Planes" | `"<PlaneA>" "<PlaneB>"` |
| "Between Vectors" | `"<FromVector>" "<ToVector>"` |
| "Dihedral Angle" | `"<FromVector>" "<ToVector>" "<AboutVector>" [{-180-180 \| 0-360} {Positive \| Negative}]` |
| "Rotation" | `"<FromAxes>" "<ToAxes>" {X \| Y \| Z}` |
| "To Plane" | `"<Vector>" "<Plane>" [{Signed} [{Positive \| Negative}]]` Note: `{Signed}` accepts the value `On` or `Off` |
| "Constant" | `<AngleValue>` |

## Examples

::: details open **Create an Angle component**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngle1 "Between Planes"
```
:::

::: details open **Modify an Angle component**
```
VectorTool * Satellite/Satellite1 Modify Angle SatAngle1 "Between Vectors" "CentralBody/Earth ICRF.Axes.x" "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **Delete an Angle component**
```
VectorTool * Satellite/Satellite1 Delete Angle SatAngle1 
```
:::

::: details open **Create a Between Planes Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleBtnPlane "Between Planes" "CentralBody/Earth PlaneNormal" "Satellite/Satellite2 PlaneQuadrant"
```
:::

::: details open **Create a Between Vectors Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleBtnVector "Between Vectors" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **Create a Dihedral Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleDihe "Dihedral Angle" "CentralBody/Earth ICRF.Axes.X" "CentralBody/Earth Fixed.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y" 0-360 Positive
```
:::

::: details open **Create a Rotation Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleRotation "Rotation" "CentralBody/Earth Fixed.Axes" "Satellite/Satellite2 VVLH.Axes" Y
```
:::

::: details open **Create a To Plane Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleToPlane "To Plane" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 PlaneQuadrant" off Negative
```
:::
