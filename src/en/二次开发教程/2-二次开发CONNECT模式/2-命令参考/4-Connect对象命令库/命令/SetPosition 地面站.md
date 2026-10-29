---
groups: [Facility]
---

# SetPosition

## Description

Set the facility position properties.

## Syntax

```atk-command
SetPosition <ObjectPath> [{Type}] {CoordType} <Parameters>
```

## Parameters

| Parameter | Description |
| --------- | --------------------------- |
| `Cartesian` | `<X> <Y> <Z>`; the unit is determined by the current Connect `Distance` unit setting |
| `Geodetic` | `<Lat> <Lon> {<Altitude> \| Terrain} [MSL]`, currently only latitude, longitude, and altitude are supported |

## Examples

::: details open **Set a geodetic position**
```
SetPosition */Facility/Facility1 Geodetic 37.9 -75.5 0.0
```
:::
