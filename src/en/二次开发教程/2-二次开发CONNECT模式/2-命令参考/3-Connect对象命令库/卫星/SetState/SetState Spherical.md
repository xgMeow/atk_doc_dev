# SetState Spherical

## Description

Sets the Spherical state of the satellite object.

## Syntax

```atk-command
SetState <VehObjectPath> Spherical {Propagator} {NoProp | {TimeInterval}} <StepSize> {CoordSystem} "<OrbitEpoch>" <RightAscension> <Declination> <Radius> <HorizontalFlightPathAngle> <FlightPathAzimuth> <Velocity> ["<CoordEpoch>"]
```

## Parameters

::: details Detailed Description (click to expand)

| `Parameter` | Description |
| --- | --- |
| `{Propagator}` | Available values for the satellite: `TwoBody`, `J2Perturbation`, `J4Perturbation`, `HPOP`, and `LOP` |
| `{NoProp \| {TimeInterval}}` | Entering NoProp sets the satellite state without propagation. Entering TimeInterval defines the start and end time period of the satellite propagation; for format settings, see [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `<StepSize>` | Must be greater than or equal to 0.001 seconds. If the LOP propagator is selected, it must be greater than or equal to one day (86164.09 seconds) |
| `{CoordSystem}` | The coordinate system can be set to `ICRF`, `J2000`, `Fixed`, `TrueOfDate`, `MeanOfDate`, `TEMEOfDate` |
| `"<OrbitEpoch>"` | See [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `<RightAscension>` | Enter the right ascension parameter. The default unit is degrees |
| `<Declination>` | Enter the declination parameter. The default unit is degrees |
| `<Radius>` | Enter the radius parameter. The default unit is meters |
| `<HorizontalFlightPathAngle>` | Enter the horizontal flight path angle parameter. The default unit is degrees |
| `<FlightPathAzimuth>` | Enter the flight path azimuth parameter. The default unit is degrees |
| `<Velocity>` | Enter the velocity parameter. The default unit is m/sec |
| `["<CoordEpoch>"]` | See [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |

:::

## Examples

::: details open **Set the Satellite Spherical State**
```
SetState */Satellite/Satellite1 Spherical TwoBody "1 Jul 2005 12:00:00.00" "1 Jul 2005 12:00:00.00" 60.0 J2000 "1 Jul 2005 12:00:00.00" 0 0 6678137 0 61.5 7725.7
```
:::
