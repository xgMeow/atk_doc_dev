# PhysicalProperty

## Description

Sets the spacecraft parameters for the initial state

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.{PhysicalProperty} <Value> <Unit>
```

## Parameters

| Parameter | Description |
| --- | --- |
| Dry Mass | The default unit of spacecraft dry mass is kg; supported units include kg, g, mg; use `DryMass` to set the attribute |
| Drag Coefficient (Cd) | The spacecraft atmospheric drag coefficient; use `Cd` to set the attribute |
| Drag Area | The default unit of spacecraft atmospheric drag area is $m^2$; supported units include $m^2$, $cm^2$; use `DragArea` to set the attribute |
| Solar Radiation Pressure (Spherical) Coefficient (Cr) | The spacecraft solar radiation pressure coefficient; use `Cr` to set the attribute |
| Solar Radiation Pressure (Spherical) Area | The default unit of spacecraft solar radiation pressure area is $m^2$; supported units include $m^2$, $cm^2$; use `SRPArea` to set the attribute |
| Fuel Mass | The default unit of spacecraft fuel mass is kg; supported units include kg, g, mg; use `FuelMass` to set the attribute |

## Examples

::: details open **Set the fuel mass of the initial state**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.FuelMass 200 kg
```
:::
