---
description: 获得对象的姿态类型。
---

# GetAttitude

## 作用

获得对象的姿态类型。

## 语法

```atk-command
GetAttitude <ObjectPath> {AttOption}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `{AttOption}` | 包括属性为 `Profile ConnectName`、`Profile LongName` |

## 适用对象

卫星、导弹、火箭

## 示例

::: details open **获得对象的姿态类型**
```
GetAttitude */Satellite/Satellite1 Profile LongName
```
:::
