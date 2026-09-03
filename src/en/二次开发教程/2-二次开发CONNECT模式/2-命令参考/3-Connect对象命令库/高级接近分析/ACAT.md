# ACAT

## Description

Sets the **Advanced Close Approach Analysis** parameters and computes close approach events.

## Syntax

```atk-command
ACAT <AdvCatObjPath> {CalculateOptions} <Parameters>
```

## Parameters

| Parameter | Description |
| --- | --- |
| `Compute On` | Computes close approach events |
| `TimePeriod {TimeInterval}` | See [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md) for `TimeInterval` |
| `Primary {Parameters}` | Sets the primary target |
| `PrimaryMulti {Parameters}` | Sets multiple primary targets |
| `Secondary {Parameters}` | Sets the secondary target |
| `SecondaryMulti {Parameters}` | Sets multiple secondary targets |
| `Threshold <DistanceValue>` | Sets the threshold |
| `PntToPnt {On \| Off}` | Sets whether to use point-to-point distance measurement |
| `PreFilters {OutOfDate \| ApogeePerigee \| OrbitPath \| Time} {On \| Off \| <Value>}` | Sets whether the pre-filter parameters `{Orbit epoch expiration threshold \| Apogee/perigee threshold \| Orbit path \| Time}` are used, and their values when used |
| `ScaleFactor <ScaleValue>` | Sets the ellipsoid scale factor |
| `SampleStepSize <MaxValue> <MinValue>` | Sets the maximum/minimum sample step size |
| `ConjTcaMode {GlobalOnly \| LocalOnly \| GlobalPlusLocal \| LocalPlusEndPoints}` | Sets the conjunction type `{Global solution \| Local solution \| Global + local solution \| Local + endpoints}` |

### Primary/Secondary `{Parameters}` Values

| Parameter | Description |
| --- | --- |
| `Add "<ObjPath>" \| "<ObjFileName>" [{AdditionalParams}]` | Adds a target to the list |
| `Remove "<ObjPath>" \| "<ObjFileName>"` | Removes a target from the list |
| `RemoveAll` | Removes all targets from the list |

### PrimaryMulti/SecondaryMulti `{Parameters}` Values

| Parameter | Description |
| --- | --- |
| `Add "<ObjPath>" [{AdditionalParams}]` | Adds a target to the list |
| `Remove "<ObjPath>"` | Removes a target from the list |

### Add `[{AdditionalParams}]` Values

| Parameter | Description |
| --- | --- |
| `{Class}` | Sets the target class; currently includes Fixed |
| `<Tangential> <CrossTrack> <Normal>` | Sets the target tangential, radial, and normal offsets |
| `HardBodyRadius <RadiusValue>` | Sets the target hard body radius |

## Examples

::: details open **Set the Advanced Close Approach Analysis parameters**
```
ACAT */AdvCat/AdvCat1 Threshold 50000 
ACAT */AdvCat/AdvCat1 PntToPnt On
ACAT */AdvCat/AdvCat1 Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2 Satellite/Satellite3 Satellite/Satellite4" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 Secondary  Add "E:\AstroData\atkAllTLE.tce" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 SecondaryMulti Add "Satellite/Satellite6 Satellite/Satellite7 Satellite/Satellite8" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 TimePeriod "14 Nov 2030 08:00:00.000" "15 Nov 2030 08:00:00.000"
ACAT */AdvCat/AdvCat1 Compute On
```
:::
