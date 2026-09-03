# VectorTool Plane

## Description

Define and modify `Plane` components.

## Syntax

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Plane <PlaneName> [{PlaneType} <PlaneTypeParams>]
```

## Parameters

| `{Action}` | Parameters | Description |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{PlaneType} [<PlaneTypeParams>]` | `<PlaneTypeParams>` is optional; see the table below for detailed parameters. If `<PlaneTypeParams>` is not specified, default values are used. |
| Modify | `{PlaneType} [<PlaneTypeParams>]` | `<PlaneName> {PlaneType}` must define an existing plane component. `{PlaneType}` cannot be modified. `<PlaneTypeParams>` is required. |
| Delete | | Delete the plane component defined by `<PlaneName>`. |

| `{PlaneType}` | `<PlaneTypeParams>` |
| ------------------------------------- | ------------------  |
| "Containing Two Vectors" | <br> You can specify any or all of the following keyword-value pairs:</br> <br>• Vector1 "\<Vector\>""</br>  <br>• Vector2 "\<Vector\>"</br> <br>• ReferencePoint "\<Point\>"</br> |
| "Normal" | `"<NormalVector>" "<ReferenceVector>" "<ReferencePoint>"` |
| "Quadrant" | `{XY \| YX \| XZ \| ZX \| YZ \| ZY} "<ReferenceSystem>"` |
| "Trajectory" | `"<Point>" "<ReferenceSystem>" <RotationOffset>` |
| "Triad" | `"<PointA>" "<PointB>" "<ReferencePoint>" <RotationOffset>` |

## Examples

::: details open **Create a Plane component**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlane1 "Containing Two Vectors"
```
:::

::: details open **Modify a Plane component**
```
VectorTool * Satellite/Satellite1 Modify Plane SatPlane1 "Containing Two Vectors" Vector1 "CentralBody/Earth ICRF.Axes.x" Vector2 "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **Delete a Plane component**
```
VectorTool * Satellite/Satellite1 Delete Plane SatPlane1 
```
:::

::: details open **Create a Containing Two Vectors Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneCtnTVec "Containing Two Vectors" Vector1 "CentralBody/Earth ICRF.Axes.X" Vector2 "Satellite/Satellite2 VVLH.Axes.Y" ReferencePoint "CentralBody/Earth ICRF.Origin"
```
:::

::: details open **Create a Normal Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneNormal "Normal" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y" "CentralBody/Earth ICRF.Origin"
```
:::

::: details open **Create a Quadrant Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneQuadrant "Quadrant" ZX "CentralBody/Earth ICRF"
```
:::

::: details open **Create a Trajectory Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneTraj "Trajectory" "CentralBody/Earth ICRF.Origin" "CentralBody/Earth ICRF" 11
```
:::

::: details open **Create a Triad Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneTriad "Triad" "CentralBody/Earth ICRF.Origin" "CentralBody/Moon ICRF.Origin" "CentralBody/Earth Fixed.Origin" 11
```
:::
