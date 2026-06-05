# Cov FOMDefine

## 作用

覆盖性对象覆盖因子定义

## 用法

```
Cov <FOMObjectPath> FOMDefine {Satisfaction | Definition} <Parameters>
```

## 说明

### Satisfaction

`<Parameters>` 说明：

- `On` 启动有效条件
- `Off` 不启动有效条件
- `GreaterThan <Threshold>` 条件大于某值
- `AtLeast <Threshold>` 条件大于等于某值
- `Equal <Threshold>` 条件等于某值
- `AtMost <Threshold>` 条件小于等于某值
- `LessThan <Threshold>` 条件小于某值

### Definition

若选择属性 Definition，Definition 可输入 `{FOMType} <Parameters>` 说明：

- `Simple On` 简单覆盖
- `CoverageTime Compute{ MaxPerDay | MaxPercentPerDay | MinPer | MinPercentPerDay | PerDay | PerDayStdDev | Percent | PercentPerDay | PercentPerDayStdDe | PercentTimeAbove | Total | TotalTimeAbove }` 覆盖时间
- `AccessDuration Compute{ Sum | Maximum | Minimum | Average | StdDeviation | PercentAbove }` 访问时长
- `AccessSeparation { AvgPerDay | InSpan | InSpanPerDay | MaxPerDay | MinPerDay | Total }` 访问间隔
- `RevisitTime Compute{ Average | Maximum | Minimum | PercentBelow | PercentBelowGapsOnly | PercentBelow | StdDeviation }` 重访时间
- `TimeAverageGap` 时间平均间隔
- `ResponseTime Compute{ Average | Maximum | Minimum | PercentBelow | PercentBelowGapsOnly }` 响应时间
- `NAsset Comput{ Maximum | Minimum | Average | PercentAbove }` 多重覆盖
- `NumberOfAccesses Compute{ AvgPerDay | InSpan | InSpanPerDay | MaxPerDay | MinPerDay | Total }` 访问次数
- `NumberOfGaps Compute{ AvgPerDay | InSpan | InSpanPerDay | MaxPerDay | MinPerDay | Total }` 覆盖间隔次数
- `DilutionOfPrecision Compute{ Average | Maximum | Minimum | PercentBelow }` 几何精度衰减因子
- `AccessConstraint Compute{ Sum | Maximum | Minimum | Average | PercentAbove | PercentBelow }` 可见性约束
- `AccessConstraint Constraint{ Altitude | AngularRate | AzimuthAngle | ElevationAngle | Range | AzimuthRate | ElevationRate | RangeRate | LOSLunarExclusion | LunarElevationAngle | SunElevationAngle | PropagationDelay }` 可见性约束

## 举例

```
Cov */Satellite/Satellite1 FOMDefine Definition AccessConstraint Compute Total
```
