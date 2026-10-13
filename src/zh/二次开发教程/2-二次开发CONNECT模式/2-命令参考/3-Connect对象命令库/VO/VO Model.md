# VO Model

## 作用

设置对象 3D 模型属性。

## 语法

```atk-command
VO <ObjectPath> Model {Option1} <Value1> [{Option2} <Value2>]...
```

## 参数说明

| 参数 | 取值 | 说明 |
| --- | --- | --- |
| `<ObjectPath>` | | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `Show` | `{On \| Off}` | 是否显示模型 |
| `File` | `<ModelFile>` | 模型文件路径，支持 flt、ive 格式 |

## 适用对象

卫星、地面站、导弹、火箭、船、车辆、飞机

## 示例

::: details open **设置 3D 模型属性**
```
VO */Satellite/Satellite1 Model Show Off
```
:::

::: details open **设置卫星 3D 模型属性**
```
VO */Satellite/Satellite1 Model Show Off
```
:::

::: details open **隐藏模型**
```
VO */Facility/Facility1 Model Show Off
```
:::

::: details open **显示3D模型**
```
VO */Missile/Missile1 Model Show on
```
:::

::: details open **设置火箭 3D 模型属性**
```
VO */LaunchVehicle/LaunchVehicle1 Model Show Off
```
:::

::: details open **隐藏船 3D 模型**
```
VO */Ship/Ship1 Model Show Off
```
:::

::: details open **隐藏车辆 3D 模型**
```
VO */GroundVehicle/GroVeh1 Model Show Off
```
:::

::: details open **隐藏飞机 3D 模型**
```
VO */Aircraft/Aircraft1 Model Show Off
```
:::
