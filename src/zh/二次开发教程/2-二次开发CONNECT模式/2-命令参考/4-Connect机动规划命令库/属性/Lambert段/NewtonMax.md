# NewtonMax

## 作用

设置牛顿迭代次数

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.NewtonMax <Value>
```

## 示例

::: details open **设置牛顿迭代次数为 10**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.NewtonMax 10
```
:::
