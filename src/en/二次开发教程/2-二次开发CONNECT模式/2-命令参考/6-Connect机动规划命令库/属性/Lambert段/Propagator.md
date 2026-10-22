# Propagator

## Description

Set the orbit propagator parameters.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ForceModel.{Parameters} {Value}
```

## Parameters

| Parameter | Value | Description |
| ---- | ---- | ---- |
| `Gravity.GravModel` | See the type description below | Gravity field model |
| `Gravity.MaxDegree` | | Gravity degree |
| `Gravity.MaxOrder` | | Gravity order |
| `Drag.UseDrag` | {true \| false} | Whether to use atmospheric drag perturbation |
| `Drag.AtmModel` | | Atmospheric model for the atmospheric drag perturbation |
| `Drag.UseFluxGeoFile` | | Whether to use solar radiation and geomagnetic files |
| `Drag.F10p7` | | Average F10.7 |
| `Drag.DailyF10p7` | | Daily F10.7 |
| `Drag.Ap` | | Geomagnetic index AP |
| `SRP.UseSRP` | | Whether to use solar radiation pressure perturbation |
| `ThirdBodies.CentralBodyName.UseGravity` | | Whether to use the third-body perturbation of the current central body |
| `ThirdBodies.CentralBodyName.Gm` | | Gm value of the current central body |
| `ThirdBodies.CentralBodyName.Degree` | | Degree of the current central body |
| `ThirdBodies.CentralBodyName.Order` | | Order of the current central body |
| `ThirdBodies.CentralBodyName.GravModel` | | Gravity model of the current central body |
| `ThirdBodies.CentralBodyName.GravType` | | Gravity type of the current central body |

::: note Type Description
<br>
Gravity field model : <br><br>
For Earth EGM96,EGM2008,GEMT1,GGM01C,GGM02C,JGM2,JGM3,WGS84,WGS84_EGM96<br><br>
For the Moon GLGM2,LP75D,LP75G,LP100J,LP100K,LP150Q ,LP165P <br><br>
For Mars GMM1,GMM2B,Mars50c,MRO110C <br><br>
For Mercury lcarus1987,ZonalsToJ4 <br><br>
For Venus MGNP180U,ZonalsToJ4 <br><br>
For Jupiter JUP230,jup230Spice,ZonalsToJ4 <br><br>
For Saturn Astron2004,sat252Spice,ZonalsToJ4 <br><br>
For Uranus ura083Spice,ZonalsToJ4 <br><br>
For Neptune AstronAstro1991,nep016_6Spice,ZonalsToJ4 <br><br>
For Pluto plu017Spice,ZonalsToJ4 <br><br>
Enter the corresponding index, starting from 0, for example:
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.ForceModel.Gravity.GravModel EGM96
```
<br><br>CentralBodyName includes: Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune,Pluto,Moon,Sun
:::

::: note Note:
Getting this attribute value is not implemented yet.
:::

## Examples

::: details open **Set the gravity field model to EGM96**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.LambertTarget.ForceModel.Gravity.GravModel EGM96
```
:::
