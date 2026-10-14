# ComponentName

## 作用

段重命名

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

::: info 注意
此属性值暂不支持获取
:::

## 示例

::: details open **重命名初始段**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.ComponentName abc
```
:::
