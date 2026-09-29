# VectorTool

## Description

Customize **coordinate systems** and the elements used to construct them.

## Syntax

```atk-command
VectorTool <ScenarioPath> {Options} 
```

## Parameters

| Parameter | Description |
| ------------------------------------- | ------------------  |
| `{Create \| Modify \| Delete}` | For details on creating, modifying, and deleting vector geometry components and templates with the `VectorTool` command, see the following links. [VectorTool Angle](./VectorTool%20Angle.md), [VectorTool Axes](./VectorTool%20Axes.md), [VectorTool Plane](./VectorTool%20Plane.md), [VectorTool Point](./VectorTool%20Point.md), [VectorTool System](./VectorTool%20System.md), [VectorTool Vector](./VectorTool%20Vector.md) |

## Examples

::: details open **Create a Plane component**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlane2 "Quadrant"
```
:::

## Notes

> Note: In the examples in this manual, VGT components must be created in advance and then referenced in the script; running the script without creating them first will cause an error. Component paths are case-sensitive.

```
atkConnect(conID, 'VectorTool',
'* Satellite/Satellite1 Create Angle SatAngleBtnPlane "Between Planes"
"CentralBody/Earth PlaneNormal"
"Satellite/Satellite2 PlaneQuadrant"')
```

## Modification Examples

```
atkConnect(conID,'VectorTool','* Satellite/Satellite1 Modify Axes SatAxes1 "Aligned and Constrained" X "CentralBody/Earth ICRF.Axes.X" Y "Satellite/Satellite2 VVLH.Axes.Y"');
VectorTool * Satellite/Satellite1 Modify Angle SatAngle1 "Between Vectors" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y"
```
