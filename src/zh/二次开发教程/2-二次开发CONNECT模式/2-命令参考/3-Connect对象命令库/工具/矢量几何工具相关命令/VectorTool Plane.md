# VectorTool Plane

## 作用

定义和修改 `Plane` 组件。

## 语法

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Plane <PlaneName> [{PlaneType} <PlaneTypeParams>]
```

## 参数说明

| `{Action}` | Parameters | 说明 |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{PlaneType} [<PlaneTypeParams>]` | `<PlaneTypeParams>` 是可选的，详细参数请看下表。若未指定 `<PlaneTypeParams>`，则使用默认值。 |
| Modify | `{PlaneType} [<PlaneTypeParams>]` | `<PlaneName> {PlaneType}` 必须定义一个现有的平面组件。`{PlaneType}` 不可修改。`<PlaneTypeParams>` 为必填项。 |
| Delete | | 删除 `<PlaneName>` 定义的平面组件。 |

| `{PlaneType}` | `<PlaneTypeParams>` |
| ------------------------------------- | ------------------  |
| "Containing Two Vectors" | <br> 可以指定以下任意或全部关键字-值对：</br> <br>• Vector1 "\<Vector\>""</br>  <br>• Vector2 "\<Vector\>"</br> <br>• ReferencePoint "\<Point\>"</br> |
| "Normal" | `"<NormalVector>" "<ReferenceVector>" "<ReferencePoint>"` |
| "Quadrant" | `{XY \| YX \| XZ \| ZX \| YZ \| ZY} "<ReferenceSystem>"` |
| "Trajectory" | `"<Point>" "<ReferenceSystem>" <RotationOffset>` |
| "Triad" | `"<PointA>" "<PointB>" "<ReferencePoint>" <RotationOffset>` |

## 示例

::: details open **创建 Plane 组件**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlane1 "Containing Two Vectors"
```
:::

::: details open **修改 Plane 组件**
```
VectorTool * Satellite/Satellite1 Modify Plane SatPlane1 "Containing Two Vectors" Vector1 "CentralBody/Earth ICRF.Axes.x" Vector2 "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **删除 Plane 组件**
```
VectorTool * Satellite/Satellite1 Delete Plane SatPlane1 
```
:::

::: details open **创建 Containing Two Vectors（含两向量）Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneCtnTVec "Containing Two Vectors" Vector1 "CentralBody/Earth ICRF.Axes.X" Vector2 "Satellite/Satellite2 VVLH.Axes.Y" ReferencePoint "CentralBody/Earth ICRF.Origin"
```
:::

::: details open **创建 Normal（法向）Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneNormal "Normal" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y" "CentralBody/Earth ICRF.Origin"
```
:::

::: details open **创建 Quadrant（象限）Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneQuadrant "Quadrant" ZX "CentralBody/Earth ICRF"
```
:::

::: details open **创建 Trajectory（轨迹）Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneTraj "Trajectory" "CentralBody/Earth ICRF.Origin" "CentralBody/Earth ICRF" 11
```
:::

::: details open **创建 Triad（三点）Plane**
```
VectorTool * Satellite/Satellite1 Create Plane SatPlaneTriad "Triad" "CentralBody/Earth ICRF.Origin" "CentralBody/Moon ICRF.Origin" "CentralBody/Earth Fixed.Origin" 11
```
:::
