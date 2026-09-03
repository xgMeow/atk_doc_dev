# Set Constraint

## Description

Set constraints.

## Syntax

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## Parameters

**Basic Constraints:**

| ConstraintName   | Parameters                                                   |
| ---------------- | ------------------------------------------------------------ |
| `AzimuthAngle`     | `{Off \| Min <Value1> Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `ElevationAngle`   | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `Range`            | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `AzimuthRate`      | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `ElevationRate`    | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `RangeRate`        | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `AngularRate`      | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `Altitude`         | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `PropagationDelay` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `LineOfSight`      | `{On \| Off}`                                                |
| `TerrainMask`      | `{On \| Off}`                                                |

**Sun Constraints:**

| ConstraintName      | Parameters                                |
| ------------------- | ----------------------------------------- |
| `SunElevationAngle`   | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `SunGroundElevAngle`  | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LunarElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LOSSunExclusion`     | `{Off \| <Value1>}`                        |
| `LOSLunarExclusion`   | `{Off \| <Value1>}`                        |

## Additional Notes

- When entering an `AzimuthAngle` value, the maximum and minimum values must both be entered.

## Examples

::: details open **Set an azimuth angle constraint**
```
SetConstraint */LaunchVehicle/LaunchVehicle1 AzimuthAngle Min 10 Max 100
```
:::

::: details open **Set a solar exclusion angle constraint**
```
SetConstraint */LaunchVehicle/LaunchVehicle1 LOSSunExclusion 30
```
:::
