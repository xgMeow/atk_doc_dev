# Access_RM Access

作用：获取可见性报告

用法：

```
Access_RM <ObjectPath> Access Compute "<ReportStyle>" [{TimeIntervals} | UseObjectTimes]
```
::: 报告类型说明
支持可见性报告:`Access`-可见性报告,`AER`-可见AER报告,`AER Rate`-可见性参数变化率报告,`UnAccessible`-不可见报告,`UnAccessible AER`-不可见AER报告,`Access Summary`-可见性统计报告,`AER Aummary`-可见AER统计报告,`UnAccessible Summary`-不可见统计报告,`Range Rate`-可见性距离变化率报告
:::


::: note 举例
```
Access_RM */Satellite/Satellite1 Access Compute "Access" "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```
:::
