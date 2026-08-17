# ComponentName

## 作用

段**重命名**。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

## 补充说明

- 此属性值暂不支持获取。

## 示例

::: details open **重命名瞄准序列段**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.ComponentName abc
```
:::
