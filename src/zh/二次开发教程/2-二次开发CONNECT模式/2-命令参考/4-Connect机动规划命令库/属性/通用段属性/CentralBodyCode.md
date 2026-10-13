---
description: 设置摄动力中心天体的代码编号。
---

# CentralBodyCode

## 作用

设置摄动力中心天体。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>`，属性名为 `CentralBodyCode` |
| `<Value>` | 中心天体编号，对应关系见下 |

`CentralBodyName` 对应顺序：`Mercury`-0、`Venus`-1、`Earth`-2、`Mars`-3、`Jupiter`-4、`Saturn`-5、`Uranus`-6、`Neptune`-7、`Pluto`-8、`Moon`-9、`Sun`-10

## 适用段

Lambert 段、预报段

## 示例

::: details open **设置中心天体代码为 3（Mars）**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.CentralBodyCode 3
```
:::
