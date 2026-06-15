# Cov_RM Access

## 作用

获取**覆盖性报告**

## 语法

```
Cov_RM <ObjectPath> Access Compute "<ReportStyle>" [{TimeIntervals} | UseObjectTimes]
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `<ReportStyle>` | 报告样式，取值见下方 |

### `<ReportStyle>` 取值

| 取值 | 说明 |
| --- | --- |
| `Coverage` | 覆盖分析报告 |
| `Figure Of Merit` | 品质参数分析报告 |
| `Satisfaction` | 有效覆盖分析报告 |
| `Daily Coverage` | 每日覆盖分析报告 |
| `Coverage Gaps` | 未覆盖分析报告 |

## 示例

::: details open **使用时间区间计算卫星覆盖报告**
```
Cov_RM */Satellite/Satellite1 Access Compute "Coverage" "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```
:::
