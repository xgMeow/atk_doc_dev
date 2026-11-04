# LambertState

## Description

Set the position/velocity attribute values for the Lambert segment coordinate type.

## Syntax

```atk-command
AstroUQ <Satellite Object Path> SetValue <AstroUQ ObjectPath>.LambertTarget.<CoordinateType>.<Element> <Value> <Unit>
```

::: details Detailed Description of Attribute Settings (click to expand)

- When `<CoordinateType>` is `"Cartesian"`

| Element | Description |
| ------- | ---- |
| X       | The unit follows the current Connect `Distance` unit setting; km, m, and other units may be appended |
| Y       | The unit follows the current Connect `Distance` unit setting; km, m, and other units may be appended |
| Z       | The unit follows the current Connect `Distance` unit setting; km, m, and other units may be appended |
| Vx      | The unit is the ratio of the current Connect distance unit to the time unit; km/sec and other units may be appended |
| Vy      | The unit is the ratio of the current Connect distance unit to the time unit; km/sec and other units may be appended |
| Vz      | The unit is the ratio of the current Connect distance unit to the time unit; km/sec and other units may be appended |

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
AstroUQ */Satellite/Satellite1 SetValue MainSequence.SegmentList.LambertTarget.LambertState.Cartesian.X 6700000 m
```
:::
