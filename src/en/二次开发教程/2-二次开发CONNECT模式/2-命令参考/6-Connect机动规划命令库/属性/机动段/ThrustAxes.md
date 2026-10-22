# ThrustAxes

## Description

Sets the thrust axes.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.ThrustAxes <Value>
```

::: info Note
Getting this attribute value is not supported yet.
:::

## Examples

::: details open **Set the Thrust Axes to VNC(Earth)**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.ThrustAxes "Satellite/Satellite1 VNC(Earth)"
```
:::
