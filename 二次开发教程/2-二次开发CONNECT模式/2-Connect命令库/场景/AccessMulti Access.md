# AccessMulti Access

## 作用

清空之前的可见性计算结果，基于当前配置重新批量计算对象可见性。

## 语法

```
AccessMulti / Access Compute [{TimeInterval} | UseObjectTimes]
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `{TimeInterval}` | 计算可见性的时间区间 |
| `UseObjectTimes` | 使用对象自身的时间设置 |

## 补充说明

- 本命令是 AccessMulti 框架的**执行步骤**，调用前需先通过以下子命令完成配置：
  - `AccessMulti / Assets` — 指定来源对象（观测者，如卫星传感器）
  - `AccessMulti / Objects` — 指定目标对象（被观测者，如地面设施）
  - `AccessMulti / Interval` — 指定计算的时间区间
- 每次执行会**清空**之前的可见性结果，再基于当前配置的 Assets、Objects、Interval 重新计算。
- 工作流程为**先配置，后计算**，适合需要批量处理大量对象对的场景。

## 示例

::: details open **配置完成后，计算指定时间区间内的对象可见性。**

```
AccessMulti / Access Compute "26 Sep 2035 12:00:00.00" "28 Sep 2035 12:00:00.00"
```

:::
