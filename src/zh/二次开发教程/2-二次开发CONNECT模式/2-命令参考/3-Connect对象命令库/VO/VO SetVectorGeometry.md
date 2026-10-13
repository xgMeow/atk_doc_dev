# VO SetVectorGeometry

## 作用

设置对象向量。

## 语法

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## 参数说明

::: details 详细说明（点击展开）

| `{Option}` | `<Parameters>` |
| --- | --- |
| `Add` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Modify` | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]` |
| `Delete` | `"<ReferenceCrdn>"` |

**注意：ReferenceCrdn 必须使用双引号**

- 若 `{Option}` 输入为 Add 或 Modify，以下参数适用所有类型：

| `{DisplayOption}` | `<DisplayValue>` |
| --- | --- |
| `Show` | `{On \| Off}` |
| `ShowLabel` | `{On \| Off}` |
| `Color` | `{Color}` |

- 若 `{Option}` 输入为 Add 或 Modify，以下参数仅适用 Axes 和 Vector：

| `{DisplayOption}` | `<DisplayValue>` |
| --- | --- |
| `Thickness` | `<Value>` |
| `RefCrdn` | `"<ReferenceCrdn>"` |
| `DrawAtCB` | `{On \| Off}` |
| `OriginPointDef` | `"{ReferenceCrdn}"` |
| `usetruescale` | `{On \| Off}` |

- 若 `{Option}` 输入为 Add 或 Modify，以下参数仅适用 Vector：

| `{DisplayOption}` | `<DisplayValue>` |
| --- | --- |
| `usetruescale` | `{On \| Off}` |

:::

## 适用对象

传感器、卫星、地面站、船、车辆、飞机

## 示例

::: details open **添加对象向量**
```
VO */Satellite/Satellite1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改对象向量**
```
VO */Satellite/Satellite1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **添加传感器向量**
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改传感器向量**
```
VO */Satellite/Satellite1/Sensor/Sen1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **添加卫星向量**
```
VO */Satellite/Satellite1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改卫星向量**
```
VO */Satellite/Satellite1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **添加向量**
```
VO */Facility/Facility1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改向量**
```
VO */Facility/Facility1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

::: details open **添加向量**
```
VO */Ship/Ship1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改向量**
```
VO */Ship/Ship1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::

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

::: details open **添加飞机向量**
```
VO */Aircraft/Aircraft1 SetVectorGeometry Add "Satellite/Satellite1 J2000 Axes" Show On Color red
```
:::

::: details open **修改飞机向量**
```
VO */Aircraft/Aircraft1 SetVectorGeometry Modify "Satellite/Satellite1 J2000 Axes" Show Off
```
:::
