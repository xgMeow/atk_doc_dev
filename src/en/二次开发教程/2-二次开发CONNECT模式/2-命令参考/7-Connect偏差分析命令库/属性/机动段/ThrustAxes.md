# ThrustAxes

## Description

Sets the thrust axes.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.ThrustAxes <Value>
```

::: info Note
Getting this attribute value is not supported yet.
:::

## Examples

::: details open **Set the Thrust Axes to VNC(Earth)**
```
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.ImpulsiveMnvr.ThrustAxes "Satellite/Satellite1 VNC(Earth)"
```
:::
