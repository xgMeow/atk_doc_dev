# VectorTool Vector

## 作用

定义和修改 `Vector` 组件。

## 语法

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Vector <VectorName> [{VectorType} <VectorTypeParams>]
```

## 参数说明

| `{Action}` | Parameters | 说明 |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{VectorType} [<VectorTypeParams>]` | `<VectorTypeParams>` 是可选的，详细参数请看下表。若未指定 `<VectorTypeParams>`，则使用默认值。 |
| Modify | `{VectorType} [<VectorTypeParams>]` | `<VectorName> {VectorType}` 必须定义一个现有的向量组件。`{VectorType}` 不可修改。`<VectorTypeParams>` 为必填项。 |
| Delete | | 删除 `<VectorName>` 定义的向量组件。 |

| `{VectorType}` | `<VectorTypeParams>` |
| ------------------------------------- | ------------------  |
| "Acceleration" | <br>可以指定以下任意或全部关键字-值对：</br> <br>• Point "\<Point\>"</br> <br>• ReferenceSystem "\<System\>"</br> <br>• DiffTimeStep \<Step\> </br> |
| "Angular Velocity" | `"<Axes>" "<ReferenceAxes>" <DiffTimeStep>` |
| "Cross Product" | `"<VectorA>" "<VectorB>"` |
| "Derivative" | `"<Vector>" "<ReferenceAxes>" <DiffTimeStep>` |
| "Displacement" | <br>"\<OriginPoint\>" "\<DestinationPoint\>" [{Apparent} {IgnoreAberration} {Receive \| Transmit} "\<ReferenceSystem\>"]</br> <br>{Apparent} 和 {IgnoreAberration} 的有效取值均为 On 和 Off</br> |
| "Fixed in Axes" | <br>{OrientMethod} \<OrientParameters\> "\<ReferenceAxes\>"</br> <br>{OrientMethod} \<OrientParameters\> 的有效取值见下表之后所述。</br> |
| "Intersection" | `"<PlaneA>" "<PlaneB>"` |
| "Linear Combination" | <br>可以指定以下任意或全部关键字-值对：</br> <br>• VectorA "\<Vector\>"</br> <br>• ScaleFactorA \<Factor\></br> <br>• NormalizeA {Yes \| No}</br> <br>• VectorB "\<Vector\>"</br> <br>• ScaleFactorB \<Factor\></br> <br>• NormalizeB {Yes \| No}</br> <br>• InheritDimension {FromA \| FromB \| No}</br> <br>• Dimension \<DimensionName\></br> |
| "Orbit Normal" | <br>{UseCBI} \<CentralBodyName\> "\<ReferencePoint\>" {Osc \| KozailzsakMean \| BrolydMeanLong \| BrolydMeanShort} {Ecc \| Periapsis \| Apoapsis} "\<ReferenceSystem\>"</br>  <br>{UseCBI} 的有效取值均为 On 和 Off。</br> |
| "Projection" | `"<Vector>" "<Plane>"` |
| "Projection Along Vector" | `"<SourceVector>" "<DestinationVector>"` |
| "Reflection" | <br>"\<IncomingVector\>" {UseOpposite} "\<NormalVector\>" \<Scale\> {AllowBackside}</br> <br>{UseOpposite} 和 {AllowBackside} 的有效取值均为 On 和 Off。</br> |
| "Scaled" | <br>"\<ReferenceVector\>" \<Scale\> {Normalize}</br> <br>{Normalize} 的有效取值为 On 和 Off。</br> |
| "Velocity" | <br>可以指定以下任意或全部关键字-值对：</br> <br>• Point "\<Point\>"</br> <br>• ReferenceSystem "\<System\>"</br> <br>• DiffTimeStep \<Step\></br> |

## 示例

::: details open **创建 Vector 组件**
```
VectorTool * Satellite/Satellite1 Create Vector SatVector1 "Acceleration"
```
:::

::: details open **修改 Vector 组件**
```
VectorTool * Satellite/Satellite1 Modify Vector SatVector1 "Acceleration" Point "CentralBody/Earth ICRF.Origin" ReferenceSystem "CentralBody/Earth J2000" DiffTimeStep 30
```
:::

::: details open **删除 Vector 组件**
```
VectorTool * Satellite/Satellite1 Delete Vector SatVector1 
```
:::

::: details open **创建 Acceleration（加速度）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorAcc "Acceleration" Point "CentralBody/Earth Fixed.Origin" ReferenceSystem "CentralBody/Earth J2000" DiffTimeStep 111
```
:::

::: details open **创建 Angular Velocity（角速度）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorAngVel "Angular Velocity" "CentralBody/Earth J2000.Axes" "CentralBody/Earth ICRF.Axes" 111
```
:::

::: details open **创建 Cross Product（叉积）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorCross "Cross Product" "CentralBody/Earth Fixed.Axes.X" "CentralBody/Earth ICRF.Axes.X"
```
:::

::: details open **创建 Derivative（导数）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorDerivative "Derivative" "CentralBody/Earth ICRF.Axes.X" "CentralBody/Earth Fixed.Axes" 111
```
:::

::: details open **创建 Displacement（位移）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorDisplacement "Displacement" "CentralBody/Earth ICRF.Origin" "CentralBody/Moon ICRF.Origin" on on Transmit "CentralBody/Earth J2000"
```
:::

::: details open **创建 Fixed in Axes（固定于坐标系）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorFixed "Fixed in Axes" Keplerian 11 22 33 "CentralBody/Earth Fixed.Axes"
```
:::

::: details open **创建 Intersection（交线）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorIntersection "Intersection" "CentralBody/Earth PlaneNormal" "CentralBody/Earth PlaneQuadrant"
```
:::

::: details open **创建 Linear Combination（线性组合）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorLinarComb "Linear Combination" VectorA "CentralBody/Earth ICRF.Axes.X" ScaleFactorA 2 NormalizeA Yes VectorB "Satellite/Satellite2 VVLH.Axes.Y" ScaleFactorB 3 NormalizeB No InheritDimension no Dimension Mass
```
:::

::: details open **创建 Orbit Normal（轨道法向）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorOrbit "Orbit Normal" off Moon "CentralBody/Earth ICRF.Origin" brolydmeanlong Periapsis "CentralBody/Earth ICRF"
```
:::

::: details open **创建 Projection（投影）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorProjection "Projection" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.YX"
```
:::

::: details open **创建 Projection Along Vector（沿向量投影）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorProjAlong "Projection Along Vector" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **创建 Reflection（反射）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorRefelection "Reflection" "CentralBody/Earth ICRF.Axes.X" off "Satellite/Satellite2 VVLH.Axes.Y" 2 on
```
:::

::: details open **创建 Scaled（缩放）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorScaled "Scaled" "CentralBody/Earth ICRF.Axes.X" 2 off
```
:::

::: details open **创建 Velocity（速度）Vector**
```
VectorTool * Satellite/Satellite1 Create Vector SatVectorVel "Velocity" Point "CentralBody/Earth ICRF.Origin" ReferenceSystem "CentralBody/Earth ICRF" DiffTimeStep 111
```
:::
