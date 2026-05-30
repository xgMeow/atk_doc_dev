## Attitude Quat

作用：根据四元数设置姿态数据

::: note 用法
```
AddAttitude <ObjectPath> Quat {StartTime} <Q1> <Q2> <Q3> <Q4>
```
:::

::: info 说明

- `Q1`、`Q2`、`Q3`设置 qx，qy，qz，`Q4`设置 qs

- 设置值与原数值差值超过 1e-6，才会被设置

:::

::: tip 举例
```
AddAttitude */Missile/Missile1 Quat "1 Jul 2021 09:00:00.000" 0.0 0.0 0.0 1.0
```
:::
