# Antenna

## 作用

设置天线的模型参数与指向姿态。

## 语法

```atk-command
Antenna <AntennaObjectPath> SetValue <Parameter> <Value>
```

## 补充说明

- `<AntennaObjectPath>` 为天线对象的完整路径，自场景 `*` 起写全。天线通常挂载在卫星、飞机、地面站等父对象之下，如 `*/Satellite/Satellite1/Antenna/Antenna1`。路径参数的写法参见[命令语法约定](../../1-命令语法约定.md)。
- 本命令一次只设置一个 `<Parameter>`，需要设置多项参数时，重复执行本命令。

天线的 `<Parameter>` 分为**天线模型**与**天线指向**两组，每组都由一个切换参数和若干具体参数组成。

| 分组 | 切换参数 | 具体参数 |
|------|----------|----------|
| 天线模型 | `Model` | `Model.DesignFrequency`、`Model.Diameter`、`Model.BackLobeGain`、`Model.Efficiency`、`Model.ExternalAntennaFile` |
| 天线指向 | `Orientation` | `Orientation.AzimuthAngle` 等指向参数、`Orientation.XPositionOffset` 等位置偏移参数 |

`Model` 与 `Orientation` 是切换参数，分别用于切换天线模型与天线指向方式；具体参数都带 `Model.` 或 `Orientation.` 前缀，且须先设置本组的切换参数再设置。切换后，前一种方式的各项参数不再参与计算。

**天线模型**

`Model` 的取值如下，对应天线属性中「定义」部分的四种天线类型。

| `Model` 取值 | 说明 |
|------|------|
| `Gaussian` | 高斯天线，采用解析高斯波束模型描述方向图 |
| `Isotropic` | 全向天线，各方向增益相同的理想化模型 |
| `Parabolic` | 抛物面天线，采用圆形口径天线模型描述方向性 |
| `ExternalAntennaPattern` | 外部天线，由外部方向图文件定义增益分布 |

`Model` 组的具体参数如下。

| 参数 | 说明 |
|------|------|
| `Model.DesignFrequency` | 天线模型的参考频率，用于确定波长并参与天线增益、波束宽度等参数计算，取值单位由当前 Connect 的频率单位设置决定 |
| `Model.Diameter` | 天线口径直径，量纲为长度，取值单位由当前 Connect 的长度单位设置决定 |
| `Model.BackLobeGain` | 天线背向区域的增益水平，取值以 dB 为单位 |
| `Model.Efficiency` | 天线效率，反映实际天线相对于理想孔径天线的性能折减，取值以 % 为单位 |
| `Model.ExternalAntennaFile` | 外部天线的方向图文件 |

**天线指向**

`Orientation` 的取值如下，对应天线属性中「指向」部分的四种指向方式。

| `Orientation` 取值 | 说明 |
|------|------|
| `AzimuthElevation` | 方位-高度角 |
| `EulerAngles` | 欧拉角 |
| `Quaternion` | 四元数 |
| `YPRAngles` | YPR 角 |

`Orientation` 组的具体参数如下。

| 参数 | 说明 |
|------|------|
| `Orientation.AzimuthAngle` | 方位角，用于描述天线轴向在参考坐标系水平平面内的方向 |
| `Orientation.ElevationAngle` | 高度角，用于描述天线轴向相对于参考平面的抬升角 |
| `Orientation.AboutBoresight` | 方位-高度角方式下绕视轴（boresight）的处理方式 |
| `Orientation.EulerA` | 欧拉角方式下的第一个欧拉旋转角 |
| `Orientation.EulerB` | 欧拉角方式下的第二个欧拉旋转角 |
| `Orientation.EulerC` | 欧拉角方式下的第三个欧拉旋转角 |
| `Orientation.Yaw` | YPR 角方式下的偏航角，绕参考 Z 轴的旋转 |
| `Orientation.Pitch` | YPR 角方式下的俯仰角，绕参考 Y 轴的旋转 |
| `Orientation.Roll` | YPR 角方式下的滚转角，绕参考 X 轴的旋转 |
| `Orientation.Sequence` | 欧拉角、YPR 角方式下的旋转顺序 |
| `Orientation.Qx` | 四元数方式下的矢量分量 qx |
| `Orientation.Qy` | 四元数方式下的矢量分量 qy |
| `Orientation.Qz` | 四元数方式下的矢量分量 qz |
| `Orientation.Qs` | 四元数方式下的标量分量 qs |
| `Orientation.XPositionOffset` | 天线参考点相对于父对象参考原点的 X 方向位置偏移分量，量纲为长度，取值单位由当前 Connect 的长度单位设置决定 |
| `Orientation.YPositionOffset` | 天线参考点相对于父对象参考原点的 Y 方向位置偏移分量，量纲为长度，取值单位由当前 Connect 的长度单位设置决定 |
| `Orientation.ZPositionOffset` | 天线参考点相对于父对象参考原点的 Z 方向位置偏移分量，量纲为长度，取值单位由当前 Connect 的长度单位设置决定 |

注意事项：

- 天线模型与天线指向共同决定链路方向上的实际增益，两者应同时正确设置。
- 带单位的参数，其单位由当前 Connect 的单位设置决定，并非固定值：`Orientation` 下的各角度类参数按 `Angle` 单位输入，`Model.DesignFrequency` 按 `Frequency` 单位输入，`Model.Diameter` 与 `Orientation` 的三个位置偏移分量按 `Distance` 单位输入。单位设置方式参见[常用单位格式](../../2-参数值格式/单位格式.md)。
- `Model.BackLobeGain` 的 dB、`Model.Efficiency` 的 % 在单位设置中没有对应的量纲，为固定单位，不受 Connect 单位设置影响。
- 参数值内部若含空格（如 `Model.ExternalAntennaFile` 的文件路径），必须整体用双引号包裹，参见[命令语法约定](../../1-命令语法约定.md)。

## 示例

::: details open **设置天线模型为高斯天线**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Model Gaussian
```

- `*/Satellite/Satellite1/Antenna/Antenna1`：天线对象完整路径
- `Model`：待设置的参数，此处为天线模型类型
- `Gaussian`：模型取值，表示高斯天线

:::

::: details open **设置高斯天线的模型参数**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Model.DesignFrequency 2.4
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Model.Diameter 3.0
```

- `Model.DesignFrequency`：待设置的参数，此处为天线模型的参考频率
- `2.4`：参考频率的取值，单位由当前 Connect 的频率单位设置决定
- `Model.Diameter`：待设置的参数，此处为天线口径直径
- `3.0`：口径直径的取值，单位由当前 Connect 的长度单位设置决定

:::

::: details open **设置天线指向方式为方位-高度角**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation AzimuthElevation
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.AzimuthAngle 45
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.ElevationAngle 30
```

- `Orientation`：待设置的参数，此处为天线指向方式
- `AzimuthElevation`：指向方式取值，表示方位-高度角
- `Orientation.AzimuthAngle`：待设置的参数，此处为方位角
- `45`：方位角的取值
- `Orientation.ElevationAngle`：待设置的参数，此处为高度角
- `30`：高度角的取值

:::

::: details open **设置天线的安装位置偏移**

```
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.XPositionOffset 1.5
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.YPositionOffset 0.0
Antenna */Satellite/Satellite1/Antenna/Antenna1 SetValue Orientation.ZPositionOffset -0.5
```

- `Orientation.XPositionOffset`：待设置的参数，此处为天线参考点相对于父对象参考原点的 X 方向位置偏移分量
- `1.5`：X 方向偏移量的取值，单位由当前 Connect 的长度单位设置决定
- `Orientation.YPositionOffset`：待设置的参数，此处为 Y 方向位置偏移分量
- `0.0`：Y 方向偏移量的取值，单位由当前 Connect 的长度单位设置决定
- `Orientation.ZPositionOffset`：待设置的参数，此处为 Z 方向位置偏移分量
- `-0.5`：Z 方向偏移量的取值，单位由当前 Connect 的长度单位设置决定

:::
