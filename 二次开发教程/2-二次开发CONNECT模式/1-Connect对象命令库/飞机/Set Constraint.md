# Set Constraint

## 作用

设置**约束**。

## 语法

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## 参数说明

### 基本约束

| 参数 | 说明 |
|------|------|
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
| `TerrainMask` | `{On \| Off}` |

### 太阳约束

| 参数 | 说明 |
|------|------|
| `SunElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `SunGroundElevAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LunarElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LOSSunExclusion` | `{Off \| <Value1>}` |
| `LOSLunarExclusion` | `{Off \| <Value1>}` |

## 补充说明

- 当输入 `AzimuthAngle` 值时，最大值和最小值必须同时输入。

## 示例

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
