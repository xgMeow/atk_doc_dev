---
groups: [信号发射器]
---

# GetValue

## 作用

读取发射器对象的模型属性值，供脚本核对模型配置。

## 前置条件

- 发射器对象须已存在，须先用 [New](./New.md) 创建；对象路径指向不存在的发射器时，命令返回 NACK。

- 部分属性只在对应功能启用后可读，如极化子属性须已令 Model.UsePolarization 为 true、滤波器子属性须已令 Model.UseFilter 为 true，否则返回 NACK。详见「补充说明」。

## 语法

```atk-command
Transmitter_RM <ObjectPath> GetValue <AttributePath>
```

## 语法说明

- 属性路径不可省略：只写命令名与对象路径、或写 Model、写 UserComment，命令均返回 NACK。

- `<AttributePath>` 以 Model 开头，如 Model.Frequency；路径不区分大小写，model.frequency 与 Model.Frequency 等价。

- 一次只读取一个属性，不支持一次返回全部属性。

## 输出

命令返回纯文本，不返回表头。每条属性输出一行，格式为：

```
Model.<属性名> = <值>[ <单位>]
```

多项式属性按行输出，列表中每一项占两行，分别给出 Index 与 Coefficient：

```
Model.FrequencyPolynomial[0].Index = 0
Model.FrequencyPolynomial[0].Coefficient = -700000000.000000
Model.FrequencyPolynomial[1].Index = 1
Model.FrequencyPolynomial[1].Coefficient = 1.000000
```

## 参数说明

### 模型

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.UserComment | 模型说明，如 Simple model of a transmitter | 无 |
| Model.Frequency | 发射信号载波频率 | GHz |
| Model.DataRate | 数据速率 | 无（按 b/s 计） |
| Model.EIRP | 简单发射机模型的等效全向辐射功率 | W |
| Model.Power | 中等发射机、复杂发射机与转发器模型的功率 | W |
| Model.SaturatedFluxDensity | 转发器的饱和通量密度 | 无（按 dBW/m² 计） |
| Model.SaturatedEIRP | 简单转发器的饱和 EIRP | 无（按 dBW 计） |
| Model.SaturatedPower | 中等、复杂转发器的饱和功率 | 无 |
| Model.AntennaDesignFrequency | 复杂模型所用天线的设计频率 | GHz |

### 天线极化

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.UsePolarization | 是否启用极化设置，true 或 false | 无 |
| Model.Polarization | 极化类型，如 Linear、Left_Hand_Circular | 无 |
| Model.Polarization.ReferenceAxis | 极化参考轴，如 X Axis | 无 |
| Model.Polarization.TiltAngle | 极化角 | deg |

- 复杂发射机模型与复杂转发器模型不使用上述属性，其极化设置位于 Model.AntennaControl 下，见「复杂模型的天线」。

### 调制器

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.Modulator | 调制类型，如 BPSK、8PSK、PCM_FM | 无 |
| Model.Modulator.UseSignalPSD | 是否使用信号功率谱密度 | 无 |
| Model.Modulator.NumPSDNulls | 信号频谱零点数量 | 无 |
| Model.Modulator.AutoScaleBandwidth | 是否自动调整带宽 | 无 |
| Model.Modulator.SymmetricBandwidth | 频谱是否相对载波对称 | 无 |
| Model.Modulator.UpperBandwidthLimit | 信号频谱相对载波的高频边界 | GHz |
| Model.Modulator.LowerBandwidthLimit | 信号频谱相对载波的低频边界 | GHz |
| Model.Modulator.Bandwidth | 信号带宽 | GHz |

### 滤波器

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.UseFilter | 是否启用滤波器 | 无 |
| Model.Filter | 滤波器类型，如 Butterworth、Chbyshev | 无 |
| Model.Filter.UserComment | 滤波器模型说明 | 无 |
| Model.Filter.LowerBandwidthLimit | 滤波器频谱相对载波的低频边界 | GHz |
| Model.Filter.UpperBandwidthLimit | 滤波器频谱相对载波的高频边界 | GHz |
| Model.Filter.Bandwidth | 滤波器带宽 | GHz |
| Model.Filter.Order | 滤波器阶数 | 无 |
| Model.Filter.CutoffFrequency | 截止频率 | GHz |
| Model.Filter.SamplingFrequency | 采样频率 | GHz |
| Model.Filter.RollOffFactor | 滚降因子 | 无 |
| Model.Filter.SymbolRate | 符号率 | 无 |

### 复杂模型的天线

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.AntennaControl.AntennaReferenceType | 天线引用类型，如 Embed | 无 |
| Model.AntennaControl.Antenna | 天线类型，如 Gaussian | 无 |
| Model.AntennaControl.Antenna.UserComment | 天线模型说明 | 无 |
| Model.AntennaControl.Antenna.DesignFrequency | 天线设计频率 | GHz |
| Model.AntennaControl.Antenna.Diameter | 天线口径 | m |
| Model.AntennaControl.Antenna.Efficiency | 天线效率 | 无 |
| Model.AntennaControl.UsePolarization | 是否启用天线极化 | 无 |
| Model.AntennaControl.Polarization | 天线极化类型 | 无 |
| Model.AntennaControl.Polarization.ReferenceAxis | 天线极化参考轴 | 无 |
| Model.AntennaControl.Polarization.TiltAngle | 天线极化角 | deg |
| Model.AntennaControl.Orientation | 天线指向方式，如 Azimuth Elevation、Euler Angles | 无 |
| Model.AntennaControl.Orientation.AzimuthAngle | 方位角 | deg |
| Model.AntennaControl.Orientation.ElevationAngle | 俯仰角 | deg |
| Model.AntennaControl.Orientation.AboutBoresight | 绕视轴处理方式，如 Rotate | 无 |
| Model.AntennaControl.Orientation.EulerA | 欧拉角 A | deg |
| Model.AntennaControl.Orientation.EulerB | 欧拉角 B | deg |
| Model.AntennaControl.Orientation.EulerC | 欧拉角 C | deg |
| Model.AntennaControl.Orientation.Sequence | 欧拉角旋转顺序 | 无 |
| Model.AntennaControl.Orientation.Qx | 四元数 x 分量 | 无 |
| Model.AntennaControl.Orientation.Qy | 四元数 y 分量 | 无 |
| Model.AntennaControl.Orientation.Qz | 四元数 z 分量 | 无 |
| Model.AntennaControl.Orientation.Qs | 四元数标量分量 | 无 |
| Model.AntennaControl.Orientation.Yaw | 偏航角 | deg |
| Model.AntennaControl.Orientation.Pitch | 俯仰角 | deg |
| Model.AntennaControl.Orientation.Roll | 滚转角 | deg |
| Model.AntennaControl.Orientation.XPositionOffset | 天线位置 x 向偏移 | 无 |
| Model.AntennaControl.Orientation.YPositionOffset | 天线位置 y 向偏移 | 无 |
| Model.AntennaControl.Orientation.ZPositionOffset | 天线位置 z 向偏移 | 无 |

### 转发器的转换方法

| 属性 | 返回内容 | 单位 |
| --- | --- | --- |
| Model.FrequencyPolynomial | 频率转换多项式的全部系数，每项给出 Index 与 Coefficient | 无 |
| Model.PowerBackOffPolynomial | 功率回退多项式的全部系数，每项给出 Index 与 Coefficient | 无 |

- 多项式的 Index 由行在列表中的位置决定，Coefficient 为该行系数。新建转发器默认含 Index 0、1 两行。

## 示例

::: details open **读取模型说明**
```
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue Model.UserComment
```
返回：

```
Model.UserComment = Simple model of a transmitter
```
:::

::: details open **读取载波频率与 EIRP**
```
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue Model.Frequency
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue Model.EIRP
```
返回：

```
Model.Frequency = 14.500000 GHz
Model.EIRP = 30.000000 W
```
:::

::: details open **读取极化与滤波器类型**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.UsePolarization true
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model.UseFilter true
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue Model.Polarization
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue Model.Filter
```
:::

::: details open **读取转发器的频率转换多项式**
```
Transmitter */Satellite/Satellite1/Transmitter/Transmitter1 SetValue Model simple_re-transmitter_model
Transmitter_RM */Satellite/Satellite1/Transmitter/Transmitter1 GetValue Model.FrequencyPolynomial
```
返回：

```
Model.FrequencyPolynomial[0].Index = 0
Model.FrequencyPolynomial[0].Coefficient = -700000000.000000
Model.FrequencyPolynomial[1].Index = 1
Model.FrequencyPolynomial[1].Coefficient = 1.000000
```
:::

## 补充说明

- 未启用对应功能时，读取该功能的子属性返回 NACK：Model.Polarization 及其子属性须已启用 Model.UsePolarization；Model.Filter 及其子属性须已启用 Model.UseFilter；Model.AntennaControl.Polarization 及其子属性须已启用 Model.AntennaControl.UsePolarization。

- 滤波器的专属参数随类型而定：阶数适用于 Bessel、Butterworth、Chbyshev、GaussianWindows，截止频率适用于 Bessel、Butterworth、Chbyshev，采样频率适用于 GaussianWindows，滚降因子与符号率适用于 RaisedConsine；读取与当前类型不符的参数返回 NACK。

- 天线指向的子属性随指向方式而定：指向方式为 Azimuth Elevation 时可读方位角与俯仰角，为 Euler Angles 时可读欧拉角与旋转顺序，为 Quaternion 时可读四元数分量，为 YPR Angles 时可读偏航、俯仰与滚转角；读取其他方式的子属性返回 NACK。

- 调制器的 Model.Modulator.NumPSDNulls 只在启用信号功率谱密度后可读，Model.Modulator.SymmetricBandwidth 只在关闭自动调整带宽后可读。

- 本命令不支持一次读取全部属性，须按属性逐条读取。
