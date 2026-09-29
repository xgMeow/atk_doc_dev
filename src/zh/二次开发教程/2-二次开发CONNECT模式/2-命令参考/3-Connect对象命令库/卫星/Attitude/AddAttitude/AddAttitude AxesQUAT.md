# AddAttitude AxesQUAT

## 作用

为对象添加一组参考指定 Axes 坐标系的四元数姿态数据。

## 语法

```atk-command
AddAttitude <ObjectPath> AxesQUAT "<AxesPath>" "<StartTime>" <Qx> <Qy> <Qz> <Qs>
```

## 补充说明

- `<AxesPath>` 为姿态所参考的 Axes 对象路径，须用双引号括起来。
- `<Qx>`、`<Qy>`、`<Qz>` 设置 qx、qy、qz，`<Qs>` 设置 qs。
- `<StartTime>` 格式设置请查看[常用日期/时间格式](../../../../2-参数值格式/日期时间格式.md)。
- 命令输入时间必须是递增序列。

## 示例

::: details open **添加参考指定 Axes 的四元数姿态数据**

```
AddAttitude */Satellite/Satellite1 AxesQUAT "CentralBody/Earth J2000.Axes" "1 Jul 2021 09:00:00.000" 0.382683 0.0 0.0 0.923880
```

- `*/Satellite/Satellite1`：对象完整路径
- `AxesQUAT`：姿态输入格式，此处为参考指定 Axes 的四元数
- `"CentralBody/Earth J2000.Axes"`：姿态所参考的 Axes 对象路径
- `"1 Jul 2021 09:00:00.000"`：姿态数据的起始时间，字符串内部含空格，须用双引号括起来
- `0.382683 0.0 0.0 0.923880`：四元数的 qx、qy、qz、qs，本组数值对应绕 X 轴旋转 45°

:::
