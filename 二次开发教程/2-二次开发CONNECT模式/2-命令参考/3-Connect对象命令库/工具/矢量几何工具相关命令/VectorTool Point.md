# VectorTool Point

## 作用

定义和修改 `Point` 组件。

## 语法

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Point <PointName> [{PointType} <PointTypeParams>]
```

## 参数说明

| `{Action}` | Parameters | 说明 |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{PointType} [<PointTypeParams>]` | `<PointTypeParams>` 是可选的，详细参数请看下表。若未指定 `<PointTypeParams>`，则使用默认值。 |
| Modify | `{PointType} [<PointTypeParams>]` | `<PointName> {PointType}` 必须定义一个现有点组件。`{PointType}` 不可修改。`<PointTypeParams>` 为必填项。 |
| Delete | | 删除 `<PointName>` 定义的点组件。 |

| `{PointType}` | `<PointTypeParams>` |
| ------------------------------------- | ------------------  |
| "B-Plane" | `<CentralBodyName> "<TrajPoint>" {Incoming \| Outgoing} {Asymptote \| TwoBody}` |
| "Fixed in System" | `{Cartesian \| Spherical} <OrientParameters> "<RefSystem>"` <br>\<OrientParameters\> 的有效取值见下表之后所述。</br> |
| "Fixed at Epoch" | <br>可以指定以下任意或全部关键字-值对：</br><br>• Epoch "\<EpochDate\>"</br><br>• SourcePoint "\<Point\>"</br><br>• ReferenceSystem "\<System\>"</br> |
| "Intersection" | `"<DirectionVector>" "<ReferencePlane>" "<OriginPoint>"` |
| "Libration" | `<CentralBodyName> {L1 \| L2 \| L3 \| L4 \| L5} <SecondaryBody> [<SecondaryBody>...]` <br>可根据需要在命令行中输入任意数量的 \<SecondaryBody\>。</br> |
| "Projection" | `"<SourcePoint>" "<ReferencePlane>"` |

## 示例

::: details open **创建 Point 组件**
```
VectorTool * Satellite/Satellite1 Create Point SatPoint1 "Libration"
```
:::

::: details open **修改 Point 组件**
```
VectorTool * Satellite/Satellite1 Modify Point SatPoint1 "Libration" Earth L2 Moon Sun
```
:::

::: details open **删除 Point 组件**
```
VectorTool * Satellite/Satellite1 Delete Point SatPoint1 
```
:::

::: details open **创建 B-Plane（B平面）Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointBPlane "B-Plane" Moon "CentralBody/Earth ICRF.Origin" Outgoing twobody
```
:::

::: details open **创建 Fixed in System（系统中固定）Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointFixed "Fixed in System" Spherical 11 22 33 "CentralBody/Earth ICRF"
```
:::

::: details open **创建 Fixed at Epoch（历元固定）Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointFixedEpoch "Fixed at Epoch" SourcePoint "CentralBody/Earth ICRF.Origin" ReferenceSystem "CentralBody/Earth ICRF" Epoch "13 Mar 2026 00:01:02.000"
```
:::

::: details open **创建 Intersection（交点）Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointIntersection "Intersection" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 PlaneQuadrant" "CentralBody/Earth ICRF.Origin"
```
:::

::: details open **创建 Libration（平动点）Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointLibration "Libration" Moon L3 Sun Earth
```
:::

::: details open **创建 Projection（投影）Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointProjection "Projection" "CentralBody/Earth ICRF.Origin" "Satellite/Satellite2 PlaneQuadrant"
```
:::
