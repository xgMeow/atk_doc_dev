# VectorTool Axes

## 作用

定义和修改 `Axes` 组件。

## 语法

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Axes <AxesName> [{AxesType} <AxesTypeParams>]
```

## 参数说明

| `{Action}` | Parameters | 说明 |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{AxesType} [<AxesTypeParams>]` | `<AxesTypeParams>` 是可选的，详细参数请看下表。若未指定 `<AxesTypeParams>`，则使用默认值。 |
| Modify | `{AxesType} [<AxesTypeParams>]` | `<AxesName> {AxesType}` 必须定义一个现有的角度组件。`{AxesType}` 不可修改。`<AxesTypeParams>` 为必填项。 |
| Delete | | 删除 `<AxesName>` 定义的角度组件。 |

| `{AxesType}` | `<AxesTypeParams>` |
| ------------------------------------- | ------------------  |
| "Aligned and Constrained" | `{X \| Y \| Z} "<AlignVector>" {X \| Y \| Z} "<ConstrainVector>"` |
| "Angular Offset" | <br> 可以指定以下任意或全部关键字-值对：</br> <br>• SpinVector "\<Vector\>"</br>  <br>• RotationAngle "\<Angle\>"</br> <br>• Offset \<Value\></br> <br>• ReferenceAxes "\<Axes\>"</br> <br>Offset \<Value\> 以度为单位输入，取值范围必须在 -360.0 到 360.0 度之间。默认值为 0 度。</br> |
| "Fixed at Epoch" | `"<EpochDate>" "<SourceAxes>" ["<ReferenceAxes>"]` |
| "Fixed in Axes" | `{OrientMethod} <OrientParameters> "<ReferenceAxes>"` <br>{OrientMethod} \<OrientParameters\> 的有效取值见下表之后所述。</br> |
| "Libration" | `<CentralBodyName> {L1 \| L2 \| L3 \| L4 \| L5} <SecondaryBody> [<SecondaryBody>...]` <br>可根据需要在命令行中输入任意数量的 \<SecondaryBody\>。</br> |
| "Spinning" | <br> 可以指定以下任意或全部关键字-值对：</br> <br>• Epoch "\<Epoch\>"</br> <br>• SpinVector "\<Vector\>"</br> <br>• Offset \<Value\></br> <br>• RotationRate \<Value\></br> <br>• ReferenceAxes "\<Axes\>"</br> <br>"\<Epoch\>" 以 Connect 日期单位输入。默认值为对象的开始时间。</br> <br>Offset \<Value\> 以度为单位输入，取值范围必须在 -360.0 到 360.0 度之间。默认值为 0 度。</br> <br>RotationRate \<Value\> 以Connect 时间单位输入。默认值为 1.0 度/秒。</br> |
| "Trajectory" | `"<TrajectoryPoint>" "<ReferenceSystem>" {ICR \| VNC \| RIC \| LVLH \| VVLH \| BBR}` |
| "Launch" | `<CentralBodyName> "<ReferancePoint>" <AngleValue>` |
| "Launch Inertial" | `<CentralBodyName> "<ReferancePoint>" <AngleValue> <LaunchTime>` |
| "Topocentric" | `"<ReferancePoint>" <CentralBodyName>` |

## 示例

::: details open **创建 Axes 组件**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxes1 "Aligned and Constrained"
```
:::

::: details open **修改 Axes 组件**
```
VectorTool * Satellite/Satellite1 Modify Axes SatAxes1 "Aligned and Constrained" X "CentralBody/Earth ICRF.Axes.x" Y "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **删除 Axes 组件**
```
VectorTool * Satellite/Satellite1 Delete Axes SatAxes1 
```
:::
