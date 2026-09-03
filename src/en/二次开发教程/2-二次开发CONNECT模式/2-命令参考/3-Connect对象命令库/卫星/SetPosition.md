# SetPosition

## Description

Sets the position points of an object in RealTime mode.

## Syntax

```atk-command
SetPosition <ObjectPath> {PositionType} {TimeValue} <PositionData>
```

::: tip Note
This command cannot be used to modify object data; it is only used to add position points
:::

## Parameters

`{TimeValue}`: see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md)

| `{PositionType}` | `<PositionData>` | Description |
| --- | --- | --- |
| `ECF` | `<x> <y> <z> [<vx> <vy> <vz>]` | Earth-fixed position and velocity; the velocity defaults to 0 |
| `ECI` | `<x> <y> <z> [<vx> <vy> <vz>]` | Earth-inertial (J2000) position and velocity; the velocity defaults to 0 |
| `LLA` | `<Lat> <Lon> <Alt> [<LatRate> <LonRate> <AltRate>]` | Latitude, longitude, and altitude; 0 on the Earth's surface |
| `"<TruncObjectPath> <CrdnName>"` | `<x> <y> <z> [<vx> <vy> <vz>]` | Position and velocity in an object coordinate system, e.g. "CentralBody/Earth J2000" |

## Examples

::: details open **Set Object Position Points in RealTime Mode**
```
SetPosition */Satellite/Satellite1 ECI "1 Jul 2021 09:00:00.000"  8678140.000000 0.000064 -1.837743 0.000781 6789.530412 3686.41396 
```
:::
