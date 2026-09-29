# AddAttitude AxesEuler

## 作用

为对象添加一组参考指定 Axes 坐标系的欧拉角姿态数据。

## 语法

```atk-command
AddAttitude <ObjectPath> AxesEuler "<AxesPath>" "<StartTime>" <seqFlag> <Angle1> <Angle2> <Angle3>
```

## 补充说明

- `<AxesPath>` 为姿态所参考的 Axes 对象路径，须用双引号括起来。
- `<seqFlag>` 为旋转顺序，含义与 [AddAttitude Euler](AddAttitude%20Euler.md) 的 `{Sequence}` 相同，有效值为 123、132、213、231、312、321。
- `<Angle1>`、`<Angle2>`、`<Angle3>` 依次为三个欧拉角。
- 角度值按当前 Connect 的 `Angle` 单位输入，默认为 deg。
- `<StartTime>` 格式设置请查看[常用日期/时间格式](../../../../2-参数值格式/日期时间格式.md)。
- 命令输入时间必须是递增序列。

## 示例

::: details open **添加参考指定 Axes 的欧拉角姿态数据**

```
AddAttitude */Satellite/Satellite1 AxesEuler "CentralBody/Earth J2000.Axes" "1 Jul 2021 09:00:00.000" 321 30.0 45.0 60.0
```

- `*/Satellite/Satellite1`：对象完整路径
- `AxesEuler`：姿态输入格式，此处为参考指定 Axes 的欧拉角
- `"CentralBody/Earth J2000.Axes"`：姿态所参考的 Axes 对象路径
- `"1 Jul 2021 09:00:00.000"`：姿态数据的起始时间，字符串内部含空格，须用双引号括起来
- `321`：旋转顺序
- `30.0 45.0 60.0`：三个欧拉角，依次为 30°、45°、60°

:::
