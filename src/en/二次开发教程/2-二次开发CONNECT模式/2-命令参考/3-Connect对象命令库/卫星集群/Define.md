# Define

## Description

Add and set **satellite cluster** parameters.

## Syntax

```atk-command
Define <ObjectPath> Walker {Optional} <Parameters>
```

## Parameters

| Parameter | Description |
| ---------------------------- | ------------------------- |
| `Propagator <Propagator Name>` | Orbit propagator, supporting the two-body `TwoBody` and J2 `J2Perturbation` |
| `AddShell <Shell Name>` | Add Shell |
| `Type {Delta, Star, Custom}` | Constellation configuration type |
| `NumPlanes <num>` | Number of planes |
| `NumSatsPerPlane <num>` | Number of satellites per orbital plane |
| `InterPlaneOffset <Offset>` | Phase factor |
| `Epoch <epoch>` | Orbit epoch |
| `Semimajoraxis <a>` | Semi-major axis |
| `Eccentricity <e>` | Eccentricity |
| `Inclination <i>` | Orbit inclination |
| `RAAN <ra>` | Right ascension of the ascending node |
| `ArgumentOfPerigee <aop>` | Argument of perigee |
| `MeanAnomaly <ma>` | Mean anomaly |
| `ModifyShell <Shell Name>` | Modify Shell parameters |
| `ClearShells <Shell Name>` | Clear all Shells |
| `RemoveShell <Shell Name>` | Remove the specified Shell |

## Examples

::: details open **Define a Walker satellite cluster**
```
Define */SatelliteCollection/SatelliteCollection1 Walker Propagator TwoBody AddShell Shell1 numplanes 11 NumSatsPerPlane 2
```
:::
