# Perturb

## 作用

设置是否摄动迭代

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Perturb <Value>
```

## 示例

::: details open **设置为不摄动迭代**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Perturb false
```
:::
