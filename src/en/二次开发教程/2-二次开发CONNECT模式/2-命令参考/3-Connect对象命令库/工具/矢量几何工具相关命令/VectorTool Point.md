# VectorTool Point

## Description

Define and modify `Point` components.

## Syntax

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Point <PointName> [{PointType} <PointTypeParams>]
```

## Parameters

| `{Action}` | Parameters | Description |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{PointType} [<PointTypeParams>]` | `<PointTypeParams>` is optional; see the table below for detailed parameters. If `<PointTypeParams>` is not specified, default values are used. |
| Modify | `{PointType} [<PointTypeParams>]` | `<PointName> {PointType}` must define an existing point component. `{PointType}` cannot be modified. `<PointTypeParams>` is required. |
| Delete | | Delete the point component defined by `<PointName>`. |

| `{PointType}` | `<PointTypeParams>` |
| ------------------------------------- | ------------------  |
| "B-Plane" | `<CentralBodyName> "<TrajPoint>" {Incoming \| Outgoing} {Asymptote \| TwoBody}` |
| "Fixed in System" | `{Cartesian \| Spherical} <OrientParameters> "<RefSystem>"` <br>Valid values for \<OrientParameters\> are described after the table below.</br> |
| "Fixed at Epoch" | <br>You can specify any or all of the following keyword-value pairs:</br><br>• Epoch "\<EpochDate\>"</br><br>• SourcePoint "\<Point\>"</br><br>• ReferenceSystem "\<System\>"</br> |
| "Intersection" | `"<DirectionVector>" "<ReferencePlane>" "<OriginPoint>"` |
| "Libration" | `<CentralBodyName> {L1 \| L2 \| L3 \| L4 \| L5} <SecondaryBody> [<SecondaryBody>...]` <br>You can enter any number of \<SecondaryBody\> items on the command line as needed.</br> |
| "Projection" | `"<SourcePoint>" "<ReferencePlane>"` |

## Examples

::: details open **Create a Point component**
```
VectorTool * Satellite/Satellite1 Create Point SatPoint1 "Libration"
```
:::

::: details open **Modify a Point component**
```
VectorTool * Satellite/Satellite1 Modify Point SatPoint1 "Libration" Earth L2 Moon Sun
```
:::

::: details open **Delete a Point component**
```
VectorTool * Satellite/Satellite1 Delete Point SatPoint1 
```
:::

::: details open **Create a B-Plane Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointBPlane "B-Plane" Moon "CentralBody/Earth ICRF.Origin" Outgoing twobody
```
:::

::: details open **Create a Fixed in System Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointFixed "Fixed in System" Spherical 11 22 33 "CentralBody/Earth ICRF"
```
:::

::: details open **Create a Fixed at Epoch Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointFixedEpoch "Fixed at Epoch" SourcePoint "CentralBody/Earth ICRF.Origin" ReferenceSystem "CentralBody/Earth ICRF" Epoch "13 Mar 2026 00:01:02.000"
```
:::

::: details open **Create an Intersection Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointIntersection "Intersection" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 PlaneQuadrant" "CentralBody/Earth ICRF.Origin"
```
:::

::: details open **Create a Libration Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointLibration "Libration" Moon L3 Sun Earth
```
:::

::: details open **Create a Projection Point**
```
VectorTool * Satellite/Satellite1 Create Point SatPointProjection "Projection" "CentralBody/Earth ICRF.Origin" "Satellite/Satellite2 PlaneQuadrant"
```
:::
