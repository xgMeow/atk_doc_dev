# Cov Grid

## Description

Sets the coverage definition grid.

## Syntax

```atk-command
Cov <CovDefnObjectPath> Grid {GridOption} <Parameters>
```

## Parameters

| Parameter | Description |
| ---- | ---- |
| `AreaOfInterest` | `Global` |
| `AreaOfInterest` | `LatLonRegion <MinLat> <MinLon> <MaxLat> <MaxLon>` |
| `AreaOfInterest` | `LatBounds <MinLat> <MaxLat>` |
| `AreaOfInterest` | `LonLine <MinLat> <MaxLat> <Lon>` |
| `AreaOfInterest` | `LatLine <StartLon> <StopLon> <Latitude>` |
| `PointGranularity` | `Area <AreaValue>` |
| `PointGranularity` | `Distance <DistanceValue>` |
| `PointGranularity` | `LatLon <Degree>` |
| `PointAltitude` | `{AltitudeType} <AltitudeValue>` |

### AltitudeType Values

| Value |
| ---- |
| `Radius` |
| `Altitude` |
| `AltAboveTerrain` |
| `AltAboveMSL` |

## Examples

::: details open **Set the coverage definition grid**
```
Cov */CoverageDefinition/CoverageDefinition1 Grid AreaOfInterest LatBounds 30 45
```
:::
