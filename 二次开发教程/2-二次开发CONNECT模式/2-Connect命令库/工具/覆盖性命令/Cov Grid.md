# Cov Grid

作用：定义覆盖定义对象网格

用法：

```
Cov <CovDefnObjectPath> Grid {GridOption} <Parameters>
```
`{GridOption} <Parameters>`说明：

- `AreaOfInterest Global` 
 
- `AreaOfInterest LatLonRegion <MinLat> <MinLon> <MaxLat> <MaxLon>` 
 
- `AreaOfInterest LatBounds <MinLat> <MaxLat>`

- `AreaOfInterest LatLine <MinLon> <MaxLon> <LatLine>` 
 
- `AreaOfInterest LonLine <MinLat> <MaxLat> <LatLine>` 
 
- `PointGranularity LatLon <Degree>`

- `PointGranularity Distance <DistanceValue>`

- `PointGranularity Area <AreaValue>`

- `PointAltitude <AltitudeValue>`

::: note 举例
```
Cov */CoverageDefinition/CoverageDefinition1 Grid AreaOfInterest LatLonRegion 12 23 34 45
```
:::
