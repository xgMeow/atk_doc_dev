# Coordinate Values

## 作用

设置坐标属性值

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.<Coordinate Type>.<Attribute> <Value> <Unit>
```

## 补充说明

- `Coordinate Type` 包括属性 `Cartesian` 和 `Spherical`。当 `Coordinate Type` 输入值为 `Cartesian` 时，`Attribute` 包括属性 `X`，`Y`，`Z`，当 `Coordinate Type` 输入值为 `Spherical` 时，`Attribute` 包括属性 `Azimuth`，`Elevation`，`Magnitude`

::: info 注意
1. `Cartesian` 三个分量为速度分量；`Spherical` 中 `Azimuth`、`Elevation` 为角度，`Magnitude` 为速度。速度取当前 Connect 的距离单位与时间单位之比，角度取 `Angle` 单位
2. 当 `MnvrType` 类型为 `Finite` 时，`Cartesian` 没有单位，`Spherical` 只包括属性 `Azimuth`，`Elevation`
:::

## 示例

::: details open **设置球坐标方位角为 30 度**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.Spherical.Azimuth 30 deg
```
:::
