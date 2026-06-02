# Flower

- 作用：创建Flower星座
- 用法： 
```
（1）Flower / {FlowerOptions} [{AdditionalOptions}]
（2）Flower <SatObjectPath> Semimajoraxis <Value> Eccentricity <Value> Inclination <Value> RAAN <Value> ArgumentOfPerigee <Value> TureAnomaly <Value> {FlowerOptions}
```
- 说明：

| FlowerOptions          | Options                  |
| --------------------------   | ---------------------------- |
| `TotalNumSats` | `<num>` |
| `InterPlaneTrueAnomalyIncrement`           | `<Value> `            |
| `ReturnCircle`           | `<Value> `            |
| `ReturnDay`           | `<Value> `            |
| `PhaseDensity`           | `<Value> `            |
| `RAANSpread`           | `<Value> `            |
| `ColorByPlane`           | `{Yes \| No}`             |


::: note 举例
```
（1）Flower */Satellite/Satellite1 TotalNumSats 16 InterPlanePhaseIncrement 1 ReturnCircle 16 ReturnDay 1 PhaseDensity 16 RAANSpread 360 ColorByPlane Yes
（2）Flower / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 TotalNumSats 16 InterPlanePhaseIncrement 1 ReturnCircle 16 ReturnDay 1 PhaseDensity 16 RAANSpread 360 ColorByPlane Yes
```
:::
