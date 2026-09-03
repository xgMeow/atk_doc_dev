# Set Constraint

## Description

Sets constraints.

## Syntax

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## Parameters

::: details Constraint Parameter Settings (click to expand)

- Basic Constraints:

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
    | `TerrainMask` | `{On \| Off}` |

- Sun Constraints:

    | `ConstraintName` | `Parameters` |
    | --- | --- |
    | `SunElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
    | `SunGroundElevAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
    | `LunarElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
    | `LOSSunExclusion` | `{Off \| <Value1>}` |
    | `LOSLunarExclusion` | `{Off \| <Value1>}` |

:::

::: tip Note
When entering an AzimuthAngle value, the maximum and minimum values must be entered at the same time
:::

## Examples

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */Satellite/Satellite1 AzimuthAngle Min 10 Max 100
```
:::

::: details open **Set the Sun Exclusion Angle Constraint**
```
SetConstraint */Satellite/Satellite1 LOSSunExclusion 30
```
:::
