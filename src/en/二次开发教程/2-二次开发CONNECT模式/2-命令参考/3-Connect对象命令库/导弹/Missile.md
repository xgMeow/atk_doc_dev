# Missile

## Description

Set the missile trajectory using ballistics.

## Syntax

```atk-command
Missile <ObjectPath> Trajectory {TimeValue} <StepSize> LnLatGeoD <GeodeticLatitude> <Longitude> <Altitude> {TrajOption} <Value> ImLatGeoD <GeodeticLatitude> <Longitude> <Altitude>
```

## Parameters

| Parameter | Description |
| -------------- | ------------------- |
| `TOF`            | `<FlightDuration>`  |
| `DeltaV`         | `<DeltaV>`          |
| `ApogeeAlt`      | `<ApogeeAltitude>`  |
| `DeltaVMinEcc`   | `<DeltaV>`          |

## Examples

::: details open **Set the missile trajectory using ballistics**
```
Missile */Missile/Missile1 Trajectory "1 Jun 2000 00:00:00.00" 60.0 LnLatGeod 27 -81 0.0 TOF 5086 ImLatGeod 24 -14 0.0
```
:::
