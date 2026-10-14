# RPO段设置参考航天器

## 作用

设置 `RPO` 段参考航天器

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Reference <ObjectPath>
```

## 示例

::: details open **设置RPO段参考航天器**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.Reference "Satellite/Satellite3"
```
:::
