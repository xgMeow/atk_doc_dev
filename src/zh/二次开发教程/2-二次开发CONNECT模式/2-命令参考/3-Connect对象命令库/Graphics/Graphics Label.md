---
description: 设置对象标签的显示属性。
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
