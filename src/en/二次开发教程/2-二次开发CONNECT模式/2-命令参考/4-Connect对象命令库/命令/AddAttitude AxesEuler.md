---
groups: [Satellite, Attitude and Pointing]
---

# AddAttitude AxesEuler

## Description

Adds a set of Euler angle attitude data referenced to a specified Axes coordinate system to the object.

## Syntax

```atk-command
AddAttitude <ObjectPath> AxesEuler "<AxesPath>" "<StartTime>" <seqFlag> <Angle1> <Angle2> <Angle3>
```

## Additional Notes

- `<AxesPath>` is the path of the Axes object that the attitude references and must be enclosed in double quotes.
- `<seqFlag>` is the rotation sequence; its meaning is the same as `{Sequence}` in [AddAttitude Euler](./AddAttitude%20Euler.md), and the valid values are 121, 123, 131, 132, 212, 213, 231, 232, 312, 313, 321, 323.
- `<Angle1>`, `<Angle2>`, and `<Angle3>` are the three Euler angles in order.
- The unit of angle values is determined by the current Connect `Angle` unit setting; the default is deg.
- `<StartTime>` format settings: see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md).
- The times entered in the command must be in increasing order.

## Examples

::: details open **Add Euler angle attitude data referenced to a specified Axes**

```
AddAttitude */Satellite/Satellite1 AxesEuler "CentralBody/Earth J2000.Axes" "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```

- `*/Satellite/Satellite1`: full object path
- `AxesEuler`: attitude input format, here Euler angles referenced to a specified Axes
- `"CentralBody/Earth J2000.Axes"`: path of the Axes object that the attitude references
- `"1 Jul 2021 09:00:00.000"`: start time of the attitude data; the string contains spaces and must be enclosed in double quotes
- `321`: rotation sequence
- `30.0 45.0 60.0`: the three Euler angles, 30°, 45°, and 60° respectively

:::
