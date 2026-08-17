---
description: 设置传感器的向量几何属性，支持添加、修改和删除参考坐标系向量，可配置显示、颜色、线宽等选项。
---

# VO SetVectorGeometry

## 作用

设置传感器向量。

## 语法

```atk-command
VO <ObjectPath> SetVectorGeometry {Option} <Parameters>
```

## 参数说明

| {Option} | `<Parameters>`                                              |
| -------- | ----------------------------------------------------------- |
| Add      | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]`     |
| Modify   | `"<ReferenceCrdn>" [{DisplayOption} <DisplayValue>...]`     |
| Delete   | `"<ReferenceCrdn>"`                                         |

::: warning 注意
ReferenceCrdn 必须使用双引号。
:::

- 若 `{Option}` 输入为 Add 或 Modify，以下参数适用所有类型：

| {DisplayOption} | `<DisplayValue>`       |
| --------------- | ---------------------- |
| Show            | `{On \| Off}`          |
| ShowLabel       | `{On \| Off}`          |
| Color           | `{Color}`              |

- 若 `{Option}` 输入为 Add 或 Modify，以下参数仅适用 Axes 和 Vector：

| {DisplayOption}  | `<DisplayValue>`          |
| ---------------- | ------------------------- |
| Thickness        | `<Value>`                 |
| RefCrdn          | `"<ReferenceCrdn>"`       |
| DrawAtCB         | `{On \| Off}`             |
| OriginPointDef   | `"<ReferenceCrdn>"`       |
| usetruescale     | `{On \| Off}`             |

- 若 `{Option}` 输入为 Add 或 Modify，以下参数仅适用 Vector：

| {DisplayOption}  | `<DisplayValue>`          |
| ---------------- | ------------------------- |
| usetruescale     | `{On \| Off}`             |

## 示例

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
