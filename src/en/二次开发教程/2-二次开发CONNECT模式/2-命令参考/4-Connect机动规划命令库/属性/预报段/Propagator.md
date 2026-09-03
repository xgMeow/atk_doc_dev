# Propagator

## Description

Sets the orbit propagator `Propagator` parameters

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ForceModel.{Parameters} {Value}
```

## Parameters

| Parameter | Description |
| --------------------------------------------- | --------------------------------------------- |
| `Gravity.GravModel` | Gravity field model |
| `Gravity.MaxDegree` | Gravity degree |
| `Gravity.MaxOrder` | Gravity order |
| `Drag.UseDrag` | Whether to use the atmospheric drag perturbation |
| `Drag.AtmModel` | Atmospheric model for the atmospheric drag perturbation |
| `Drag.UseFluxGeoFile` | Whether to use the solar flux and geomagnetic file |
| `Drag.F10p7` | Average F10.7 |
| `Drag.DailyF10p7` | Daily F10.7 |
| `Drag.Ap` | Geomagnetic index AP |
| `SRP.UseSRP` | Whether to use the solar radiation pressure perturbation |
| `ThirdBodies.CentralBodyName.UseGravity` | Whether to use the third-body perturbation of the current central body |
| `ThirdBodies.CentralBodyName.Gm` | Gravitational parameter of the current central body |
| `ThirdBodies.CentralBodyName.Degree` | Degree of the current central body |
| `ThirdBodies.CentralBodyName.Order` | Order of the current central body |
| `ThirdBodies.CentralBodyName.GravModel` | Gravity model of the current central body |
| `ThirdBodies.CentralBodyName.GravType` | Gravity type of the current central body |

## Type Description

Gravity field models:

- For Earth: `EGM96`, `EGM2008`, `GEMT1`, `GGM01C`, `GGM02C`, `JGM2`, `JGM3`, `WGS84`, `WGS84_EGM96`
- For Moon: `GLGM2`, `LP75D`, `LP75G`, `LP100J`, `LP100K`, `LP150Q`, `LP165P`
- For Mars: `GMM1`, `GMM2B`, `Mars50c`, `MRO110C`
- For Mercury: `lcarus1987`, `ZonalsToJ4`
- For Venus: `MGNP180U`, `ZonalsToJ4`
- For Jupiter: `JUP230`, `jup230Spice`, `ZonalsToJ4`
- For Saturn: `Astron2004`, `sat252Spice`, `ZonalsToJ4`
- For Uranus: `ura083Spice`, `ZonalsToJ4`
- For Neptune: `AstronAstro1991`, `nep016_6Spice`, `ZonalsToJ4`
- For Pluto: `plu017Spice`, `ZonalsToJ4`

The corresponding input index starts from 0, for example:

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.ForceModel.Gravity.GravModel EGM96
```

`CentralBodyName` includes: `Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`, `Moon`, `Sun`

## Additional Notes

- Getting this attribute value is not implemented yet

## Examples

::: details open **Set the gravity field model to EGM96**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.ForceModel.Gravity.GravModel EGM96
```
:::
