# CoordType

## 作用

设置坐标方式

## 语法

```
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.CoordType <Value>
```

## 补充说明

- `Value` 包括属性 `Cartesian` 和 `Spherical`

## 示例

::: details open **设置坐标方式为 Cartesian**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.CoordType Cartesian
```
:::
