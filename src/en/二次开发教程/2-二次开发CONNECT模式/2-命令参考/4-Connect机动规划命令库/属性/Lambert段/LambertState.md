# LambertState

## Description

Set the position/velocity attribute values for the Lambert segment coordinate type.

## Syntax

```atk-command
Astrogator <Satellite Object Path> SetValue <Astrogator ObjectPath>.LambertTarget.<CoordinateType>.<Element> <Value> <Unit>
```

::: details Detailed Description of Attribute Settings (click to expand)

- When `<CoordinateType>` is `"Cartesian"`

| Element | Description |
| ------- | ---- |
| X       | Default unit is m; supported units: m, km |
| Y       | Default unit is m; supported units: m, km |
| Z       | Default unit is m; supported units: m, km |
| Vx      | Default unit is m/sec; supported units: m/sec, km/sec |
| Vy      | Default unit is m/sec; supported units: m/sec, km/sec |
| Vz      | Default unit is m/sec; supported units: m/sec, km/sec |

- When `<CoordinateType>` is `"Keplerian"`

| Element | Description |
| ------- | ---- |
| Sma     | Semi-major axis. Default unit is m; supported units include km and m; use sma when setting the attribute |
| Ecc     | Eccentricity |
| Inc     | Inclination, default unit rad |
| RAAN    | Right ascension of the ascending node, default unit rad |
| W       | Argument of periapsis, default unit rad |
| TA      | True anomaly, default unit rad |

:::

## Examples

::: details open **Set the Cartesian X coordinate of the Lambert state**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.LambertState.Cartesian.X 6700000 m
```
:::
