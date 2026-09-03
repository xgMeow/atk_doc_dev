# Cov_RM Access

## Description

Obtain the **coverage report**.

## Syntax

```atk-command
Cov_RM <ObjectPath> Access Compute "<ReportStyle>" [{TimeIntervals} | UseObjectTimes]
```

## Parameters

| Parameter | Description |
| --- | --- |
| `<ReportStyle>` | Report style; valid values are listed below |

### `<ReportStyle>` Values

| Value | Description |
| --- | --- |
| `Coverage` | Coverage analysis report |
| `Figure Of Merit` | Figure of merit analysis report |
| `Satisfaction` | Satisfied coverage analysis report |
| `Daily Coverage` | Daily coverage analysis report |
| `Coverage Gaps` | Coverage gap analysis report |

## Examples

::: details open **Compute the satellite coverage report using a time interval**
```
Cov_RM */Satellite/Satellite1 Access Compute "Coverage" "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```
:::
