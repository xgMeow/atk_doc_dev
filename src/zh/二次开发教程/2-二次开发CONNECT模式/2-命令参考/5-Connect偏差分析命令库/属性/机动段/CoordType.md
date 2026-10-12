# CoordType

## 作用

设置坐标方式

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.CoordType <Value>
```

## 补充说明

- `Value` 包括属性 `Cartesian` 和 `Spherical`

## 示例

::: details open **设置坐标方式为 Cartesian**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.CoordType Cartesian
```
:::
