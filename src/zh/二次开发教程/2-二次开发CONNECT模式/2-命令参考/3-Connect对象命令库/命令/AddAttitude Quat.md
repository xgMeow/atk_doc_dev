---
description: 为对象添加一组四元数姿态数据。
groups: [对象通用命令, 导弹, 火箭, 卫星, 姿态与指向]
---

# AddAttitude Quat

## 作用

为对象添加一组 ECI J2000 的四元数姿态数据。

## 语法

```atk-command
AddAttitude <ObjectPath> Quat {StartTime} <Q1> <Q2> <Q3> <Q4>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `{StartTime}` | 起始时刻，格式设置请查看[常用日期/时间格式](../../2-参数值格式/日期时间格式.md) |
| `<Q1>` `<Q2>` `<Q3>` | 设置 qx、qy、qz |
| `<Q4>` | 设置 qs |

::: warning 注意
- 命令输入时间必须是递增序列。
- 设置值与原数值差值超过 `1e-6`，才会被设置。
:::

## 适用对象

卫星、导弹、火箭

## 示例

::: details open **添加 ECI J2000 四元数姿态数据**
```
AddAttitude */Satellite/Satellite1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::

::: details open **添加 ECI J2000 四元数姿态数据**
```
AddAttitude */Satellite/Satellite1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::

::: details open **根据四元数设置姿态数据**
```
AddAttitude */Missile/Missile1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::

::: details open **添加四元数姿态数据**
```
AddAttitude */LaunchVehicle/LaunchVehicle1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::
