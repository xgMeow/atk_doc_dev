# VO SetVectorGeometry

## 作用

设置车辆向量。

## 语法

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## 参数说明

`{Option}` 取值：

| 取值 | 说明 |
| --- | --- |
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

> 注意：`ReferenceCrdn` 必须使用双引号。

若 `{Option}` 为 `Add` 或 `Modify`，以下参数适用所有类型：

| 参数 | 说明 |
| --- | --- |
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

若 `{Option}` 为 `Add` 或 `Modify`，以下参数仅适用 `Axes` 和 `Vector`：

| 参数 | 说明 |
| --- | --- |
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

若 `{Option}` 为 `Add` 或 `Modify`，以下参数仅适用 `Vector`：

| 参数 | 说明 |
| --- | --- |
| `usetruescale` | `{On \| Off}` |

## 示例

::: details open **添加向量几何**
```
VO */GroundVehicle/GroundVehicle1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改向量几何**
```
VO */GroundVehicle/GroundVehicle1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
