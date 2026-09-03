# SetState Classical

## Description

Sets the Classical state of the satellite object.

## Syntax

```atk-command
SetState <VehObjectPath> Classical {Propagator} {NoProp | {TimeInterval}} <StepSize> {CoordSystem} "<OrbitEpoch>" <SemiMajorAxis> <Eccentricity> <Inclination> <ArgOfPerigee> <RAAN> <MeanAnom> ["<CoordEpoch>"]
```

## Parameters

::: details Detailed Description (click to expand)

| `Parameters` | Description |
| --- | --- |
| `{Propagator}` | Available values for the satellite: `TwoBody`, `J2Perturbation`, `J4Perturbation`, `HPOP`, and `LOP` |
| `{NoProp \| {TimeInterval}}` | Entering NoProp sets the satellite state without propagation. Entering TimeInterval defines the start and end time period of the satellite propagation; for format settings, see [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `<StepSize>` | Must be greater than or equal to 0.001 seconds. If the LOP propagator is selected, it must be greater than or equal to one day (86164.09 seconds) |
| `{CoordSystem}` | The coordinate system can be set to `ICRF`, `J2000`, `TrueOfDate`, `MeanOfDate`, `TEMEOfDate` |
| `"<OrbitEpoch>"` | See [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `<SemiMajorAxis>` | Enter the semi-major axis parameter |
| `<Eccentricity>` | Enter the eccentricity parameter. The value must be greater than or equal to 0.0 and less than or equal to 1.0 |
| `<Inclination>` | Enter the orbital inclination parameter. The default unit is degrees |
| `<ArgOfPerigee>` | Enter the argument of perigee parameter. The default unit is degrees |
| `<RAAN>` | Enter the right ascension of the ascending node parameter. The default unit is degrees |
| `<MeanAnom>` | Enter the mean anomaly parameter. The default unit is degrees |
| `["<CoordEpoch>"]` | See [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |

:::

::: tip Note
- This command does not accept orbital parameter values smaller than `-180` degrees
- The time setting currently has no effect; the scenario time prevails
:::

## Examples

::: details open **Set the Satellite Classical State**
```
SetState */Satellite/Satellite1 Classical HPOP "1 Nov 2000 00:00:00.00" "1 Nov 2000 04:00:00.00" 60 J2000 "1 Nov 2000 00:00:00.00" 7163000.137079 0.5 98.5 0.0 139.7299 120.0
```
:::
