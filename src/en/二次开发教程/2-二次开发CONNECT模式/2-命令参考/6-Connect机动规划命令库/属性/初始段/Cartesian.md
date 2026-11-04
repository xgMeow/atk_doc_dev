# Cartesian

## Description

Sets the position and velocity attribute values for the Cartesian coordinate type of the initial state

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.Cartesian.<Element> <Value> <Unit>
```

## Parameters

| Parameter | Description |
| --- | --- |
| `X` | The unit follows the current Connect `Distance` unit setting; km, m, and other units may be appended |
| `Y` | The unit follows the current Connect `Distance` unit setting; km, m, and other units may be appended |
| `Z` | The unit follows the current Connect `Distance` unit setting; km, m, and other units may be appended |
| `Vx` | The unit is the ratio of the current Connect distance unit to the time unit; km/sec and other units may be appended |
| `Vy` | The unit is the ratio of the current Connect distance unit to the time unit; km/sec and other units may be appended |
| `Vz` | The unit is the ratio of the current Connect distance unit to the time unit; km/sec and other units may be appended |

## Examples

::: details open **Set the Cartesian X component value for the initial state**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Cartesian.X 6700000 m
```
:::
