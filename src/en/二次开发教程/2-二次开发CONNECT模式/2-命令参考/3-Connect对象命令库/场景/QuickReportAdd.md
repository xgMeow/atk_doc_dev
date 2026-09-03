# QuickReportAdd

## Description

Adds a quick report.

## Syntax

```atk-command
QuickReportAdd <ScenarioPath> Name "<QuickReportName>" Type {RptType} Style "<StyleName>" Object <TruncObjPath> [FromObject <TruncObjPath>]
```

## Additional Notes

- `<QuickReportName>` is not supported yet.
- `{RptType}` includes the `Report`, `Graph`, `DynamicDisplay`, and `StripChart` types, but setting them is not supported yet.
- `FromObject <TruncObjPath>` is entered when accessing the quick report.

## Examples

::: details open **Add a quick report**

```
QuickReportAdd * Name "Sat Pos-Vel" Type Graph Style "J2000 Position Velocity" Object Satellite/Satellite1
```

:::
