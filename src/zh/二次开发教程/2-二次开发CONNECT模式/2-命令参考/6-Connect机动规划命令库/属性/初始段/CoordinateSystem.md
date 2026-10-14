# CoordinateSystem

## 作用

为初始段选择坐标系

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.CoordinateSystem { Coordinate System }
```

## 补充说明

- `Coordinate System` 包括 `CentralBody` 和 `Satellite`
- `CentralBody/CentralBodyName.PointName AxesName` 中`CentralBodyName`包括 `Mercury` , `Venus`, `Earth`,`Mars`,`Jupiter`,`Saturn`,`Uranus`,`Neptune`,`Pluto`,`Moon`
- `CentralBody/CentralBodyName.PointName AxesName` 中 `PointName`包括`L1`,`L2`,`L3`,`L4`,`L5`,可不输入`Point`,默认为 `Center`
- `CentralBody/CentralBodyName.PointName AxesName` 中 `AxesName` 包括已定义Axes `Fixed`, `FixedAtJ2000`, `ICRF`, `Inertial`, `J2000`, `L1`, `L2`, `L3`, `L4`, `L5`, `MOD`, `MODEc`, `MOJ2000`, `MOJ2000Ec`, `TEME`, `TOD`, `TODeC`, `TOJ2000`, `TOJ2000Ec`; 预定义Axes请根据输入名称命名
- `Satellite/SatelliteName AxesName` 中 `AxesName`包括已定义Axes `ICR`, `ICRCBF`, `ICRF`, `J2000`, `LVLH`, `LVLHCBF`, `VNC`, `VNCCBF`, `VNCEarth`, `VNCMars`, `VNCMoon`, `LVLH`, `LVLHCBF`, `LVLHEarth`, `LVLHMars`, `LVLHMoon`; 预定义Axes请根据输入名称命名

::: info 注意
坐标系名字必须包含类名（`CentralBody` 或者 `Satellite` 等）和`/ `
:::

## 示例

::: details open **为初始段设置 CentralBody 坐标系**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "CentralBody/Mars Fixed"
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "CentralBody/Mars.L1 Fixed"
```
:::

::: details open **为初始段设置 Satellite 坐标系**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "Satellite/Satellite1 VVLH"
```
:::
