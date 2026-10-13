---
description: 为对象添加一组欧拉角姿态数据。
groups: [对象通用命令, 导弹, 火箭, 卫星, 姿态与指向]
---

# AddAttitude Euler

## 作用

为对象添加一组欧拉角姿态数据。

## 语法

```atk-command
AddAttitude <ObjectPath> Euler {StartTime} {Sequence} <Angle1> <Angle2> <Angle3>
```

## 参数说明

| 参数 | 说明 |
|------|------|
| `<ObjectPath>` | 对象完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1` |
| `{StartTime}` | 起始时刻，格式设置请查看[常用日期/时间格式](../../2-参数值格式/日期时间格式.md) |
| `{Sequence}` | 欧拉角旋转顺序，如 `321` |
| `<Angle1> <Angle2> <Angle3>` | 三个角度值，按当前 Connect 的 `Angle` 单位输入，默认为 deg |

::: warning 注意
命令输入时间必须是递增序列。
:::

## 适用对象

卫星、导弹、火箭

## 示例

::: details open **添加欧拉角姿态数据**
```
AddAttitude */Satellite/Satellite1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::

::: details open **添加欧拉角姿态数据**
```
AddAttitude */Satellite/Satellite1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::

::: details open **根据欧拉角设置姿态数据**
```
AddAttitude */Missile/Missile1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::

::: details open **添加欧拉角姿态数据**
```
AddAttitude */LaunchVehicle/LaunchVehicle1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::
