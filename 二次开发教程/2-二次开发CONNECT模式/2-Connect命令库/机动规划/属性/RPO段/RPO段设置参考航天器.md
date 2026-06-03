# RPO段设置参考航天器

作用： 设置 `RPO` 段参考航天器

用法： 
```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Reference <ObjectPath>
```

::: tip 举例： 
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.RPOExitGEO.Reference "Satellite/Satellite3"
```
:::
