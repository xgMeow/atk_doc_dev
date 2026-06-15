# RPO段重命名

## 作用

设置 `RPO` 段重命名

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ComponentName Rename
```

## 示例

::: details open **重命名RPO段**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.ComponentName 111
```
:::
