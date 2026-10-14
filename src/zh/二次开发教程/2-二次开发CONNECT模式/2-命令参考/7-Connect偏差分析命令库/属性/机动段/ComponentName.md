# ComponentName

## 作用

段重命名

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

::: info 注意
此属性值暂不支持获取
:::

## 示例

::: details open **设置机动段名称**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ComponentName abc
```
:::
