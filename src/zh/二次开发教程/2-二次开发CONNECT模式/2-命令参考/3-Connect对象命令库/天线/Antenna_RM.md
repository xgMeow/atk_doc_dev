# Antenna_RM

## 作用

获取天线模型参数、天线指向姿态等参数。

## 语法

```atk-command
Antenna_RM <AntennaObjectPath> SetValue <Parameter>
```

## 补充说明

- `<AntennaObjectPath>` 为天线对象的完整路径，自场景 `*` 起写全，如 `*/Satellite/Satellite1/Antenna/Antenna1`。路径参数的写法参见[命令语法约定](../../1-命令语法约定.md)。
- 本命令与 `Antenna` 共用同一套 `<Parameter>`，因此查询时写同一个参数名即可，且不写 `<Value>`。
- 本命令一次只查询一个 `<Parameter>`，需要查询多项参数时，重复执行本命令。
- 命令返回所查询参数的值。

`<Parameter>` 同样分为**天线模型**与**天线指向**两组：

- **天线模型**：切换参数 `Model`，取值为 `Gaussian`、`Isotropic`、`Parabolic`、`ExternalAntennaPattern`；具体参数为 `Model.DesignFrequency`、`Model.Diameter`、`Model.BackLobeGain`、`Model.Efficiency`、`Model.ExternalAntennaFile`。
- **天线指向**：切换参数 `Orientation`，取值为 `AzimuthElevation`、`EulerAngles`、`Quaternion`、`YPRAngles`；具体参数为 `Orientation.AzimuthAngle`、`Orientation.ElevationAngle`、`Orientation.AboutBoresight`、`Orientation.EulerA`、`Orientation.EulerB`、`Orientation.EulerC`、`Orientation.Yaw`、`Orientation.Pitch`、`Orientation.Roll`、`Orientation.Sequence`、`Orientation.Qx`、`Orientation.Qy`、`Orientation.Qz`、`Orientation.Qs`、`Orientation.XPositionOffset`、`Orientation.YPositionOffset`、`Orientation.ZPositionOffset`。

`Model`、`Orientation` 为切换参数，切换后前一种方式的各项参数不再参与计算。查询某一具体参数前，须先用 `Antenna` 设置过该参数所在分组的切换参数。

## 示例

::: details open **获取天线模型类型**

```
Antenna_RM */Satellite/Satellite1/Antenna/Antenna1 SetValue Model
```

- `*/Satellite/Satellite1/Antenna/Antenna1`：天线对象完整路径
- `Model`：待查询的参数，此处为天线模型类型

:::

::: details open **获取天线的设计频率**

```
Antenna_RM */Satellite/Satellite1/Antenna/Antenna1 SetValue Model.DesignFrequency
```

- `*/Satellite/Satellite1/Antenna/Antenna1`：天线对象完整路径
- `Model.DesignFrequency`：待查询的参数，此处为天线模型的参考频率

:::
