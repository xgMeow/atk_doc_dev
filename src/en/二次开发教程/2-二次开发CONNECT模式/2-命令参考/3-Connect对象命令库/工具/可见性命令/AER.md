# AER

## Description

Compute and obtain the visibility line-of-sight parameter analysis report.

## Syntax

```atk-command
AER <ObjectPath> <AccessObjectPath> {TimePeriod <StartTime> <StopTime>}
```

## Examples

::: details open **Compute the visibility between two satellites**

```
AER */Satellite/Satellite1 */Satellite/Satellite2 TimePeriod "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```

:::
