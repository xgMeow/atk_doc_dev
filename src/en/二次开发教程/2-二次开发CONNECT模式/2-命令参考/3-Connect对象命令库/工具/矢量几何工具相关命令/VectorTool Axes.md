# VectorTool Axes

## Description

Define and modify `Axes` components.

## Syntax

```atk-command
VectorTool <ScenarioPath> <ParentObject> {Action} Axes <AxesName> [{AxesType} <AxesTypeParams>]
```

## Parameters

| `{Action}` | Parameters | Description |
| ------------------------------------- | ------------------  | ------------------  |
| Create | `{AxesType} [<AxesTypeParams>]` | `<AxesTypeParams>` is optional; see the table below for detailed parameters. If `<AxesTypeParams>` is not specified, default values are used. |
| Modify | `{AxesType} [<AxesTypeParams>]` | `<AxesName> {AxesType}` must define an existing coordinate system component. `{AxesType}` cannot be modified. `<AxesTypeParams>` is required. |
| Delete | | Delete the coordinate system component defined by `<AxesName>`. |

| `{AxesType}` | `<AxesTypeParams>` |
| ------------------------------------- | ------------------  |
| "Aligned and Constrained" | `{X \| Y \| Z} "<AlignVector>" {X \| Y \| Z} "<ConstrainVector>"` |
| "Angular Offset" | <br> You can specify any or all of the following keyword-value pairs:</br> <br>• SpinVector "\<Vector\>"</br>  <br>• RotationAngle "\<Angle\>"</br> <br>• Offset \<Value\></br> <br>• ReferenceAxes "\<Axes\>"</br> <br>Offset \<Value\> is entered in degrees and must be between -360.0 and 360.0 degrees. The default value is 0 degrees.</br> |
| "Fixed at Epoch" | `"<EpochDate>" "<SourceAxes>" ["<ReferenceAxes>"]` |
| "Fixed in Axes" | `{OrientMethod} <OrientParameters> "<ReferenceAxes>"` <br>Valid values for {OrientMethod} \<OrientParameters\> are described after the table below.</br> |
| "Libration" | `<CentralBodyName> {L1 \| L2 \| L3 \| L4 \| L5} <SecondaryBody> [<SecondaryBody>...]` <br>You can enter any number of \<SecondaryBody\> items on the command line as needed.</br> |
| "Spinning" | <br> You can specify any or all of the following keyword-value pairs:</br> <br>• Epoch "\<Epoch\>"</br> <br>• SpinVector "\<Vector\>"</br> <br>• Offset \<Value\></br> <br>• RotationRate \<Value\></br> <br>• ReferenceAxes "\<Axes\>"</br> <br>"\<Epoch\>" is entered in Connect date units. The default value is the start time of the object.</br> <br>Offset \<Value\> is entered in degrees and must be between -360.0 and 360.0 degrees. The default value is 0 degrees.</br> <br>RotationRate \<Value\> is entered in Connect time units. The default value is 1.0 degrees/second.</br> |
| "Trajectory" | `"<TrajectoryPoint>" "<ReferenceSystem>" {ICR \| VNC \| RIC \| LVLH \| VVLH \| BBR}` |
| "Launch" | `<CentralBodyName> "<ReferancePoint>" <AngleValue>` |
| "Launch Inertial" | `<CentralBodyName> "<ReferancePoint>" <AngleValue> <LaunchTime>` |
| "Topocentric" | `"<ReferancePoint>" <CentralBodyName>` |

## Examples

::: details open **Create an Axes component**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxes1 "Aligned and Constrained"
```
:::

::: details open **Modify an Axes component**
```
VectorTool * Satellite/Satellite1 Modify Axes SatAxes1 "Aligned and Constrained" X "CentralBody/Earth ICRF.Axes.x" Y "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **Delete an Axes component**
```
VectorTool * Satellite/Satellite1 Delete Axes SatAxes1 
```
:::

::: details open **Create an Aligned and Constrained Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesAlignCnstn "Aligned and Constrained" Y "CentralBody/Earth ICRF.Axes.X" -Y "Satellite/Satellite2 VVLH.Axes.Y"
```
:::

::: details open **Create an Angular Offset Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesAngoffset "Angular Offset" SpinVector "CentralBody/Earth ICRF.Axes.X" RotationAngle "CentralBody/Earth AngleRotation" Offset 121 ReferenceAxes "CentralBody/Earth Fixed.Axes"
```
:::

::: details open **Create a Fixed in Axes Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesFixed "Fixed in Axes" Euler 11 22 33 131 "CentralBody/Earth Fixed.Axes"
```
:::

::: details open **Create a Fixed at Epoch Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesFixedEpoch "Fixed at Epoch" "13 Mar 2026 00:00:00.000" "CentralBody/Earth Fixed.Axes" "Satellite/Satellite2 VVLH.Axes"
```
:::

::: details open **Create a Launch Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesLaunch "Launch" Moon "CentralBody/Earth ICRF.Origin" 12
```
:::

::: details open **Create a Launch Inertial Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesLaunchInertial "Launch Inertial" Moon "CentralBody/Earth ICRF.Origin" 12 "13 Mar 2026 00:00:00.000"
```
:::

::: details open **Create a Libration Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesLibration "Libration" Moon L3 Sun Earth
```
:::

::: details open **Create a Spinning Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesSpinning "Spinning" Epoch "13 Mar 2026 01:00:00.000" SpinVector "CentralBody/Earth ICRF.Axes.X" Offset 11 RotationRate 12 ReferenceAxes "CentralBody/Earth Fixed.Axes"
```
:::

::: details open **Create a Topocentric Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesTopocentric "Topocentric" "CentralBody/Earth ICRF.Origin" Moon
```
:::

::: details open **Create a Trajectory Axes**
```
VectorTool * Satellite/Satellite1 Create Axes SatAxesTraj "Trajectory" "CentralBody/Earth ICRF.Origin" "CentralBody/Earth ICRF" ICR
```
:::
