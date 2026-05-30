## Cov Asset

作用：覆盖配置对象

用法：

```
Cov <CovDefnObjectPath> Asset <AssetObjectPath> {Action}
```

说明：{Action}包括Assign和Deassign，Assign标记对象可进行覆盖计算；Deassign取消标记对象，对象不进行覆盖计算。

::: note 举例
```
Cov */Satellite/Satellite1 Asset */Satellite/Satellite2 Assign
```
:::
