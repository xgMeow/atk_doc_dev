# CoordSystem

## 作用

设置段约束的**坐标系**属性值。

## 语法

```
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.CoordSystem {Value}
```

## 补充说明

- `Coordinate System` 包括 `CentralBody` 和 `Satellite`
- `CentralBody/CentralBodyName.PointName AxesName` 中 `CentralBodyName` 包括 `Mercury`、`Venus`、`Earth`、`Mars`、`Jupiter`、`Saturn`、`Uranus`、`Neptune`、`Pluto`、`Moon`
- `CentralBody/CentralBodyName.PointName AxesName` 中 `PointName` 包括 `L1`、`L2`、`L3`、`L4`、`L5`，可不输入 `Point`，默认为 `Center`
- `CentralBody/CentralBodyName.PointName AxesName` 中 `AxesName` 包括已定义 Axes `Fixed`、`FixedAtJ2000`、`ICRF`、`Inertial`、`J2000`、`L1`、`L2`、`L3`、`L4`、`L5`、`MOD`、`MODEc`、`MOJ2000`、`MOJ2000Ec`、`TEME`、`TOD`、`TODeC`、`TOJ2000`、`TOJ2000Ec`；预定义 Axes 请根据输入名称命名
- `Satellite/SatelliteName AxesName` 中 `AxesName` 包括已定义 Axes `ICR`、`ICRCBF`、`ICRF`、`J2000`、`LVLH`、`LVLHCBF`、`VNC`、`VNCCBF`、`VNCEarth`、`VNCMars`、`VNCMoon`、`LVLH`、`LVLHCBF`、`LVLHEarth`、`LVLHMars`、`LVLHMoon`；预定义 Axes 请根据输入名称命名

## 示例

::: details open **设置 X 方向约束的坐标系**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.X.CoordSystem "CentralBody/Moon.L1 Fixed"
```
:::
