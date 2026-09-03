# ReportCreate

## Description

Creates a report.

## Syntax

```atk-command
ReportCreate <ObjectPath> ({Option} <Value>)...
```

## Parameters

| Parameter | Description |
|------|------|
| `Style "<ReportStyleName>"` | The name of the report style to create; the name must match an existing report name |
| `Type {Display \| Save \| Export}` | The type of report to create. Enter `Display` to display the detailed report; enter `Save` to save the report to a file; enter `Export` to save the report to a file. Not yet implemented |
| `File "<FilePath>"` | Enter the name of the file to create; `Type` must be set to `Save` or `Export` |
| `TimePeriod {TimeInterval}` | Enter the start time and end time; see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md) for the format settings |
| `TimeStep {<Value>}` | Enter the time step used to create the report |
| `AccessObject <AccessObjectPath>` | Specifies the object to compute (not yet implemented) |
| `AdditionalData "<Data>"` | Some reports require additional data |
| `Summary {Include \| Only}` | This report type does not necessarily include an output report. Use this option together with the `Export` option of `Type` to include summary data in the exported report file (this option is only used with the `Export` option of `Type`) |

## Examples

::: details open **Create a position report and save it to a file**

```
ReportCreate */Satellite/Satellite1 Style "Position" File "linshi.rsf" TimePeriod "2023-07-29 09:19:01.000" "2023-07-29 10:09:38.000"
```

:::
