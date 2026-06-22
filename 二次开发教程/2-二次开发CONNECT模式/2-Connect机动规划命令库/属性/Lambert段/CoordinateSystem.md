# CoordinateSystem

## 作用

设置坐标系

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.CoordinateSystem {Value}
```

## 示例

::: details open **设置坐标系为 Moon J2000**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.CoordinateSystem "CentralBody/Moon J2000"
```
:::
