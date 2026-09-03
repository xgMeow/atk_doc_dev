# CovMulti_RM MultiFOMDefine

## Description

Return the coverage figure of merit.

## Syntax

```atk-command
CovMulti_RM / MultiFOMDefine Definition <FOMType> { Parameters }
```

## Parameters

| `{FOMType} {Parameters}` | Description |
|------|------|
| `Simple On` | Simple coverage |
| `CoverageTime Compute {MaxPerDay \| MaxPercentPerDay \| MinPer \| MinPercentPerDay \| PerDay \| PerDayStdDev \| Percent \| PercentPerDay \| PercentPerDayStdDe \| PercentTimeAbove \| Total \| TotalTimeAbove}` | Coverage time |
| `AccessDuration Compute {Sum \| Maximum \| Minimum \| Average \| StdDeviation \| PercentAbove}` | Access duration |
| `AccessSeparation {AvgPerDay \| InSpan \| InSpanPerDay \| MaxPerDay \| MinPerDay \| Total}` | Access separation |
| `RevisitTime Compute {Average \| Maximum \| Minimum \| PercentBelow \| PercentBelowGapsOnly \| PercentBelow \| StdDeviation}` | Revisit time |
| `TimeAverageGap` | Time average gap |
| `ResponseTime Compute {Average \| Maximum \| Minimum \| PercentBelow \| PercentBelowGapsOnly}` | Response time |
| `NAsset Compute {Maximum \| Minimum \| Average \| PercentAbove}` | N-asset coverage |
| `NumberOfAccesses Compute {AvgPerDay \| InSpan \| InSpanPerDay \| MaxPerDay \| MinPerDay \| Total}` | Number of accesses |
| `NumberOfGaps Compute {AvgPerDay \| InSpan \| InSpanPerDay \| MaxPerDay \| MinPerDay \| Total}` | Number of coverage gaps |
| `DilutionOfPrecision Compute {Average \| Maximum \| Minimum \| PercentBelow}` | Dilution of precision |
| `AccessConstraint Compute {Sum \| Maximum \| Minimum \| Average \| PercentAbove \| PercentBelow}` | Access constraint |
| `AccessConstraint Constraint {Altitude \| AngularRate \| AzimuthAngle \| ElevationAngle \| Range \| AzimuthRate \| ElevationRate \| RangeRate \| LOSLunarExclusion \| LunarElevationAngle \| SunElevationAngle \| PropagationDelay}` | Access constraint |

## Examples

::: details open **Compute the coverage figure of merit for revisit time**

```
CovMulti_RM / MultiFOMDefine Definition RevisitTime Compute maximum
```

:::
