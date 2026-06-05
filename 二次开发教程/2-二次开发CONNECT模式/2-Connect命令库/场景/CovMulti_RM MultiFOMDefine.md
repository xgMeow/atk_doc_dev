# CovMulti_RM MultiFOMDefine

## 作用

返回覆盖品质参数

## 用法

```
CovMulti_RM / MultiFOMDefine Definition <FOMType> { Parameters }
```

## 说明

`{Parameters}` 说明：

| 参数项 | 含义 | 可选参数 |
| --- | --- | --- |
| Simple On | 简单覆盖 | （无） |
| CoverageTime Compute | 覆盖时间 | `MaxPerDay`, `MaxPercentPerDay`, `MinPer`, `MinPercentPerDay`, `PerDay`, `PerDayStdDev`, `Percent`, `PercentPerDay`, `PercentPerDayStdDe`, `PercentTimeAbove`, `Total`, `TotalTimeAbove` |
| AccessDuration Compute | 访问时长 | `Sum`, `Maximum`, `Minimum`, `Average`, `StdDeviation`, `PercentAbove` |
| AccessSeparation | 访问间隔 | `AvgPerDay`, `InSpan`, `InSpanPerDay`, `MaxPerDay`, `MinPerDay`, `Total` |
| RevisitTime Compute | 重访时间 | `Average`, `Maximum`, `Minimum`, `PercentBelow`, `PercentBelowGapsOnly`, `StdDeviation` |
| TimeAverageGap | 时间平均间隔 | （无） |
| ResponseTime Compute | 响应时间 | `Average`, `Maximum`, `Minimum`, `PercentBelow`, `PercentBelowGapsOnly` |
| NAsset Compute | 多重覆盖 | `Maximum`, `Minimum`, `Average`, `PercentAbove` |
| NumberOfAccesses Compute | 访问次数 | `AvgPerDay`, `InSpan`, `InSpanPerDay`, `MaxPerDay`, `MinPerDay`, `Total` |
| NumberOfGaps Compute | 覆盖间隔次数 | `AvgPerDay`, `InSpan`, `InSpanPerDay`, `MaxPerDay`, `MinPerDay`, `Total` |
| DilutionOfPrecision Compute | 几何精度衰减因子 | `Average`, `Maximum`, `Minimum`, `PercentBelow` |
| AccessConstraint Compute | 可见性约束 | `Sum`, `Maximum`, `Minimum`, `Average`, `PercentAbove`, `PercentBelow` |
| AccessConstraint Constraint | 可见性约束类型 | `Altitude`, `AngularRate`, `AzimuthAngle`, `ElevationAngle`, `Range`, `AzimuthRate`, `ElevationRate`, `RangeRate`, `LOSLunarExclusion`, `LunarElevationAngle`, `SunElevationAngle`, `PropagationDelay` |

## 举例

```
CovMulti_RM / MultiFOMDefine Definition RevisitTime Compute maximum
```
