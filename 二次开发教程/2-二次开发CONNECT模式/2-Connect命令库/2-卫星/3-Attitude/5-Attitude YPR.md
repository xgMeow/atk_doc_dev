## Attitude YPR

作用：为对象添加一组CBI VVLH的四元数姿态数据

用法：
```
AddAttitude <ObjectPath> YPR {StartTime} {Sequence} <Yaw> <Pitch> <Roll>
```

::: info
1. `{Sequence}`有效值为123、132、213、231、312、321

2. 数据输入默认单位为deg

3. `{StartTime}`格式设置请查看常用设置格式--常用日期/时间格式

4. 命令输入时间必须是递增序列
:::

::: note 举例
```
AddAttitude */Satellite/Satellite1 YPR "1 Nov 2000 04:01:00.00" 321 15.0 30.0 45.0
```
:::
