---
description: Sets various constraint conditions for the sensor, including basic azimuth/elevation/range constraints and sun- and moon-related constraint parameters.
---

# Set Constraint

## Description

Sets constraints.

## Syntax

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## Parameters

- Basic constraints:

| ConstraintName    | Parameters                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| AzimuthAngle      | `{Off \| Min <Value1> Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                            |
| ElevationAngle    | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| Range             | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| AzimuthRate       | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| ElevationRate     | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| RangeRate         | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| AngularRate       | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| Altitude          | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| PropagationDelay  | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]`                       |
| LineOfSight       | `{On \| Off}`                                                                                          |
| fieldofview       | `{On \| Off}`                                                                                          |
| TerrainMask       | `{On \| Off}`                                                                                          |

- Sun and lunar constraints:

| ConstraintName       | Parameters                                |
| -------------------- | ----------------------------------------- |
| SunElevationAngle    | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| SunGroundElevAngle   | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| LunarElevationAngle  | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| LOSSunExclusion      | `{Off \| <Value1>}`                       |
| LOSLunarExclusion    | `{Off \| <Value1>}`                       |
| BSSunExclusion       | `{Off \| <Value1>}`                       |
| BSLunarExclusion     | `{Off \| <Value1>}`                       |

::: warning Note
When an AzimuthAngle value is entered, both the maximum and minimum values must be entered.
:::

## Examples

::: details open **Set Azimuth Constraint**
```
SetConstraint */Satellite/Sate1/Sensor/Sen1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set Elevation Constraint**
```
SetConstraint */Satellite/Satellite1/Sensor/Sen1 ElevationAngle Min 10.0
```
:::

::: details open **Set Sun Exclusion Constraint**
```
SetConstraint */Satellite/Sate1/Sensor/Sen1 BSSunExclusion 30
```
:::
