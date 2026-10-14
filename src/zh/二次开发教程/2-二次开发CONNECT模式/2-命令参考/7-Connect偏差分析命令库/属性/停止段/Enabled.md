# Enabled

## 作用

设置该停止段是否任务控制序列停止

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.Stop.Enabled {Value}
```

## 示例

::: details open **禁用停止段**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Stop.Enabled false
```
:::
