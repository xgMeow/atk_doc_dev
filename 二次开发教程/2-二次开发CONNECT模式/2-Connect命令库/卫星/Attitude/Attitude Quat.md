# Attitude Quat

作用：为对象添加一组 ECI J2000的四元数姿态数据

用法：
```
AddAttitude <ObjectPath> Quat {StartTime} <Q1> <Q2> <Q3> <Q4>
```

::: info
1. `<Q1>`、`<Q2>`、`<Q3>`设置 qx，qy，qz，`<Q4>`设置 qs

2. `{StartTime}`格式设置请查看常用设置格式--常用日期/时间格式

3. 命令输入时间必须是递增序列
:::

::: note 举例
```
AddAttitude */Satellite/Satellite1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::
