---
description: Defines the sensor type and its parameters, supporting multiple sensor mode configurations such as Rectangular, Simple Cone, and Half Power.
---

# Define

## Description

Sets the sensor type and its parameters.

## Syntax

```atk-command
Define <SensorObjectPath> {Type} <TypeData>
```

## Parameters

| Type        | TypeData                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Rectangular | `<VerticalHalfAngle> <HorizontalHalfAngle>`                                                                                                 |
| SimpleCone  | `<ConeAngle>`                                                                                                                               |
| HalfPower   | `<Frequency> <Diameter>`                                                                                                                    |
| Conical     | `<InnerConeHalfAngle> <OuterConeHalfAngle> <MinClockAngle> <MaxClockAngle>`                                                                 |
| SAR         | `<MinElevationAngle> <MaxElevationAngle> <ForwardExclusionAngle> <AftExclusionAngle> {<ParentAltitude> \| TrackParentAltitude {On \| Off}}` |

::: warning Note
The default unit for input angle values is degrees.
:::

## Examples

::: details open **Define a Sensor**
```
Define */Satellite/Satellite1/Sensor/Sensor1 Rectangular 25.1 36.8
```
:::
