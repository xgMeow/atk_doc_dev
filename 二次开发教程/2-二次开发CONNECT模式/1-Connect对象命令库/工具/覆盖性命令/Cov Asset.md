# Cov Asset

## 作用

配置覆盖对象。

## 语法

```atk-command
Cov <CovDefnObjectPath> Asset <AssetObjectPath> {Action}
```

## 参数说明

| {Action} | 说明 |
|-----|------|
| `Assign` | 标记对象可进行覆盖计算 |
| `Deassign` | 取消标记对象，对象不进行覆盖计算 |

## 示例

::: details open **将 Satellite1 的覆盖定义赋给 Satellite2，使 Satellite2 参与覆盖计算。**

```
Cov */Satellite/Satellite1 Asset */Satellite/Satellite2 Assign
```

:::
