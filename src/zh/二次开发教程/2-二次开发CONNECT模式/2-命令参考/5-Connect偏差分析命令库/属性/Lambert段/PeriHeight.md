# PeriHeight

## 作用

设置近拱点高度

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.PeriHeight <Value>
```

## 示例

::: details open **设置近拱点高度为 0.1**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.PeriHeight 0.1
```
:::
