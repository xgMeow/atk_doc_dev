# Finite

## Description

Sets the finite thrust type attribute values.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator Object Path>.<Attributes ><Value>
```

## Parameters

| Parameter | Description |
| --------------------------------------- | ------------------------------|
| Maneuver segment-`ThrustAxes` (getting the attribute value is not supported yet) | For specific attribute value settings, see the maneuver segment settings |
| Maneuver segment-`CoordType` | For specific attribute value settings, see the maneuver segment settings |
| Maneuver segment-`Coordinate Values` | For specific attribute value settings, see the maneuver segment settings |
| Propagate segment-`Propagator` (getting the attribute value is not supported yet) | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`MaxPropTime` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`Stopping Conditions` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`Active` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`TripValue` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`Tolerance` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`Repeat Count` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`Condition` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`CentralBody` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`CoordSystem` | For specific attribute value settings, see the propagate segment settings |
| Propagate segment-`CalcObject` | For specific attribute value settings, see the propagate segment settings |

## Examples

::: details open **Disable the Duration Active Stopping Condition of the Finite Thrust Maneuver Segment**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Maneuver.FiniteMnvr.StoppingConditions.Duration.Active false
```
:::
