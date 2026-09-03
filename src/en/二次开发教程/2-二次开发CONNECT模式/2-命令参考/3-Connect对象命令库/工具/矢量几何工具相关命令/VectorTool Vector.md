# VectorTool Vector

## Description

Define and modify `Vector` components.

## Syntax

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Vector <VectorName> [{VectorType} <VectorTypeParams>]
```

## Parameters

| `{Action}` | Parameters | Description |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{VectorType} [<VectorTypeParams>]` | `<VectorTypeParams>` is optional; see the table below for detailed parameters. If `<VectorTypeParams>` is not specified, default values are used. |
| Modify | `{VectorType} [<VectorTypeParams>]` | `<VectorName> {VectorType}` must define an existing vector component. `{VectorType}` cannot be modified. `<VectorTypeParams>` is required. |
| Delete | | Delete the vector component defined by `<VectorName>`. |

| `{VectorType}` | `<VectorTypeParams>` |
| ------------------------------------- | ------------------  |
| "Acceleration" | <br>You can specify any or all of the following keyword-value pairs:</br> <br>• Point "\<Point\>"</br> <br>• ReferenceSystem "\<System\>"</br> <br>• DiffTimeStep \<Step\> </br> |
| "Angular Velocity" | `"<Axes>" "<ReferenceAxes>" <DiffTimeStep>` |
| "Cross Product" | `"<VectorA>" "<VectorB>"` |
| "Derivative" | `"<Vector>" "<ReferenceAxes>" <DiffTimeStep>` |
| "Displacement" | <br>"\<OriginPoint\>" "\<DestinationPoint\>" [{Apparent} {IgnoreAberration} {Receive \| Transmit} "\<ReferenceSystem\>"]</br> <br>Valid values for both {Apparent} and {IgnoreAberration} are On and Off</br> |
| "Fixed in Axes" | <br>{OrientMethod} \<OrientParameters\> "\<ReferenceAxes\>"</br> <br>Valid values for {OrientMethod} \<OrientParameters\> are described after the table below.</br> |
| "Intersection" | `"<PlaneA>" "<PlaneB>"` |
| "Linear Combination" | <br>You can specify any or all of the following keyword-value pairs:</br> <br>• VectorA "\<Vector\>"</br> <br>• ScaleFactorA \<Factor\></br> <br>• NormalizeA {Yes \| No}</br> <br>• VectorB "\<Vector\>"</br> <br>• ScaleFactorB \<Factor\></br> <br>• NormalizeB {Yes \| No}</br> <br>• InheritDimension {FromA \| FromB \| No}</br> <br>• Dimension \<DimensionName\></br> |
| "Orbit Normal" | <br>{UseCBI} \<CentralBodyName\> "\<ReferencePoint\>" {Osc \| KozailzsakMean \| BrolydMeanLong \| BrolydMeanShort} {Ecc \| Periapsis \| Apoapsis} "\<ReferenceSystem\>"</br>  <br>Valid values for {UseCBI} are On and Off.</br> |
| "Projection" | `"<Vector>" "<Plane>"` |
| "Projection Along Vector" | `"<SourceVector>" "<DestinationVector>"` |
| "Reflection" | <br>"\<IncomingVector\>" {UseOpposite} "\<NormalVector\>" \<Scale\> {AllowBackside}</br> <br>Valid values for both {UseOpposite} and {AllowBackside} are On and Off.</br> |
| "Scaled" | <br>"\<ReferenceVector\>" \<Scale\> {Normalize}</br> <br>Valid values for {Normalize} are On and Off.</br> |
| "Velocity" | <br>You can specify any or all of the following keyword-value pairs:</br> <br>• Point "\<Point\>"</br> <br>• ReferenceSystem "\<System\>"</br> <br>• DiffTimeStep \<Step\></br> |

## Examples

::: details open **Create a Vector component**
```
VectorTool * Satellite/Satellite1 Create Vector SatVector1 "Acceleration"
```
:::

::: details open **Modify a Vector component**
```
VectorTool * Satellite/Satellite1 Modify Vector SatVector1 "Acceleration" Point "CentralBody/Earth ICRF.Origin" ReferenceSystem "CentralBody/Earth J2000" DiffTimeStep 30
```
:::

::: details open **Delete a Vector component**
```
VectorTool * Satellite/Satellite1 Delete Vector SatVector1 
```
:::

::: details open **Create an Acceleration Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorAcc "Acceleration" Point "CentralBody/Earth Fixed.Origin" ReferenceSystem "CentralBody/Earth J2000" DiffTimeStep 111
```
:::

::: details open **Create an Angular Velocity Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorAngVel "Angular Velocity" "CentralBody/Earth J2000.Axes" "CentralBody/Earth ICRF.Axes" 111
```
:::

::: details open **Create a Cross Product Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorCross "Cross Product" "CentralBody/Earth Fixed.Axes.X" "CentralBody/Earth ICRF.Axes.X"
```
:::

::: details open **Create a Derivative Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorDerivative "Derivative" "CentralBody/Earth ICRF.Axes.X" "CentralBody/Earth Fixed.Axes" 111
```
:::

::: details open **Create a Displacement Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorDisplacement "Displacement" "CentralBody/Earth ICRF.Origin" "CentralBody/Moon ICRF.Origin" on on Transmit "CentralBody/Earth J2000"
```
:::

::: details open **Create a Fixed in Axes Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorFixed "Fixed in Axes" Keplerian 11 22 33 "CentralBody/Earth Fixed.Axes"
```
:::

::: details open **Create an Intersection Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorIntersection "Intersection" "CentralBody/Earth PlaneNormal" "CentralBody/Earth PlaneQuadrant"
```
:::

::: details open **Create a Linear Combination Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorLinarComb "Linear Combination" VectorA "CentralBody/Earth ICRF.Axes.X" ScaleFactorA 2 NormalizeA Yes VectorB "Satellite/Satellite2 VVLH.Axes.Y" ScaleFactorB 3 NormalizeB No InheritDimension no Dimension Mass
```
:::

::: details open **Create an Orbit Normal Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorOrbit "Orbit Normal" off Moon "CentralBody/Earth ICRF.Origin" brolydmeanlong Periapsis "CentralBody/Earth ICRF"
```
:::

::: details open **Create a Projection Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorProjection "Projection" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.YX"
```
:::

::: details open **Create a Projection Along Vector Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorProjAlong "Projection Along Vector" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **Create a Reflection Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorRefelection "Reflection" "CentralBody/Earth ICRF.Axes.X" off "Satellite/Satellite2 VVLH.Axes.Y" 2 on
```
:::

::: details open **Create a Scaled Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorScaled "Scaled" "CentralBody/Earth ICRF.Axes.X" 2 off
```
:::

::: details open **Create a Velocity Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorVel "Velocity" Point "CentralBody/Earth ICRF.Origin" ReferenceSystem "CentralBody/Earth ICRF" DiffTimeStep 111
```
:::
