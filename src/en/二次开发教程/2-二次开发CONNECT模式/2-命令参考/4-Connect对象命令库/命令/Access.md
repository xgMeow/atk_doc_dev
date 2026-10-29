---
groups: [Access]
---

# Access

## Description

Computes the visibility between two objects and returns the result as a **visibility report**.

The command does not change the parameters of the objects involved in the computation, but for every pair of objects computed it generates an Access object in the scenario; see "About the Access Objects Generated in the Scenario" below.

## Prerequisites

- **Both objects involved in the computation must already exist** and must first be created with [New](./New.md) (for example, satellites and ground facilities). When an object path points to a nonexistent object, the command returns NACK.

- **The two objects must be different from each other.** When the same object is given as both parameters, the command returns NACK.

- Satellites and other objects involved in the computation must have ephemeris data generated, so the Reset of [Animate](./Animate.md) must be executed first:

    ```
    Animate * Reset
    ```

    Immediately after an object is created, its ephemeris data has not yet been generated. When this command is sent without a prior Reset, the report body contains only "No analysis data!". See "About Reset" in [Animate](./Animate.md).

## Syntax

```atk-command
Access <ObjectPath> <AccessObjectPath> {TimePeriod <StartTime> <StopTime> | UseObjectTimes}
```

## Syntax Description

The command consists of three parts: the command name Access, **two object paths**, and **a time interval parameter block**.

| Part | Meaning |
| --- | --- |
| Access | Command name. |
| `<ObjectPath>` | Path of the first object involved in the computation. |
| `<AccessObjectPath>` | Path of the second object involved in the computation. |
| Time interval parameter block | Specifies the time interval used for the computation; choose exactly one of the two: `TimePeriod <StartTime> <StopTime>` or UseObjectTimes. See "Time Interval Parameter Block" below. |

**The order of the two object paths matters.** The report takes the first object as its start and the second object as its end; when the order is reversed, the report title and all the values change accordingly.

**The time interval parameter block cannot be omitted.** Writing only the command name and the two object paths makes the command return NACK.

Object paths follow the usual notation of [Command Syntax Conventions](../../1-命令语法约定.md): write the first path in full and the paths after it truncated, as in `*/Satellite/Satellite1 Satellite/Satellite2`; writing both paths in full works equally well. Object types and names are **case-sensitive**; writing `*/satellite/Satellite1` returns NACK.

For the meanings of the angle brackets, braces, vertical bars, double quotes and other symbols used in the syntax, see [Command Syntax Conventions](../../1-命令语法约定.md).

## Time Interval Parameter Block

### TimePeriod

Give the **start epoch** and then the **end epoch** as two date-times; for the format, see [Date/Time Formats](../../2-参数值格式/日期时间格式.md). Both date-times must be enclosed in double quotes; when they are not quoted, when the content cannot be parsed as a valid date-time, or when only one of them is given, the command returns NACK.

- **The two epochs cannot be given in reverse order**; the start epoch must come first, followed by the end epoch.
- The given interval must lie **within the scenario analysis period**.
- Visibility intervals are **truncated** to the given interval. When a visibility interval crosses the boundary of the given interval, the report takes the boundary value of the interval as the start epoch or end epoch of that interval.
- When several visibility intervals occur within the given interval, the report lists them one by one, with the index increasing from 1.
- When the two epochs are identical, or when the two objects are never visible to each other within the given interval, the report body is "No analysis data!".

### UseObjectTimes

Gives no explicit time interval and uses the time intervals of the objects involved in the computation instead.

**This command recognizes only the TimePeriod keyword.** Writing any other word in the time interval parameter block raises no error and is always handled as "use the objects' own time intervals": for example, writing UseObjectTimes as UseObjectTime still returns a result. The correct spelling of the keyword must therefore be ensured by the caller.

## Output

Access **has a return value**, which is the visibility report text itself. The report consists of the following three parts:

1. **Title**, formatted as the visibility report from the first object name to the second object name, where the object name is the last segment of its path; the next line repeats the object pair and is followed by a separator line.
2. **Visibility interval table**, with the columns index, start epoch (UTCG), end epoch (UTCG) and duration (s).
3. **Global statistics**, giving the minimum visibility duration, the maximum visibility duration, the mean visibility duration, the mean non-visibility duration and the total visibility duration.

```
Access */Satellite/Satellite1 */Facility/Facility1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
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

When the two objects are never visible to each other within the given interval, the report body is "No analysis data!", with neither a visibility interval table nor statistics:

```
Satellite1对Facility1的可见性报告
Satellite1对Facility1
----------------------
无分析数据！
```

**The command does not return NACK in this case**; the result is reflected in the report body only.

## About the Access Objects Generated in the Scenario

**Every pair of objects computed successfully adds an Access object to the scenario**, recording the visibility relationship between that pair of objects.

- **The same pair of objects does not depend on the order in which it is written**: when A, B and then B, A are computed one after the other, only one Access object is generated, without a duplicate being added.
- **This object cannot be deleted separately by a command**: applying Delete, Remove, Unload, UnloadSubObj and similar commands to it returns NACK in every case. It is unloaded together with the scenario, that is, it disappears when the scenario is removed with `Unload / *`.

## Additional Notes

- **The output of this command is always a visibility report.** If you need other formats such as AER, parameter rates, non-visibility reports or statistical summaries, use [Access_RM](./Access_RM%20Access.md) instead.
- **This command computes only one pair of objects at a time.** If you need to process several pairs of objects, use the AccessMulti family of commands instead (configure the targets and sources first, then compute them in one pass); see [AccessMulti Access](./AccessMulti%20Access.md).

## Examples

::: details open **Create a scenario and compute the visibility between a satellite and a ground facility**

The scenario and the objects must be created first, and Reset executed to generate the ephemerides:

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
```

The time step and orbital parameters in the example above are illustrative only; in actual use they must be set according to the scenario.

:::

::: details open **Compute the visibility between two satellites**

```
Access */Satellite/Satellite1 */Satellite/Satellite2 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

:::

::: details open **Use the objects' own time intervals**

```
Access */Satellite/Satellite1 */Facility/Facility1 UseObjectTimes
```

:::

::: details open **No visibility interval within the time interval**

```
Access */Satellite/Satellite1 */Facility/Facility1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 01:00:00.000"
```

The report body is "No analysis data!".

:::

::: details open **Common forms that return NACK**

```
Access */Satellite/Satellite1 */Satellite/Satellite2
Access */Satellite/Satellite1 */Satellite/Satellite1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Access */Satellite/Nope */Satellite/Satellite2 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

The three commands correspond, in order, to: an omitted time interval parameter block, both parameters pointing to the same object, and an object path pointing to a nonexistent object.

:::
