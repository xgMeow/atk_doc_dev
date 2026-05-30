## VectorTool Vector

作用：定义和修改Vector组件

用法：

```
VectorTool <ScenarioPath> <ParentObject> {Action} Vector <VectorName> [{VectorType} <VectorTypeParams>]
```

-

|` {Action} `                              | Parameters                |说明|
| ------------------------------------- | ------------------  | ------------------  |
| Create           |  `{VectorType} [<VectorTypeParams>]`      | `<VectorTypeParams>` 是可选的，详细参数请看下表。若未指定 `<VectorTypeParams>`，则使用默认值。 |
| Modify           |  `{VectorType} [<VectorTypeParams>]`      | `<VectorName> {VectorType}` 必须定义一个现有的角度组件。`{VectorType}` 不可修改。`<VectorTypeParams>` 为必填项。 |
| Delete           |                                       | 删除 `<VectorName>` 定义的角度组件。 |

-

| `{VectorType}`                               | `<VectorTypeParams>`               |
| ------------------------------------- | ------------------  |
| "Acceleration"           | <br>可以指定以下任意或全部关键字-值对：</br> <br>• Point "\<Point\>"</br> <br>• ReferenceSystem "\<System\>"</br> <br>• DiffTimeStep \<Step\> </br> | 
| "Angular Velocity"          |  `"<Axes>" "<ReferenceAxes>" <DiffTimeStep>`  |  
| "Cross Product"          |  `"<VectorA>" "<VectorB>"` |
| "Derivative"           | `"<Vector>" "<ReferenceAxes>" <DiffTimeStep>` |
| "Displacement"           |  <br>"\<OriginPoint\>" "\<DestinationPoint\>" [{Apparent} {IgnoreAberration} {Receive \| Transmit} "\<ReferenceSystem\>"]</br> <br>{Apparent} 和 {IgnoreAberration} 的有效取值均为 On 和 Off</br> | 
| "Fixed in Axes"          | <br>{OrientMethod} \<OrientParameters\> "\<ReferenceAxes\>"</br> <br>{OrientMethod} \<OrientParameters\> 的有效取值见下表之后所述。</br>  |  
| "Intersection"          | `"<PlaneA>" "<PlaneB>"`    |
| "Linear Combination"           | <br>可以指定以下任意或全部关键字-值对：</br> <br>• VectorA "\<Vector\>"</br> <br>• ScaleFactorA \<Factor\></br> <br>• NormalizeA {Yes \| No}</br> <br>• VectorB "\<Vector\>"</br> <br>• ScaleFactorB \<Factor\></br> <br>• NormalizeB {Yes \| No}</br> <br>• InheritDimension {FromA \| FromB \| No}</br> <br>• Dimension \<DimensionName\></br> |
| "Orbit Normal"           | <br>{UseCBI} \<CentralBodyName\> "\<ReferencePoint\>" {Osc \| KozailzsakMean \| BrolydMeanLong \| BrolydMeanShort} {Ecc \| Periapsis \| Apoapsis} "\<ReferenceSystem\>"</br>  <br>{UseCBI} 的有效取值均为 On 和 Off。</br>| 
| "Projection"          |  `"<Vector>" "<Plane>"`  |  
| "Projection Along Vector"          | `"<SourceVector>" "<DestinationVector>"`    |
| "Reflection"           | <br>"\<IncomingVector\>" {UseOpposite} "\<NormalVector\>" \<Scale\> {AllowBackside}</br> <br>{UseOpposite} 和 {AllowBackside} 的有效取值均为 On 和 Off。</br> |
| "Scaled"           | <br>"\<ReferenceVector\>" \<Scale\> {Normalize}</br> <br>{Normalize} 的有效取值为 On 和 Off。</br>  | 
| "Velocity"          | <br>可以指定以下任意或全部关键字-值对：</br> <br>• Point "\<Point\>"</br> <br>• ReferenceSystem "\<System\>"</br> <br>• DiffTimeStep \<Step\></br>    |

::: note 举例
```
VectorTool * Satellite/Satellite1 Create Vector SatVector1 "LaunchInertial"
```
```
VectorTool * Satellite/Satellite1 Modify Vector SatVector1 "LaunchInertial" "CentralBody/Earth ICRF.Origin" Moon 30 "26 Mar 2026 00:00:00.000"
```
```
VectorTool * Satellite/Satellite1 Delete Vector SatVector1 
```
:::
