## VO CovAttributes
 

作用：设置覆盖定义显示点大小

::: note 用法 
```
VO <CovDefnObjectPath> CovAttributes {DisplayOption} <Value> [{DisplayOption} <Value>...]
```
:::

::: info 说明
- 目前`{DisplayOption}`包括 `StaticSize`
:::

::: tip 举例
```
VO */CoverageDefinition/CoverageDefinition1 CovAttributes StaticSize 2
```
:::
