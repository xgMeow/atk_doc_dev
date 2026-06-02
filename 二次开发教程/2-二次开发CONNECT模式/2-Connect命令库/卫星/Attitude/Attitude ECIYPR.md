# Attitude ECIYPR

作用：为对象添加一组ECI J2000的YPR姿态数据

用法：
```
AddAttitude <ObjectPath> ECIYPR {StartTime} {Sequence} <Yaw> <Pitch> <Roll>
```

::: info
1. `{Sequence}`有效值为123、132、213、231、312、321

2. 数据输入默认单位为deg

3. `{StartTime}`格式设置请查看常用设置格式--常用日期/时间格式

4. 命令输入时间必须是递增序列
:::

::: note 举例
```
AddAttitude */Satellite/Satellite1 ECIYPR "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::
