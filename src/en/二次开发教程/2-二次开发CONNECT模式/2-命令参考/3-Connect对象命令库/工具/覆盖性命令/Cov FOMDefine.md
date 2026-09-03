# Cov FOMDefine

## Description

Define the coverage figure of merit (FOM) of a coverage object.

## Syntax

```atk-command
Cov <FOMObjectPath> FOMDefine {Satisfaction | Definition} <Parameters>
```

## Parameters

### Satisfaction Values

| \<Parameters\> | Description |
|------|------|
| `On` | Enables the valid condition |
| `Off` | Does not enable the valid condition |
| `GreaterThan <Threshold>` | The condition is greater than a value |
| `AtLeast <Threshold>` | The condition is greater than or equal to a value |
| `Equal <Threshold>` | The condition is equal to a value |
| `AtMost <Threshold>` | The condition is less than or equal to a value |
| `LessThan <Threshold>` | The condition is less than a value |

### Definition {FOMType} Values

If the `Definition` attribute is selected, `Definition` accepts `{FOMType} <Parameters>` as described below:

| Parameter | Description |
|------|------|
| `Simple On` | Simple coverage |
| `CoverageTime Compute{ MaxPerDay \| MaxPercentPerDay \| MinPer \| MinPercentPerDay \| PerDay \| PerDayStdDev \| Percent \| PercentPerDay \| PercentPerDayStdDe \| PercentTimeAbove \| Total \| TotalTimeAbove }` | Coverage time |
| `AccessDuration Compute{ Sum \| Maximum \| Minimum \| Average \| StdDeviation \| PercentAbove }` | Access duration |
| `AccessSeparation { AvgPerDay \| InSpan \| InSpanPerDay \| MaxPerDay \| MinPerDay \| Total }` | Access separation |
| `RevisitTime Compute{ Average \| Maximum \| Minimum \| PercentBelow \| PercentBelowGapsOnly \| PercentBelow \| StdDeviation }` | Revisit time |
| `TimeAverageGap` | Time average gap |
| `ResponseTime Compute{ Average \| Maximum \| Minimum \| PercentBelow \| PercentBelowGapsOnly }` | Response time |
| `NAsset Comput{ Maximum \| Minimum \| Average \| PercentAbove }` | N-asset coverage |
| `NumberOfAccesses Compute{ AvgPerDay \| InSpan \| InSpanPerDay \| MaxPerDay \| MinPerDay \| Total }` | Number of accesses |
| `NumberOfGaps Compute{ AvgPerDay \| InSpan \| InSpanPerDay \| MaxPerDay \| MinPerDay \| Total }` | Number of coverage gaps |
| `DilutionOfPrecision Compute{ Average \| Maximum \| Minimum \| PercentBelow }` | Dilution of precision |
| `AccessConstraint Compute{ Sum \| Maximum \| Minimum \| Average \| PercentAbove \| PercentBelow}` | Access constraint |
| `AccessConstraint Constraint{ Altitude \| AngularRate \| AzimuthAngle \| ElevationAngle \| Range \| AzimuthRate \| ElevationRate \| RangeRate \| LOSLunarExclusion \| LunarElevationAngle \| SunElevationAngle \| PropagationDelay }` | Access constraint |

## Examples

::: details open **Compute the total satellite access constraint**
```
Cov */Satellite/Satellite1 FOMDefine Definition AccessConstraint Compute Total
```
:::
