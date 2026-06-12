# ComponentName

## 作用

设置 `ComponentName` 属性为**段**重命名。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName <Value>
```

::: info 注意
此属性值暂不支持获取
:::

## 示例

::: details open **将保持段重命名为 abc**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Hold.ComponentName abc
```
:::
