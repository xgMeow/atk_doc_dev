# SetState SimpleAscent

## Description

Set the launch vehicle's simple vertical ascent state.

## Syntax

```atk-command
SetState <LVObjectPath> SimpleAscent {StartTime} [{StopTime}] <StepSize> Geodetic <LaunchLat> <LaunchLon> <LaunchAlt> <BurnoutVelocity> <BurnoutLat> <BurnoutLon> <BurnoutAlt>
```

## Examples

::: details open **Set the launch vehicle's simple vertical ascent state**
```
SetState */LaunchVehicle/LaunchVehicle1 SimpleAscent "1 Oct 2000 05:00:00.00" 60.0 Geodetic 28 -80 0 7.7 44 -3.5 300
```
:::
