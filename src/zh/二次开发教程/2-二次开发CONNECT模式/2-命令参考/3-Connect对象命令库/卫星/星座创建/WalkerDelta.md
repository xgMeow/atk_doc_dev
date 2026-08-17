# WalkerDelta

## 作用

创建 WalkerDelta 星座。

## 语法

```atk-command
WalkerDelta / {WalkerDeltaOptions} [{AdditionalOptions}]
```

## 参数说明

| `WalkerDeltaOptions` | `Options` |
| --- | --- |
| `NumPlanes` | `<num>` |
| `NumSatsPerPlane` | `<num>` |
| `InterPlanePhaseIncrement` | `<Value>` |
| `RAANSpread` | `<Value>` |
| `ColorByPlane` | `{Yes \| No}` |

## 示例

::: details open **创建 WalkerDelta 星座（使用已有卫星）**
```
WalkerDelta */Satellite/Satellite1 NumPlanes 2 NumSatsPerPlane 11 InterPlanePhaseIncrement 1 RAANSpread 360 ColorByPlane Yes
```
:::

::: details open **创建 WalkerDelta 星座（直接创建新卫星）**
```
WalkerDelta / Semimajoraxis 6678137 Eccentricity 0 Inclination 28.5 RAAN 0 ArgumentOfPerigee 180 TureAnomaly 180 NumPlanes 2 NumSatsPerPlane 8 InterPlanePhaseIncrement 1 RAANSpread 360 ColorByPlane Yes
```
:::
