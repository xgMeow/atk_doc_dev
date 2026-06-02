# Attitude Euler

作用：为对象添加一组 ECI J2000或者CBI的四元数姿态数据

用法：
```
AddAttitude <ObjectPath> Euler {StartTime} {Sequence} <Angle1> <Angle2> <Angle3>
```

::: info
1. 数据输入默认单位为deg

2. `{StartTime}`格式设置请查看常用设置格式--常用日期/时间格式

3. 命令输入时间必须是递增序列
:::

::: note 举例
```
AddAttitude */Satellite/Satellite1 Euler "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```
:::
