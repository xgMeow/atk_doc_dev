# Set Constraint

## Description

Set the constraint.

## Syntax

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## Parameters

Basic constraints:

| Parameter | Description |
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

Solar/Lunar constraints:

| Parameter | Description |
| --- | --- |
| `SunElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `SunGroundElevAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LunarElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LOSSunExclusion` | `{Off \| <Value1>}` |
| `LOSLunarExclusion` | `{Off \| <Value1>}` |

## Additional Notes

- When entering an `AzimuthAngle` value, the maximum and minimum values must be entered at the same time.

## Examples

::: details open **Set an azimuth angle constraint**
```
SetConstraint */GroundVehicle/GroVeh1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set an elevation angle constraint**
```
SetConstraint */GroundVehicle/GroVeh1 ElevationAngle Min 10.0
```
:::

::: details open **Set a sun elevation angle constraint**
```
SetConstraint */GroundVehicle/GroVeh1 SunElevationAngle Min 10
```
:::
