# SetState Cartesian

## Description

Sets the Cartesian state of the satellite object.

## Syntax

```atk-command
SetState <VehObjectPath> Cartesian {Propagator} {NoProp | {TimeInterval}} <StepSize> {CoordSystem} "<OrbitEpoch>" <X> <Y> <Z> <vX> <vY> <vZ> ["<CoordEpoch>"]
```

## Parameters

::: details Detailed Description (click to expand)

| `Parameters` | Description |
| --- | --- |
| `{Propagator}` | Available values for the satellite: `TwoBody`, `J2Perturbation`, `J4Perturbation`, `HPOP`, and `LOP` |
| `{NoProp \| {TimeInterval}}` | Entering NoProp sets the satellite state without propagation. Entering TimeInterval defines the start and end time period of the satellite propagation; for format settings, see [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `<StepSize>` | Must be greater than or equal to 0.001 seconds |
| `{CoordSystem}` | The coordinate system can be set to `ICRF`, `J2000`, `Fixed`, `TrueOfDate`, `MeanOfDate`, `TEMEOfDate` |
| `"<OrbitEpoch>"` | See [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `<X>`, `<Y>`, `<Z>`, `<vX>`, `<vY>`, `<vZ>` | Enter the position and velocity parameters |
| `["<CoordEpoch>"]` | See [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |

:::

## Additional Notes

- The time setting currently has no effect; the scenario time prevails

## Examples

::: details open **Set the Satellite Cartesian State**
```
SetState */Satellite/Satellite1 Cartesian J4Perturbation "1 Nov 2000 00:00:00.00" "1 Nov 2000 08:00:00.00" 60 J2000 "1 Nov 2000 00:00:00.00" -986500 -42152457.0 364.8 3073.7 -0071.9 -0014.9
```
:::
