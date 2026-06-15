# VO CovAttributes

## 作用

设置覆盖定义显示点大小。

## 语法

```
VO <CovDefnObjectPath> CovAttributes {DisplayOption} <Value> [{DisplayOption} <Value>...]
```

## 补充说明

- 目前 `{DisplayOption}` 包括 `StaticSize`。

## 示例

::: details open **设置覆盖定义显示点大小**
```
VO */CoverageDefinition/CoverageDefinition1 CovAttributes StaticSize 2
```
:::
