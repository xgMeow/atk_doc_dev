---
groups: [Satellite, Attitude and Pointing]
---

# AddAttitude AxesQUAT

## Description

Adds a set of quaternion attitude data referenced to a specified Axes coordinate system to the object.

## Syntax

```atk-command
AddAttitude <ObjectPath> AxesQUAT "<AxesPath>" "<StartTime>" <Qx> <Qy> <Qz> <Qs>
```

## Additional Notes

- `<AxesPath>` is the path of the Axes object that the attitude references and must be enclosed in double quotes.
- `<Qx>`, `<Qy>`, and `<Qz>` set qx, qy, and qz; `<Qs>` sets qs.
- `<StartTime>` format settings: see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md).
- The times entered in the command must be in increasing order.

## Examples

::: details open **Add quaternion attitude data referenced to a specified Axes**

```
AddAttitude */Satellite/Satellite1 AxesQUAT "CentralBody/Earth J2000.Axes" "1 Jul 2021 09:00:00.000" 0.382683 0.0 0.0 0.923880
```

- `*/Satellite/Satellite1`: full object path
- `AxesQUAT`: attitude input format, here a quaternion referenced to a specified Axes
- `"CentralBody/Earth J2000.Axes"`: path of the Axes object that the attitude references
- `"1 Jul 2021 09:00:00.000"`: start time of the attitude data; the string contains spaces and must be enclosed in double quotes
- `0.382683 0.0 0.0 0.923880`: qx, qy, qz, and qs of the quaternion; this set of values corresponds to a rotation of 45° about the X axis

:::
