---
groups: [Access]
---

# AccessMulti Access

## Description

Computes visibility **in batch** for the multiple groups of objects already configured in AccessMulti.

In a single pass, the command processes every "target object and source object" pair in the current configuration, and each pair generates an Access object in the scenario. See "About the Access Objects Generated in the Scenario" below.

**This command returns no report.** The computation result is reflected in the Access objects generated in the scenario, which must be read separately with [Access_RM](./Access_RM%20Access.md).

## Prerequisites

- **The objects involved in the computation must already exist** and must first be created with [New](./New.md) (for example, satellites and ground facilities). When an object path points to a nonexistent object, the command returns NACK.

- **The configuration must be completed first.** Specify the target objects with AccessMulti / Objects first, then specify the source objects with AccessMulti / Assets. Executing AccessMulti / Assets without having specified any target object, or executing this command without having specified any source object, returns NACK.

  For the usage of the two configuration commands, see [AccessMulti Objects](./AccessMulti%20Objects.md) and [AccessMulti Assets](./AccessMulti%20Assets.md).

- **Every target object must have source objects assigned.** When any target in the current target list has no source assigned, this command returns NACK; in that case, execute AccessMulti / Assets again to assign sources to the current target list.

- **Source objects must be created before the AccessMulti family of commands is first executed in the scenario.** A satellite created afterwards and supplied alone as a source object makes AccessMulti / Assets return NACK.

- Satellites and other objects involved in the computation must have ephemeris data generated, so the Reset of [Animate](./Animate.md) must be executed first:

    ```
    Animate * Reset
    ```

    When this command is sent without a prior Reset, the command still returns ACK and generates the Access objects, but the report body returned when the results are read is "No analysis data!".

## Syntax

```atk-command
AccessMulti / Access Compute {<StartTime> <StopTime> | UseObjectTimes}
```

## Syntax Description

The command consists of three parts: the command name AccessMulti, the **subcommand / Access Compute**, and **a time interval parameter block**.

| Part | Meaning |
| --- | --- |
| AccessMulti | Command name. |
| / Access Compute | Subcommand. The slash and the three words after it are all part of the subcommand. |
| Time interval parameter block | Specifies the time interval used for the computation; it is either two date-times or UseObjectTimes; see "Time Interval Parameter Block" below. |

**The slash between the command name and the subcommand cannot be omitted.** Writing AccessMulti Access Compute makes the command return NACK.

The words in the command name and the subcommand and the keywords are **case-insensitive**; see [Command Syntax Conventions](../../1-命令语法约定.md). Writing AccessMulti / access compute or the all-uppercase AccessMulti / ACCESS COMPUTE works equally well.

## Time Interval Parameter Block

Choose one of the two forms below.

**Two date-times.** Give the **start epoch** and then the **end epoch**; for the format, see [Date/Time Formats](../../2-参数值格式/日期时间格式.md). Both date-times must be enclosed in double quotes; when they are not quoted, when only one of them is given, or when the content cannot be parsed as a valid date-time, the command returns NACK.

**UseObjectTimes.** Gives no explicit date-time and uses the time interval of the objects involved in the computation instead.

- **The two epochs cannot be given in reverse order**; the start epoch must come first, followed by the end epoch.
- **This command does not accept the TimePeriod keyword.** Writing the TimePeriod keyword after Access Compute returns NACK; simply give the two date-times in order. The time interval of the Access command must be preceded by the TimePeriod keyword; the two forms differ and cannot be substituted for each other.
- The time interval parameter block **recognizes only the single word UseObjectTimes**. Writing anything else, including UseObjectTime with the trailing s omitted, returns NACK.
- **Extra date-times after the time interval parameter block do not raise an error.** When three or more date-times are given in order, the command still uses the first two epochs; extra date-times after UseObjectTimes are likewise ignored.

**The time interval used for the computation is not saved with the Access objects.** The Access objects record only the object pair itself; the time interval used when reading the results is determined by the time interval parameter block of the reading command and is unrelated to the time interval used by this command. See "Time Interval Parameter Block" in [Access_RM](./Access_RM%20Access.md).

## Output

**This command has no return value.** When the command is accepted, CONNECT returns an empty response and no report text; when the command is rejected, it returns NACK.

The computation result is reflected in the Access objects generated in the scenario. Read them with [Access_RM](./Access_RM%20Access.md), passing the path of the **target object**:

```
Access_RM */Facility/Facility1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

Reading with the path of a source object returns NACK.

## About the Access Objects Generated in the Scenario

**Every combination of a target object and a source object generates an Access object in the scenario**, located under ObjectAccess in the object tree, with a name formed by the two pointers of the pair, such as Access - 1975871500528, 1976206728096.

- **A single computation processes all the combinations in the current configuration.** When the target list and the source list each contain several objects, the number of combinations is the product of the two counts: 2 target objects and 2 source objects generate 4 Access objects in total.
- **Recomputing the same pair of objects does not add a duplicate**; the existing object is reused directly.
- **Existing Access objects are not deleted by a new computation.** Recomputing after changing the configuration only adds objects for combinations not yet computed; previously generated combinations are all retained.
- Access objects are unloaded together with the scenario.

## Additional Notes

- **Division of labor between this command and Access**: [Access](./Access.md) computes one object pair at a time and returns the visibility report directly; this command computes several object pairs in batch, returns no report, and the results must be read separately.
- **This command computes with the last configuration sent before it.** Both the target list and the source list are replaced as a whole by their respective configuration commands; repeated configuration does not append.
- For the restrictions on selecting target objects and source objects, see [AccessMulti Objects](./AccessMulti%20Objects.md) and [AccessMulti Assets](./AccessMulti%20Assets.md).

## Examples

::: details open **Compute visibility in batch between two ground facilities and two satellites**

The scenario and objects must be created first, Reset executed to generate the ephemerides, the targets and sources configured, and the computation performed last:

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
New / */Satellite Satellite1
SetState */Satellite/Satellite1 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7000000.0 0.001 98.0 0.0 0.0 0.0
New / */Satellite Satellite2
SetState */Satellite/Satellite2 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7200000.0 0.001 53.0 0.0 0.0 0.0
New / */Facility Facility1
SetPosition */Facility/Facility1 Geodetic 0.0 0.0 0.0
New / */Facility Facility2
SetPosition */Facility/Facility2 Geodetic 40.0 116.0 0.0
Animate * Reset
AccessMulti / Objects */Facility/Facility1 */Facility/Facility2
AccessMulti / Assets */Satellite/Satellite1 */Satellite/Satellite2
AccessMulti / Access Compute "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

The last command generates one Access object for each of the four combinations of the 2 target objects and the 2 source objects. The results are then read with the path of the target object:

```
Access_RM */Facility/Facility1 Access Compute "Access" "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

The time step and orbital parameters in the example above are illustrative only; in actual use they must be set according to the scenario.

:::

::: details open **Use the objects' own time intervals**

```
AccessMulti / Access Compute UseObjectTimes
```

:::

::: details open **Common forms that return NACK**

```
AccessMulti Access Compute "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
AccessMulti / Access Compute
AccessMulti / Access Compute TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
AccessMulti / Access Compute "5 Mar 2025 00:00:00.000"
AccessMulti / Access Compute 5 Mar 2025 00:00:00.000
```

The five commands correspond, in order, to: the missing slash between the command name and the subcommand, an omitted time interval parameter block, a misused TimePeriod keyword, only one date-time given, and date-times not enclosed in double quotes.

:::
