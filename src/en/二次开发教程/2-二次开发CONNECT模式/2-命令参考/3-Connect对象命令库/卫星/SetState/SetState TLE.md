# SetState TLE

## Description

Sets the TLE state of the satellite object.

## Syntax

```atk-command
SetState <SatObjectPath> TLE "<TLECard1>" "<TLECard2>" [{Options}]
```

## Parameters

| `Options` | Description |
| --- | --- |
| `TimePeriod {TimeInterval}` | If no time period is entered, the time in the `TLE` data is used by default. For the input format of `TimeInterval`, see [Common Date/Time Formats](../../../2-参数值格式/日期时间格式.md) |
| `TimeStep <StepSize>` | The default unit is seconds |
| `Routine <PropName>` | Enter this command to set a different `SGP4` routine |
| `NoProp` | If this command is entered, the satellite state will be set but not propagated |

::: tip Note
- Each line of `TLE` data must be 69 characters long. Do not omit any space.
- The orbit epoch setting currently has no effect; the scenario time prevails
:::

## Examples

::: details open **Set the Satellite TLE State**
```
SetState */Satellite/Satellite1 TLE "1 00005U 58002B   21084.26048267 -.00000099  00000-0 -13258-3 0  9992" "2 00005  34.2472  83.1377 1847466 176.0822 185.6710 10.84848342235752"
```
:::
