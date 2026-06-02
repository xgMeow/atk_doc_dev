# AsymmetricFlower

- 作用：创建AsymmetricFlower星座
- 用法： 
```
（1）AsymmetricFlower / { AsymmetricFlowerOptions} [{AdditionalOptions}]
（2）AsymmetricFlower <SatObjectPath> Semimajoraxis <Value> Eccentricity <Value> Inclination <Value> RAAN <Value> ArgumentOfPerigee <Value> TureAnomaly <Value> { AsymmetricFlowerOptions}
```
- 说明：

| AsymmetricFlowerOptions          | Options                  |
| --------------------------   | ---------------------------- |
| `TotalNumSats` | `<num>` |
| `ReturnCircle`           | `<Value> `            |
| `ReturnDay`           | `<Value> `            |
| `RAANIncrement`           | `<Value> `            |
| `ColorByPlane`           | `{Yes \| No}`             |


::: note 举例
```
（1）AsymmetricFlower */Satellite/Satellite1  TotalNumSats 16 ReturnCircle 16 ReturnDay 1 RAANIncrement 30 ColorByPlane Yes
（2）AsymmetricFlower / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180
TotalNumSats 16 ReturnCircle 16 ReturnDay 1 RAANIncrement 30 ColorByPlane Yes
```
:::
