# OrbitWizard

## Description

Defines a satellite using the orbit wizard options.

## Syntax

```atk-command
OrbitWizard <VehObjectPath> {Type} [{Options}]
```

## Parameters

`{Type}` includes: `Circular`, `CriticallyInclined`, `CriticallyInclinedSunSync`, `Geosynchronous`, `Molniya`, `RepeatingGroundTrace`, `RepeatingSunSync`, `SunSynchronous`, `OrbitDesigner`, `SatelliteSubPoint`, `RepeatingSatelliteSubPoint`

::: details Option Settings (click to expand)

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

## Examples

::: details open **Define a Satellite Using Orbit Wizard Options**
```
OrbitWizard */Satellite/Satellite1 Circular Color Yellow TimePeriod "27 Dec 2024 00:00:00.000" "28 Dec 2024 00:00:00.000" Inclination 50 Altitude 1200000 RAAN 1
```
:::
