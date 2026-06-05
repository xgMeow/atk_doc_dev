# Cov Grid

## 作用

定义**覆盖定义对象**网格

## 语法

```
Cov <CovDefnObjectPath> Grid {GridOption} <Parameters>
```

## 补充说明

`{GridOption} <Parameters>` 说明：

- `AreaOfInterest Global`
- `AreaOfInterest LatLonRegion <MinLat> <MinLon> <MaxLat> <MaxLon>`
- `AreaOfInterest LatBounds <MinLat> <MaxLat>`
- `AreaOfInterest LatLine <MinLon> <MaxLon> <LatLine>`
- `AreaOfInterest LonLine <MinLat> <MaxLat> <LatLine>`
- `PointGranularity LatLon <Degree>`
- `PointGranularity Distance <DistanceValue>`
- `PointGranularity Area <AreaValue>`
- `PointAltitude <AltitudeValue>`

## 示例

::: details open **使用经纬度区域定义覆盖网格**
```
Cov */CoverageDefinition/CoverageDefinition1 Grid AreaOfInterest LatLonRegion 12 23 34 45
```
:::
