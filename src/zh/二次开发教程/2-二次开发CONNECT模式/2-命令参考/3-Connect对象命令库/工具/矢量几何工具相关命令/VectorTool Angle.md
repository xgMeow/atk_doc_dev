# VectorTool Angle

## 作用

定义和修改 `Angle` 组件。

## 语法

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Angle <AngleName> [{AngleType} <AngleTypeParams>]
```

## 参数说明

| `{Action}` | Parameters | 说明 |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{AngleType} [<AngleTypeParams>]` | `<AngleTypeParams>` 是可选的，详细参数请看下表。若未指定 `<AngleTypeParams>`，则使用默认值。 |
| Modify | `{AngleType} [<AngleTypeParams>]` | `<AngleName> {AngleType}` 必须定义一个现有的角度组件。`{AngleType}` 不可修改。`<AngleTypeParams>` 为必填项。 |
| Delete | | 删除 `<AngleName>` 定义的角度组件。 |

| `{AngleType}` | `<AngleTypeParams>` |
| ------------------------------------- | ------------------  |
| "Between Planes" | `"<PlaneA>" "<PlaneB>"` |
| "Between Vectors" | `"<FromVector>" "<ToVector>"` |
| "Dihedral Angle" | `"<FromVector>" "<ToVector>" "<AboutVector>" [{-180-180 \| 0-360} {Positive \| Negative}]` |
| "Rotation" | `"<FromAxes>" "<ToAxes>" {X \| Y \| Z}` |
| "To Plane" | `"<Vector>" "<Plane>" [{Signed} [{Positive \| Negative}]]` 注：{Signed} 输入值为On或Off |
| "Constant" | `<AngleValue>` |

## 示例

::: details open **创建角度组件**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngle1 "Between Planes"
```
:::

::: details open **修改角度组件**
```
VectorTool * Satellite/Satellite1 Modify Angle SatAngle1 "Between Vectors" "CentralBody/Earth ICRF.Axes.x" "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **删除角度组件**
```
VectorTool * Satellite/Satellite1 Delete Angle SatAngle1 
```
:::

::: details open **创建 Between Planes（平面间）Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleBtnPlane "Between Planes" "CentralBody/Earth PlaneNormal" "Satellite/Satellite2 PlaneQuadrant"
```
:::

::: details open **创建 Between Vectors（向量间）Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleBtnVector "Between Vectors" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **创建 Dihedral Angle（二面角）**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleDihe "Dihedral Angle" "CentralBody/Earth ICRF.Axes.X" "CentralBody/Earth Fixed.Axes.X" "Satellite/Satellite2 VVLH.Axes.Y" 0-360 Positive
```
:::

::: details open **创建 Rotation（旋转）Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleRotation "Rotation" "CentralBody/Earth Fixed.Axes" "Satellite/Satellite2 VVLH.Axes" Y
```
:::

::: details open **创建 To Plane（到平面）Angle**
```
VectorTool * Satellite/Satellite1 Create Angle SatAngleToPlane "To Plane" "CentralBody/Earth ICRF.Axes.X" "Satellite/Satellite2 PlaneQuadrant" off Negative
```
:::
