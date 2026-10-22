---
groups: [Scenario]
---

# Report_RM

## Description

Reads the report data of the specified object. Which columns the report outputs and how they are organized are determined by the report style.

## Prerequisites

- The object to be read must already exist; for example, a satellite must first be created with [New](./New.md).
- If the object has just been created, the Reset command of [Animate](./Animate.md) must be executed first to generate ephemeris data; otherwise the report contains only the header and no data rows can be obtained. See "About Reset" in [Animate](./Animate.md) for details.
- The interval given by TimePeriod must fall within the current scenario interval; see "Valid Range of TimePeriod" below.

## Syntax

```atk-command
Report_RM <ObjectPath> ({Option} <Value>)...
```

## Syntax Description

The command consists of three parts: the command name Report_RM, the path of the object to be read, and a set of options.

In the syntax, `({Option} <Value>)...` means that any number of "option name + value" groups may be given, separated by spaces. Of these, Style and TimePeriod **are mandatory**; the remaining options are selected according to the report type. The groups may be written in any order; for example, writing TimePeriod before Style is equally valid.

## Parameters

| Parameter | Description |
| --- | --- |
| Style | Specifies the report style. The value must match the name of the report style exactly; when the name contains spaces it must be enclosed in double quotes, as in Style "Access Duration". For the available style names, see "Report Types" below. |
| TimePeriod | Specifies the interval to read, giving the start epoch and the end epoch in that order, both enclosed in double quotes. Both epochs must be given together; omitting either one returns NACK. The start epoch must be earlier than the end epoch; reversing them also returns NACK. The interval must fall within the scenario interval; exceeding the boundary returns NACK. For the date-time format, see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md). |
| TimeStep | Specifies the output step size. **It has no effect on satellite reports**: whether or not this parameter is given, and whatever its value, the output sampling interval is always 60 seconds. |
| AccessObject | Specifies the object to compute (this attribute is not included for CoverageDefinition objects). |
| AdditionalData | Some reports require additional data (this attribute is not included for CoverageDefinition objects). |

## Reading 2000-01-01 Data When TimePeriod Is Omitted

**TimePeriod must be given when reading a report.** When it is not given, the report does not fall back to the scenario interval; instead it reads the fixed interval from 2000-01-01 00:00:00 to 2000-01-02 00:00:00, with a sampling interval of 60 seconds and 1441 rows in total.

This default interval is a constant, unrelated to all three of the following:

- **Unrelated to the scenario interval.** With the scenario interval set to the same day of 1999, 2014, 2025, or 2030, the data read when TimePeriod is not given always falls on 2000-01-01.
- **Unrelated to the object's own interval.** With the satellite's own interval changed to 2027 and the change confirmed by reading it back with [GetTimePeriod](./GetTimePeriod.md), the data read when TimePeriod is not given still falls on 2000-01-01.
- **Unrelated to the current simulation time.** With the simulation time advanced beyond the scenario interval using Step of [Animate](./Animate.md), the data read when TimePeriod is not given remains unchanged.

When an interval outside 2000-01-01 needs to be read and TimePeriod is not given in the command, the data obtained does not match expectations at all, yet the command reports no error, so it is easily mistaken for a report that contains no data. A report should always be read with an explicit interval.

## Valid Range of TimePeriod

- Both epochs must fall **within the scenario interval**. Reading exactly the full scenario interval succeeds; moving the start epoch 1 second earlier or the end epoch 1 second later returns NACK.
- When the interval falls within the scenario interval but **outside the object's own interval**, the command reports no error and returns an empty report with only a header and no data rows. In this case, check whether the scenario interval and the object interval agree.

## Report Types

For the style names of object data reports, see the .\AstroData\ReportStyle folder in the installation directory; the file names in it are the report style names. Reports can be output in the rsf file format.

The following categories of report styles are also supported:

1. Visibility reports: Access (visibility report), AER (visible AER report), AER Rate (visibility parameter rate-of-change report), UnAccessible (inaccessibility report), UnAccessible AER (inaccessible AER report), Access Summary (visibility summary report), AER Summary (visible AER summary report), UnAccessible Summary (inaccessibility summary report), Range Rate (visibility range-rate report).
2. Area coverage reports: Access Duration (visible interval report), Gap Duration (invisible interval report), Global Coverage (overall coverage report), Gaps in Global Coverage (overall coverage gaps report), Grid Point Information (grid point information report), Grid Point Visible Assets (grid point visible objects report), Percent Coverage (coverage percentage report), Coverage By Assets (coverage by object report), Coverage By Latitude (coverage by latitude report).
3. The following area coverage reports can be obtained only when the CoverageDefinition object has **child object figures of merit**: Grid Stats Over Time (grid stats over time report), Grid Stats (grid stats report), Percent Satisfied (percentage satisfied report), Satisfied by Time (satisfied by time report), Value By Grid Point At Time (grid point value report at a specified time), Value By Grid Point (grid point value report), Value By Latitude (latitude value report), Value By Longitude (longitude value report).

## Examples

::: details open **Read the satellite position report**

The scenario and the satellite must first be created, and the ephemeris must be generated with Reset of Animate, before the interval to read is specified:

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "6 Mar 2025 00:00:00.000"
New / */Satellite Satellite1
Animate * Reset
Report_RM */Satellite/Satellite1 Style "Position" TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 01:00:00.000"
```

The command above reads one hour of data within the scenario interval, 61 rows in total, with a sampling interval of 60 seconds.

:::

::: details open **Comparison when TimePeriod is omitted**

Continuing the example above, remove TimePeriod and leave everything else unchanged:

```
Report_RM */Satellite/Satellite1 Style "Position"
```

The data read is not that of 2025-03-05 in the example above, but 1441 rows from 2000-01-01 00:00:00 to 2000-01-02 00:00:00. See "Reading 2000-01-01 Data When TimePeriod Is Omitted" above for details.

:::

::: details open **Read the access duration report of the CoverageDefinition**

The style name in the report contains spaces, so it must be enclosed in double quotes:

```
New / */CoverageDefinition CoverageDefinition1
Cov */CoverageDefinition/CoverageDefinition1 Asset */Satellite/Satellite1 Assign
Cov */CoverageDefinition/CoverageDefinition1 Interval "5 Mar 2025 00:00:00.000" "6 Mar 2025 00:00:00.000"
Report_RM */CoverageDefinition/CoverageDefinition1 Style "Access Duration" TimePeriod "5 Mar 2025 00:00:00.000" "6 Mar 2025 00:00:00.000"
```

:::
