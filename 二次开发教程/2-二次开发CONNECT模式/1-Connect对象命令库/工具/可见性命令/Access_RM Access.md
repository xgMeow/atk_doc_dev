# Access_RM Access

## 作用

获取单个对象的可见性报告，通过 `ReportStyle` 参数可输出 9 种格式（AER、变化率、统计摘要等）。

## 语法

```atk-command
Access_RM <ObjectPath> Access Compute "<ReportStyle>" [{TimeIntervals} | UseObjectTimes]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象路径 |
| `<ReportStyle>` | 报告类型，见下表 |
| `{TimeIntervals}` | 时间区间 |
| `UseObjectTimes` | 使用对象自身时间 |

### \<ReportStyle\> 取值

| \<ReportStyle\> | 说明 |
|----|------|
| `Access` | 可见性报告 |
| `AER` | 可见 AER 报告 |
| `AER Rate` | 可见性参数变化率报告 |
| `UnAccessible` | 不可见报告 |
| `UnAccessible AER` | 不可见 AER 报告 |
| `Access Summary` | 可见性统计报告 |
| `AER Summary` | 可见 AER 统计报告 |
| `UnAccessible Summary` | 不可见统计报告 |
| `Range Rate` | 可见性距离变化率报告 |

## 补充说明

- 适用于需要对单个对象生成**多维度可见性分析报告**的场景。
- 每次针对一个对象。如果需要批量处理多个对象，可以改用 `AccessMulti` 系列命令。

## 示例

::: details open **获取 Satellite1 在指定时间段内的可见性报告。**

```
Access_RM */Satellite/Satellite1 Access Compute "Access" "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```

:::
