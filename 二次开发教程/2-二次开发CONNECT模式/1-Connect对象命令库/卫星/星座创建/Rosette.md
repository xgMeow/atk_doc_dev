# Rosette

## 作用

创建 Rosette 星座。

## 语法

```
Rosette / {RosetteOptions} [{AdditionalOptions}]
```

## 参数说明

| `WalkerCustomOptions` | `Options` |
| --- | --- |
| `NumPlanes` | `<num>` |
| `TotalNumSats` | `<num>` |
| `Molecule` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## 示例

::: details open **创建 Rosette 星座（使用已有卫星）**
```
Rosette */Satellite/Satellite1 NumPlanes 20 TotalNumSats 20 Molecule 1 ColorByPlane Yes
```
:::

::: details open **创建 Rosette 星座（直接创建新卫星）**
```
Rosette / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180  
NumPlanes 20 TotalNumSats 20 Molecule 1 ColorByPlane Yes
```
:::
