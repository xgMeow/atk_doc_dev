# Report_RM

## Description

Obtains the data of the specified report type (including coverage definition objects).

## Syntax

```atk-command
Report_RM <ObjectPath> ({Option} <Value>)...
```

## Parameters

| Parameter | Description |
|------|------|
| `Style "<ReportStyleName>"` | The name of the report style to obtain; the name must match an existing report name |
| `TimePeriod {TimeInterval}` | Enter the start time and end time; see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md) for the format settings |
| `TimeStep {<Value>}` | Enter the time step used to create the report |
| `AccessObject <AccessObjectPath>` | Specifies the object to compute (this attribute is not included for coverage definition objects) |
| `AdditionalData "<Data>"` | Some reports require additional data (this attribute is not included for coverage definition objects) |

## Report Types

1. For object data report types, see the `.\AstroData\ReportStyle` folder in the installation directory; the file name is the report name.
2. The following visibility reports are supported: `Access` - visibility report, `AER` - visible AER report, `AER Rate` - visibility parameter rate-of-change report, `UnAccessible` - inaccessibility report, `UnAccessible AER` - inaccessible AER report, `Access Summary` - visibility summary report, `AER Aummary` - visible AER summary report, `UnAccessible Summary` - inaccessibility summary report, `Range Rate` - visibility range-rate report.
3. The following area coverage reports are supported: `Access Duration` - visible interval report, `Gap Duration` - invisible interval report, `Global Coverage` - overall coverage report, `Gaps in Global Coverage` - overall coverage gaps report, `Grid Point Information aer` - grid point information report, `Grid Point Visible Assets` - grid point visible objects report, `Percent Coverage` - coverage percentage report, `Coverage By Assets` - coverage by object report, `Coverage By Latitude` - coverage by latitude report, `Grid Stats Over Time` - grid stats over time report, `Grid Stats` - grid stats report, `Percent Satisfied` - percentage satisfied report, `Satisfied by Time` - satisfied by time report, `Value By Grid Point At Time` - grid point value report at a specified time, `Value By Grid Point` - grid point value report, `Value By Latitude` - latitude value report, `Value By Longitude` - longitude value report.

## Examples

::: details open **Get the satellite position report**

```
Report_RM */Satellite/Satellite1 Style "Position" TimePeriod "2023-07-29 09:19:01.000" "2023-07-29 10:09:38.000"
```

:::

::: details open **Get the access duration report of the coverage definition**

```
Report_RM */CoverageDefinition/CoverageDefinition1 Style "Access Duration"  TimePeriod "9 Apr 2025 04:00:00.000" "10 Apr 2025 04:00:00.000"
```

:::
