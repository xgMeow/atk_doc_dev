## WalkerDelta

- 作用：创建WalkerDelta星座
- 用法： 
```
（1）WalkerDelta / {WalkerDeltaOptions} [{AdditionalOptions}]
（2）WalkerDelta <SatObjectPath> Semimajoraxis <Value> Eccentricity <Value> Inclination <Value> RAAN <Value> ArgumentOfPerigee <Value> TureAnomaly <Value> {WalkerDeltaOptions}
```
- 说明：

| WalkerDeltaOptions          | Options                  |
| --------------------------   | ---------------------------- |
| `NumPlanes`        | `<num> `      |
| `NumSatsPerPlane` | `<num>` |
| `InterPlanePhaseIncrement`           | `<Value> `            |
| `RAANSpread`           | `<Value> `            |
| `ColorByPlane`           | `{Yes \| No}`             |


::: note 举例
```
（1）WalkerDelta */Satellite/Satellite1 NumPlanes 2 NumSatsPerPlane 11 InterPlanePhaseIncrement 1 RAANSpread 360 ColorByPlane Yes
（2）WalkerDelta / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 NumPlanes 2 NumSatsPerPlane 8 InterPlanePhaseIncrement 1 RAANSpread 360 ColorByPlane Yes
```
:::
