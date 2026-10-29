---
groups: [Collision Avoidance]
---

# CAM

## Description

Sets the parameters of collision avoidance (orbit control safety analysis) and performs the computations and result exports for close approach analysis, collision avoidance maneuver planning, maneuver verification, and the related analyses.

## Syntax

```atk-command
CAM <ScenarioPath> <Subcommand> <Parameters…>
```

## Additional Notes

This command consists of a subcommand followed by parameters; the number of parameters depends on the subcommand, and the parameter order of each subcommand is fixed and cannot be interchanged. `<ScenarioPath>` is the scenario path, written as `*` to represent the current scenario. The subcommands are grouped by function below, and each group is illustrated with the scenario `*`.

::: warning Note
The interface and the secondary development tools are not fully synchronized; operations performed with secondary development commands do not refresh the interface.
:::

**Select the satellite object**

Corresponds to the selection of the primary target (satellite) on the main interface. The satellite can be taken from a satellite object in the scenario or from a satellite ephemeris file.

```atk-command
CAM * FromSatellite Mode Scenario <ObjectPath>
CAM * FromSatellite Mode Ephemeris "<FilePath>"
```

| `Mode` Value | Description |
|------|------|
| `Scenario` | Select from the scenario; followed by the full path of the satellite object, given in full starting from the scenario `*`, such as `*/Satellite/Satellite1` |
| `Ephemeris` | Select from an ephemeris; followed by the path of the satellite ephemeris file |

**Target ephemeris file**

Corresponds to the target ephemeris setting on the main interface.

```atk-command
CAM * UseTargetEphFile {On | Off}
CAM * TargetEphFile Mode Scenario <ObjectPath>
CAM * TargetEphFile Mode Ephemeris "<FilePath>"
```

`UseTargetEphFile` sets whether the target ephemeris file is enabled; `TargetEphFile` sets the source of the target ephemeris.

| `Mode` Value | Description |
|------|------|
| `Scenario` | Select from the scenario; followed by the full path of the target satellite object, given in full starting from the scenario `*` |
| `Ephemeris` | Select from an ephemeris; followed by the path of the target ephemeris file |

**Target database**

Corresponds to the target database (target catalog database) setting on the main interface.

```atk-command
CAM * SpaceObjects UseTLE {On | Off}
CAM * SpaceObjects TLE "<FilePath>"
CAM * SpaceObjects UseCTLE {On | Off}
CAM * SpaceObjects CTLE "<FilePath>"
```

`UseTLE` and `UseCTLE` set whether the TLE and CTLE files are used as the target database, respectively, and `TLE` and `CTLE` give the paths of the corresponding files.

**Excluded SSC numbers**

Corresponds to the excluded target SSC numbers setting on the main interface; the targets listed there do not participate in the analysis.

```atk-command
CAM * ExcludedSSC Add <count> <num1> <num2> …
```

After `Add`, first give the number of numbers to be added in this operation, `<count>`, and then give that many SSC numbers in sequence, separated by spaces. An SSC number is the five-digit international designator of a space object.

**Conjunction analysis threshold**

Corresponds to the conjunction analysis threshold on the main interface; after computation, only conjunction data whose equivalent distance is less than this threshold is output.

```atk-command
CAM * MaxRange <Value>
```

**Relative orbit propagation model**

Corresponds to the relative orbit propagation model selection on the main interface.

```atk-command
CAM * RelativeOrbitModel {Linear | Nonlinear | VintiPropagation}
```

| `Value` | Description |
|------|------|
| `Linear` | Linear equations |
| `Nonlinear` | Nonlinear equations |
| `VintiPropagation` | Analytical absolute propagation |

**Filters**

Corresponds to the filters in the advanced settings of the orbit control safety analysis, which are used to screen out targets that cannot possibly approach before the close approach analysis.

```atk-command
CAM * PreFilters Method Analytical
CAM * PreFilters OutOfRange On <Value>
CAM * PreFilters OutOfRange Off
CAM * PreFilters ApoPeri On <Value>
CAM * PreFilters ApoPeri Off
CAM * PreFilters Orbit On <Value>
CAM * PreFilters Orbit Off
CAM * PreFilters Time On <Value>
CAM * PreFilters Time Off
```

`Method` sets the method used by the filters; the value given is `Analytical` (analytical method). The values of the four filters are as follows.

| `Value` | Description |
|------|------|
| `OutOfRange` | Orbit epoch expiration threshold; interface default 2592000 sec (that is, 30 days) |
| `ApoPeri` | Apogee/perigee threshold; interface default 50000 m |
| `Orbit` | Orbit path filter threshold |
| `Time` | Time filter threshold |

Each filter is enabled with `On <Value>`, which sets its threshold to `<Value>`, and disabled with `Off`.

**Equivalent distance thresholds**

Corresponds to the equivalent distance thresholds in the advanced settings of the orbit control safety analysis, used to set the yellow and red warning thresholds of the equivalent distance and the equivalent distance coefficient.

```atk-command
CAM * DistThreshold Yellow <Value>
CAM * DistThreshold Red <Value>
CAM * DistThreshold EquivalFactor <Value>
```

| `Value` | Description |
|------|------|
| `Yellow` | Equivalent distance threshold of the yellow warning |
| `Red` | Equivalent distance threshold of the red warning |
| `EquivalFactor` | Equivalent distance coefficient $k$ |

The equivalent distance is computed as $s_{k}=\max \left(d_{k}/k,\left|R_{k}\right|\right)$, where $d_{k}$ is the relative distance and $R_{k}$ is the radial distance; in the interface, data whose equivalent distance is less than the yellow threshold or the red threshold is marked in yellow or red, respectively.

**Compute the close approach analysis**

Corresponds to the computation of the Close Approach Analysis module.

```
CAM * Compute CloseAnalysis
```

**Compute the collision avoidance maneuver planning (enumeration analysis)**

Corresponds to the Enumeration area of the Collision Avoidance Maneuver Planning module. The second word of the subcommands in this group is `CAM`, followed by the specific item.

```atk-command
CAM * CAM LowBoundCtrlTime "<TimeValue>"
CAM * CAM LowBoundDA <Value>
CAM * CAM UpBoundCtrlTime "<TimeValue>"
CAM * CAM UpBoundDA <Value>
CAM * CAM Enum UseCtrlTime {On | Off}
CAM * CAM Enum UseCtrlDA {On | Off}
CAM * CAM Enum TimeStep <Value>
CAM * CAM Enum DAStep <Value>
CAM * CAM Enum AddToVerification
CAM * Compute CAMEnum
```

| Subcommand | Description |
|------|------|
| `CAM LowBoundCtrlTime`, `CAM UpBoundCtrlTime` | Control time lower bound, control time upper bound |
| `CAM LowBoundDA`, `CAM UpBoundDA` | Semimajor axis control lower bound, semimajor axis control upper bound |
| `CAM Enum UseCtrlTime` | Sets whether time planning is performed |
| `CAM Enum UseCtrlDA` | Sets whether control value planning is performed |
| `CAM Enum TimeStep` | Time step of the enumeration analysis |
| `CAM Enum DAStep` | Semimajor axis control step of the enumeration analysis |
| `CAM Enum AddToVerification` | Loads the selected result into the maneuver verification |
| `Compute CAMEnum` | Performs the enumeration analysis computation |

**Compute the collision avoidance maneuver planning (optimization analysis)**

Corresponds to the Optimization area of the Collision Avoidance Maneuver Planning module.

```atk-command
CAM * CAM Opti MinRange <Value>
CAM * CAM Opti AddToVerification
CAM * Compute CAMOpti
```

| Subcommand | Description |
|------|------|
| `CAM Opti MinRange` | Avoidance threshold |
| `CAM Opti AddToVerification` | Loads the selected result into the maneuver verification |
| `Compute CAMOpti` | Performs the optimization analysis computation |

**Compute the maneuver verification**

Corresponds to the Maneuver Verification module.

```atk-command
CAM * MV ManeuverTime "<TimeValue>"
CAM * MV CtrlDA <Value>
CAM * MV InTrack <Value>
CAM * MV AddSatToScenario
CAM * Compute ManeuverVerification
```

| Subcommand | Description |
|------|------|
| `MV ManeuverTime` | Control time |
| `MV CtrlDA` | Semimajor axis control value |
| `MV InTrack` | In-track maneuver amount |
| `MV AddSatToScenario` | Adds the satellite to the scenario |
| `Compute ManeuverVerification` | Performs the maneuver verification computation |

**Compute the uncertainty maneuver verification**

Corresponds to the Uncertainty Maneuver Verification module.

```atk-command
CAM * MVUq ManeuverTime "<TimeValue>"
CAM * MVUq CtrlDA <Value>
CAM * MVUq SemiAxisDev <Value>
CAM * MVUq AddSatToScenario
CAM * Compute MVUq
```

| Subcommand | Description |
|------|------|
| `MVUq ManeuverTime` | Control time |
| `MVUq CtrlDA` | Semimajor axis control value |
| `MVUq SemiAxisDev` | Semimajor axis standard deviation 3σ |
| `MVUq AddSatToScenario` | Adds the satellite to the scenario |
| `Compute MVUq` | Performs the uncertainty maneuver verification computation |

**Compute the uncertainty maneuver verification (semimajor axis deviation estimation)**

Corresponds to the semimajor axis deviation estimation of the Uncertainty Maneuver Verification module, which estimates the semimajor axis deviation.

```atk-command
CAM * MVUq MVUDa3s EngineThrust Mean <Value>
CAM * MVUq MVUDa3s EngineThrust SD <Value>
CAM * MVUq MVUDa3s SpacecraftMass Mean <Value>
CAM * MVUq MVUDa3s SpacecraftMass SD <Value>
CAM * MVUq MVUDa3s BurnDuration Mean <Value>
CAM * MVUq MVUDa3s BurnDuration SD <Value>
CAM * MVUq MVUDa3s Azimuth Mean <Value>
CAM * MVUq MVUDa3s Azimuth SD <Value>
CAM * MVUq MVUDa3s Elevation Mean <Value>
CAM * MVUq MVUDa3s Elevation SD <Value>
CAM * Compute MVUDa3s
```

For each input, both the mean (`Mean`) and the standard deviation (`SD`) must be given.

| Input | Description | Unit Labeled in Interface |
|------|------|------|
| `EngineThrust` | Engine thrust | `N` |
| `SpacecraftMass` | Spacecraft mass | `kg` |
| `BurnDuration` | Burn duration | `sec` |
| `Azimuth` | Thrust azimuth | `deg` |
| `Elevation` | Thrust elevation | `deg` |

**Output data**

Saves each analysis result to a file.

```
CAM * SaveAs CloseAnalysis
CAM * SaveAs CAMEnum
CAM * SaveAs ManeuverVerification
CAM * SaveAs MVUDa3s
CAM * SaveAs MVUq
```

| `Value` | Description |
|------|------|
| `CloseAnalysis` | Close approach analysis results |
| `CAMEnum` | Enumeration analysis results |
| `ManeuverVerification` | Maneuver verification results |
| `MVUDa3s` | Semimajor axis deviation estimation results |
| `MVUq` | Uncertainty maneuver verification results |

Notes:

- The number and order of the parameters of each subcommand are fixed and cannot be interchanged.
- For parameters that carry a unit, the unit of the value is determined by the current Connect unit settings rather than being fixed: the conjunction analysis threshold, the equivalent distance warning thresholds, the semimajor axis control value and its bounds, the avoidance threshold, the semimajor axis control step, and the semimajor axis standard deviation are entered in `Distance` units; the time step is entered in `Time` units; the control time and the control time lower and upper bounds are entered in `Date` units. For how to set units, see [Unit Format](../../2-参数值格式/单位格式.md).
- Time values such as `<TimeValue>` contain spaces and must be enclosed in double quotes as a whole, for example `"1 Jul 2021 09:00:00.000"`; for the format of date and time values, see [Date/Time Format](../../2-参数值格式/日期时间格式.md). File paths follow the same rule and must also be enclosed in double quotes as a whole.
- The dimensions of the engine thrust and the in-track maneuver amount have no counterpart in the Connect unit settings; their units are `N` and `m/s` as labeled in the interface and are not affected by the Connect unit settings. The equivalent distance coefficient `EquivalFactor` is a dimensionless coefficient.
- `SaveAs` supports saving the result to a specified file; in this case, give the file path after the result type, for example `CAM * SaveAs CloseAnalysis "C:\Result\CloseAnalysis.txt"`.

## Examples

::: details open **Select the satellite object and configure the target database**

```
CAM * FromSatellite Mode Scenario */Satellite/Satellite1
CAM * SpaceObjects UseTLE On
CAM * SpaceObjects TLE "C:\Data\TLE.txt"
CAM * ExcludedSSC Add 2 25544 43013
```

- `*/Satellite/Satellite1`: the full path of the satellite object
- `SpaceObjects UseTLE On`: uses the TLE file as the target database
- `"C:\Data\TLE.txt"`: the path of the TLE file
- `ExcludedSSC Add 2 25544 43013`: adds 2 excluded target SSC numbers

:::

::: details open **Set the conjunction analysis threshold and the equivalent distance thresholds**

```
CAM * MaxRange 5000
CAM * RelativeOrbitModel Nonlinear
CAM * DistThreshold Yellow 200
CAM * DistThreshold Red 50
CAM * DistThreshold EquivalFactor 10
```

- `MaxRange 5000`: the value of the conjunction analysis threshold; the unit is determined by the current Connect `Distance` unit setting
- `RelativeOrbitModel Nonlinear`: the relative orbit propagation model is set to the nonlinear equations
- `DistThreshold Yellow 200`: the equivalent distance threshold of the yellow warning
- `DistThreshold Red 50`: the equivalent distance threshold of the red warning
- `DistThreshold EquivalFactor 10`: the equivalent distance coefficient $k$

:::

::: details open **Compute the close approach analysis and save the results**

```
CAM * Compute CloseAnalysis
CAM * SaveAs CloseAnalysis "C:\Result\CloseAnalysis.txt"
```

- `Compute CloseAnalysis`: performs the close approach analysis computation
- `SaveAs CloseAnalysis "C:\Result\CloseAnalysis.txt"`: saves the close approach analysis results to the specified file

:::

::: details open **Perform an enumeration analysis**

```
CAM * CAM LowBoundCtrlTime "1 Jul 2021 09:00:00.000"
CAM * CAM UpBoundCtrlTime "1 Jul 2021 09:10:00.000"
CAM * CAM LowBoundDA 0.5
CAM * CAM UpBoundDA 5.0
CAM * CAM Enum UseCtrlTime On
CAM * CAM Enum UseCtrlDA On
CAM * CAM Enum TimeStep 60
CAM * CAM Enum DAStep 0.1
CAM * Compute CAMEnum
CAM * SaveAs CAMEnum "C:\Result\CAMEnum.txt"
```

- `"1 Jul 2021 09:00:00.000"`: the control time lower bound; the string contains spaces and must be enclosed in double quotes
- `CAM LowBoundDA 0.5`, `CAM UpBoundDA 5.0`: the lower bound and upper bound of the semimajor axis control value
- `CAM Enum UseCtrlTime On`: time planning is performed
- `CAM Enum TimeStep 60`: the value of the time step; the unit is determined by the current Connect `Time` unit setting
- `CAM Enum DAStep 0.1`: the semimajor axis control step
- `Compute CAMEnum`: performs the enumeration analysis computation
- `SaveAs CAMEnum "C:\Result\CAMEnum.txt"`: saves the enumeration analysis results to the specified file

:::

::: details open **Perform maneuver verification and uncertainty maneuver verification**

```
CAM * MV ManeuverTime "1 Jul 2021 09:05:00.000"
CAM * MV CtrlDA 1.5
CAM * MV InTrack 0.2
CAM * Compute ManeuverVerification
CAM * MVUq ManeuverTime "1 Jul 2021 09:05:00.000"
CAM * MVUq CtrlDA 1.5
CAM * MVUq SemiAxisDev 0.01
CAM * Compute MVUq
```

- `"1 Jul 2021 09:05:00.000"`: the control time; the string contains spaces and must be enclosed in double quotes
- `MV CtrlDA 1.5`: the value of the semimajor axis control value
- `MV InTrack 0.2`: the value of the in-track maneuver amount
- `Compute ManeuverVerification`: performs the maneuver verification computation
- `MVUq SemiAxisDev 0.01`: the value of the semimajor axis standard deviation 3σ
- `Compute MVUq`: performs the uncertainty maneuver verification computation

:::
