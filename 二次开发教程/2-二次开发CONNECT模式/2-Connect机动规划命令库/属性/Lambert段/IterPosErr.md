# IterPosErr

## 作用

设置瞄准位置误差

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.IterPosErr <Value>
```

## 示例

::: details open **设置瞄准位置误差为 0.1**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.IterPosErr 0.1
```
:::
