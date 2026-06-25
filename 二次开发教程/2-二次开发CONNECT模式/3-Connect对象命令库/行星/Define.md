# Define

## 作用

设置行星中心天体

## 语法

```atk-command
Define <PlanetObjectPath> CentralBody {CBName} 
```

## 补充说明

- `{CBName}` 包括天体名称 `Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`, `Moon`, `Sun`

## 示例

::: details open **定义行星中心天体为木星**
```
Define */Planet/Planet1 CentralBody Jupiter
```
:::
