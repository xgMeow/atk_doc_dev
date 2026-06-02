# WalkerCustom

- 作用：创建WalkerCustom星座
- 用法： 
```
（1）WalkerCustom / {WalkerCustomOptions} [{AdditionalOptions}]
（2）WalkerCustom <SatObjectPath> Semimajoraxis <Value> Eccentricity <Value> Inclination <Value> RAAN <Value> ArgumentOfPerigee <Value> TureAnomaly <Value> {WalkerCustomOptions}
```
- 说明：

| WalkerCustomOptions          | Options                  |
| --------------------------   | ---------------------------- |
| `NumPlanes`        | `<num> `      |
| `TotalNumSats` | `<num>` |
| `InterPlaneTrueAnomalyIncrement`           | `<Value> `            |
| `RAANIncrement`           | `<Value> `            |
| `ColorByPlane`           | `{Yes \| No}`             |


::: note 举例
```
（1）WalkerCustom */Satellite/Satellite1 NumPlanes 2 TotalNumSats 20 InterPlaneTrueAnomalyIncrement 20 RAANIncrement 20 ColorByPlane Yes
（2）WalkerCustom / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 NumPlanes 2 TotalNumSats 20 InterPlaneTrueAnomalyIncrement 20 RAANIncrement 20 ColorByPlane Yes
```
:::
