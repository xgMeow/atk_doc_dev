# Cov Grid

## 作用

设置覆盖定义网格。

## 语法

```atk-command
Cov <CovDefnObjectPath> Grid {GridOption} <Parameters>
```

## 参数说明

| 参数 | 说明 |
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

### AltitudeType 取值

| 取值 |
| ---- |
| `Radius` |
| `Altitude` |
| `AltAboveTerrain` |
| `AltAboveMSL` |

## 示例

::: details open **设置覆盖定义网格**
```
Cov */CoverageDefinition/CoverageDefinition1 Grid AreaOfInterest LatBounds 30 45
```
:::
