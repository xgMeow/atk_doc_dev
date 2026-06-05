# Cov Access

## 作用

计算并清空单个对象覆盖性计算

## 用法

```
Cov <ObjectPath> Access {ComputeOption} [<Parameters>]
```

## 说明

| `{ComputeOption}` | `<Parameters>` | 说明 |
|------------------|------------------|------|
| `Compute` | `{TimeInterval}` | 计算对象覆盖性 |
| `Compute` | `UseObjectTimes` | 计算对象覆盖性 |
| `Clear` | （无参数） | 清除对象覆盖定义计算 |
| `ClearAccesses` | （无参数） | 清除对象所有计算和设置 |

## 举例

```
Cov */Satellite/Satellite1 Access Compute "20 Jun 2024 04:00:00.00" "21 Jun 2024 04:00:00.00"
```
