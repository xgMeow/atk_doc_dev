---
groups: [Missile]
---

# RealisticBallistic

## Description

Sets the trajectory parameters of a ballistic missile.

## Syntax

```atk-command
RealisticBallistic <MissileObjectPath> Trajectory MissileType {LRM | MRM | SRM} <TimeValue> <StepSize> LnLatGeoD <LaunchLat> <LaunchLon> <LaunchAlt> ImLatGeoD <ImLat> <ImLon> <ImAlt>
```

## Additional Notes

The table below describes the command parameters.

| Parameter | Description |
|------|------|
| `<MissileObjectPath>` | Full path of the missile object, written in full from the scenario `*`, such as `*/Missile/Missile1`; for the path notation, see [Command Syntax Conventions](../../1-命令语法约定.md) |
| `Trajectory` | Keyword indicating that the missile trajectory is set by ballistic trajectory |
| `MissileType` | Switch keyword for the missile type; it must be followed immediately by the missile type value |
| `{LRM \| MRM \| SRM}` | Missile type; see the table below for the values |
| `<TimeValue>` | Start epoch of the trajectory; the unit is determined by the current Connect `Date` unit setting |
| `<StepSize>` | Step size of the trajectory; the unit is determined by the current Connect `Time` unit setting |
| `LnLatGeoD` | Keyword for the launch point of the trajectory; it must be followed by `<LaunchLat>`, `<LaunchLon>`, and `<LaunchAlt>` in that order |
| `<LaunchLat>`, `<LaunchLon>` | Geodetic latitude and longitude of the launch point; the unit is determined by the current Connect `Angle` unit setting |
| `<LaunchAlt>` | Altitude of the launch point; the unit is determined by the current Connect `Distance` unit setting |
| `ImLatGeoD` | Keyword for the impact point of the trajectory, written in the same way as `LnLatGeoD`; it must be followed by `<ImLat>`, `<ImLon>`, and `<ImAlt>` in that order |
| `<ImLat>`, `<ImLon>` | Geodetic latitude and longitude of the impact point; the unit is determined by the current Connect `Angle` unit setting |
| `<ImAlt>` | Altitude of the impact point; the unit is determined by the current Connect `Distance` unit setting |

The values of `MissileType` are as follows.

| `Value` | Description |
|------|------|
| `LRM` | Long-range ballistic missile |
| `MRM` | Medium-range ballistic missile |
| `SRM` | Short-range ballistic missile |

Notes:

- Parameters that carry units do not have fixed units; their units are determined by the current Connect unit settings: enter `<TimeValue>` in `Date` units, `<StepSize>` in `Time` units, latitude and longitude in `Angle` units, and altitude in `Distance` units. For the units available for each quantity, see [Common Unit Formats](../../2-参数值格式/单位格式.md).
- `<TimeValue>` contains spaces, so it must be enclosed in double quotes as a whole, such as `"5 Aug 2026 06:02:00.00"`; for the date-time notation, see [Date/Time Formats](../../2-参数值格式/日期时间格式.md).
- The parameter order must follow the syntax definition strictly and cannot be changed; neither the `LnLatGeoD` nor the `ImLatGeoD` position parameter group may be omitted.

## Examples

::: details open **Set the trajectory parameters of a medium-range ballistic missile**

```
RealisticBallistic */Missile/Missile1 Trajectory MissileType MRM "5 Aug 2026 06:02:00.00" 20.0 LnLatGeoD 12 -63 1.0 ImLatGeoD 26 -15 0.2
```

- `*/Missile/Missile1`: full path of the missile object
- `Trajectory`: keyword indicating that the missile trajectory is set by ballistic trajectory
- `MissileType`: switch keyword for the missile type
- `MRM`: missile type value, medium-range ballistic missile
- `"5 Aug 2026 06:02:00.00"`: start epoch of the trajectory; the string contains spaces, so it must be enclosed in double quotes
- `20.0`: step size of the trajectory; the unit is determined by the current Connect `Time` unit setting
- `LnLatGeoD 12 -63 1.0`: launch point of the trajectory, in the order geodetic latitude 12, longitude -63, and altitude 1.0
- `ImLatGeoD 26 -15 0.2`: impact point of the trajectory, in the order geodetic latitude 26, longitude -15, and altitude 0.2

:::
