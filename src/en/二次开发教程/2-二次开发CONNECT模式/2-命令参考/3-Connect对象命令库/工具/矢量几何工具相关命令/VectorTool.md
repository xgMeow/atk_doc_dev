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
