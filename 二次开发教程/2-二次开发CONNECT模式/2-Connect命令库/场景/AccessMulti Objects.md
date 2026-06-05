# AccessMulti Objects

## 作用

指定批量可见性计算的**目标对象**（被观测者），可同时指定多个。

## 语法

```
AccessMulti / Objects <CovObjectPath> <CovObjectPath> …
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<CovObjectPath>` | 可见性对象的路径，可指定多个 |

## 补充说明

- 本命令是 AccessMulti 框架的**配置步骤**，用于指定"观测什么"。
- 目标对象（Objects）通常是地面设施、飞行器等被观测的实体。
- 配合使用：`AccessMulti / Assets` 指定来源，`AccessMulti / Interval` 指定时间，`AccessMulti / Access Compute` 执行计算。

## 示例

::: details open **同时选择多个目标对象进行可见性分析。**

```
AccessMulti / objects */Facility/Target1 */Facility/Target2 */Facility/Target3
```

:::
