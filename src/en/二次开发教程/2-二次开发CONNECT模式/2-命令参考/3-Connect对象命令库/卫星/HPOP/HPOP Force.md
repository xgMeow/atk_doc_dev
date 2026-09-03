# HPOP Force

## Description

Sets the Earth gravity, solar radiation pressure, and third-body gravity of the force model.

## Syntax

```atk-command
HPOP <ObjectPath> Force {ForceModel} <ModelParameters>
```

## Parameters

::: details ForceModel Parameter Description (click to expand)

| `ForceModel` | `ModelParameters` | Description |
| --- | --- | --- |
| `SRP` | `{On \| Off} Model Spherical <Cr> <AMRatio>` | If Off is entered, Options are not set. If On is entered, Options should include the solar radiation pressure and the solar radiation pressure area. |
| `Gravity` | `"<FilePath>" <MaxDegreeValue> <MaxOrderValue>` | The input values of `<MaxDegreeValue>` and `<MaxOrderValue>` range from 0 to 100.0. In addition, the input values must be smaller than the maximum degree and maximum order of the selected file. |
| `ThirdBodyGravity` | `<ThirdBodyGravityName> <ThirdBodyGravityUse> {PointMass \| GravField <Model>} <Order> <Degree> <GravityValue>` | For details of `GravField <Model>`, see the type description below |

:::

::: note Type Description

Third-body gravity models:

For the Earth: EGM96, EGM2008, GEMT1, GGM01C, GGM02C, JGM2, JGM3, WGS84, WGS84_EGM96

For the Moon: GLGM2, LP75D, LP75G, LP100J, LP100K, LP150Q, LP165P

For Mars: GMM1, GMM2B, Mars50c, MRO110C

For Mercury: lcarus1987, ZonalsToJ4

For Venus: MGNP180U, ZonalsToJ4

For Jupiter: JUP230, jup230Spice, ZonalsToJ4

For Saturn: Astron2004, sat252Spice, ZonalsToJ4

For Uranus: ura083Spice, ZonalsToJ4

For Neptune: AstronAstro1991, nep016_6Spice, ZonalsToJ4

For Pluto: plu017Spice, ZonalsToJ4

`ThirdBodyGravityName` includes: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Moon, Sun
:::

::: tip
When using this command, make sure the orbit propagator type is HPOP
:::

## Examples

::: details open **Set the Solar Radiation Pressure Force Model**
```
HPOP */Satellite/Satellite1 Force SRP On Model Spherical 3.2 221.0
```
:::

::: details open **Set the Earth Gravity Force Model**
```
HPOP */Satellite/Satellite1 Force Gravity "EGM96" 2.3 1.2
```
:::

::: details open **Set the Third-Body Gravity Force Model**
```
HPOP */Satellite/Satellite1 Force ThirdBodyGravity Mars on GravField GMM2B 5 6 42828371901284
```
:::
