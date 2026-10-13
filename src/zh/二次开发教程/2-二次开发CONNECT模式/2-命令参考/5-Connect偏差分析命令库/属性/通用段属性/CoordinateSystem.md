---
description: 为段选择坐标系。
---

# CoordinateSystem

## 作用

为段选择坐标系。

## 语法

```atk-command
AstroUQ <Satellite Object Path> SetValue <Attribute Path>.CoordinateSystem {Coordinate System}
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |

`{Coordinate System}` 取值：

- `Coordinate System` 包括 `CentralBody` 和 `Satellite`。
- `CentralBody/CentralBodyName.PointName AxesName` 中 `CentralBodyName` 包括 `Mercury`、`Venus`、`Earth`、`Mars`、`Jupiter`、`Saturn`、`Uranus`、`Neptune`、`Pluto`、`Moon`。
- `CentralBody/CentralBodyName.PointName AxesName` 中 `PointName` 包括 `L1`、`L2`、`L3`、`L4`、`L5`，可不输入 `Point`，默认为 `Center`。
- `CentralBody/CentralBodyName.PointName AxesName` 中 `AxesName` 包括已定义 Axes `Fixed`、`FixedAtJ2000`、`ICRF`、`Inertial`、`J2000`、`L1`、`L2`、`L3`、`L4`、`L5`、`MOD`、`MODEc`、`MOJ2000`、`MOJ2000Ec`、`TEME`、`TOD`、`TODeC`、`TOJ2000`、`TOJ2000Ec`；预定义 Axes 请根据输入名称命名。
- `Satellite/SatelliteName AxesName` 中 `AxesName` 包括已定义 Axes `ICR`、`ICRCBF`、`ICRF`、`J2000`、`LVLH`、`LVLHCBF`、`VNC`、`VNCCBF`、`VNCEarth`、`VNCMars`、`VNCMoon`、`LVLHEarth`、`LVLHMars`、`LVLHMoon`；预定义 Axes 请根据输入名称命名。

::: info 注意
坐标系名字必须包含类名（`CentralBody` 或者 `Satellite` 等）和 `/`。
:::

## 适用段

Lambert 段、初始段

## 示例

::: details open **设置 CentralBody 坐标系**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "CentralBody/Mars Fixed"
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "CentralBody/Mars.L1 Fixed"
```
:::

::: details open **设置 Satellite 坐标系**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "Satellite/Satellite1 VVLH"
```
:::
