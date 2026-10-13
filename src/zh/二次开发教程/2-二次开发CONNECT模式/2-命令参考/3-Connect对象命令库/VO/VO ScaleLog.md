# VO ScaleLog

## 作用

设置对象 3D 模型的 log 比例。

## 语法

```atk-command
VO <ObjectPath> ScaleLog <Value>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Value>` | 模型的对数比例值 |

## 适用对象

卫星、地面站、导弹、火箭、船、车辆、飞机

## 示例

::: details open **设置 3D 模型 log 比例**
```
VO */Satellite/Shuttle ScaleLog 3
```
:::

::: details open **设置卫星 3D 模型 log 比例**
```
VO */Satellite/Shuttle ScaleLog 3
```
:::

::: details open **设置缩放比例**
```
VO */Facility/Facility1 ScaleLog 3
```
:::

::: details open **设置模型比例**
```
VO */Missile/Missile1 ScaleLog 3
```
:::

::: details open **设置火箭 3D 模型 log 比例**
```
VO */LaunchVehicle/LaunchVehicle1 ScaleLog 3
```
:::

::: details open **设置模型 log 比例**
```
VO */Ship/Ship1 ScaleLog 3
```
:::

::: details open **设置模型 Log 比例**
```
VO */GroundVehicle/GroVeh1 ScaleLog 3
```
:::

::: details open **设置模型 log 比例为 3**
```
VO */Aircraft/Aircraft1 ScaleLog 3
```
:::
