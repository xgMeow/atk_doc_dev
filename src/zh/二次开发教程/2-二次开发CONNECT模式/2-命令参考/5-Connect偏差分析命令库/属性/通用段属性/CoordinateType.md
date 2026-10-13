---
description: 为段选择坐标类型。
---

# CoordinateType

## 作用

为段选择坐标类型。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.CoordinateType <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `<Value>` | 坐标类型，可取 `Cartesian`、`ModifiedKeplerian`、`Keplerian` |

::: warning 注意
使用坐标类型名字时，若超过两个单词，请将空格替换为下划线或者使用引号将名字引起来，例如 `Modified_Keplerian` 或者 `"Modified Keplerian"`。
:::

## 适用段

Lambert 段、初始段

## 示例

::: details open **设置坐标类型为 Cartesian**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateType "Cartesian"
```
:::

::: details open **设置初始段坐标类型为 Modified Keplerian**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateType "Modified Keplerian"
```
:::
