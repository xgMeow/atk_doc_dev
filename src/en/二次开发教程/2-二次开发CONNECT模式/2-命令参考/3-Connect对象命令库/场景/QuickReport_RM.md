# QuickReport_RM

## Description

Obtains quick report data.

## Syntax

```atk-command
QuickReport_RM <ScenarioPath> {GetList | GetReport "<QuickReportName>"}
```

## Additional Notes

- `GetList` gets the quick report list; `GetReport` gets the quick report data.

## Examples

::: details open **Get quick report data**

```
QuickReport_RM * GetReport "J2000 Position Velocity"
```

:::
