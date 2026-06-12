# CentralBodyCode

## 作用

设置摄动力中心天体 `CentralBodyCode`

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value>
```

## 补充说明

- `CentralBodyName` 对应顺序：`Mercury`-0，`Venus`-1，`Earth`-2，`Mars`-3，`Jupiter`-4，`Saturn`-5，`Uranus`-6，`Neptune`-7，`Pluto`-8，`Moon`-9，`Sun`-10

## 示例

::: details open **设置中心天体代码为 3（Mars）**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Propagate.CentralBodyCode 3
```
:::
