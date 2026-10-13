---
description: 设置航天器物理参数，包括干质量、推进剂质量、阻力系数与面积、太阳光压系数与面积。
---

# PhysicalProperty

## 作用

设置航天器参数。

## 语法

```atk-command
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{PhysicalProperty} <Value> <Unit>
```

## 参数说明

| 参数 | 说明 |
| --- | --- |
| `<Satellite Object Path>` | 卫星对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `<Attribute Path>` | 段在机动规划序列中的路径，形如 `MainSequence.SegmentList.<段名>` |
| `<Value> <Unit>` | 属性值及其单位 |

`{PhysicalProperty}` 可取下列取值：

| 名称 | 说明 |
| --- | --- |
| Dry Mass | 航天器净质量，默认单位为 `kg`，包括单位 `kg`、`g`、`mg`，设置属性使用 `DryMass` |
| Drag Coefficient (Cd) | 航天器大气阻力系数，设置属性使用 `Cd` |
| Drag Area | 航天器大气阻力面积，默认单位为 $m^2$，包括单位 $m^2$、$cm^2$，设置属性使用 `DragArea` |
| Solar Radiation Pressure (Spherical) Coefficient (Cr) | 航天器太阳光压系数，设置属性使用 `Cr` |
| Solar Radiation Pressure (Spherical) Area | 航天器太阳光压面积，默认单位为 $m^2$，包括单位 $m^2$、$cm^2$，设置属性使用 `SRPArea` |
| Fuel Mass | 航天器推进剂质量，默认单位为 `kg`，包括单位 `kg`、`g`、`mg`，设置属性使用 `FuelMass` |

## 适用段

初始段、跟随段

## 示例

::: details open **设置航天器推进剂质量**
```
Astrogator */Satellite/Satellite1 SetValue MainSequence.SegmentList.Initial_State.FuelMass 200 kg
```
:::
