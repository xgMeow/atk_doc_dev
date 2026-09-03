# Exec_Report_RM

## Description

Obtains the data of the specified report type.

## Syntax

```atk-command
Exec_Report_RM <ObjectPath> ({Option} <Value>)...
```

## Parameters

| Parameter | Description |
|------|------|
| `Style "<ReportStyleName>"` | The name of the report style to create; the name must match an existing report name |
| `TimePeriod {TimeInterval}` | Enter the start time and end time; see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md) for the format settings |
| `TimeStep {<Value>}` | Enter the time step used to create the report |
| `AccessObject <AccessObjectPath>` | Specifies the object to compute (not yet implemented) |
| `AdditionalData "<Data>"` | Some reports require additional data |
| `Summary {Include \| Only}` | This report type does not necessarily include an output report. Use this option together with the `Export` option of `Type` to include summary data in the exported report file (this option is only used with the `Export` option of `Type`) |
| `AllLines {On \| Off}` | Entering this option returns a report that includes all headings, spaces, tabs, and blank lines of the report style specified in the command (not yet implemented) |

## Examples

::: details open **Get satellite position report data**

```
Exec_Report_RM */Satellite/Satellite1 Style "Position" TimePeriod "2023-07-29 09:19:01.000" "2023-07-29 10:09:38.000"
```

:::
