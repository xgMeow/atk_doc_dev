# Onedv

## 作用

设置是否单脉冲

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Onedv <Value>
```

## 示例

::: details open **设置为非单脉冲模式**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.Onedv false
```
:::
