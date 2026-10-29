---
groups: [AdvCat]
---

# ACAT

## Description

Sets the parameters of an **AdvCat** (AdvCat) object and triggers the computation of close approach events.

## Prerequisites

- **ACAT cannot create objects**; it can only set objects that already exist. Before use, create an AdvCat object with [New](./New.md) first:

    ```
    New / */AdvCat AdvCat1
    ```

    All subsequent settings apply to that object, whose object path is */AdvCat/AdvCat1. When no object has been created first, all ACAT commands return NACK.

- The objects or files referenced by the primary and secondary targets must already exist; target library files support the .tce and .tle formats. For how to specify target lists, see "Target List Parameter Values" below.

- **Before running the computation and reading reports, execute Reset of the [Animate](./Animate.md) command so that each object participating in the computation generates ephemeris data**:

    ```
    Animate * Reset
    ```

    After a satellite or other object is created, its ephemeris data has not yet been generated. If Compute On is sent without executing Reset, reading the close approach event report yields only the table header and separator lines, with no data rows; only after Reset is executed does the scenario write the ephemeris of each object. See the "About Reset" section of [Animate](./Animate.md) for details.

## Syntax

```atk-command
ACAT <AdvCatObjPath> <Option> <Parameters>
```

## Syntax Description

The command consists of three parts: the **command name** ACAT, the **object path to be set**, and **one parameter block**.

| Part | Meaning |
| --- | --- |
| ACAT | The command name. |
| `<AdvCatObjPath>` | Path of the AdvCat object to be set. It may be written as a truncated path, such as `*/AdvCat/AdvCat1`, or as a full path, `/Scenario/<ScenarioName>/AdvCat/<ObjectName>`. The four forms `*/AdvCat/<ObjectName>`, `/AdvCat/<ObjectName>`, `AdvCat/<ObjectName>`, and `/Scenario/<ScenarioName>/AdvCat/<ObjectName>` are all accepted. |
| Parameter block | The single parameter to be set, that is, the object property to be set and its value. |

**One ACAT command sets only one parameter.** For example, when ACAT */AdvCat/AdvCat1 Threshold 50000 PntToPnt On is sent, only the leading Threshold takes effect and the PntToPnt that follows is ignored. To set several parameters, send several commands, each repeating the object path. The following two commands set one parameter each:

```
ACAT */AdvCat/AdvCat1 Threshold 50000
ACAT */AdvCat/AdvCat1 PntToPnt On
```

A misspelled parameter name returns NACK directly.

For the meaning of angle brackets, braces, square brackets, vertical bars, double quotes, and other symbols in the syntax, see [Command Syntax Conventions](../../1-命令语法约定.md).

## Parameters

| Parameter | Description |
| --- | --- |
| Compute On | Runs the close approach analysis computation; returns no value. |
| TimePeriod | Sets the analysis time period; the start epoch and the end epoch must be given in that order as two date-times. For formats, see [Common Date/Time Formats](../../2-参数值格式/日期时间格式.md). Once set, the object **no longer uses the scenario interval** and uses the specified start and end epochs instead. |
| Primary, PrimaryMulti | Adds or removes targets in the **primary target** list; for values, see "Target List Parameter Values" below. |
| Secondary, SecondaryMulti | Adds or removes targets in the **secondary target** list; values are the same as above. |
| Threshold | Sets the threshold; a distance value must be given, and the unit is determined by the current Connect `Distance` unit setting, default 10000. When the distance between the error ellipsoid of the primary target and that of the secondary target is below this threshold, the event is recorded as a close approach event. |
| PntToPnt | Sets whether to **use distance measurement**. Values are one of On or Off, default Off. With Off, the distance between the error ellipsoid of the primary target and that of the secondary target is the criterion; with On, the distance between the centers of the two targets is used instead. |
| PreFilters | Sets whether the pre-filters are enabled and, when enabled, their threshold values. For the available filters and the units of their values, see "PreFilters Filter Description" below. |
| ScaleFactor | Sets the ellipsoid scale factor; a scaling coefficient must be given, default 1. |
| SampleStepSize | Sets the sampling step size; the maximum step size and the minimum step size must be given in that order as two values, and the unit is determined by the current Connect `Time` unit setting, default 300 and 1. **The maximum comes first**, and the first value must be greater than the second, otherwise NACK is returned. |
| ConjTcaMode | Sets the conjunction type, corresponding to the **Conjunction Type** drop-down list in the interface. One of four: GlobalOnly (global solution), LocalOnly (local solution), GlobalPlusLocal (global solution + local solution), LocalPlusEndPoints (local solution + endpoints), default GlobalOnly. |

**Values are case-insensitive.** On, ON, and on for PntToPnt, GlobalOnly and globalonly for ConjTcaMode, and the filter name outofdate for pre-filters are all accepted.

## Target List Parameter Values

Primary, PrimaryMulti, Secondary, and SecondaryMulti are all used to add or remove targets, with the same value formats.

Primary and PrimaryMulti act on **the same primary target list**, and Secondary and SecondaryMulti act on **the same secondary target list**; a target added in one form is also visible in the other. The only difference between the two groups of forms is **how many targets one Add can add**:

| Parameter | Description |
| --- | --- |
| `Add "<Path>" {AdditionalParams}` | Single-target form. Only one target can be added, and the additional parameters **cannot be omitted**; omitting them returns NACK. |
| `Add "<Path>" [{AdditionalParams}]` | Multi-target form. Target paths are written **inside the same pair of double quotes**, with multiple targets separated by spaces, so that they can all be added at once; the additional parameters may be omitted, in which case the three semi-axes and the envelope sphere radius of that target are all recorded as 0. |
| Remove | Removes a target from the list. **Takes effect only in the single-target form (Primary, Secondary)**; when Remove is sent with PrimaryMulti or SecondaryMulti, the command returns success but the target is not removed from the list. |
| RemoveAll | Removes all targets from the list. **Available only in the single-target form (Primary, Secondary)**; RemoveAll with PrimaryMulti or SecondaryMulti returns NACK. |

### Target Path Formats

Target paths may be written in either of the following two ways:

| Form | Meaning | Example |
| --- | --- | --- |
| Truncated object path | An object that already exists in the scenario, which must be enclosed in double quotes. | "Satellite/Satellite1" |
| Full file path | A target library file (.tce or .tle), which must be enclosed in double quotes. The TLE library shipped with ATK resides in the <PathCopy :entry="tleDatabaseDir" /> directory under the installation directory. | "D:\ProgramTool\ATK-4.2.0-alpha.2\AstroData\Database\Satellite\atkAllTLE.tce" |

Paths in both forms **are not validated**: adding an object that does not exist in the scenario, or even specifying a file that does not exist, still returns success, but **the parameters are not set successfully**; the entry in the list is merely an invalid path, and the validity of the path must be ensured by the caller.

### Target Library File Formats

Primary and secondary targets may reference target library files in either of two formats, .tce or .tle; both contain TLE two-line elements. A .tce file is a TLE target library file of ATK that collects an entire satellite catalog, while a .tle file is a TLE file that may contain one or more targets.

### Separators for Multiple Targets

In the multi-target form, **multiple targets can only be separated by spaces**. When commas or semicolons are used, ATK reports no error but stores the whole string as **one** target path, so that none of those targets is actually added, for example:

```
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2,Satellite/Satellite3"
```

In the example above, the following single path is recorded in the list:

```
/Scenario/场景名/Satellite/Satellite2,Satellite/Satellite3
```

It must be changed to space separation:

```
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2 Satellite/Satellite3"
```

Likewise, **if multiple targets are written inside the same pair of double quotes in the single-target form, ATK reports no error either**; the whole string is stored as a single target path, and the result does not meet expectations. To add several targets at once, use PrimaryMulti or SecondaryMulti instead.

## Add [{AdditionalParams}] Values

Used to set the error ellipsoid and envelope sphere parameters of the target itself; values are as follows:

| Parameter | Description |
| --- | --- |
| Ellipsoid class | Sets the target error ellipsoid class; currently only Fixed is supported, case-insensitive. |
| Three semi-axes | Gives three semi-axis values in the order **tangential, radial, normal**; the unit is determined by the current Connect `Distance` unit setting. They correspond one-to-one to the **Tangential**, **Radial**, and **Normal** columns of the primary target list and the secondary target list in the interface (displayed in km there). |
| HardBodyRadius | Sets the target envelope sphere radius; a radius value must be given, and the unit is determined by the current Connect `Distance` unit setting. |

### Default Values

**Provided that additional parameters are given, items that are not written take their default values.** When only the three semi-axes are given, the envelope sphere radius defaults to **1** m; when only HardBodyRadius is given, the three semi-axes default to **tangential 20000 m, radial 10000 m, normal 5000 m**. These two defaults are consistent with the **Default** column in the interface.

**If no additional parameters are written at all** (allowed only in the multi-target form), the three semi-axes and the envelope sphere radius of that target **are all recorded as 0**, rather than taking the defaults above. Omitting the additional parameters in the single-target form, by contrast, returns NACK directly.

### Order and Restrictions

**The order of the items is not enforced**, and the ellipsoid class may be omitted. The following forms are all valid:

```
Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0
Primary Add "Satellite/Satellite1" 21000.0 11000.0 6000.0
Primary Add "Satellite/Satellite1" HardBodyRadius 20
Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0 HardBodyRadius 20
Primary Add "Satellite/Satellite1" HardBodyRadius 20 Fixed 21000.0 11000.0 6000.0
```

The following two kinds of forms return NACK:

- Writing only the ellipsoid class without giving the three semi-axis values, such as Primary Add "Satellite/Satellite1" Fixed;
- Giving fewer than three semi-axis values.

## PreFilters Filter Description

### Filter Overview

| Filter | Interface name | Default on creation | Threshold unit | Default threshold |
| --- | --- | --- | --- | --- |
| OutOfDate | Orbit epoch expiration threshold | **Off** | **sec** | 2592000 (30 days) |
| ApogeePerigee | Apogee/perigee threshold | **On** | m | 30000 |
| OrbitPath | Orbit path filter threshold | **Off** | m | 100000 |
| Time | Time filter threshold | **On** | **m** (not a time unit) | 30000 |

The "Default on creation" and "Default threshold" columns in the table above give the values when a newly created AdvCat object has not been configured in any way.

New objects have ApogeePerigee and Time **enabled by default**, and these filter out some target pairs by threshold first; if the expected close approach events are not obtained, check these two filters first.

### Setting Method

**Each filter must be set with two separate commands**: one gives the filter name and On or Off to determine whether it is enabled, and the other gives the filter name and a threshold value to modify the threshold. The reason is that **one command processes only the word that comes first**, for example in PreFilters Time Off 555 only Off takes effect and 555 is ignored. Example of the two commands:

```
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate On
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate 2592000
```

**Passing a threshold value to a pre-filter only modifies the threshold and does not enable that filter**; enabling it requires a separate command ending in On. For example, after a threshold value is sent to OutOfDate, which is disabled by default, its enabled state remains Off.

## Additional Notes

- **Create the object first**: ACAT cannot create objects. When no AdvCat object has been created with New first, all ACAT commands return NACK.
- **One command sets only one parameter**: see "Syntax Description" for details.
- **A misspelled parameter name returns NACK directly**: the filter names of the pre-filters and the mode names of ConjTcaMode must be among the values listed above.
- **The difference between Primary and PrimaryMulti is how many targets one Add can add** (likewise for Secondary and SecondaryMulti); the two act on the same list and can be mixed, for example adding two targets with PrimaryMulti first and then adding a third target with Primary.
- **Multiple targets can only be separated by spaces, and Remove takes effect only in the single-target form**: see "Target List Parameter Values" for details.
- **The ellipsoid class currently supports only Fixed**: the **Error Ellipsoid Database** on the **Advanced** page of the interface also offers three database file choices, **Time Quadratic Database**, **Fixed Orbit Type Database**, and **Quadratic/Fixed Type Database**, but this version of Connect provides no corresponding keyword for them.
- **Neither Threshold nor the pre-filter threshold values are validated numerically**: if the supplied content cannot be parsed as a number, ATK reports no error but **sets that threshold to 0**. The validity of the values must be ensured by the caller.
- **Envelope sphere radius and SSC files**: to set the envelope sphere radius of individual targets, use HardBodyRadius; to set target radii uniformly through a file, see [ACAT SSCFile](./ACAT%20SSCFile.md). That file corresponds to **SSC Target Radius File** in the interface.
- **Viewing the computation results**: Compute On only triggers the computation and returns no data. Read the computation results with [Report_RM](./Report_RM.md); the report style names are Simple Message, Cat Event Message, or All Message, and the style files reside in the <PathCopy :entry="advCatStyleDir" /> directory under the installation directory. TimePeriod must be given when reading, as shown in the "Read the close approach event report" example below.

## Examples

::: details open **Configure and compute an AdvCat analysis**

The scenario and the satellites must be created first, and the satellites must have generated ephemeris data:

```
New / Scenario Demo
SetAnalysisTimePeriod * "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
New / */Satellite Satellite1
SetState */Satellite/Satellite1 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7000000.0 0.001 98.0 0.0 0.0 0.0
New / */Satellite Satellite2
SetState */Satellite/Satellite2 Classical J2Perturbation "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000" 60 J2000 "5 Mar 2025 00:00:00.000" 7010000.0 0.001 98.0 0.0 0.0 0.0
New / */AdvCat AdvCat1
ACAT */AdvCat/AdvCat1 Threshold 50000
ACAT */AdvCat/AdvCat1 PntToPnt On
ACAT */AdvCat/AdvCat1 Primary Add "Satellite/Satellite1" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 SecondaryMulti Add "Satellite/Satellite2" Fixed 21000.0 11000.0 6000.0
ACAT */AdvCat/AdvCat1 TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
Animate * Reset
ACAT */AdvCat/AdvCat1 Compute On
```

**Note**: Reset of [Animate](./Animate.md) must come before Compute On; otherwise Compute On yields no close approach events. The time steps and orbital parameters in the example above are illustrative only and should be set according to the scenario in actual use.

:::

::: details open **Add multiple targets at once**

```
ACAT */AdvCat/AdvCat1 PrimaryMulti Add "Satellite/Satellite2 Satellite/Satellite3" Fixed 21000.0 11000.0 6000.0
```

The multiple target paths must be written **inside the same pair of double quotes** and separated by **spaces**. Commas and semicolons are not separators.

:::

::: details open **Add a secondary target from a target library file**

```
ACAT */AdvCat/AdvCat1 Secondary Add "D:\ProgramTool\ATK-4.2.0-alpha.2\AstroData\Database\Satellite\atkAllTLE.tce" Fixed 21000.0 11000.0 6000.0
```

The file path must be enclosed in double quotes and should be replaced with the actual path on the local machine.

:::

::: details open **Set the pre-filters, the ellipsoid scale factor, and the sampling parameters**

```
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate On
ACAT */AdvCat/AdvCat1 PreFilters OutOfDate 2592000
ACAT */AdvCat/AdvCat1 PreFilters ApogeePerigee 30000
ACAT */AdvCat/AdvCat1 PreFilters OrbitPath 100000
ACAT */AdvCat/AdvCat1 PreFilters Time 30000
ACAT */AdvCat/AdvCat1 ScaleFactor 1
ACAT */AdvCat/AdvCat1 SampleStepSize 300 1
ACAT */AdvCat/AdvCat1 ConjTcaMode GlobalPlusLocal
```

Each filter requires two commands, one for the switch and one for the threshold; in the example above, the ApogeePerigee, OrbitPath, and Time entries give only threshold values, so they do not change their respective enabled states.

:::

::: details open **Clear the primary and secondary target lists**

```
ACAT */AdvCat/AdvCat1 Primary RemoveAll
ACAT */AdvCat/AdvCat1 Secondary RemoveAll
```

RemoveAll is available with both Primary and Secondary, and must not be written as PrimaryMulti RemoveAll or SecondaryMulti RemoveAll.

:::

::: details open **Read the close approach event report**

Compute On must be executed first, and ephemeris data must be generated as required by "Prerequisites" above. TimePeriod must be given when reading, using the analysis time period of the AdvCat object:

```
Animate * Reset
Report_RM */AdvCat/AdvCat1 Style "Cat Event Message" TimePeriod "5 Mar 2025 00:00:00.000" "5 Mar 2025 06:00:00.000"
```

For the report style and the TimePeriod parameter, see [Report_RM](./Report_RM.md).

:::

<script setup>
import PathCopy from "@components/PathCopy/PathCopy.vue";

const tleDatabaseDir = { path: 'AstroData\\Database\\Satellite', name: 'AstroData\\Database\\Satellite' };
const advCatStyleDir = { path: 'AstroData\\ReportStyle\\AdvCat', name: 'AstroData\\ReportStyle\\AdvCat' };
</script>
