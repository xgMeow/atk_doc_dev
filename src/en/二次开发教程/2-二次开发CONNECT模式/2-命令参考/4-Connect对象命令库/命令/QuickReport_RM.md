---
groups: [Scenario]
---

# QuickReport_RM

## Description

Obtains quick report data

## Syntax

```atk-command
QuickReport_RM <ScenarioPath> {GetList | GetReport "<QuickReportName>"}
```

## Additional Notes

- `GetList` obtains the quick report list, and `GetReport` obtains the quick report data.

## Examples

::: details open **Get quick report data**

```
QuickReport_RM * GetReport "J2000 Position Velocity"
```

:::
