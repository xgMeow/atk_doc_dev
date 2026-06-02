# OrbitWizard

作用：使用轨道向导选项定义卫星

用法：
```
OrbitWizard <VehObjectPath> {Type} [{Options}]
```

说明：

`{Type}`包括:

`Circular`, `CriticallyInclined`, `CriticallyInclinedSunSync`, `Geosynchronous`, `Molniya`, `RepeatingGroundTrace`, `RepeatingSunSync`, `SunSynchronous`, `OrbitDesigner`, `SatelliteSubPoint`, `RepeatingSatelliteSubPoint`


::: details Options选项设置（点击展开）

|`{Type}`   |  `[{Options}]` |
|:---       |:---           |
| `Circular`| `{Color {Color} \| TimePeriod {TimeInterval} \| Inclination <Value> \| Altitude <Value> \| RAAN<Value>}` |
|`CriticallyInclined`| `{Color {Color} \| TimePeriod {TimeInterval} \| Direction {Posigrade \| Retrograde} \| ApogeeAltitude <Value> \| PerigeeAltitude <Value> \| LAN <Deg>}` |
|`CriticallyInclinedSunSync`|`{Color {Color} \| TimePeriod {TimeInterval} \| PerigeeAltitude <Value> \| LAN <Value>}` |
| `Geosynchronous`               | `{Color {Color} \| TimePeriod {TimeInterval} \| SubSatellitePoint  <Deg> \| Inclination <Deg>}` |
| `Molniya`                      | `{Color {Color} \| TimePeriod {TimeInterval} \| Ap- ogeeLongitude  <Value> \| PerigeeAltitude <Value> \| ArgumentOfPerigee  <Value>}` |
| `RepeatingGroundTrace`         | `{Color {Color} \| TimePeriod {TimeInterval} \| Ap- proxAltitude  <Value> \| ApproxRevsPerDay  <Value> \|  Inclination <Value> \|  RevsToRepeat  <Value> \|  LongitudeFirstAN <Value>}` |
| `RepeatingSunSync`             | `{Color {Color} \| Timeperiod {TimeInterval} \| Ap-  proxAltitude <Value> \| ApproxRevsPerDay <Value> \|  RevsToRepeat <Value> \|Longi-  tudeFirstAN  <Value> \| LocalTimeAscNode <Value> \| LocalTimeDescNode  <Value> }` |
| `SunSynchronous`               | `{Color {Color} \| TimePeriod {TimeInterval} \| In- clination  <Value> \| Altitude <Value> \| Local-  timeAscNode <Value> \|  LocalTimeDescNode  <Value>}` |
| `OrbitDesigner`                | `{Color {Color} \| TimePeriod {TimeInterval} \|    SemimajorAxis <Dist> \|  Eccentricity <Value> \| Inclination  <Deg> \| ArgumentOfPerigee <Deg> \|RAAN<Deg>\| TrueAnomaly<Deg>}` |
| `SatelliteSubPoint`            | `{ Color {Color} \| TimePeriod  {TimeInterval}\| Direction{Posigrade \|  Retrograde} \| OrbitAlti-   tude<Value> \| Inclination<Value> \| Lati-  tude<Value> \|  Longitude<Value>}` |
| `RepeatingSatelliteSubPoint` | `{ Color {Color} \| TimePeriod  {TimeInterval}\|  Direction{Posigrade \|  Retrograde} \| Inclina-  tion<Value> \| Latitude<Value> Longitude<Value> ApproxImateAltitude<Value> \| ApproxImateR-  evsPerDay<Value> \|  NumberOfRevsToRe-  peat<Value>}` |

:::

举例：
```
OrbitWizard */Satellite/Satellite1 Circular Color Yellow TimePeriod "27 Dec 2024 00:00:00.000" "28 Dec 2024 00:00:00.000" Inclination 50 Altitude 1200000 RAAN 1
```
