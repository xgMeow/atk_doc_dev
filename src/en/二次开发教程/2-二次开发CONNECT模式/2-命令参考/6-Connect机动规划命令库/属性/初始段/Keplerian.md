# Keplerian

## Description

Sets the orbital element attribute values for the Keplerian coordinate type of the initial state

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.Keplerian.{Attribute} <Value> [{Unit}]
```

## Parameters

### Size Attributes

| Parameter | Description |
| --- | --- |
| Element type for Size | Use SizeType to set the attribute |
| `Semi-major Axis` | The default unit is m; supported units are km, m; use sma to set the attribute |
| `Apoapsis Radius` | The default unit is m; supported units are km, m; use ApoapsisRadSize to set the attribute |
| `Apoapsis Altitude` | The default unit is m; supported units are km, m; use ApoapsisAltSize to set the attribute |
| `Period` | The default unit is sec; supported units are sec, min, hr; use Period to set the attribute |
| `Mean Motion` | The default unit is rad/sec; supported units are rad/sec, rad/min; use MeanMotion to set the attribute |

### Shape Attributes

| Parameter | Description |
| --- | --- |
| Element type for Shape | Use ShapeType to set the attribute |
| `Eccentricity` | The eccentricity; use ecc to set the attribute |
| `Periapsis Altitude` | The default unit is m; use PeriapsisAltShape to set the attribute |
| `Periapsis Radius` | The default unit is m; use PeriapsisRadShape to set the attribute |

### Node Elements

| Parameter | Description |
| --- | --- |
| `Right Asc. of Asc. Node` | The default unit is rad; use RAAN to set the attribute |

### Anomaly Attributes

| Parameter | Description |
| --- | --- |
| Element type for Anomaly | The type; use AnomType to set the attribute |
| `True Anomaly` | The default unit is rad; use TA to set the attribute |
| `Argument of Latitude` | The default unit is rad; use ArgLat to set the attribute |
| `Eccentric Anomaly` | The default unit is rad; use EccAnomaly to set the attribute |
| `Mean Anomaly` | The default unit is rad; use MeanAnomaly to set the attribute |
| `Time Past Asc. Node` | The default unit is sec; use TimePastAN to set the attribute |
| `Time Past Periapsis` | The default unit is sec; use TimePastPeriapsis to set the attribute |

### Other Attributes

| Parameter | Description |
| --- | --- |
| `Inclination` | The default unit is rad; use inc to set the attribute |
| `Argument of Periapsis` | The default unit is rad; use w to set the attribute |

::: warning Note

1. You can use `SizeType`, `ShapeType` and `AnomType` to set the parameter type. If you only set the attribute value of a parameter, the type is selected automatically. For example, if you choose the `Mean Motion` type and set a value for `Semi-Major Axis`, the type will become `Semi-Major Axis`.

2. Keep the data correct. If you enter incorrect data, the data type cannot be converted. For example, if you enter `sma` as `6 m`, you must correct the data first — for example, change it to ` 6800000 m` — before it can be converted to the `ApoapsisRadSize` type.

:::

## Examples

::: details open **Set the Keplerian SizeType to Apoapsis Radius**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.SizeType "Apoapsis Radius"
```
:::

::: details open **Set the Keplerian semi-major axis value**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.InitialState.Keplerian.sma 8000 km
```
:::
