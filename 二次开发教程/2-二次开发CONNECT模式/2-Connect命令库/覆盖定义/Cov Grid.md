# Cov Grid
 

作用：设置覆盖定义网格

::: note 用法
```
Cov <CovDefnObjectPath> Grid {GridOption} <Parameters>
```
:::

::: info 说明
| GridOptions       | Parameters |
| ----------------  | ---------- |
| AreaOfInterest    | `Global`     |
| AreaOfInterest    | `LatLonRegion <MinLat>  <MinLon> <MaxLat> <MaxLon>` |
| AreaOfInterest    | `LatBounds  <MinLat> <MaxLat>`              |
| AreaOfInterest    | `LonLine <MinLat> <MaxLat> <Lon>`           |
| AreaOfInterest    | `LatLine <StartLon>  <StopLon> <Latitude>`  |
| PointGranularity  | `Area  <AreaValue>`                        |
| PointGranularity  | `Distance  <DistanceValue>`                | 
| PointGranularity  | `LatLon  <Degree>`                         | 
| PointAltitude     | `{AltitudeType}  <AltitudeValue>` |

- `{AltitudeType}`包括 `Radius`, `Altitude`, `AltAboveTerrain`, `AltAboveMSL`
:::

::: tip 举例
```
Cov */CoverageDefinition/CoverageDefinition1 Grid AreaOfInterest LatBounds 30 45
```
:::
