# VectorTool Point

作用：定义和修改Point组件

用法：

```
VectorTool <ScenarioPath> <ParentObject> {Action} Point <PointName> [{PointType} <PointTypeParams>]
```

-

|` {Action} `                              | Parameters                |说明|
| ------------------------------------- | ------------------  | ------------------  |
| Create           |  `{PointType} [<PointTypeParams>]`      | `<PointTypeParams>` 是可选的，详细参数请看下表。若未指定 `<PointTypeParams>`，则使用默认值。 |
| Modify           |  `{PointType} [<PointTypeParams>]`      | `<PointName> {PointType}` 必须定义一个现有的角度组件。`{PointType}` 不可修改。`<PointTypeParams>` 为必填项。 |
| Delete           |                                       | 删除 `<PointName>` 定义的角度组件。 |

-

| `{PointType}`                               | `<PointTypeParams>`               |
| ------------------------------------- | ------------------  |
| "B-Plane"           |  `<CentralBodyName> "<TrajPoint>" {Incoming \| Outgoing} {Asymptote \| TwoBody}` | 
| "Fixed in System"          |  `{Cartesian \| Spherical} <OrientParameters> "<RefSystem>"` <br>\<OrientParameters\> 的有效取值见下表之后所述。</br>     |  
| "Fixed at Epoch"          | <br>可以指定以下任意或全部关键字-值对：</br><br>• Epoch "\<EpochDate\>"</br><br>• SourcePoint "\<Point\>"</br><br>• ReferenceSystem "\<System\>"</br>   |
| "Intersection"           | `"<DirectionVector>" "<ReferencePlane>" "<OriginPoint>"` |
| "Libration"           | `<CentralBodyName> {L1 \| L2 \| L3 \| L4 \| L5} <SecondaryBody> [<SecondaryBody>...]` <br>可根据需要在命令行中输入任意数量的 \<SecondaryBody\>。</br> |
| "Projection"           | `"<SourcePoint>" "<ReferencePlane>"`  |

::: note 举例
```
VectorTool * Satellite/Satellite1 Create Point SatPoint1 "Libration"
```
```
VectorTool * Satellite/Satellite1 Modify Point SatPoint1 "Libration" Earth L2 Moon Sun
```
```
VectorTool * Satellite/Satellite1 Delete Point SatPoint1 
```
:::
