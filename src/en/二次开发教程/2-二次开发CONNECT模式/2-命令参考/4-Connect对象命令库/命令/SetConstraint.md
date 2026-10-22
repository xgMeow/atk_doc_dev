---
description: Sets the constraints of an object, including basic azimuth/elevation/range constraints, sun- and moon-related constraints, and link communication constraints.
groups: [GroundVehicle, Sensor, Ship, Missile, Facility, Aircraft, LaunchVehicle, Receiver, Satellite, Transmitter, Planet]
---

# SetConstraint

## Description

Sets constraints.

## Syntax

```atk-command
SetConstraint <ObjectPath> {ConstraintName} <Parameters>
```

## Parameters

`<ObjectPath>` is the full object path, specified in full starting from the scenario `*`, for example `*/Satellite/Satellite1`.

The available `{ConstraintName}` values vary by object type: most objects support "basic constraints"; vehicle and facility objects additionally support "solar constraints"; transmitters and receivers additionally support "communication constraints"; planet objects support only `LineOfSight` and `TerrainMask`.

### Basic Constraints

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
| `FieldOfView` | `{On \| Off}` |
| `TerrainMask` | `{On \| Off}` |

### Solar Constraints

| `ConstraintName` | `Parameters` |
| --- | --- |
| `SunElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `SunGroundElevAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LunarElevationAngle` | `{Off \| Min <Value1> [\|] Max <Value2>}` |
| `LOSSunExclusion` | `{Off \| <Value1>}` |
| `LOSLunarExclusion` | `{Off \| <Value1>}` |
| `BSSunExclusion` | `{Off \| <Value1>}` |
| `BSLunarExclusion` | `{Off \| <Value1>}` |

### Communication Constraints

| `ConstraintName` | `Parameters` |
| --- | --- |
| `Frequency` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `RcvdIsotropicPower` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `FluxDensity` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `LinkEIRP` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `DopplerShift` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `C/No` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `PowerAtReceiverInput` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `C/N` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `BitErrorRate` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `LinkMargin` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `Eb/No` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `PolRelAngle` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `G/T` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |
| `SystemNoiseTemperature` | `{Off \| Min <Value1> [\|] Max <Value2>} [ExcludeIntervals \| IncludeIntervals]` |

::: warning Note
When an `AzimuthAngle` value is entered, the maximum and minimum values must be entered together.
:::

## Applies To

Sensor, Transmitter, Satellite, Facility, Missile, LaunchVehicle, Ship, Planet, GroundVehicle, Receiver, Aircraft

## Examples

::: details open **Set the Azimuth Angle Constraint (Exclude Intervals)**
```
SetConstraint */Satellite/Satellite1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Elevation Angle Constraint (Minimum)**
```
SetConstraint */Satellite/Satellite1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Sun Exclusion Angle Constraint**
```
SetConstraint */Satellite/Satellite1 LOSSunExclusion 30
```
:::

::: details open **Set the Frequency Constraint**
```
SetConstraint */Satellite/Satellite1/Transmitter/Transmitter1 Frequency Min 10
```
:::

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */Satellite/Sate1/Sensor/Sen1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Elevation Angle Constraint**
```
SetConstraint */Satellite/Satellite1/Sensor/Sen1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Sun Exclusion Constraint**
```
SetConstraint */Satellite/Sate1/Sensor/Sen1 BSSunExclusion 30
```
:::

::: details open **Set the Azimuth Angle Constraint (Exclude Intervals)**
```
SetConstraint */Satellite/Satellite1/Transmitter/Trans1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Elevation Angle Constraint (Minimum)**
```
SetConstraint */Satellite/Satellite1/Transmitter/Transmitter1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Frequency Constraint**
```
SetConstraint */Satellite/Satellite1/Transmitter/Transmitter1 Frequency Min 10
```
:::

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

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */Facility/Facility1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Elevation Angle Constraint**
```
SetConstraint */Facility/Facility1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Sun Elevation Angle Constraint**
```
SetConstraint */Facility/Facility1 SunElevationAngle Min 10
```
:::

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */Missile/Missile1 AzimuthAngle Min 10 Max 100
```
:::

::: details open **Set the Sun Exclusion Constraint**
```
SetConstraint */Missile/Missile1 LOSSunExclusion 30
```
:::

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */LaunchVehicle/LaunchVehicle1 AzimuthAngle Min 10 Max 100
```
:::

::: details open **Set the Sun Exclusion Angle Constraint**
```
SetConstraint */LaunchVehicle/LaunchVehicle1 LOSSunExclusion 30
```
:::

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */Ship/Ship1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Elevation Angle Constraint**
```
SetConstraint */Ship/Ship1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Sun Elevation Angle Constraint**
```
SetConstraint */Ship/Ship1 SunElevationAngle Min 10
```
:::

::: details open **Set the Planet Line of Sight Constraint**
```
SetConstraint */Planet/Jupiter LineOfSight On
```
:::

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */GroundVehicle/GroVeh1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Elevation Angle Constraint**
```
SetConstraint */GroundVehicle/GroVeh1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Sun Elevation Angle Constraint**
```
SetConstraint */GroundVehicle/GroVeh1 SunElevationAngle Min 10
```
:::

::: details open **Set the Azimuth Angle Constraint (Exclude Intervals)**
```
SetConstraint */Satellite/Satellite1/Receiver/Receiver1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Minimum Elevation Angle Constraint**
```
SetConstraint */Satellite/Sate1/Receiver/Rece1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Minimum Frequency Constraint**
```
SetConstraint */Satellite/Sate1/Receiver/Receiver1 Frequency Min 10
```
:::

::: details open **Set the Azimuth Angle Constraint**
```
SetConstraint */Aircraft/Aircraft1 AzimuthAngle Min 10.0 Max 60.0 ExcludeIntervals
```
:::

::: details open **Set the Elevation Angle Constraint**
```
SetConstraint */Aircraft/Aircraft1 ElevationAngle Min 10.0
```
:::

::: details open **Set the Sun Elevation Angle Constraint**
```
SetConstraint */Aircraft/Aircraft1 SunElevationAngle Min 10
```
:::
