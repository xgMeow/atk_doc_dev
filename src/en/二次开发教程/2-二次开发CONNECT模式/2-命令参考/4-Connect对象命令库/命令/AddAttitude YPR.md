---
groups: [Satellite, Attitude and Pointing]
---

# AddAttitude YPR

## Description

Adds a set of CBI VVLH YPR attitude data to the object.

## Syntax

```atk-command
AddAttitude <ObjectPath> YPR {StartTime} {Sequence} <Yaw> <Pitch> <Roll>
```

## Additional Notes

- `{Sequence}` valid values are 121, 123, 131, 132, 212, 213, 231, 232, 312, 313, 321, 323
- Angle values are entered in the current Connect `Angle` unit, which defaults to deg
- `{StartTime}` format settings: see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md)
- The times entered in the command must be in increasing order

## Examples

::: details open **Add CBI VVLH YPR Attitude Data**
```
AddAttitude */Satellite/Satellite1 YPR "1 Nov 2000 04:01:00.00" 321 15.0 30.0 45.0
```
:::
