# AsymmetricFlower

## 作用

创建 AsymmetricFlower 星座。

## 语法

```atk-command
AsymmetricFlower / { AsymmetricFlowerOptions} [{AdditionalOptions}]
```

## 参数说明

| `AsymmetricFlowerOptions` | `Options` |
| --- | --- |
| `TotalNumSats` | `<num>` |
| `ReturnCircle` | `<Value>` |
| `ReturnDay` | `<Value>` |
| `RAANIncrement` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## 示例

::: details open **创建 AsymmetricFlower 星座（使用已有卫星）**
```
AsymmetricFlower */Satellite/Satellite1  TotalNumSats 16 ReturnCircle 16 ReturnDay 1 RAANIncrement 30 ColorByPlane Yes
```
:::

::: details open **创建 AsymmetricFlower 星座（直接创建新卫星）**
```
AsymmetricFlower / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180
TotalNumSats 16 ReturnCircle 16 ReturnDay 1 RAANIncrement 30 ColorByPlane Yes
```
:::
