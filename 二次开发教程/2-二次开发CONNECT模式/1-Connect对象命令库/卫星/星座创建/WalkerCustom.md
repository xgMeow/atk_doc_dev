# WalkerCustom

## 作用

创建 WalkerCustom 星座。

## 语法

```atk-command
WalkerCustom / {WalkerCustomOptions} [{AdditionalOptions}]
```

## 参数说明

| `WalkerCustomOptions` | `Options` |
| --- | --- |
| `NumPlanes` | `<num>` |
| `TotalNumSats` | `<num>` |
| `InterPlaneTrueAnomalyIncrement` | `<Value>` |
| `RAANIncrement` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## 示例

::: details open **创建 WalkerCustom 星座（使用已有卫星）**
```
WalkerCustom */Satellite/Satellite1 NumPlanes 2 TotalNumSats 20 InterPlaneTrueAnomalyIncrement 20 RAANIncrement 20 ColorByPlane Yes
```
:::

::: details open **创建 WalkerCustom 星座（直接创建新卫星）**
```
WalkerCustom / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 NumPlanes 2 TotalNumSats 20 InterPlaneTrueAnomalyIncrement 20 RAANIncrement 20 ColorByPlane Yes
```
:::
