## Rosette

- 作用：创建Rosette星座
- 用法： 
```
（1）Rosette / {RosetteOptions} [{AdditionalOptions}]
（2）Rosette <SatObjectPath> Semimajoraxis <Value> Eccentricity <Value> Inclination <Value> RAAN <Value> ArgumentOfPerigee <Value> TureAnomaly <Value> {RosetteOptions}
```
- 说明：

| WalkerCustomOptions          | Options                  |
| --------------------------   | ---------------------------- |
| `NumPlanes`        | `<num> `      |
| `TotalNumSats` | `<num>` |
| `Molecule`           | `<Value> `            |
| `ColorByPlane`           | `{Yes \| No}`             |


::: note 举例
```
（1）Rosette */Satellite/Satellite1 NumPlanes 20 TotalNumSats 20 Molecule 1 ColorByPlane Yes
（2）Rosette / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180  
NumPlanes 20 TotalNumSats 20 Molecule 1 ColorByPlane Yes
```
:::
