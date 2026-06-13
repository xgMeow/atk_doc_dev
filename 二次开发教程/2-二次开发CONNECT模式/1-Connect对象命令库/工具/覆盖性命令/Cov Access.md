# Cov Access

## 作用

计算并清空单个对象覆盖性计算

## 语法

```
Cov <ObjectPath> Access {ComputeOption} [<Parameters>]
```

## 参数说明

| `{ComputeOption} [<Parameters>]` | 说明 |
|------|------|
| `Compute [{TimeInterval} \| UseObjectTimes]` | 计算对象覆盖性 |
| `Clear` | 清除对象覆盖定义计算 |
| `ClearAccesses` | 清楚对象所有计算和设置 |

## 示例

::: details open **使用时间区间计算对象覆盖性**
```
Cov */Satellite/Satellite1 Access Compute "20 Jun 2024 04:00:00.00" "21 Jun 2024 04:00:00.00"
```
:::
