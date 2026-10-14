---
description: 设置对象标签的显示属性。
groups: [二维视图, 车辆, 船, 地面站, 飞机, 恒星, 卫星]
---

# Graphics Label

## 作用

设置对象标签属性。

## 语法

```atk-command
Graphics <ObjectPath> Label {Options}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `Show {on \| off}` | 显示或隐藏标签 |

## 适用对象

卫星、地面站、恒星、船、车辆、飞机

## 示例

::: details open **显示标签**
```
Graphics */Satellite/Satellite1 Label Show on
```
:::

::: details open **设置卫星标签属性**
```
Graphics */Satellite/Satellite1 Label Show on
```
:::

::: details open **显示标签**
```
Graphics */Facility/Facility1 Label Show on
```
:::

::: details open **显示恒星标签**
```
Graphics */Star/Star1 Label Show on
```
:::

::: details open **显示船标签**
```
Graphics */Ship/Ship1 Label Show on
```
:::

::: details open **显示车辆标签**
```
Graphics */GroundVehicle/GroundVehicle1 Label Show on
```
:::

::: details open **显示飞机标签**
```
Graphics */Aircraft/Aircraft1 Label Show on
```
:::
