# AccessMulti Interval

## 作用

指定批量可见性计算的时间区间（起始时间和结束时间）。

## 语法

```
AccessMulti / Interval {TimeInterval}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `{TimeInterval}` | 时间区间，包含起始时间和结束时间两个日期时间字符串 |

## 补充说明

- 本命令是 AccessMulti 框架的**配置步骤**，用于指定"在什么时间段内"计算可见性。
- 配合使用：`AccessMulti / Assets` 指定来源，`AccessMulti / Objects` 指定目标，`AccessMulti / Access Compute` 执行计算。

## 示例

::: details open **设置可见性计算的时间区间。**

```
AccessMulti / Interval "20 Jun 2024 04:00:00.00" "21 Jun 2024 04:00:00.00"
```

:::
