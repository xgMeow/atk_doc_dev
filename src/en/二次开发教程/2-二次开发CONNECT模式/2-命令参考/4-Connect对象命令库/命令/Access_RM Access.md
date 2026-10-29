---
groups: [Access]
---

# Access_RM Access

## Description

Obtains the visibility report of the **current access**, uses the `ReportStyle` parameter to specify the report style, and outputs one of nine formats, such as the visibility report, the line-of-sight (AER) report, the parameter rate report and the statistical summary.

The command only generates a report; it neither creates nor modifies objects in the scenario. The object pair addressed by the report is determined by the "current access", see "About the Current Access" below.

## Prerequisites

- **Access must be computed first.** This command cannot specify the two objects involved in the computation itself; the report targets the "current access" in the scenario, that is, the object pair most recently computed by [Access](./Access.md). When no object pair has been computed yet, the command returns NACK.

- **The object path must point to the first object of the current access.** When it points to the second object of the pair, the command returns NACK.

- The access result is based on the ephemeris data of the objects, so Reset of [Animate](./Animate.md) must be executed first; see "Prerequisites" in [Access](./Access.md).

## Syntax

```atk-command
Access_RM <ObjectPath> Access Compute "<ReportStyle>" [{<StartTime> <StopTime> | UseObjectTimes}]
```

## Syntax Description

This command consists of four parts: the command name Access_RM, **one object path**, **the keyword pair Access Compute**, **one report style**, and **an optional time period parameter block**.

| Part | Meaning |
| --- | --- |
| Access_RM | Command name. |
| `<ObjectPath>` | Path of the first object of the current access. |
| Access Compute | Fixed keyword pair, which must be given as a pair; when only one of the two is written, the command returns NACK. |
| `<ReportStyle>` | Report style, whose values are listed in "Report Styles" below. |
| Time period parameter block | Optional. When given, it is either two date times or UseObjectTimes; see "Time Period Block" below. |

Neither the command name nor the keywords are case-sensitive; see [Command Syntax Conventions](../../1-命令语法约定.md).

**The time period is written differently from the Access command.** The time period of Access must be preceded by the TimePeriod keyword; this command **does not accept** the TimePeriod keyword, and `Access Compute "Access" TimePeriod "..." "..."` returns NACK. Give the start epoch and the end epoch directly, one after the other.

Fill in the object path in the usual way described in [Command Syntax Conventions](../../1-命令语法约定.md): either the full path `*/Satellite/Satellite1` or the truncated path `Satellite/Satellite1`. The object type and name **are case-sensitive**: `*/satellite/Satellite1` returns NACK; a path that points to a nonexistent object returns NACK; the path of the access object itself (`*/ObjectAccess/...`) likewise returns NACK.

### Time Period Block

The two forms below are alternatives; the whole block may also be omitted.

**Two date times.** Give the **start epoch** and the **end epoch** in order; for the format see [Date/Time Format](../../2-参数值格式/日期时间格式.md). Both date times must be enclosed in double quotes; when they are not quoted, when only one of them is given, or when the content cannot be parsed as a valid date/time, the command returns NACK.

**UseObjectTimes.** No explicit date times are given; the object's own time period is used instead.

- **The two epochs cannot be given in reverse order**; the start epoch must come first, followed by the end epoch.
- The report is generated **within the intersection of the given time period and the scenario analysis time period**; the part of the given period outside the scenario analysis period does not participate in the computation. When the given period and the scenario analysis period **do not intersect at all, the command returns NACK**.
- Each visibility interval is **truncated** at that period: when a visibility interval crosses a period boundary, the start epoch or the end epoch of that interval in the report takes the boundary value.
- When there is no visibility interval within the period, or when the two epochs are identical, the report body is "No analysis data!", and the command does **not** return NACK.
- The time period parameter block may be omitted entirely. When it is omitted, the time period is not restricted and the report covers the entire scenario analysis period, which yields the same result as giving UseObjectTimes.

**The time period used by the report is determined by the time period parameter block of this command and is independent of the time period used by the preceding Access command.** For example, the scenario analysis time period is 00:00—06:00; compute the access with 00:00—03:00 first (no visibility interval within it), which gives "No analysis data!"; afterwards, execute this command without a time period, and the complete report covering the entire scenario analysis period with all visibility intervals is still returned.

### Report Styles

The values of `<ReportStyle>` are listed below. Style names are case-insensitive: `Access`, `access` and `aCcEsS` are equivalent. In practice the style name is usually enclosed in double quotes.

| Report style | Report title |
| --- | --- |
| Access | Visibility report |
| AER | Line-of-sight parameter report |
| AER Rate | Line-of-sight parameter rate report |
| UnAccessible | Non-visibility report |
| UnAccessible AER | Non-visibility line-of-sight parameter report |
| Access Summary | Visibility summary report |
| AER Summary | Line-of-sight parameter summary report |
| UnAccessible Summary | Non-visibility summary report |
| Range Rate | Range rate report |

When the style name is anything other than the values in the table above, the command **does not return NACK**; instead, it returns one line of text of the form:

```
/Scenario/Demo/Satellite/Satellite1 No Coverage Report
```

The leading part is the full path of the object indicated by `<ObjectPath>`, and the end is always No Coverage Report. A misspelled style name must be identified from this output.

## Output

Access_RM **has a return value**, which is the report text itself.

The first line of the report is the title, in the form `<report title> of <first object name> to <second object name>`; the report title is given in the table above, and an object name is the last segment of its path. The next line repeats that object pair and is followed by a separator line. The bodies of the various styles are composed as follows.

| Report style | Body |
| --- | --- |
| Access, UnAccessible | An interval table whose columns are index, start epoch (UTCG), end epoch (UTCG) and duration (s); the global statistics are given afterwards |
| Access Summary, UnAccessible Summary | No interval table; only the global statistics, in which the two rows Minimum and Maximum give the start and end epochs and the duration of the corresponding interval |
| AER, UnAccessible AER | Time (UTCG), relative time (s), azimuth (deg), elevation (deg) and range (m) listed point by point; after each interval the extremes and the mean of the elevation and range for that interval are given, and the global statistics come last |
| AER Rate | Azimuth rate (deg/s), elevation rate (deg/s), range rate (m/s) and angular rate (deg/s) listed point by point, with the extremes, the means and the global statistics |
| Range Rate | Time, relative time and range rate (m/s) listed point by point, with the extremes, the means and the global statistics |
| AER Summary | No point-by-point table; only the extremes and the means of the elevation and range, together with the global statistics |

Take the Access style as an example:

```
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

The example above returns the following report:

```
Satellite1对Facility1的可见性报告
Satellite1对Facility1
----------------------
                               序号             开始历元(UTCG)             结束历元(UTCG)       时长(s)
                         ----------    -----------------------    -----------------------    ----------
                                  1    2025-03-05 03:22:18.387    2025-03-05 03:31:53.562       575.175
                                  2    2025-03-05 04:56:06.578    2025-03-05 05:09:08.946       782.368
全局统计结果
------------------
    最小可见时长(s)               1    2025-03-05 03:22:18.387    2025-03-05 03:31:53.562       575.175
    最大可见时长(s)               2    2025-03-05 04:56:06.578    2025-03-05 05:09:08.946       782.368
    平均可见时长(s)                                                                             678.772
    平均不可见时长(s)                                                                          6747.486
    总可见时长(s)                                                                              1357.543
```

When there is no visibility interval within the time period, or when the two epochs are identical, the report body is "No analysis data!", with neither an interval table nor statistics:

```
Satellite1对Facility1的可见性报告
Satellite1对Facility1
----------------------
无分析数据！
```

**In this case the command does not return NACK**; the result is reflected only in the report body.

## About the Current Access

**The "current access" is globally unique: it refers to the object pair most recently and successfully computed by [Access](./Access.md) in the scenario.** The `<ObjectPath>` of this command must be identical to the first object of that pair.

- Once a pair of objects has been computed, it can be read repeatedly with its first object as the `<ObjectPath>`, and the result is stable.
- **As soon as another pair of objects has been computed, the previous pair is no longer the "current access"**: reading with the previous object as the `<ObjectPath>` then returns NACK, even though that object and its access object still exist in the scenario. Reading with the first object of the new pair returns normally.
- **Recomputing the original pair makes it the "current access" again**, and it can be read once more.
- **A failed read does not change the "current access"**: after a read returns NACK, retrying with the correct object path still succeeds.

Therefore, **execute the Access computation first and this command immediately afterwards to read the report**, without inserting any other access computation between the two commands; if several object pairs have been computed in the scenario, recompute the target pair before reading.

## Additional Notes

- **This command does not change the scenario content.** The list of objects in the scenario is the same before and after execution: no access object is added and no existing access is modified.
- **This command reads the report of a single object pair at a time.** To generate reports for several pairs at once, use the AccessMulti family of commands; see [AccessMulti Access](./AccessMulti%20Access.md).
- **Division of labor between this command and Access**: [Access](./Access.md) always outputs the visibility report; when the remaining styles, such as AER, the parameter rate, the non-visibility reports and the statistical summaries, are required, use this command.

## Examples

::: details open **Create a scenario, compute the access and read the visibility report**

A scenario and the objects must be created first; execute Reset to generate the ephemeris, and then compute the access:

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
New / */Satellite Satellite1
SetState */Satellite/Satellite1 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7000000.0 0.001 98.0 0.0 0.0 0.0
New / */Satellite Satellite2
SetState */Satellite/Satellite2 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7100000.0 0.001 98.0 0.0 0.0 0.0
New / */Facility Facility1
SetPosition */Facility/Facility1 Geodetic 40.0 116.0 0.0
Animate * Reset
Access */Satellite/Satellite1 */Facility/Facility1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

The time step and orbit parameters in the example above are illustrative only; set them according to the scenario in actual use.

:::

::: details open **Omit the time period parameter block**

Without a time period, the report covers the entire scenario analysis period:

```
Access_RM */Satellite/Satellite1 Access Compute "Access"
```

It may also be written as `Access_RM */Satellite/Satellite1 Access Compute "Access" UseObjectTimes`; both forms yield the same result.

:::

::: details open **Read the line-of-sight parameter (AER) report**

The access must be computed as in the example above before the report is read:

```
Access_RM */Satellite/Satellite1 Access Compute "AER" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

:::

::: details open **Read the non-visibility summary report**

```
Access_RM */Satellite/Satellite1 Access Compute "UnAccessible Summary" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

:::

::: details open **No visibility interval within the time period**

```
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 03:00:00.000"
```

The report body is "No analysis data!".

:::

::: details open **Common forms that return NACK**

```
Access_RM */Facility/Facility1 Access Compute "Access"
Access_RM */Satellite/Satellite1 Access Compute "Access" TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Access_RM */Satellite/Satellite1 Access Compute "Access" "5 Mar 2025 00:00:00.000"
Access_RM */Satellite/Satellite1 Compute "Access"
```

The four commands correspond, in order, to: using the **second object** of the current access as the object path, the **TimePeriod keyword not being accepted**, only one epoch being given, and the Access keyword being missing.

:::
