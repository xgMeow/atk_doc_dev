# StepSize

## 作用

设置**保持段**步长。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.StepSize <Value> [{Unit}]
```

## 示例

::: details open **设置保持段步长为 10 秒**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.StepSize 10 sec
```
:::
