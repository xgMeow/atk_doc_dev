# VectorTool Angle

作用：定义和修改Angle组件

用法：

```
VectorTool <ScenarioPath> <ParentObject> {Action} Angle <AngleName> [{AngleType} <AngleTypeParams>]
```

-

| `{Action}`                               | Parameters                |说明|
| ------------------------------------- | ------------------  | ------------------  |
| Create           |  `{AngleType} [<AngleTypeParams>]`      | `<AngleTypeParams>` 是可选的，详细参数请看下表。若未指定 `<AngleTypeParams>`，则使用默认值。 |
| Modify           |  `{AngleType} [<AngleTypeParams>]`      | `<AngleName> {AngleType}` 必须定义一个现有的角度组件。`{AngleType}` 不可修改。`<AngleTypeParams>` 为必填项。 |
| Delete           |                                       | 删除 `<AngleName>` 定义的角度组件。 |

-

| `{AngleType}`                               | `<AngleTypeParams>`               |
| ------------------------------------- | ------------------  |
| "Between Planes"           |  `"<PlaneA>" "<PlaneB>"`      | 
| "Between Vectors"           |  `"<FromVector>" "<ToVector>"`      | 
| "Dihedral Angle"          | `"<FromVector>" "<ToVector>" "<AboutVector>" [{-180-180 \| 0-360} {Positive \| Negative}]`  |
| "Rotation"           | `"<FromAxes>" "<ToAxes>" {X \| Y \| Z}`   |
| "To Plane"           | `"<Vector>" "<Plane>" [{Signed} [{Positive \| Negative}]]` 注：{Signed} 输入值为On或Off |
| "Constant"           | `<AngleValue>` |


::: note 举例
```
VectorTool * Satellite/Satellite1 Create Angle SatAngle1 "Between Planes"
```
```
VectorTool * Satellite/Satellite1 Modify Angle SatAngle1 "Between Vectors" "CentralBody/Earth ICRF.Axes.x" "Satellite/Satellite2 VVLH.Axes.Y"
```
```
VectorTool * Satellite/Satellite1 Delete Angle SatAngle1 
```
:::
