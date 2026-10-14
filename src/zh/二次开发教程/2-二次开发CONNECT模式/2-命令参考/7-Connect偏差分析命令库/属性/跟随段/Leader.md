# Leader

## 作用

设置参考航天器

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ Object Path>.Leader <Value>
```

## 示例

::: details open **设置跟随段的参考航天器**

```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Leader Vehicle2
```

:::
