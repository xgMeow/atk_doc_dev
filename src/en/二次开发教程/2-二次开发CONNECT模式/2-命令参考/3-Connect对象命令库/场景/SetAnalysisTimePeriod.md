# SetAnalysisTimePeriod

## Description

Sets the analysis time period of a scenario.

## Syntax

```atk-command
SetAnalysisTimePeriod <ScenarioPath> {TimeInterval}
```

## Additional Notes

1. See **[Common Date/Time Formats](../../2-参数值格式/日期时间格式.md)** for the `TimeInterval` format settings.
2. If you use this command, you must call the `Animate Reset` command to apply the modified time to the scenario.

## Examples

::: details open **Set the scenario analysis time period**

```
SetAnalysisTimePeriod * "1 Nov 2007 01:02:00.00" "1 Nov 2007 03:04:00.00"
```

:::
