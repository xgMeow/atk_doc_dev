# Flower

## 作用

创建 Flower 星座。

## 语法

```atk-command
Flower / {FlowerOptions} [{AdditionalOptions}]
```

## 参数说明

| `FlowerOptions` | `Options` |
| --- | --- |
| `TotalNumSats` | `<num>` |
| `InterPlaneTrueAnomalyIncrement` | `<Value>` |
| `ReturnCircle` | `<Value>` |
| `ReturnDay` | `<Value>` |
| `PhaseDensity` | `<Value>` |
| `RAANSpread` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## 示例

::: details open **创建 Flower 星座（使用已有卫星）**
```
Flower */Satellite/Satellite1 TotalNumSats 16 InterPlanePhaseIncrement 1 ReturnCircle 16 ReturnDay 1 PhaseDensity 16 RAANSpread 360 ColorByPlane Yes
```
:::

::: details open **创建 Flower 星座（直接创建新卫星）**
```
Flower / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 TotalNumSats 16 InterPlanePhaseIncrement 1 ReturnCircle 16 ReturnDay 1 PhaseDensity 16 RAANSpread 360 ColorByPlane Yes
```
:::
