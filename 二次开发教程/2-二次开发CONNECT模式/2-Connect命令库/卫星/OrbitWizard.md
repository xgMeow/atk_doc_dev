# OrbitWizard

## 作用

使用轨道向导选项定义卫星。

## 语法

```
OrbitWizard <VehObjectPath> {Type} [{Options}]
```

## 参数说明

`{Type}` 包括: `Circular`, `CriticallyInclined`, `CriticallyInclinedSunSync`, `Geosynchronous`, `Molniya`, `RepeatingGroundTrace`, `RepeatingSunSync`, `SunSynchronous`, `OrbitDesigner`, `SatelliteSubPoint`, `RepeatingSatelliteSubPoint`

::: details Options 选项设置（点击展开）

| `{Type}` | `[{Options}]` |
| :--- | :--- |
| `Circular` | `{Color {Color} \| TimePeriod {TimeInterval} \| Inclination <Value> \| Altitude <Value> \| RAAN<Value>}` |
| `CriticallyInclined` | `{Color {Color} \| TimePeriod {TimeInterval} \| Direction {Posigrade \| Retrograde} \| ApogeeAltitude <Value> \| PerigeeAltitude <Value> \| LAN <Deg>}` |
| `CriticallyInclinedSunSync` | `{Color {Color} \| TimePeriod {TimeInterval} \| PerigeeAltitude <Value> \| LAN <Value>}` |
| `Geosynchronous` | `{Color {Color} \| TimePeriod {TimeInterval} \| SubSatellitePoint <Deg> \| Inclination <Deg>}` |
| `Molniya` | `{Color {Color} \| TimePeriod {TimeInterval} \| ApogeeLongitude <Value> \| PerigeeAltitude <Value> \| ArgumentOfPerigee <Value>}` |
| `RepeatingGroundTrace` | `{Color {Color} \| TimePeriod {TimeInterval} \| ApproxAltitude <Value> \| ApproxRevsPerDay <Value> \| Inclination <Value> \| RevsToRepeat <Value> \| LongitudeFirstAN <Value>}` |
| `RepeatingSunSync` | `{Color {Color} \| Timeperiod {TimeInterval} \| ApproxAltitude <Value> \| ApproxRevsPerDay <Value> \| RevsToRepeat <Value> \| LongitudeFirstAN <Value> \| LocalTimeAscNode <Value> \| LocalTimeDescNode <Value>}` |
| `SunSynchronous` | `{Color {Color} \| TimePeriod {TimeInterval} \| Inclination <Value> \| Altitude <Value> \| LocaltimeAscNode <Value> \| LocalTimeDescNode <Value>}` |
| `OrbitDesigner` | `{Color {Color} \| TimePeriod {TimeInterval} \| SemimajorAxis <Dist> \| Eccentricity <Value> \| Inclination <Deg> \| ArgumentOfPerigee <Deg> \| RAAN<Deg> \| TrueAnomaly<Deg>}` |
| `SatelliteSubPoint` | `{Color {Color} \| TimePeriod {TimeInterval} \| Direction{Posigrade \| Retrograde} \| OrbitAltitude<Value> \| Inclination<Value> \| Latitude<Value> \| Longitude<Value>}` |
| `RepeatingSatelliteSubPoint` | `{Color {Color} \| TimePeriod {TimeInterval} \| Direction{Posigrade \| Retrograde} \| Inclination<Value> \| Latitude<Value> Longitude<Value> ApproxImateAltitude<Value> \| ApproxImateRevsPerDay<Value> \| NumberOfRevsToRepeat<Value>}` |

:::

## 示例

::: details open **使用轨道向导选项定义卫星**
```
OrbitWizard */Satellite/Satellite1 Circular Color Yellow TimePeriod "27 Dec 2024 00:00:00.000" "28 Dec 2024 00:00:00.000" Inclination 50 Altitude 1200000 RAAN 1
```
:::
