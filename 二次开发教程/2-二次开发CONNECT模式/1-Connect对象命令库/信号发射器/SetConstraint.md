# SetConstraint

## 作用

设置约束

## 语法

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## 参数说明

### 基本约束

| ConstraintName | Parameters |
|----------------|-----------|
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

### 通信约束

| ConstraintName | Parameters |
|----------------|-----------|
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

## 注意

- 当输入 `AzimuthAngle` 值时，最大值和最小值必须同时输入

## 示例

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
