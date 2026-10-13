---
description: 设置对象的约束条件，包括基本方位角/仰角/距离等约束、太阳与月球相关约束，以及链路通信约束。
---

# SetConstraint

## 作用

设置约束。

## 语法

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## 参数说明

`<ObjectPath>` 为对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1`。

可用的 `{ConstraintName}` 随对象类型而不同：多数对象支持「基本约束」，飞行器与地面站类对象另支持「太阳约束」，发射器与接收器另支持「通信约束」，行星对象仅支持 `LineOfSight` 与 `TerrainMask`。

### 基本约束

| `ConstraintName` | `Parameters` |
| --- | --- |
| `AzimuthAngle` | `{Off \| Min <Value1> Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `ElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `Range` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `AzimuthRate` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `ElevationRate` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `RangeRate` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `AngularRate` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `Altitude` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `PropagationDelay` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `LineOfSight` | `{On \| Off}` |
| `FieldOfView` | `{On \| Off}` |
| `TerrainMask` | `{On \| Off}` |

### 太阳约束

| `ConstraintName` | `Parameters` |
| --- | --- |
| `SunElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `SunGroundElevAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LunarElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LOSSunExclusion` | `{Off \| <Value1>}` |
| `LOSLunarExclusion` | `{Off \| <Value1>}` |
| `BSSunExclusion` | `{Off \| <Value1>}` |
| `BSLunarExclusion` | `{Off \| <Value1>}` |

### 通信约束

| `ConstraintName` | `Parameters` |
| --- | --- |
| `Frequency` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `RcvdIsotropicPower` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `FluxDensity` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `LinkEIRP` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `DopplerShift` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `C/No` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `PowerAtReceiverInput` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `C/N` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `BitErrorRate` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `LinkMargin` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `Eb/No` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `PolRelAngle` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `G/T` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `SystemNoiseTemperature` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |

::: warning 注意
当输入 `AzimuthAngle` 值时，最大值和最小值必须同时输入。
:::

::: warning 原始资料差异
- 原始资料中 `{ConstraintName}` 的大小写不统一（如 `fieldofview` 与 `FieldOfView` 并存），此处统一为 `FieldOfView`。
- 原始资料中该命令的语法，部分对象写作 `{ConstraintName} <Parameters>`，行星对象写作 `{ConstraintName} {State}`，此处统一为 `<Parameters>`。
:::

## 适用对象

传感器、信号发射器、卫星、地面站、导弹、火箭、船、行星、车辆、链路接收器、飞机

## 示例

::: details open **设置方位角约束（排除区间）**
```
SetConstraint */Satellite/Satellite1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置仰角约束（最小值）**
```
SetConstraint */Satellite/Satellite1 ElevationAngle Min 10.0
```
:::

::: details open **设置太阳排除角约束**
```
SetConstraint */Satellite/Satellite1 LOSSunExclusion 30
```
:::

::: details open **设置频率约束**
```
SetConstraint */Satellite/Satellite1/Transmitter/Transmitter1 Frequency Min 10
```
:::

::: details open **设置方位角约束**
```
SetConstraint */Satellite/Sate1/Sensor/Sen1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置仰角约束**
```
SetConstraint */Satellite/Satellite1/Sensor/Sen1 ElevationAngle Min 10.0
```
:::

::: details open **设置太阳排除约束**
```
SetConstraint */Satellite/Sate1/Sensor/Sen1 BSSunExclusion 30
```
:::

::: details open **设置方位角约束（排除区间）**
```
SetConstraint */Satellite/Satellite1/Transmitter/Trans1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置仰角约束（最小值）**
```
SetConstraint */Satellite/Satellite1/Transmitter/Transmitter1 ElevationAngle Min 10.0
```
:::

::: details open **设置频率约束**
```
SetConstraint */Satellite/Satellite1/Transmitter/Transmitter1 Frequency Min 10
```
:::

::: details open **设置方位角约束**
```
SetConstraint */Satellite/Satellite1 AzimuthAngle Min 10 Max 100
```
:::

::: details open **设置太阳排除角约束**
```
SetConstraint */Satellite/Satellite1 LOSSunExclusion 30
```
:::

::: details open **设置方位角约束**
```
SetConstraint */Facility/Facility1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置仰角约束**
```
SetConstraint */Facility/Facility1 ElevationAngle Min 10.0
```
:::

::: details open **设置太阳仰角约束**
```
SetConstraint */Facility/Facility1 SunElevationAngle Min 10
```
:::

::: details open **设置方位角约束**
```
SetConstraint */Missile/Missile1 AzimuthAngle Min 10 Max 100
```
:::

::: details open **设置太阳排除约束**
```
SetConstraint */Missile/Missile1 LOSSunExclusion 30
```
:::

::: details open **设置方位角约束**
```
SetConstraint */LaunchVehicle/LaunchVehicle1 AzimuthAngle Min 10 Max 100
```
:::

::: details open **设置太阳排除角约束**
```
SetConstraint */LaunchVehicle/LaunchVehicle1 LOSSunExclusion 30
```
:::

::: details open **设置方位角约束**
```
SetConstraint */Ship/Ship1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置仰角约束**
```
SetConstraint */Ship/Ship1 ElevationAngle Min 10.0
```
:::

::: details open **设置太阳仰角约束**
```
SetConstraint */Ship/Ship1 SunElevationAngle Min 10
```
:::

::: details open **设置行星视距约束**
```
SetConstraint */Planet/Jupiter LineOfSight On
```
:::

::: details open **设置方位角约束**
```
SetConstraint */GroundVehicle/GroVeh1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置仰角约束**
```
SetConstraint */GroundVehicle/GroVeh1 ElevationAngle Min 10.0
```
:::

::: details open **设置太阳仰角约束**
```
SetConstraint */GroundVehicle/GroVeh1 SunElevationAngle Min 10
```
:::

::: details open **设置方位角约束（排除区间）**
```
SetConstraint */Satellite/Satellite1/Receiver/Receiver1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置最小仰角约束**
```
SetConstraint */Satellite/Sate1/Receiver/Rece1 ElevationAngle Min 10.0
```
:::

::: details open **设置最小频率约束**
```
SetConstraint */Satellite/Sate1/Receiver/Receiver1 Frequency Min 10
```
:::

::: details open **设置方位角约束**
```
SetConstraint */Aircraft/Aircraft1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **设置仰角约束**
```
SetConstraint */Aircraft/Aircraft1 ElevationAngle Min 10.0
```
:::

::: details open **设置太阳仰角约束**
```
SetConstraint */Aircraft/Aircraft1 SunElevationAngle Min 10
```
:::
