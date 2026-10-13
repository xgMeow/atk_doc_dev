---
description: 获得对象的标签。
groups: [二维视图显示, 地面站, 卫星]
---

# Graphics_R GetLabel

## 作用

获得对象的标签。

## 语法

```atk-command
Graphics_R <ObjectPath> GetLabel
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |

## 适用对象

卫星、地面站

## 示例

::: details open **获得对象的标签**
```
Graphics_R */Satellite/Satellite1 GetLabel
```
:::

::: details open **获得对象的标签**
```
Graphics_R */Satellite/Satellite1 GetLabel
```
:::

::: details open **获得标签**
```
Graphics_R */Facility/Facility1 GetLabel
```
:::
