# Cov Asset

## 作用

配置覆盖对象。

## 语法

```
Cov <CovDefnObjectPath> Asset <AssetObjectPath> {Action}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<CovDefnObjectPath>` | 覆盖定义对象的路径 |
| `<AssetObjectPath>` | 资产对象的路径 |
| `{Action}` | 操作类型，见下表 |

### {Action} 取值

| `{Action}` | 含义 |
|----|------|
| `Assign` | 标记对象可进行覆盖计算 |
| `Deassign` | 取消标记对象，对象不进行覆盖计算 |

## 示例

::: details open **将 Satellite1 的覆盖定义赋给 Satellite2，使 Satellite2 参与覆盖计算。**

```
Cov */Satellite/Satellite1 Asset */Satellite/Satellite2 Assign
```

:::