# Keplerian

## 作用

为初始段坐标类型轨道根数设置属性值

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.Keplerian.{Attribute} <Value> [{Unit}]
```

## 参数说明

### Size Attributes

| 参数 | 说明 |
| --- | --- |
| Element type for Size | 设置属性使用 SizeType |
| `Semi-major Axis` | 半长轴，单位随当前 `Distance` 单位设置，可附 km、m 等单位，设置属性使用 sma |
| `Apoapsis Radius` | 远拱点半径，单位随当前 `Distance` 单位设置，可附 km、m 等单位，设置属性使用 ApoapsisRadSize |
| `Apoapsis Altitude` | 远拱点高度，单位随当前 `Distance` 单位设置，可附 km、m 等单位，设置属性使用 ApoapsisAltSize |
| `Period` | 周期，单位随当前 `Time` 单位设置，可附 sec、min、hr 等单位，设置属性使用 Period |
| `Mean Motion` | 每天圈数，取当前 Connect 角度单位与时间单位之比，可附 rad/sec、rad/min 等单位，设置属性使用 MeanMotion |

### Shape Attributes

| 参数 | 说明 |
| --- | --- |
| Element type for Shape | 设置属性使用 ShapeType |
| `Eccentricity` | 偏心率，设置属性使用 ecc |
| `Periapsis Altitude` | 近拱点高度，单位随当前 `Distance` 单位设置，设置属性使用 PeriapsisAltShape |
| `Periapsis Radius` | 近拱点半径，单位随当前 `Distance` 单位设置，设置属性使用 PeriapsisRadShape |

### Node Elements

| 参数 | 说明 |
| --- | --- |
| `Right Asc. of Asc. Node` | 升交点赤经，单位随当前 `Angle` 单位设置，设置属性使用 RAAN |

### Anomaly Attributes

| 参数 | 说明 |
| --- | --- |
| Element type for Anomaly | 类型，设置属性使用 AnomType |
| `True Anomaly` | 真近点角，单位随当前 `Angle` 单位设置，设置属性使用 TA |
| `Argument of Latitude` | 纬度辐角，单位随当前 `Angle` 单位设置，设置属性使用 ArgLat |
| `Eccentric Anomaly` | 偏近点角，单位随当前 `Angle` 单位设置，设置属性使用 EccAnomaly |
| `Mean Anomaly` | 平近点角，单位随当前 `Angle` 单位设置，设置属性使用 MeanAnomaly |
| `Time Past Asc. Node` | 过升交点时刻，单位随当前 `Time` 单位设置，设置属性使用 TimePastAN |
| `Time Past Periapsis` | 过近拱点时刻，单位随当前 `Time` 单位设置，设置属性使用 TimePastPeriapsis |

### Other Attributes

| 参数 | 说明 |
| --- | --- |
| `Inclination` | 轨道倾角，单位随当前 `Angle` 单位设置，设置属性使用 inc |
| `Argument of Periapsis` | 近拱点角距，单位随当前 `Angle` 单位设置，设置属性使用 w |

::: warning 注意

1. 你可以使用 `SizeType`, `ShapeType` and `AnomType` 设置参数类型，如果你只是对参数进行了设置属性值，则会自动选择类型。例如你选择了 `Mean Motion` 类型，并对 `Semi-Major Axis` 设置值，那么类型将会变成 `Semi-Major Axis`

2. 请保持数据正确性，若输入错误数据，数据类型将不可以转换。例如 输入 `sma` 为 `6 m`，须将数据修改正确后，例如修改为` 6800000 m`，才能转化为 `ApoapsisRadSize` 类型。

:::

## 示例

::: details open **设置 Keplerian SizeType 为 Apoapsis Radius**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.SizeType "Apoapsis Radius"
```
:::

::: details open **设置 Keplerian 半长轴值**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.sma 8000 km
```
:::
