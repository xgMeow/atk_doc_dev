# Set Position

## Description

Set the facility position properties.

## Syntax

```atk-command
SetPosition <ObjectPath> [{Type}] {CoordType} <Parameters>
```

## Parameters

| Parameter | Description |
| --------- | --------------------------- |
| `Cartesian` | `<X> <Y> <Z>`, inputs default to m |
| `Geodetic` | `<Lat> <Lon> {<Altitude> \| Terrain} [MSL]`, currently only latitude, longitude, and altitude are supported |

## Examples

::: details open **Set a geodetic position**
```
SetPosition */Facility/Facility1 Geodetic 37.9 -75.5 0.0
```
:::
