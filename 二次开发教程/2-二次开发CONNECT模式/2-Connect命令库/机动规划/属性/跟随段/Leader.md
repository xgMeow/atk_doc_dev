# Leader

## 作用

设置参考航天器

## 语法

```
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.Leader <Value>
```

## 示例

::: details open **设置跟随段的参考航天器**

```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Follow.Leader Vehicle2
```

:::
