---
groups: [Satellite]
---

# GetConstraint

## Description

Gets the three-body avoidance angle of a satellite relative to the central body and a reference satellite at the specified epoch.

## Syntax

```atk-command
GetConstraint <ObjectPath> <CentralBodyName> <ReferenceSatPath> {TimeValue}
```

## Additional Notes

The following table describes the command parameters.

| Parameter | Description |
|------|------|
| `<ObjectPath>` | Full path of the satellite object to query, written out from the scenario `*` |
| `<CentralBodyName>` | Name of the central body. Valid values are `Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`, `Moon` and `Sun`, consistent with the body names in [Planet central body definitions](./Define%20行星.md) |
| `<ReferenceSatPath>` | Path of the reference satellite, given only as a truncated path without the scenario prefix `*/` |
| `{TimeValue}` | Query epoch, entered as an absolute date and time |

Notes:

- The first object path `<ObjectPath>` is a **full path** and must be written out from the scenario `*`; the following `<ReferenceSatPath>` is a **truncated path** and **must not carry the scenario prefix `*/`**, for example `Satellite/SatB`. For the difference between the two, see [Command syntax conventions](../../1-命令语法约定.md).
- `{TimeValue}` contains spaces and must be enclosed in double quotes. For the input format, see [Date/Time formats](../../2-参数值格式/日期时间格式.md).

## Examples

::: details open **Get the three-body avoidance angle at the specified epoch**

```
GetConstraint */Satellite/SatA Earth Satellite/SatB "1 Jul 2025 12:00:00.000"
```

- `*/Satellite/SatA`: full path of the satellite to query
- `Earth`: name of the central body
- `Satellite/SatB`: path of the reference satellite, a truncated path without the scenario prefix
- `"1 Jul 2025 12:00:00.000"`: query epoch; the string contains spaces and must be enclosed in double quotes

:::
