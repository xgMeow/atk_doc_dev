# Attitude ECIYPR

## 作用

为对象添加一组 ECI J2000 的 YPR 姿态数据。

## 语法

```
AddAttitude <ObjectPath> ECIYPR {StartTime} {Sequence} <Yaw> <Pitch> <Roll>
```

## 补充说明

- `{Sequence}` 有效值为 123、132、213、231、312、321
- 数据输入默认单位为 deg
- `{StartTime}` 格式设置请查看常用设置格式--常用日期/时间格式
- 命令输入时间必须是递增序列

## 示例

::: details open **添加 ECI J2000 YPR 姿态数据**
```
AddAttitude */Satellite/Satellite1 ECIYPR "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::
