# CoordinateSystem

## Description

Selects the coordinate system for the initial state

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.CoordinateSystem { Coordinate System }
```

## Additional Notes

- `Coordinate System` includes `CentralBody` and `Satellite`
- In `CentralBody/CentralBodyName.PointName AxesName`, `CentralBodyName` includes `Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`, `Moon`
- In `CentralBody/CentralBodyName.PointName AxesName`, `PointName` includes `L1`, `L2`, `L3`, `L4`, `L5`. `Point` may be omitted; the default is `Center`
- In `CentralBody/CentralBodyName.PointName AxesName`, `AxesName` includes the predefined Axes `Fixed`, `FixedAtJ2000`, `ICRF`, `Inertial`, `J2000`, `L1`, `L2`, `L3`, `L4`, `L5`, `MOD`, `MODEc`, `MOJ2000`, `MOJ2000Ec`, `TEME`, `TOD`, `TODeC`, `TOJ2000`, `TOJ2000Ec`; name user-defined Axes according to the input name
- In `Satellite/SatelliteName AxesName`, `AxesName` includes the predefined Axes `ICR`, `ICRCBF`, `ICRF`, `J2000`, `LVLH`, `LVLHCBF`, `VNC`, `VNCCBF`, `VNCEarth`, `VNCMars`, `VNCMoon`, `LVLH`, `LVLHCBF`, `LVLHEarth`, `LVLHMars`, `LVLHMoon`; name user-defined Axes according to the input name

::: info Note
The coordinate system name must contain the class name (`CentralBody` or `Satellite`, etc.) and `/ `
:::

## Examples

::: details open **Set a CentralBody coordinate system for the initial state**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "CentralBody/Mars Fixed"
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "CentralBody/Mars.L1 Fixed"
```
:::

::: details open **Set a Satellite coordinate system for the initial state**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.CoordinateSystem "Satellite/Satellite1 VVLH"
```
:::
