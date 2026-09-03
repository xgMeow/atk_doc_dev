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
| `X` | The default unit is m; supported units are m, km |
| `Y` | The default unit is m; supported units are m, km |
| `Z` | The default unit is m; supported units are m, km |
| `Vx` | The default unit is m/sec; supported units are m/sec, km/sec |
| `Vy` | The default unit is m/sec; supported units are m/sec, km/sec |
| `Vz` | The default unit is m/sec; supported units are m/sec, km/sec |

## Examples

::: details open **Set the Cartesian X component value for the initial state**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Cartesian.X 6700000 m
```
:::
