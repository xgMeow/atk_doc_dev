# VectorTool Plane

作用：定义和修改Plane组件

用法：

```
VectorTool <ScenarioPath> <ParentObject> {Action} Plane <PlaneName> [{PlaneType} <PlaneTypeParams>]
```

-

|` {Action} `                              | Parameters                |说明|
| ------------------------------------- | ------------------  | ------------------  |
| Create           |  `{PlaneType} [<PlaneTypeParams>]`      | `<PlaneTypeParams>` 是可选的，详细参数请看下表。若未指定 `<PlaneTypeParams>`，则使用默认值。 |
| Modify           |  `{PlaneType} [<PlaneTypeParams>]`      | `<PlaneName> {PlaneType}` 必须定义一个现有的角度组件。`{PlaneType}` 不可修改。`<PlaneTypeParams>` 为必填项。 |
| Delete           |                                       | 删除 `<PlaneName>` 定义的角度组件。 |

-

| `{PlaneType}`                               | `<PlaneTypeParams>`               |
| ------------------------------------- | ------------------  |
| "Containing Two Vectors"           |  <br> 可以指定以下任意或全部关键字-值对：</br> <br>• Vector1 "\<Vector\>""</br>  <br>• Vector2 "\<Vector\>"</br> <br>• ReferencePoint "\<Point\>"</br> | 
| "Normal"          |  `"<NormalVector>" "<ReferenceVector>" "<ReferencePoint>"`      |  
| "Quadrant"          | `{XY \| YX \| XZ \| ZX \| YZ \| ZY} "<ReferenceSystem>"  `   |
| "Trajectory"           | `"<Point>" "<ReferenceSystem>" <RotationOffset> ` |
| "Triad"           | `"<PointA>" "<PointB>" "<ReferencePoint>" <RotationOffset>`  |

::: note 举例
```
VectorTool * Satellite/Satellite1 Create Plane SatPlane1 "Containing Two Vectors"
```
```
VectorTool * Satellite/Satellite1 Modify Plane SatPlane1 "Containing Two Vectors" Vector1 "CentralBody/Earth ICRF.Axes.x" Vector2 "Satellite/Satellite2 VVLH.Axes.Y"
```
```
VectorTool * Satellite/Satellite1 Delete Plane SatPlane1 
```
:::
