# CoordSystem

## Description

Set the **coordinate system** property value of the segment constraint.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.Results.{Result}.CoordSystem {Value}
```

## Additional Notes

- `Coordinate System` includes `CentralBody` and `Satellite`
- In `CentralBody/CentralBodyName.PointName AxesName`, `CentralBodyName` includes `Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`, `Pluto`, `Moon`
- In `CentralBody/CentralBodyName.PointName AxesName`, `PointName` includes `L1`, `L2`, `L3`, `L4`, `L5`; if `Point` is not entered, it defaults to `Center`
- In `CentralBody/CentralBodyName.PointName AxesName`, `AxesName` includes the defined axes `Fixed`, `FixedAtJ2000`, `ICRF`, `Inertial`, `J2000`, `L1`, `L2`, `L3`, `L4`, `L5`, `MOD`, `MODEc`, `MOJ2000`, `MOJ2000Ec`, `TEME`, `TOD`, `TODeC`, `TOJ2000`, `TOJ2000Ec`; for user-defined axes, name them according to the entered name
- In `Satellite/SatelliteName AxesName`, `AxesName` includes the defined axes `ICR`, `ICRCBF`, `ICRF`, `J2000`, `LVLH`, `LVLHCBF`, `VNC`, `VNCCBF`, `VNCEarth`, `VNCMars`, `VNCMoon`, `LVLH`, `LVLHCBF`, `LVLHEarth`, `LVLHMars`, `LVLHMoon`; for user-defined axes, name them according to the entered name

## Examples

::: details open **Set the coordinate system of the X-direction constraint**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Target_Sequence.SegmentList.Propagate.Results.X.CoordSystem "CentralBody/Moon.L1 Fixed"
```
:::
