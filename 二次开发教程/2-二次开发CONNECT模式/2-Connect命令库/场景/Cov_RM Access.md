# Cov_RM Access

作用：获取覆盖性报告

用法：

```
Cov_RM <ObjectPath> Access Compute "<ReportStyle>" [{TimeIntervals} | UseObjectTimes]
```

说明：`<ReportStyle>`包括：`Coverage`-覆盖分析报告,`Figure Of Merit`-品质参数分析报告,`Satisfaction`-有效覆盖分析报告,`Daily Coverage`-每日覆盖分析报告,`Coverage Gaps`-未覆盖分析报告

::: note 举例
```
Cov_RM */Satellite/Satellite1 Access Compute "Coverage" "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```
:::
