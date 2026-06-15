# Access

## 作用

计算两个对象之间的可见性，仅输出可见性报告。

## 语法

```
Access <ObjectPath> <AccessObjectPath> {TimePeriod <StartTime> <StopTime>}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 要计算可见性的对象路径 |
| `<AccessObjectPath>` | 要访问的目标对象路径 |
| `{TimePeriod <StartTime> <StopTime>}` | 可见性计算的时间范围，<br/> `<StartTime>` 为开始时间；`<StopTime>` 为结束时间 |

## 补充说明

- 适用于**一对一**场景：直接指定两个对象，快速判断它们之间是否可见。
- 输出固定为可见性报告。如果需要 AER、参数变化率、不可见报告等其他格式，可以改用 `Access_RM` 命令。
- 如果需要同时处理多个对象对，可以改用 `AccessMulti` 系列命令（先配置来源/目标/时间，再批量计算）。

## 示例

::: details open **计算 Satellite1 与 Satellite2 在指定时间段内的可见性。**

```
Access */Satellite/Satellite1 */Satellite/Satellite2 TimePeriod "14 Mar 2024 00:00:00.000" "15 Mar 2024 00:00:00.000"
```

:::
