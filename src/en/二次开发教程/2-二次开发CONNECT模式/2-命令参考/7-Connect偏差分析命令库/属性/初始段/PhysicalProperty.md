# PhysicalProperty

## Description

Sets the spacecraft parameters for the initial state

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.{PhysicalProperty} <Value> <Unit>
```

## Parameters

| Parameter | Description |
| --- | --- |
| Dry Mass | The default unit of spacecraft dry mass is kg; supported units include kg, g, mg; use `DryMass` to set the attribute |
| Drag Coefficient (Cd) | The spacecraft atmospheric drag coefficient; use `Cd` to set the attribute |
| Drag Area | The unit is the square of the current Connect distance unit; $m^2$, $cm^2$, and other units may be appended; use `DragArea` to set the attribute |
| Solar Radiation Pressure (Spherical) Coefficient (Cr) | The spacecraft solar radiation pressure coefficient; use `Cr` to set the attribute |
| Solar Radiation Pressure (Spherical) Area | The unit is the square of the current Connect distance unit; $m^2$, $cm^2$, and other units may be appended; use `SRPArea` to set the attribute |
| Fuel Mass | The default unit of spacecraft fuel mass is kg; supported units include kg, g, mg; use `FuelMass` to set the attribute |

## Examples

::: details open **Set the fuel mass of the initial state**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.FuelMass 200 kg
```
:::
