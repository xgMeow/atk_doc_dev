# HoldFrame

## 作用

设置**保持段**的 `HoldFrame` 参考坐标系。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.HoldFrame {Value}
```

## 示例

::: details open **设置保持段 HoldFrame 为 CentralBody/Moon Fixed**
```
Astrogator */Satellite/mysat SetValue MainSequence.SegmentList.Hold.HoldFrame "CentralBody/Moon Fixed"
```
:::
